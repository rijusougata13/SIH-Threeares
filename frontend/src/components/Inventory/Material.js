import React from "react";

import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from "@material-ui/core";
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        padding:'50px'
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

const MaterialInventory = () => {
    const classes = useStyles();

    return (<>
        <div className='appbar'>
           <Typography variant="h4" color="inherit" className={classes.header}>
            Material GHG Estimator
            </Typography>

        </div>
        <div className={classes.paper}>
        <img src="https://www.construction.mtu.edu/cass_reports/webpage/image/method.png" className={classes.img}/>
        <p className={classes.text}>
        With increasing urbanization and living standards of people in India, there is certainty that there will be a substantial increase in human activities such as transportation infrastructure development, and associated rise in energy demand. Thus, it is imperative that the technical knowhow regarding carbon emissions due to roadway infrastructure is advanced further to accomplish a sustainable environment. Thus, the objective of this research study was to develop a toolkit termed “Carbon Footprint Calculator” to quantify the carbon footprints of the different pavement systems used in highway construction. The tool developed as part of the study incorporated the major contributors of Greenhouse Gas (GHG) emissions including: pavement design aspects; material production and transportation from source to site; construction practices used in the various pavement systems and the expected vehicular operations during the pavement design life. A mathematical model to estimate the overall amount of GHG emissions in terms of total kgCO2 equivalent (kgCO2e) was also developed as a part of this study. In this study, the evaluation of GHGs in terms of carbon footprints for the different pavement systems used in Indian roadway construction was approached from a life cycle assessment perspective. It is envisioned that this tool could be well-utilized by design engineers to optimize pavement design methodology and construction practices in respect of creating a greener sustainable environment.

         </p>

         <Typography>Formula</Typography>

        <p>
        Equipment Estimator Emissions (tpy) = Emission Rate [lb/hr] x Actual Operating Hours [hr] x 0.005 [ton/lb] x ((100 – Control Efficiency)/100)

        </p>
        <Typography>Reference</Typography>

        <p>
        IPCC Climate Change, 2007
        IPCC. Climate Change 2007: Mitigation of Climate Change. Contribution of Working Group III to the Fourth Assessment Report of the Intergovernmental Panel on Climate Change B. Metz, O.R. Davidson, P.R. Bosch, R. Dave, L.A. Meyer (eds). Cambridge University Press, Cambridge, United Kingdom and New York, NY, USA. 2007.
        Google Scholar

        </p>
        <Typography>Dataset</Typography>

        <p>
            <a href="https://docs.google.com/spreadsheets/d/1XDfnp0NjRDuVJ7zlAun5KXuws6Cp9z0yBE0Rwqo7DBA/edit#gid=0" target="_blank"> Dataset Link </a>

        </p>
        </div>


    </>)
}

export default MaterialInventory;