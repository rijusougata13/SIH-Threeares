import React from "react";
import { useState } from "react";
import SplitSection from "src/components/SplitSection";
import { Grid, styled, Paper, TextField, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import "./VehicleGHG.css";


const VehicleGHG = () => {

    const [fuelType, setFuelType] = useState("");

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return ( 
        <div className="VehicleGHG"
        style={{
            background: "white !important",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}
        >
            
            <SplitSection
            heading="Vehicle GHG Predictor"
            description="The main objectives of the THREEARES project are to achieve tangible, long‐term benefits for
            the global environment and to contribute proactively to the shaping of dynamic sustainable
            road development policies going forward."
            image="https://cdn.dribbble.com/users/2065768/screenshots/4438259/whatwedo---dribbble.gif"
            height="400px"
            imageHeight="100%"
            imageWidth="100%"
            imagePadding="0px"
            />

            <div style={{
                margin: "20px",
                background: "white !important",
               
            }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}

           

            sx={{
                margin: "20px",
                background: "white !important",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
            >
            <Grid item xs={12} lg={6}>
                <Item>
                    <FormControl fullWidth>
                    <TextField fullwidth id="outlined-basic" label="Engine size (L)" variant="outlined" />
                    </FormControl>
                </Item>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Item>
                <FormControl fullWidth>
                <TextField fullwidth id="outlined-basic" label="Cyclinders" variant="outlined" />
                </FormControl>
                </Item>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Item>
                <FormControl fullWidth>
                <TextField fullwidth id="outlined-basic" label="Fuel consumption (L/100km)" variant="outlined" />
                </FormControl>
                </Item>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Item>
                <FormControl fullWidth>
                <InputLabel fullwidth id="demo-simple-select-label">Fuel type</InputLabel>
                <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={fuelType}
                    label="Fuel type"
                    onChange={(e) => {
                        setFuelType(e.target.value);
                    }}
                >
                    <MenuItem value={"1,0,0"}>Regular gasoline</MenuItem>
                    <MenuItem value={"0,1,0"}>Premium gasoline</MenuItem>
                    <MenuItem value={"0,0,1"}>Ethanol (E85)</MenuItem>
                </Select>
                </FormControl>
                </Item>
            </Grid>

            <Button style={{
                fontFamily: "montserrat",
                width: "250px",
                marginLeft: "0px",
                marginTop: "20px",
                marginBottom: "20px",
                background: "white",
                color: "#008000",
                boxShadow: "none",
                border: "1px solid #008000",
                borderRadius: "0px",
                transition: "0.4s ease",
            }}>Calculate</Button>
            </Grid>

            

            </div>

        </div>
    )
}

export default VehicleGHG;