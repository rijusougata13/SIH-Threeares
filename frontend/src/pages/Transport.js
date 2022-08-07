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
  const [res, setRes] = useState(0)
  var emissions_rate = 0

  const handleChange = (event) => {

    setValue(event.target.value);
  };
  const calculate = async () => {
    setDist(null)
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
      // setDist(parseInt(response.data))
      setRes(parseInt(parseInt(response.data) * emissions_rate * mass))
    })


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
                className="form-grid"
                xs={12} lg={6}
                direction={"column"} spacing={5}
                justifyContent="center">
                <Grid item xs={12}>


                  <TextField required fullWidth id="outlined-basic" label="ORIGIN" variant="outlined" value={origin}
                    onChange={(e) => {
                      setOrigin(e.target.value)
                    }} />


                </Grid>
                <Grid item xs={12}>
                  <TextField style={{
                    width: "100%"
                  }} required id="outlined-basic" label="DESTINATION" variant="outlined" value={dest} onChange={(e) => {
                    setDest(e.target.value)
                  }} />
                </Grid>

                <Grid item xs={12} >
                  <TextField style={{
                    width: "100%"
                  }} id="outlined-basic" label="CARGO MASS" variant="outlined" value={mass} onChange={(e) => {
                    setMass(e.target.value)
                  }} />

                </Grid>
                <Grid item xs={12}>
                  <FormControl style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <FormLabel id="demo-radio-buttons-group-label">Means &nbsp; &nbsp;</FormLabel>
                    <RadioGroup
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
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

export default Transport