import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';

const NewsLetter = () => {
  return ( 
    <div style={{
      textAlign: "center",
      marginBottom: "30px",
      padding: "30px"
    }}
    className="newsletter">
      <h1>Sign up for our Newsletter</h1>
      <p style={{
        padding: "40px",
      }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    
    <div style={{display: "flex", justifyContent: "center"}}>
    <TextField id="outlined-basic" label="Email" variant="outlined" 
    style = {{
      width: "600px",
      margin: "20px"
    }}
    />
    <Button variant="contained" style={{
      width: "150px",
      margin: "20px"
      }}>Send</Button>
    </div>
    </div>
  )
}

export default NewsLetter;
