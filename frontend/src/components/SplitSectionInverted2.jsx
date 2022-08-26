import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import './SplitSection.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SplitSection(props) {
  return (
    <Box sx={{ 
        width: '100%',
        minHeight: props.height,
        // maxHeight: '100vh'

        // marginTop: '40px'
        }}>
      <Grid style={{height: 'auto'}} container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>

      <Grid item 
        sx={{ display: { xs: 'block', lg: 'block', xl: 'block', md: 'block' } }}
        xs={12} sm={12} md={6} lg={6}>
          <Item style={{
            height: props.height, 
            // maxHeight: props.height,
            // backgroundImage: `url("${props.image}")`,
            // backgroundSize: "100% 100%",
            // backgroundRepeat: "round",
            // border: props.border,
            border: "0px",
            margin: "0px",
            borderRadius: "0px",
            padding: props.imagePadding,

            display: "flex",
            alignItems: "center",
            justifyContent: "center"
            }}>

            {props.videourl && <iframe width="100%" height="100%" src={props.videourl} title="YouTube video player" frameborder="0" allow="muted; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen muted autoplay></iframe>}
            {!props.videourl && <img src={props.image} style={{
              height: props.imageHeight, 
              width: props.imageWidth,
              margin: "0px"
            }}></img>}
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
            borderRadius: "0px",
            height: '100%'
            }}>
            <h1 style={{fontSize: "3.5rem"}}>{props.heading}</h1>
            {props.description != "none" && <p style={{
                 color: "#555555",
                 fontWeight: "bolder",
            }}>{props.description}</p>}

            {props.description == "none" && <ul style={{
              color: "#555555",
              fontWeight: "bolder",
              
            }}>
              <li style = {{color: "#555555", fontFamily: "Montserrat"}}>Facilitating a detailed environmental analysis of road projects</li>
              <li style = {{color: "#555555", fontFamily: "Montserrat"}}>Providing an authoritative basis for comparative analysis of various road‐building
techniques and materials</li>
              <li style = {{color: "#555555", fontFamily: "Montserrat"}}>Optimising road construction site supply schemes with respect to raw material
providers, choice of suppliers, delivery locations and material transport modes</li>
              <li style = {{color: "#555555", fontFamily: "Montserrat"}}>Enabling detailed estimation of GHG emissions specifically attributable to the road
construction industry</li>
            </ul>}
            {props.routepath != null && <Button href="#calculate-btn" id="calculate-btn" style={{
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
        
      </Grid>
    </Box>
  );
}
