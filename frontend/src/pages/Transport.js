import { TextField,Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Transport = () => {
    const [origin,setOrigin]=useState('')
    const [dest,setDest]=useState('')
    const [mass,setMass]=useState('')
    const [value, setValue] = React.useState('female');
    var emissions_rate=0,distance=0
    
    const handleChange = (event) => {
       
      setValue(event.target.value);
    };
    const calculate=async()=>{
        const request = {
            method: "GET",
            
            headers: {
                'no-cors':true,
            'Access-Control-Allow-Origin': '*',
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          };
        if(value==='ROAD')
        emissions_rate = 1.65
        else if(value==='RAIL')
        emissions_rate = .0157
        else if(value==='AIR')
        emissions_rate = 1.404
        distance= await fetch(`https://www.distance24.org/route.json?stops=${origin}|${dest}`,request)
        console.log(distance)
        // console.log(distance*emissions_rate*mass)
    }
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="ORIGIN" variant="outlined" value={origin}
      onChange={(e)=>{
        setOrigin(e.target.value)
      }}/>
      <TextField id="outlined-basic" label="DESTINATION" variant="outlined" value={dest} onChange={(e)=>{
        setDest(e.target.value)
      }}/>
      <TextField id="outlined-basic" label="CARGO MASS" variant="outlined" value={mass} onChange={(e)=>{
        setMass(e.target.value)
      }}/>
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
            <Button variant="contained" onClick={calculate}>Calculate</Button>

    </Box>
        
    </div>
    
  )
}

export default Transport