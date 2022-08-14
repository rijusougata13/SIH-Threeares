import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from '@material-ui/core'
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import MUIDataTable from "mui-datatables";

import React, { useState } from 'react'
import './equipment.css'
import axios from 'axios'
import lcaData2 from '../data/lca2_data'

const Lca2 = () => {
    const [material1, setMaterial1] = React.useState('')
    const [material2, setMaterial2] = React.useState('')
    const [material3, setMaterial3] = React.useState('')
    const [material4, setMaterial4] = React.useState('')
    const [weight1, setWeight1] = useState(0)
    const [weight2, setWeight2] = useState(0)
    const [weight3, setWeight3] = useState(0)
    const [weight4, setWeight4] = useState(0)
    const [electricity, setElectricty] = useState(0)
    const [emission1, setEmission1] = useState(0)
    const [generatorDiesel, setGeneratorDiesel] = useState(0)
    const [petrol, setPetrol] = useState(0)
    const [biomass, setBiomass] = useState(0)
    const [distance, setDistance] = useState(0)
    const [adt, setAdt] = useState(0)
    const [days, setDays] = useState(0)
   

    var totalEmissions = 0
    var constructionPhase = 0
    var operationPhase = 0
    //const columns = ["Division", "Material Name", "Weight", "Emissions(MT of CO2)"];
    // const [data, setData] = useState([])


    const handleChange = (event) => {
        //setWeight1(event.target.value); 
        //setWeight2(event.target.value);
        //setWeight3(event.target.value);
        //setWeight4(event.target.value);
        setMaterial1(event.target.value);
        setMaterial2(event.target.value);
        setMaterial3(event.target.value);
        setMaterial4(event.target.value);

    };

    const calculate = () => {
          setEmission1(0)
    
    }

    const addNew = (a) => {
        totalEmissions+=a;  
    }

    const addConstruction = (b) => {
        constructionPhase+=b;
    }

    const addOperation = (c) => {
        operationPhase+=c;
        // operation phase output is given in MT; 1 MT = 1000kg for calculating total emissions
        totalEmissions+=(c*1000); 
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
                    <Typography variant="h5" gutterBottom>
                        Life Cycle Assessment
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
                                    <Typography align="left" variant="h4" gutterBottom>
                                        Construction Phase
                                    </Typography>

                                </Grid> 

                                <Grid item xs={12}>
                                    <Typography align="center" variant="h6" gutterBottom>
                                        On-Site Electricity and Fuel Usage
                                      </Typography>

                                </Grid> 

                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Units of electricity purchased from grid (in kWH)" variant="outlined" value={electricity} 
                                    onChange={(e) => {
                                        setElectricty(e.target.value)
                                    }} />

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={electricity*0.92}  
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Diesel used in generators (in litres)" variant="outlined" value={generatorDiesel}  
                                    onChange={(e) => {
                                        setGeneratorDiesel(e.target.value)
                                    }} />

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={generatorDiesel*2.6391}
                                    />
                                </Grid>
                                

                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Petrol used (in litres)" variant="outlined" value={petrol}   
                                    onChange={(e) => {
                                        setPetrol(e.target.value)
                                    }} />

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={petrol*2.3035}
                                    />
                                </Grid>


                                <Grid item xs={12}>
                                    <Button className="calculate-btn" style={{
                                    width: "300px",
                                    textAlign: "center"
                                    }} variant="contained" onClick={addConstruction(generatorDiesel*2.6391+electricity*0.92+petrol*2.3035)}>Emissions</Button>

                                    <TextField style={{
                                        margin: "20px",
                                        width: "200px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={generatorDiesel*2.6391+electricity*0.92+petrol*2.3035}
                                    />
                                </Grid>
                                    
                                <Grid item xs={12}>
                                    <Typography align="center" variant="h6" gutterBottom>
                                        Embodied Carbon in Construction Materials
                                      </Typography>

                                </Grid> 
                                
                                <Grid item xs={12}>
                                    <Typography variant="h7" gutterBottom>
                                        Subgrade or road bed
                                    </Typography>

                                </Grid>
                
                                
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Material Used</InputLabel>
                                        <Select
                                            labelId="Materials"
                                            id="demo-simple-select"
                                            value={material1} 
                                            label="Material"
                                            onChange={handleChange}
                                        >
                                            {lcaData2.map((item) => (
                                                <MenuItem value={item}>{item['Material Description']}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Weight" variant="outlined" value={weight1} 
                                    onChange={(e) => {
                                        setWeight1(e.target.value)
                                    }} />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button className="calculate-btn" style={{
                                    width: "300px",
                                    textAlign: "center"
                                    }} variant="contained" onClick={addConstruction()}>Emissions</Button>

                                    <TextField style={{
                                        margin: "20px",
                                        width: "200px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="h7" gutterBottom>
                                    Sub base course
                                    </Typography>

                                </Grid>
                
                                
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Material Used</InputLabel>
                                        <Select
                                            labelId="Materials"
                                            id="demo-simple-select"
                                            value={material2} 
                                            label="Material"
                                            onChange={handleChange}
                                        >
                                            {lcaData2.map((item) => (
                                                <MenuItem value={item}>{item['Material Description']}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Weight" variant="outlined" value={weight2} 
                                    onChange={(e) => {
                                        setWeight2(e.target.value)
                                    }} />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button className="calculate-btn" style={{
                                    width: "300px",
                                    textAlign: "center"
                                    }} variant="contained" onClick={addConstruction()}>Emissions</Button> 

                                    <TextField style={{
                                        margin: "20px",
                                        width: "200px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined"
                                    />

                                </Grid>
                        

                                <Grid item xs={12}>
                                    <Typography variant="h7" gutterBottom>
                                    Base Course
                                    </Typography>

                                </Grid>
                
                                
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Material Used</InputLabel>
                                        <Select
                                            labelId="Materials"
                                            id="demo-simple-select"
                                            value={material3}  
                                            label="Material"
                                            onChange={handleChange}
                                        >
                                            {lcaData2.map((item) => (
                                                <MenuItem value={item}>{item['Material Description']}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Weight" variant="outlined" value={weight3} 
                                    onChange={(e) => {
                                        setWeight3(e.target.value)
                                    }} />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button className="calculate-btn" style={{
                                    width: "300px",
                                    textAlign: "center"
                                    }} variant="contained" onClick={addConstruction()}>Emissions</Button>

                                    <TextField style={{
                                        margin: "20px",
                                        width: "200px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={0} 
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="h7" gutterBottom>
                                    Surface coarse or wearing course
                                    </Typography>

                                </Grid>
                
                                
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Material Used</InputLabel>
                                        <Select
                                            labelId="Materials"
                                            id="demo-simple-select"
                                            value={material4}  
                                            label="Material"
                                            onChange={handleChange}
                                        >
                                            {lcaData2.map((item) => (
                                                <MenuItem value={item}>{item['Material Description']}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </Grid>


                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Weight" variant="outlined" value={weight4} 
                                    onChange={(e) => {
                                        setWeight4(e.target.value)
                                    }} />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button className="calculate-btn" style={{
                                    width: "300px",
                                    textAlign: "center"
                                    }} variant="contained" onClick={addConstruction()}>Emissions</Button> 

                                    <TextField style={{
                                        margin: "20px",
                                        width: "200px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={0}
                                    />
                                </Grid>


                                <Grid item xs={12}>
                                    <Typography align="center" variant="h6" gutterBottom>
                                        Vegetation Removed
                                      </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Biomass used as fuel wood" variant="outlined" value={biomass} 
                                    onChange={(e) => {
                                        setBiomass(e.target.value)
                                    }} />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button className="calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center"
                                        }} variant="contained" onClick={addConstruction(biomass*1.8)}>Emissions</Button>

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={biomass*1.8}
                                    />
                                </Grid>
                                    
                                <Grid item xs={12}>
                                    <Button className="calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center"
                                        }} variant="contained" onClick={addNew(constructionPhase)}>Total Emissions in Construction Phase</Button>

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={constructionPhase} 
                                    /> 
                                </Grid>

                            </Grid>


                        </Box>
                    </Paper>
                </div>






                <div className='main-content'>
                    <Paper elevation={3}>
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
                                    <Typography align="left" variant="h4" gutterBottom>
                                        Operation Phase
                                    </Typography>

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField style={{
                                            width: "100%"
                                        }} required id="outlined-basic" label="Length of road (in miles)" variant="outlined" value={distance} 
                                        onChange={(e) => {
                                            setDistance(e.target.value)
                                        }} />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField style={{
                                            width: "100%"
                                        }} required id="outlined-basic" label="Average Daily Traffic" variant="outlined" value={adt} 
                                        onChange={(e) => {
                                            setAdt(e.target.value) 
                                        }} />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <TextField style={{
                                            width: "100%"
                                        }} required id="outlined-basic" label="Days" variant="outlined" value={days}   
                                        onChange={(e) => {
                                            setDays(e.target.value) 
                                        }} /> 
                                </Grid>

                                <Grid item xs={12}>
                                    <Button className="calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center"
                                        }} variant="contained" onClick={addOperation(176.45*distance*adt/1000)}>Total Emissions in Operation Phase</Button> 

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (MT CO2 emissions/year)" variant="outlined" value={176.45*distance*adt/1000} 
                                    />
                                </Grid>

                            </Grid>


                        </Box>
                    </Paper>
                </div>

            </div>

         

        </>
    )
}

export default Lca2