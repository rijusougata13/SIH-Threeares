import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Tab, Tabs, Toolbar, Typography } from '@material-ui/core'
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import MUIDataTable from "mui-datatables";

import React, { useState } from 'react'
import './equipment.css'
import './lca2.css';
import axios from 'axios'
// import lcaData2 from '../data/lca2_data'
import LcaSelect from './LcaSelect';

const Lca2 = () => {


    const [electricity, setElectricty] = useState(0)
    const [emission1, setEmission1] = useState(0)
    const [emission2, setEmission2] = useState(0)
    const [emission3, setEmission3] = useState(0)
    const [emission4, setEmission4] = useState(0)
    const [materialEmission, setMaterialEmission] = useState(0)
    const [generatorDiesel, setGeneratorDiesel] = useState(0)
    const [petrol, setPetrol] = useState(0)
    const [biomass, setBiomass] = useState(0)
    const [distance, setDistance] = useState(0)
    const [adt, setAdt] = useState(0)
    const [days, setDays] = useState(0)
    const [gas, setGas] = useState(0)
    const [biomassEmission, setBiomassEmission] = useState(0)
    const [totalCPE, setTotalCPE] = useState(0)
    const [operation, setOperation] = useState(0)
    var [activeTabId, setActiveTabId] = useState(0);



    //const columns = ["Division", "Material Name", "Weight", "Emissions(MT of CO2)"];
    // const [data, setData] = useState([])


    // const handleChange = (event) => {
    //     //setWeight1(event.target.value); 
    //     //setWeight2(event.target.value);
    //     //setWeight3(event.target.value);
    //     //setWeight4(event.target.value);
    //     // setMaterial1(event.target.value);
    //     // setMaterial2(event.target.value);
    //     // setMaterial3(event.target.value);
    //     // setMaterial4(event.target.value);

    // };

    // const calculate = () => {
    //     setEmission1(0)

    // }

    // const addNew = (a) => {
    //     totalEmissions += a;
    // }

    // const addConstruction = (b) => {
    //     constructionPhase += b;
    // }

    // const addOperation = (c) => {
    //     operationPhase += c;
    //     // operation phase output is given in MT; 1 MT = 1000kg for calculating total emissions
    //     totalEmissions += (c * 1000);
    // }

    return (
        <>
            <div className='appbar'>
                <CssBaseline />
                <AppBar position="relative" color="default" >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            THREEARES
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div className='main-container'>
                <div className='title'>
                    <Typography variant="h5" gutterBottom>
                        Life Cycle Assessment
                    </Typography>
                </div>
                <div className='main-content'>
                    <Paper elevation={3} >
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >

                            <Grid container
                                className="form-grid"
                                xs={12} lg={6}
                                direction={"column"} spacing={5}
                                justifyContent="center">

                                <Grid item xs={12}>
                                    <Typography align="left" variant="h4" gutterBottom>
                                        Construction Phase
                                    </Typography>

                                </Grid>

                                <Grid item xs={12}>
                                    <Typography align="center" variant="h6" gutterBottom>
                                        On-Site Electricity and Fuel Usage
                                    </Typography>

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Units of electricity purchased from grid (in kWH)" variant="outlined"
                                        onChange={(e) => {
                                            setElectricty(e.target.value)
                                        }} />

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={electricity * 0.92}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Diesel used in generators (in litres)" variant="outlined"
                                        onChange={(e) => {
                                            setGeneratorDiesel(e.target.value)
                                        }} />

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={generatorDiesel * 2.6391}
                                    />
                                </Grid>


                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Petrol used (in litres)" variant="outlined"
                                        onChange={(e) => {
                                            setPetrol(e.target.value)
                                        }} />

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={petrol * 2.3035}
                                    />
                                </Grid>


                                <Grid item xs={12}>
                                    <Button className="calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center"
                                    }} variant="contained" onClick={() => setGas(generatorDiesel * 2.6391 + electricity * 0.92 + petrol * 2.3035)}>Emissions</Button>

                                    <TextField style={{
                                        margin: "20px",
                                        width: "200px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={gas}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography align="center" variant="h6" gutterBottom>
                                        Embodied Carbon in Construction Materials
                                    </Typography>

                                </Grid>
                                <Tabs
                                    value={activeTabId}
                                    onChange={(e, id) => {
                                        setActiveTabId(id)
                                    }}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                >
                                    <Tab label="Subgrade/road bed" />
                                    <Tab label="Sub base course" />
                                    <Tab label="Base Course" />
                                    <Tab label="Surface course" />
                                </Tabs>





                                {activeTabId === 0 && (
                                    <React.Fragment>
                                        <LcaSelect
                                            label='Subgrade/road bed'
                                            emission={emission1}
                                            setEmission={setEmission1}
                                        />
                                        <Button className="next-btn" style={{
                                            width: "300px",
                                            textAlign: "center"
                                        }} variant="contained"
                                            onClick={() => setActiveTabId(prev => prev + 1)}> Next</Button>
                                    </React.Fragment>
                                )}
                                {activeTabId === 1 && (
                                    <React.Fragment>
                                        <LcaSelect
                                            label='Sub base course'
                                            emission={emission2}
                                            setEmission={setEmission2}
                                        />
                                        <Button className="next-btn" style={{
                                            width: "300px",
                                            textAlign: "center"
                                        }} variant="contained"
                                            onClick={() => setActiveTabId(prev => prev + 1)}> Next</Button>
                                    </React.Fragment>
                                )}
                                {activeTabId === 2 && (
                                    <React.Fragment>
                                        <LcaSelect
                                            label='Base Course'
                                            emission={emission3}
                                            setEmission={setEmission3}
                                        />
                                        <Button className="next-btn" style={{
                                            width: "300px",
                                            textAlign: "center"
                                        }} variant="contained"
                                            onClick={() => setActiveTabId(prev => prev + 1)}> Next</Button>
                                    </React.Fragment>
                                )}
                                {activeTabId === 3 && (
                                    <React.Fragment>
                                        <LcaSelect
                                            label='Surface course'
                                            emission={emission4}
                                            setEmission={setEmission4}
                                        />
                                        <Button className="next-btn" style={{
                                            width: "300px",
                                            textAlign: "center"
                                        }} variant="contained"
                                            onClick={() => {
                                                setActiveTabId(prev => -1)
                                                setMaterialEmission(emission1 + emission2 + emission3 + emission4)
                                            }}> Calculate Total</Button>
                                    </React.Fragment>
                                )}
                                {activeTabId === -1 && (
                                    <React.Fragment>
                                        <TextField style={{
                                            margin: "20px",
                                            width: "300px"
                                        }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={materialEmission}
                                        />
                                    </React.Fragment>
                                )}





                                <Grid item xs={12}>
                                    <Typography align="center" variant="h6" gutterBottom>
                                        Vegetation Removed
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Biomass used as fuel wood" variant="outlined" value={biomass}
                                        onChange={(e) => {
                                            setBiomass(e.target.value)
                                        }} />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button className="calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center"
                                    }} variant="contained" onClick={() => setBiomassEmission(biomass * 1.8)}>Emissions</Button>

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={biomassEmission}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button className="calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center"
                                    }} variant="contained" onClick={() => setTotalCPE(biomassEmission + materialEmission + gas)}>Total Emissions in Construction Phase</Button>

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={totalCPE}
                                    />
                                </Grid>

                            </Grid>


                        </Box>
                    </Paper>
                </div>






                <div className='main-content'>
                    <Paper elevation={3}>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >

                            <Grid container
                                className="form-grid"
                                xs={12} lg={6}
                                direction={"column"} spacing={5}
                                justifyContent="center">


                                <Grid item xs={12}>
                                    <Typography align="left" variant="h4" gutterBottom>
                                        Operation Phase
                                    </Typography>

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Length of road (in miles)" variant="outlined" value={distance}
                                        onChange={(e) => {
                                            setDistance(e.target.value)
                                        }} />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Average Daily Traffic" variant="outlined" value={adt}
                                        onChange={(e) => {
                                            setAdt(e.target.value)
                                        }} />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField style={{
                                        width: "100%"
                                    }} required id="outlined-basic" label="Days" variant="outlined" value={days}
                                        onChange={(e) => {
                                            setDays(e.target.value)
                                        }} />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button className="calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center"
                                    }} variant="contained" onClick={() => setOperation(176.45 * distance * adt / 1000)}>Total Emissions in Operation Phase</Button>

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (MT CO2 emissions/year)" variant="outlined" value={operation}
                                    />
                                </Grid>

                            </Grid>


                        </Box>
                    </Paper>
                </div>

            </div>



        </>
    )
}

export default Lca2