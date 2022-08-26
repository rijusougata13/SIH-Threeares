import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const NewsLetter = () => {

  return ( 
    <div style={{
      textAlign: "center",
      marginBottom: "30px",
      padding: "30px",
      marginTop: "40px"
    }}
    className="newsletter">
      <h1 style={{fontSize: ""}}>Leave Us A Feedback!</h1>
      <p style={{
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingTop: "20px",
        paddingBottom: "20px",
        color: "#555555",
        fontWeight: "bolder",
        fontFamily: "Montserrat"
      }}>You can help make the world a bit greener too by sending us your invaluable feedback, and become a part of the Threeares family. Enter your message below and click on send to send out your feedback to us.</p>
    
    <div style={{display: "flex", justifyContent: "center"}}>
    <TextField className="textfield" id="outlined-basic" label="Message" variant="outlined" 
    style = {{
      width: "600px",
      margin: "20px",
      color: "#008000"
    }}

    />
    <Button variant="contained" style={{
        fontFamily: "montserrat",
        width: "150px",
        marginLeft: "0px",
        marginTop: "20px",
        marginBottom: "20px",
        background: "white",
        color: "#008000",
        boxShadow: "none",
        border: "1px solid #008000",
        borderRadius: "0px",
        // fontWeight: "normal"
      }}>Send</Button>
    </div>
    </div>
  )
}

export default NewsLetter;
