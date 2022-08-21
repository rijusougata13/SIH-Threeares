import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
// import './SplitSection.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MaterialGHG(props) {
  return (
    <Box sx={{ 
        width: '100%',
        height: props.height,
        // marginTop: '40px'
        }}>
      <Grid style={{height: '100%'}} container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
        
        <Grid item xs={12} sm={12} md={8} lg={8}>
            
          <Item style={{
            height: "300px", 
            textAlign: "left", 
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            borderRadius: "0px",
            height: '100%'
            }}>

            <h1 style={{fontSize: "3.2rem"}}>{props.heading}</h1>
            
            <p style={{
              color: "#555555",
              fontWeight: "bolder",
              fontFamily: "Montserrat"
              
            }}>{props.description}</p>

            <p style={{
              color: "#555555",
              fontWeight: "bolder",
              fontFamily: "Montserrat",
              marginTop: "20px"
              
            }}><p>Formulae</p> 
            <p style={{color: "#555555"}}>1. On-Site Electricity and Fuel Usage: 
                Emissions(kg CO2) = [Units of electricity purchased from grid (in kWH) * 0.92] + [Diesel used in generators (in litres) * 2.6391] + [Petrol used (in litres) * 2.3035]</p>
            <p style={{color: "#555555"}}>2. Embodied Carbon in Construction Materials: Emissions from materials such as asphalt, concrete, etc. used in 4 layers of road - subgrade/road bed, sub-base course, base course and surface course.</p> 
            <p style={{color: "#555555"}}>3. Vegetation removed: Emissions(kg CO2) = Biomass(kg) * 1.8 </p>
            <p style={{color: "#555555"}}>4. Emissions in Operation Phase(MT CO2) per year = 176.45 * Length of road(in miles) * Average Daily Traffic/1000</p>
            {/* <p style={{marginTop: "10px"}}>References</p>
            IPCC Climate Change, 2007
        IPCC. Climate Change 2007: Mitigation of Climate Change. Contribution of Working Group III to the Fourth Assessment Report of the Intergovernmental Panel on Climate Change B. Metz, O.R. Davidson, P.R. Bosch, R. Dave, L.A. Meyer (eds). Cambridge University Press, Cambridge, United Kingdom and New York, NY, USA. 2007.
        Google Scholar */}
            <p style={{marginTop: "10px"}}>Research References</p>
            <a style={{marginRight: "10px"}} href="https://www.adb.org/sites/default/files/publication/28555/estimating-carbon-footprints-road-projects.pdf">Link 1</a>
            <a style={{marginRight: "10px"}} href="https://doi.org/10.3141/2366-01">Link 2</a>
            <a style={{marginRight: "10px"}} href="https://www.mdpi.com/2071-1050/7/12/15838">Link 3</a>
            {/* <a style={{marginRight: "10px"}} href="#">Link 4</a> */}

            <p style={{marginTop: "10px"}}>Datasets</p>
        <a href="https://docs.google.com/spreadsheets/d/1XDfnp0NjRDuVJ7zlAun5KXuws6Cp9z0yBE0Rwqo7DBA/edit#gid=0" target="_blank"> Dataset Link </a>
            </p>
            
            {props.routepath != null && <Button id="calculate-btn" style={{
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
              transition: "0.4s ease"
            }}
            
          >Calculate now</Button>}
          </Item>
        </Grid>
        <Grid item 
        sx={{ display: { xs: 'none', lg: 'block', xl: 'block', md: 'block' } }}
        xs={0} sm={0} md={4} lg={4}>
          <Item style={{
            height: "100%", 
            backgroundSize: "100% 100%",
            backgroundRepeat: "round",
            border: props.border,
            borderRadius: "0px",
            padding: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            }}>
            <img src={props.image} style={{height: "300px"}}></img>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
