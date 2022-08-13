import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from '@material-ui/core'
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import MUIDataTable from "mui-datatables";

import PieChart from 'src/components/PieChart';

import React, { useState } from 'react'
import './equipment.css'
import axios from 'axios'
import materialDetails from '../data/material_estimator'
const Material = () => {
    const [equip, setEquip] = React.useState('');
    const [weight, setWeight] = useState('')
    const [chartDataEmission,setChartDataEmission]=useState([])

    const [emission, setEmission] = useState(0)
   

    var emissions_rate = 0
    const columns = ["Division", "Material Name", "Weight", "Emissions(MT of CO2)"];
    const [data, setData] = useState([])


    const options = {
        selectableRows: false
    };

    const handleChange = (event) => {
        setEquip(event.target.value);
    };
    const calculate = () => {
        setEmission(0)
        setChartDataEmission([]);
        {
            data.map((d) => {
                setEmission(prev => d[3] + prev)
                console.log(d[5])
                setChartDataEmission(prev=>[
                    ...prev,
                    {argument:d[1],value:d[3]}
                ])

            })
        }





    }
    const addNew = ({ id }) => {
        setData(previous => [
            ...previous, [
                equip['Div ID'],
                
                equip['Material Description'],
                weight,
                (weight * equip['Published Factor']),


            ]
        ])


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
                    <Typography variant="h6" gutterBottom>
                        Material GHG Estimator
                    </Typography>
                </div>
                <div className='main-content'>
                    <Paper elevation={3} >
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        // minHeight="100vh"
                        >

                            <Grid container
                                className="form-grid"
                                xs={12} lg={6}
                                direction={"column"} spacing={5}
                                justifyContent="center">
                                <Grid item xs={12}>


                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Materials</InputLabel>
                                        <Select
                                            labelId="Materials"
                                            id="demo-simple-select"
                                            value={equip}
                                            label="Material"
                                            onChange={handleChange}
                                        >
                                            {materialDetails.map((item) => (
                                                <MenuItem value={item}>{item['Material Description']}</MenuItem>
                                            ))}
                                            {/* <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem> */}
                                        </Select>
                                    </FormControl>

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Weight" variant="outlined" value={weight} onChange={(e) => {
                                        setWeight(e.target.value)
                                    }} />
                                </Grid>

                                

                            </Grid>


                        </Box>

                        <Button className="calculate-btn" style={{
                            width: "300px",
                            textAlign: "center"
                        }} variant="contained" onClick={addNew}>ADD New Emission</Button>

                    </Paper>
                </div>

            </div>


            <MUIDataTable
                title={"Emission List"}
                data={data}
                columns={columns}
                options={options}
            />
            {chartDataEmission.length>0 &&  <PieChart data={chartDataEmission} label="Emission Rate PieChart"/>}

            <div className='results'>
                <Button className="calculate-btn" style={{
                    width: "300px",
                    textAlign: "center"
                }} variant="contained" onClick={calculate}>Calculate</Button>

                <TextField style={{
                    margin: "20px",
                    width: "300px"
                }} disabled={true} id="outlined-basic" label="Emissions" variant="outlined" value={emission}
                />

            </div>

        </>
    )
}

export default Material