import { AppBar, Checkbox, Grid, Paper, Toolbar, Typography } from '@material-ui/core'
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import './transport.css'
import axios from 'axios'
const Transport = () => {
  const [origin, setOrigin] = useState('')
  const [dest, setDest] = useState('')
  const [mass, setMass] = useState('')
  const [value, setValue] = React.useState('ROAD');
  const [dist, setDist] = useState(0)
  const [loading, setLoading] = useState(false)
  var emissions_rate = 0

  const handleChange = (event) => {

    setValue(event.target.value);
  };
  const calculate = async () => {
    const request = {
      method: "GET",

      headers: {
        'no-cors': true,
        'Access-Control-Allow-Origin': '*',
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    if (value === 'ROAD')
      emissions_rate = 1.65
    else if (value === 'RAIL')
      emissions_rate = .0157
    else if (value === 'AIR')
      emissions_rate = 1.404
    axios.get(`http://localhost:5000/distance?origin=${origin}&destination=${dest}`).then((response) => {
      setDist(response.data)
    })
    // }).then((data) => {
    //   console.log(data)
    // })
    console.log(dist)
    // console.log(dist, emissions_rate, mass)
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
            Transportation GHG Estimator
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
                direction={"column"} spacing={5}
                justifyContent="center">
                <Grid item xs={12} sm={6}>


                  <TextField required fullWidth id="outlined-basic" label="ORIGIN" variant="outlined" value={origin}
                    onChange={(e) => {
                      setOrigin(e.target.value)
                    }} />


                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required fullWidth id="outlined-basic" label="DESTINATION" variant="outlined" value={dest} onChange={(e) => {
                    setDest(e.target.value)
                  }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="CARGO MASS" variant="outlined" value={mass} onChange={(e) => {
                    setMass(e.target.value)
                  }} />

                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Means</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="female"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="RAIL" control={<Radio />} label="Rail" />
                      <FormControlLabel value="ROAD" control={<Radio />} label="Road" />
                      <FormControlLabel value="AIR" control={<Radio />} label="Air" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>


            </Box>
          </Paper>
        </div>
        <Button variant="contained" onClick={calculate}>Calculate</Button>
      </div>
    </>
  )
}

export default Transport