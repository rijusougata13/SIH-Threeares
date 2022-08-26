import React from "react";
import { useState } from "react";
import SplitSection from "src/components/SplitSection";
import { Grid, styled, Paper, TextField, Select, MenuItem, FormControl, InputLabel, Button, ListItem, CssBaseline } from "@mui/material";
import "./VehicleGHG.css";
import axios from 'axios'
import ResponsiveAppBar from "src/components/ResponsiveAppBar";
const VehicleGHG = () => {

    const [engineSize, setEngineSize] = useState("");
    const [cylinders, setCylinders] = useState("");
    const [fuelConsumption, setFuelConsumption] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [res, setRes] = useState(0);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const handleResult = () => {
        axios.get(`https://vehicle-ghg.herokuapp.com/emission?esize=${engineSize}&cyd=${cylinders}&type=${fuelType}&cons=${fuelConsumption}`).then((response) => {
            setRes(parseInt(response.data))

            console.log('axios', response.data)

        })
    }

    return (
        <>
            <div className="appbar">
                <CssBaseline />
                <ResponsiveAppBar />
            </div>


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
                    description="This prototype is based on a kaggle dataset. We aim to predict the amount of carbon dioxide emitting from different cars using supervised learning techniques (specifically regression is used here). Regression is a widely used learning algorithm which helps in predicting continuous numerical outputs."
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
                    <TextField
                        className="textfield"
                        style={{
                            width: "100%",
                            paddingBottom: '10px'
                        }}
                        size="normal"
                        disabled={false}
                        id="outlined-basic"
                        label="Vehicle GHG Emission (g/km)" variant="outlined" value={res || 0}

                    />
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
                            <ListItem>
                                <FormControl fullWidth>
                                    <TextField fullwidth label="Engine size (L)" variant="outlined" value={engineSize}
                                        onChange={(e) => setEngineSize(e.target.value)}
                                    />
                                </FormControl>
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <ListItem>
                                <FormControl fullWidth>
                                    <TextField fullwidth label="Cyclinders" variant="outlined" value={cylinders}
                                        onChange={(e) => setCylinders(e.target.value)}
                                    />
                                </FormControl>
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <ListItem>
                                <FormControl fullWidth>
                                    <TextField fullwidth label="Fuel consumption (L/100km)" variant="outlined" value={fuelConsumption}
                                        onChange={(e) => setFuelConsumption(e.target.value)}
                                    />
                                </FormControl>
                            </ListItem>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <ListItem>
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
                            </ListItem>
                        </Grid>

                        <Button

                            className="btn"

                            style={{
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
                            }}
                            onClick={handleResult}
                        >Calculate</Button>
                    </Grid>



                </div>

            </div>
        </>
    )
}

export default VehicleGHG;