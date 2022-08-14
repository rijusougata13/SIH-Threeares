import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';

const NewsLetter = () => {
  return ( 
    <div style={{
      textAlign: "center",
      marginBottom: "30px",
      padding: "30px",
      marginTop: "40px"
    }}
    className="newsletter">
      <h1 style={{fontSize: ""}}>Sign up for our Newsletter</h1>
      <p style={{
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingTop: "20px",
        paddingBottom: "20px",
        color: "#555555",
        fontWeight: "bolder"
      }}>Sign up for our newsletter to receive the latest news and updates about our ongoing and upcoming featuers, and become a part of the Threeares family. Enter your email below and click on send to get added to our mailing list now!</p>
    
    <div style={{display: "flex", justifyContent: "center"}}>
    <TextField id="outlined-basic" label="Email" variant="outlined" 
    style = {{
      width: "600px",
      margin: "20px"
    }}
    />
    <Button variant="contained" style={{
      width: "150px",
      margin: "20px",
      }}>Send</Button>
    </div>
    </div>
  )
}

export default NewsLetter;
