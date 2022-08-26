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

export default function VehicleGHG(props) {
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
              
            }}>
            <p style={{marginTop: "10px"}}>Research References</p>
            <a style={{marginRight: "10px"}} href="https://theicct.org/wp-content/uploads/2021/12/eu-hdv-co2-standards-baseline-data-sept21.pdf">Link 1</a>
            {/* <a style={{marginRight: "10px"}} href="https://www.researchgate.net/figure/Carbon-emissions-in-material-transportation_tbl2_322538087">Link 2</a>
            <a style={{marginRight: "10px"}} href="https://www.unep.org/explore-topics/energy/what-we-do/transport">Link 3</a> */}
            <p style={{marginTop: "10px"}}>Datasets</p>
        <p><a href="https://www.kaggle.com/datasets/debajyotipodder/co2-emission-by-vehicles" target="_blank"> Dataset Link </a>
            </p>
           < p style={{marginTop: "10px"}}>Google CoLab Link:</p>
        <p><a href="https://colab.research.google.com/drive/1GySCWm4V_eR6uTZVohdx3rrLv1WRZO-I?usp=sharing" target="_blank"> Dataset Link </a>
            </p>
              
              {/* <a style={{marginRight: "10px"}} href="#">Link 4</a> */}

            {/* <p style={{marginTop: "10px"}}>Datasets</p> */}
        {/* <a href="https://docs.google.com/spreadsheets/d/1XDfnp0NjRDuVJ7zlAun5KXuws6Cp9z0yBE0Rwqo7DBA/edit#gid=0" target="_blank"> Dataset Link </a> */}
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
