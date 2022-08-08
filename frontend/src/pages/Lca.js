import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from '@material-ui/core'
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'
import lcaData from '../data/lca_data'


const Lca = () => {
    
    const [aadt, setAadt] = useState(0)
    const [miles, setMiles] = useState(0)
    const [lanes, setLanes] = useState(0)
    const [type, setType] = React.useState('') 
    const [activity, setActivity] = React.useState('')


    const handleChange = (event) => {
        setType(event.target.value);
    };

    

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
                                                <MenuItem value={item['Type']}>{item['Type']}</MenuItem>
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
                                                value={activity}
                                                label="Activity"
                                                onChange={handleChange}
                                            >
                            
                                
                                            </Select>
                                        </FormControl>
                                    </Grid>

                            </Grid>

    

                        </Box>
                
                    </Paper>
                </div>

            </div>

        </>
    )
}

export default Lca