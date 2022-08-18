import React from "react";

import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from "@material-ui/core";
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        // padding:'50px'
    },
    paper: {
        height:"100vh",
        padding: "50px",
        textAlign: 'left'
        
        
    },
    text:{
        padding:'20px 0px ',
    },
    img:{
        float:'right',
        height:'400px',
        width:'400px',
        margin: '10px'
        // padding: '100px',

    }
}));

const TransportInventory = () => {
    const classes = useStyles();

    return (<>
        <div>
           <Typography variant="h3" color="inherit">
            Transport GHG Estimator
            </Typography>

        </div>
        <div className={classes.paper}>
        <img src="https://www.construction.mtu.edu/cass_reports/webpage/image/method.png" className={classes.img}/>
        <p className={classes.text}>
        The ERA Equipment CO2 Calculator is a tool to estimate the carbon footprint of construction equipment over its entire life cycle. It is applicable to all types of construction equipment, from mini excavators to wheel loaders and from generators to boom lifts (only hand tools are excluded).
 
 The calculator estimates the carbon footprint of a piece of equipment per hour of use. Expressing the results per hour of (active) use enables comparisons across different types of equipment and over a wide range of ownership scenarios. The ERA Equipment CO2 Calculator can be used to evaluate a single ownership period of a piece of equipment. The calculator’s results can for instance be used to:
 Investigate which part of the life cycle has the largest contribution to the carbon footprint of equipment;
 Compare different equipment use scenarios;
 Study the effects of changes to a baseline use scenario, such as measures to reduce the footprint;
 Evaluate the effects of alternative fuel consumption.
         </p>

         <Typography>Formula</Typography>

        <p>

        If the emission factor is in units of pounds per hp-hr power output or pounds per MMBtu heat input:

Actual Emissions (tpy) = Emission Rate [lb/hr] x Actual Operating Hours [hr] x 0.005 [ton/lb] x ((100 – Control Efficiency)/100)

        </p>


        </div>


    </>)
}

export default TransportInventory;