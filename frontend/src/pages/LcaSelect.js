import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import lcaData2 from 'src/data/lca2_data'

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


            <Grid item xs={12}>
                <FormControl fullWidth>
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
            <Grid item xs={12}>
                <TextField style={{
                    width: "100%"
                }} required id="outlined-basic" label="Weight" variant="outlined" value={weight}
                    onChange={(e) => {
                        setWeight(e.target.value)
                    }} />
            </Grid>

            <Grid item xs={12}>
                <Button className="calculate-btn" style={{
                    width: "300px",
                    textAlign: "center"
                }} variant="contained" onClick={calcEmission} >Get Emissions</Button>

                <TextField style={{
                    margin: "20px",
                    width: "200px"
                }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={emission}
                />
            </Grid>
        </div>
    )
}

export default LcaSelect
