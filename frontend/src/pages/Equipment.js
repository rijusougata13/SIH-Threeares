import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from '@material-ui/core'
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import './equipment.css'
import axios from 'axios'
import equipmentDetails from '../data/equiment_estimator'
const Equipment = () => {
    const [equip, setEquip] = React.useState('');
    const [dest, setDest] = useState('')
    const [mass, setMass] = useState('')
    const [value, setValue] = React.useState('ROAD');
    const [dist, setDist] = useState(0)
    const [res, setRes] = useState(0)
    var emissions_rate = 0

    const handleChange = (event) => {
        // alert(event.target.value)
        setEquip(event.target.value);
    };
    const calculate = () => {
        setDist(null)





    }
    // if (!dist) {
    //   return (
    //     <p>Loading</p>
    //   )
    // }

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
                                                <MenuItem value={item['Equip Type ID']}>{item['Equipment']}</MenuItem>
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
                                    }} required id="outlined-basic" label="Number Used" variant="outlined" value={dest} onChange={(e) => {
                                        setDest(e.target.value)
                                    }} />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField style={{
                                        width: "100%"
                                    }} id="outlined-basic" label="Hours" variant="outlined" value={mass} onChange={(e) => {
                                        setMass(e.target.value)
                                    }} />

                                </Grid>

                            </Grid>



                        </Box>
                        <Button className="calculate-btn" style={{
                            width: "300px",
                            textAlign: "center"
                        }} variant="contained" onClick={calculate}>Calculate</Button>

                        <div className='results'>
                            <TextField style={{
                                margin: "20px",
                                width: "300px"
                            }} disabled={true} id="outlined-basic" label="YOUR RESULTS" variant="outlined" value={res}
                            />
                        </div>
                    </Paper>
                </div>

            </div>

        </>
    )
}

export default Equipment