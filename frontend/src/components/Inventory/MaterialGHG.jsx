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
              
            }}><p>Formula</p> 
            Emission (MT of CO2) = Σ (published emission factor[MT/Unit] * quantity of aggregates [Unit])
            <p style={{marginTop: "10px"}}>References</p>
            IPCC Climate Change, 2007
        IPCC. Climate Change 2007: Mitigation of Climate Change. Contribution of Working Group III to the Fourth Assessment Report of the Intergovernmental Panel on Climate Change B. Metz, O.R. Davidson, P.R. Bosch, R. Dave, L.A. Meyer (eds). Cambridge University Press, Cambridge, United Kingdom and New York, NY, USA. 2007.
        Google Scholar
            <p style={{marginTop: "10px"}}>Research References</p>
            
            <a style={{marginRight: "10px"}} href="https://wsdot.wa.gov/publications/manuals/fulltext/M41-10/Division9.pdf">Link 1</a>
            <a style={{marginRight: "10px"}} href="https://www.sciencedirect.com/science/article/pii/S2352146516307104">Link 2</a>
            <a style={{marginRight: "10px"}} href="https://www.pca.state.mn.us/air/internal-combustion-engines-emission-calculations#:~:text=Efficiency%5D%20%C3%B7%20100)-,If%20the%20emission%20factor%20is%20in%20units%20of%20pounds%20per,100%20%E2%80%93%20Control%20Efficiency)%2F100">Link 3</a>

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
