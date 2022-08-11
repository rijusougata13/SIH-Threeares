import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

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
        width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
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
            borderRadius: "0px"
            }}>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Item style={{
            height: "300px", 
            backgroundImage: `url("${props.image}")`,
            backgroundSize: "300px 300px",
            borderRadius: "0px"
            }}>
            {/* <img src={props.image} style={{height: "300px"}}></img> */}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
