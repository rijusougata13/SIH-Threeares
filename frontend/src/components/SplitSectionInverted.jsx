import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SplitSectionInverted(props) {
  return (
    <Box sx={{ 
        width: '100%',
        height: props.height
        // marginTop: '40px'
        }}>
      <Grid style={{height: '100%'}} container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>

      <Grid item xs={12} sm={12} md={6} lg={6}>
          <Item style={{
            height: "100%", 
            backgroundImage: `url("${props.image}")`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "round",
            borderRadius: "0px",
            padding: '40px'
            }}>
            {/* <img src={props.image} style={{height: "300px"}}></img> */}
          </Item>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Item style={{
            height: "300px", 
            textAlign: "left", 
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            color: "black",
            borderRadius: "0px",
            height: '100%'
            }}>
            <h1 style={{fontSize: "3.5rem"}}>{props.heading}</h1>
            <p>{props.description}</p>
            <ul>
              <li>Facilitating a detailed environmental analysis of road projects</li>
              <li>Providing an authoritative basis for comparative analysis of various road‐building
techniques and materials</li>
              <li>Optimising road construction site supply schemes with respect to raw material
providers, choice of suppliers, delivery locations and material transport modes</li>
              <li>Enabling detailed estimation of GHG emissions specifically attributable to the road
construction industry</li>
            </ul>
            {props.routepath != null && <Button style={{
              width: "150px",
              marginTop: "20px",
              marginBottom: "20px"
            }}
            variant="contained">Calculate now</Button>}
          </Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}
