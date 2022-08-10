import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from '@material-ui/core'
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'
import lcaData from '../data/lca_data'
import { round } from 'lodash'


const Lca = () => {

    const [speed, setSpeed] = useState(0) 
    const [aadt, setAadt] = useState(0)
    const [miles, setMiles] = useState(0)
    const [lanes, setLanes] = useState(0)
    const [type, setType] = React.useState('')
    const [activity, setActivity] = React.useState([])
    const [finalAct, setFinalAct] = useState('')
    const [year, setYear] = useState(0)
    const [duration, setDuration] = useState(0)

    const columns = ["Year", "Job Type", "Type", "Emissions per Lanemile", "Project Duration Days"];
    const [data, setData] = useState([])
    
    const handleChange = (event) => {
        setType(event.target.value);
        // console.log()
        setActivity(event.target.value.Activity)
    };

    const handleActivity = (event) => {
        setFinalAct(event.target.value)
    }



    const addNew = ({ id }) => {
        setData(previous => [
            ...previous, [
            
            ]
        ]) }


        
	var storedTotal;
	var storedUsePhase;
	var storedYear;

    function getJobType()
    {
      $.post("getjobtype.php", {type: $("#job").val()}, function(data) {
		$("#jobType").html(data);
      });
    }

    function addJob()
    {
      if(isNaN(year) || year > 50 || year < 1)
      {
	    alert("Year must be a valid number");

	    return;
	  }

	  if(isNaN(duration) || duration < 1) 
	  {
		  alert("Duration Days must be a valid number");

		  return;
	  }

	  if(year != "1" && ($(".total").length == 0))
	  {
		  alert("Must start at year 1");

		  return;
	  }

	  var jobType = $("#jobType option:selected").text();
	  var type = $("#job").val();

	  $.post("getlanemileemission.php", {type: type, jobType: jobType}, function(data) {
		  var emissions = parseFloat(data);
		  var workZone = 0;
		  var usePhase = 0;
		  var totals = 0;
		  var temp=0;

		  var html = "<tr>";
		  html += "<td class=\"jobYear\">" + year + "</td>";
		  html += "<td>" + jobType + "</td>";
		  html += "<td>" + type + "</td>";
		  html += "<td>" + roundTo(emissions, 4) + " MT of CO2 Eq/lanemile</td>";
		  html += "<td class=\"durationDays\">" + duration + "</td>";
		  html += "</tr>";


		  if(year == 1)
		  {
			  usePhase += calcUsePhase(year);
			  workZone += calcWorkZone(year);

			  storedUsePhase = usePhase;
		  }
		  else
		  {
			  var years = [];

			  $(".jobYear").each(function(data){
				  years.push($(this).text());
			  });
		
			  var ret = calcYear(parseInt(years[years.length - 1]), year, storedUsePhase);
			  usePhase += ret[0];

			  storedUsePhase = ret[1];
			
			  totals += getTotal();
				
			  workZone += calcWorkZone(year);
		  }

		  storedYear = year;

		  $("#addedJob").append(html);

		  storedTotal = emissions + workZone + usePhase + totals;

		  addTotalRow(storedTotal, year);

		  alert("Intervention at year " + year + " added");
	  });
    }

	function roundTo(num, figs)
	{
		return Math.round(num * Math.pow(10, figs)) / Math.pow(10, figs);
	}

	function getTotal()
	{
		return storedTotal;
	}

	function addTotalRow(total, year)
	{
		var html = "<tr>";
		html += "<td>" + year + "</td>";
		html += "<td colspan=\"4\" class=\"total\">Subtotal: " + roundTo(total, 4) + "</td>";
		html += "</tr>";

		$("#addedJob").append(html);
	}

	function calcYear(initYear, finalYear, initial)
	{
		var difference = finalYear - initYear;
		var finalEmissions = initial * 1.01;
		var sum = 0;

		for(var i = 1; i < difference; ++i)
		{
			sum += finalEmissions;

			var html = "<tr>";
			html += "<td>" + (initYear + i) + "</td>";
			html += "<td colspan=\"4\" class=\"usePhase\">Use Phase: " + roundTo(finalEmissions, 4) + "</td>";
			html += "</tr>";

			$("#addedJob").append(html);

			finalEmissions *= 1.01;
		}

		sum += finalEmissions;

		var html = "<tr>";
		html += "<td>" + (initYear + difference) + "</td>";
		html += "<td colspan=\"4\" class=\"usePhase\">Use Phase: " + roundTo(finalEmissions, 4) + "</td>";
		html += "</tr>";

		$("#addedJob").append(html);

		return [sum,finalEmissions];
	}

	function calcWorkZone(year)
	{
		var factor = ($("#speed").val() == "55") ? 0.55929511 : 0.0191729; 
		//Emission reduction due to slower speed. Old number was 0.0191729, Brian updated it to -0.002101
		var durationDays = parseFloat($("#durationDays").val());
		var projectLength = parseFloat($("#projectLength").val());
		var adt = parseFloat($("#adt").val());
		var numberOfLanes = parseFloat($("#numberOfLanes").val());
		var emissions = roundTo((factor * durationDays * projectLength * (adt / 1000)) / (projectLength * numberOfLanes), 6);

		var html = "<tr>";
		html += "<td>" + year + "</td>";
		html += "<td colspan=\"4\">Work Zone" + (year == "1" ? " Initial: " : ": ") + roundTo(emissions, 4) + "</td>";
		html += "</tr>";

		$("#addedJob").append(html);

		return emissions;
	}

	function calcUsePhase(year)
	{
		var factor = ($("#speed").val() == "55") ? 176.448256 : 190.22258;
		var projectLength = parseFloat($("#projectLength").val());
		var adt = parseFloat($("#adt").val());
		var numberOfLanes = parseFloat($("#numberOfLanes").val());
		var emissions = roundTo((factor * projectLength * (adt / 1000)) / (projectLength * numberOfLanes), 6);

		var html = "<tr>";
		html += "<td>" + year + "</td>";
		html += "<td colspan=\"4\" class=\"usePhase\">Use Phase: " + roundTo(emissions, 4) + "</td>";
		html += "</tr>";

		$("#addedJob").append(html);

		return emissions;
	}

	function calcAnnualizedEmissions()
	{
		$("#annualizedEmissions").html(roundTo(storedTotal / storedYear, 4));
	}
  

    

    return (
        <>
            <div className='appbar'>
                <CssBaseline />
                <AppBar position="relative" color="default" >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            THREEARES
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>

            <div className='main-container'>
                <div className='title'>
                    <Typography variant="h4" gutterBottom>
                        Life Cycle Assessment
                    </Typography>
                </div>

                <div className='title'>
                    <Typography variant="h6" gutterBottom>
                        General Information
                    </Typography>
                </div>

                <div className='main-content'>
                    <Paper elevation={3} >
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >

                            <Grid container
                                className="form-grid"
                                xs={12} lg={6}
                                direction={"column"} spacing={5}
                                justifyContent="center">

                                <Grid item xs={12}>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Generalized Roadway Speed</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="55mph" control={<Radio />} label="55mph" />
                                            <FormControlLabel value="70mph" control={<Radio />} label="70mph" />

                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>

                                    <TextField required fullWidth id="outlined-basic" label="Average Daily Traffic (AADT)" variant="outlined" value={aadt}
                                        onChange={(e) => {
                                            setAadt(e.target.value)
                                        }} />

                                </Grid>



                                <Grid item xs={12}>

                                    <TextField required fullWidth id="outlined-basic" label="Project Length (in miles)" variant="outlined" value={miles}
                                        onChange={(e) => {
                                            setMiles(e.target.value)
                                        }} />

                                </Grid>

                                <Grid item xs={12}>

                                    <TextField required fullWidth id="outlined-basic" label="Number of lanes" variant="outlined" value={lanes}
                                        onChange={(e) => {
                                            setLanes(e.target.value)
                                        }} />

                                </Grid>


                                <Grid item xs={12}>
                                    <div className='title'>
                                        <Typography variant="h6" gutterBottom>
                                            Build Life Cycle
                                        </Typography>
                                    </div>
                                </Grid>


                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                        <Select
                                            labelId="Type"
                                            id="demo-simple-select"
                                            value={type}
                                            label="Type"
                                            onChange={handleChange}
                                        >

                                            {lcaData.map((item) => (
                                                <MenuItem value={item}>{item['Type']}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>


                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Activity</InputLabel>
                                        <Select
                                            labelId="Activity"
                                            id="demo-simple-select"
                                            value={finalAct}
                                            label="Activity"
                                            onChange={handleActivity}
                                        >
                                            {activity?.map((item) => (
                                                <MenuItem value={item}>{item}</MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField required fullWidth id="outlined-basic" label="Intervention Year" variant="outlined" value={year}
                                        onChange={(e) => {
                                            setYear(e.target.value)
                                        }} />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField required fullWidth id="outlined-basic" label="Project Duration Days" variant="outlined" value={duration}
                                        onChange={(e) => {
                                            setDuration(e.target.value)
                                        }} />
                                </Grid>


                            </Grid>


                        </Box>

                                <Button className="calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center"
                                        }} variant="contained"> Add </Button>

                    </Paper>
                </div>

            </div>

            <MUIDataTable
                title={"Emission List"}
                data={data}
                columns={columns}
                options={options}
            />
            <div className='results'>
                <Button className="calculate-btn" style={{
                    width: "300px",
                    textAlign: "center"
                }} variant="contained" onClick={calculate}>Get Annualized Emissions</Button>

                <TextField style={{
                    margin: "20px",
                    width: "300px"
                }} disabled={true} id="outlined-basic" label="Emissions" variant="outlined" value={emission}
                />

            </div>

        </>
    )
}

export default Lca