import { FormControl, Button, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
// import { Button } from '@mui/material'

import React, { useState } from 'react'
import lcaData2 from 'src/data/lca2_data'
import "./lca2.css";

const LcaSelect = ({ label, emission, setEmission }) => {
    const [material, setMaterial] = useState('')
    const [weight, setWeight] = useState()
    const handleChange = (e) => {
        setMaterial(e.target.value)
    }
    const calcEmission = () => {
        setEmission(material['Published Factor'] * weight)
        // console.log(material, weight)
    }
    return (
        <div>
            <Grid item xs={12}>
                <Typography variant="h7" gutterBottom>
                    {label}
                </Typography>

            </Grid>


            <Grid item xs={12} lg={12}>
                <FormControl style={{ width: "300px", margin: "20px" }}>
                    <InputLabel id="demo-simple-select-label">Material Used</InputLabel>
                    <Select
                        labelId="Materials"
                        id="demo-simple-select"
                        value={material}
                        label="Material"
                        onChange={handleChange}
                    >
                        {lcaData2.map((item) => (
                            <MenuItem value={item}>{item['Material Description']}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </Grid>
            <Grid item xs={6} lg={12}>
                <TextField autoComplete='off' style={{
                    // margin: "20px",

                    width: "300px"
                }} required id="outlined-basic" label="Weight" variant="standard" value={weight}
                    onChange={(e) => {
                        setWeight(e.target.value)
                    }} />
            </Grid>

            <Grid item xs={12} lg={12}>
                <Button className="next-btn calculate-btn" id="calculate-btn" style={{
                    width: "300px",
                    textAlign: "center",
                    fontFamily: "montserrat",
                    width: "300px",
                    padding: "15px",
                    marginLeft: "0px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    background: "white",
                    color: "#008000",
                    boxShadow: "none",
                    border: "1px solid #008000",
                    borderRadius: "0px",
                    transition: "0.4s ease"
                }} variant="contained" onClick={calcEmission} >Get Emissions</Button>

                <TextField style={{
                    margin: "20px",
                    width: "300px"

                }} disabled={true} autoComplete='off' id="outlined-basic" label="Emissions (kg CO2)" variant="standard" value={emission}
                />
            </Grid>
        </div>
    )
}

export default LcaSelect
