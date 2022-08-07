import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from '@material-ui/core'
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import MUIDataTable from "mui-datatables";

import React, { useState } from 'react'
import './equipment.css'
import axios from 'axios'
import equipmentDetails from '../data/equiment_estimator'
const Equipment = () => {
    const [equip, setEquip] = React.useState('');
    const [no, setNo] = useState('')
    const [hours, setHours] = useState('')
    // const [value, setValue] = React.useState('ROAD');
    // const [dist, setDist] = useState(0)
    const [emission, setEmission] = useState(0)
    const [gallons, setGallons] = useState(0)

    var emissions_rate = 0
    const columns = ["Division", "Fuel Rate(Gal/hr)", "Equipment Name", "Numbers Used", "Hours", "Emissions(MT of CO2)", "Fuel Used(Gallons)"];
    const [data, setData] = useState([])


    const options = {
        selectableRows: false
    };

    const handleChange = (event) => {
        setEquip(event.target.value);
    };
    const calculate = () => {
        setEmission(0)
        setGallons(0)
        {
            data.map((d) => {
                setEmission(prev => d[5] + prev)
                setGallons(prev => d[6] + prev)
            })
        }





    }
    const addNew = ({ id }) => {
        setData(previous => [
            ...previous, [
                equip['Equip Type ID'],
                equip['Fuel Rate (Gal/hr)'],
                equip['Equipment'],
                no,
                hours,
                (no * hours * equip['EmissionRate/hr'] / 1000),
                no * hours * equip['Fuel Rate (Gal/hr)']


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
                        Equipment GHG Estimator
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
                                        <InputLabel id="demo-simple-select-label">Equipment</InputLabel>
                                        <Select
                                            labelId="Equipment"
                                            id="demo-simple-select"
                                            value={equip}
                                            label="Equipment"
                                            onChange={handleChange}
                                        >
                                            {equipmentDetails.map((item) => (
                                                <MenuItem value={item}>{item['Equipment']}</MenuItem>
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
                                    }} required id="outlined-basic" label="Number Used" variant="outlined" value={no} onChange={(e) => {
                                        setNo(e.target.value)
                                    }} />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField style={{
                                        width: "100%"
                                    }} id="outlined-basic" label="Hours" variant="outlined" value={hours} onChange={(e) => {
                                        setHours(e.target.value)
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
                title={"Employee List"}
                data={data}
                columns={columns}
                options={options}
            />
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
                <TextField style={{
                    margin: "20px",
                    width: "300px"
                }} disabled={true} id="outlined-basic" label="Gallons" variant="outlined" value={gallons}
                />
            </div>

        </>
    )
}

export default Equipment