import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from '@mui/material'
import { Box } from '@mui/system'
import MUIDataTable from "mui-datatables";
import ResponsiveAppBar from 'src/components/ResponsiveAppBar';

import React, { useState } from 'react'
import './equipment.css'
import axios from 'axios'
// import lcaData2 from '../data/lca2_data'
import LcaSelect from './LcaSelect';
import SplitSection from 'src/components/SplitSection';

const Lca2 = () => {
    const [electricity, setElectricty] = useState(0)
    const [emission1, setEmission1] = useState()
    const [emission2, setEmission2] = useState()
    const [emission3, setEmission3] = useState()
    const [emission4, setEmission4] = useState()
    const [materialEmission, setMaterialEmission] = useState()
    const [generatorDiesel, setGeneratorDiesel] = useState()
    const [petrol, setPetrol] = useState()
    const [biomass, setBiomass] = useState()
    const [distance, setDistance] = useState()
    const [adt, setAdt] = useState()
    const [days, setDays] = useState()
    const [gas, setGas] = useState()
    const [biomassEmission, setBiomassEmission] = useState()
    const [totalCPE, setTotalCPE] = useState()
    const [operation, setOperation] = useState()
    var [activeGasTabId, setActiveGasTabId] = useState(0);

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

            <div className="appbar">
                <CssBaseline />
                <ResponsiveAppBar />
            </div>
            <div className="main-container">
                <SplitSection
                    heading="LCA Estimator Calculator"
                    description="The ThreeAres Material Estimator allows the user to generate emission reports that estimate the carbon dioxide emissions associated with materials used in highway constructions projects. Materials are classified according to MDOT's Standard Specifications for Construction's Division 9  material classifications. The tool estimates cradle to gate emissions and can be used to differentiate impacts of using composite materials that make up the roadway."
                    image="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1239.jpg"
                    routepath=""
                    height="90vh"
                    border="30px solid white"
                />
                <div className="main-content"
                    style={{
                        margin: "20px",
                        // border: "1px solid #008000"
                    }}
                >
                    <Paper elevation={0}
                    >






                        {/* <Grid container
                        className="form-grid"
                        xs={12} lg={6}
                        direction={"column"} spacing={5}
                        justifyContent="center"
                    > */}

                        <h1 style={{
                            margin: "10px"
                        }}>Construction Phase</h1>




                        <div style={{
                            border: "1px solid #008000",
                            margin: "20px",
                            padding: "20px",
                            textAlign: "center"
                        }}>


                            <Grid item xs={6} lg={12} style={{
                                textAlign: "center"
                            }}>

                                <h3 style={{
                                    width: "100%",
                                }}>On-Site Electricity and Fuel Usage</h3>


                            </Grid>
                            <Tabs
                                value={activeGasTabId}
                                onChange={(e, id) => {
                                    setActiveGasTabId(id)
                                }}
                                // indicatorColor="primary"
                                // textColor="primary"
                                centered

                            >
                                <Tab value={0} label="Electricity purchased from grid" />
                                <Tab value={1} label="Diesel used in generators" />
                                <Tab value={2} label="Petrol used" />

                            </Tabs>

                            {activeGasTabId === 0 && (
                                <React.Fragment>
                                    <Grid item xs={6} lg={12}>
                                        <TextField style={{
                                            margin: "20px",
                                            width: "300px"
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
                                    <Button className="calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center",
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
                                    }} variant="contained" onClick={() => setActiveGasTabId(prev => prev + 1)}>Next</Button>

                                </React.Fragment>
                            )}

                            {activeGasTabId === 1 && (
                                <React.Fragment><Grid item xs={6} lg={12}>
                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
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
                                    <Button className="calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center",
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
                                    }} variant="contained" onClick={() => setActiveGasTabId(prev => prev + 1)}>Next</Button>
                                </React.Fragment>)}

                            {activeGasTabId === 2 && (
                                <React.Fragment> <Grid item xs={6} lg={12}>
                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
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
                                    <Button className="calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center",
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
                                    }} variant="contained" onClick={() => {
                                        setActiveGasTabId(prev => -1)
                                        setGas(generatorDiesel * 2.6391 + electricity * 0.92 + petrol * 2.3035)
                                    }}>Calculate</Button>
                                </React.Fragment>)}

                            {activeGasTabId === -1 && (
                                <React.Fragment>
                                    <TextField style={{
                                        margin: "20px",
                                        width: "200px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={gas}
                                    />
                                </React.Fragment>
                            )}


                            {/* <Grid item xs={6}>
                                <Button className="calculate-btn" style={{
                                    width: "300px",
                                    textAlign: "center"
                                }} variant="contained" onClick={() => setGas(generatorDiesel * 2.6391 + electricity * 0.92 + petrol * 2.3035)}>Emissions</Button>


                            </Grid> */}


                        </div>
                        <div style={{
                            border: "1px solid #008000",
                            margin: "20px",
                            padding: "20px",
                            textAlign: "center"
                        }}>
                            <Grid item xs={12} style={{
                                textAlign: "center"
                            }}>

                                <h3 style={{
                                    margin: "10px"
                                }}> Embodied Carbon in Construction Materials</h3>

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
                                <Tab value={0} label="Subgrade/road bed" />
                                <Tab value={1} label="Sub base course" />
                                <Tab value={2} label="Base Course" />
                                <Tab value={3} label="Surface course" />
                            </Tabs>
                            {activeTabId === 0 && (
                                <React.Fragment>
                                    <LcaSelect
                                        label='Subgrade/road bed'
                                        emission={emission1}
                                        setEmission={setEmission1}
                                    />
                                    <Button className="next-btn calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center",
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
                                    <Button className="calculate-btn next-btn" style={{
                                        width: "300px",
                                        textAlign: "center",
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
                                    <Button className="calculate-btn next-btn" style={{
                                        width: "300px",
                                        textAlign: "center",
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
                                    <Button className="next-btn calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center",
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
                                        width: "300px",

                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={materialEmission}
                                    />
                                </React.Fragment>
                            )}





                        </div>





                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            border: "1px solid #008000",
                            margin: "20px",
                            padding: "20px",
                            textAlign: "center"
                        }}>
                            <div style={{
                                textAlign: "center"
                            }}><Grid item xs={12}>

                                    <h3 style={{
                                        margin: "10px"
                                    }}>Vegetation Removed</h3>

                                </Grid>

                                <Grid item xs={12} style={{
                                    textAlign: "center"
                                }}>
                                    <TextField style={{
                                        width: "100%",

                                    }} required id="outlined-basic" label="Biomass used as fuel wood" variant="outlined" value={biomass}
                                        onChange={(e) => {
                                            setBiomass(e.target.value)
                                        }} />
                                </Grid>

                                <Grid item xs={12} style={{
                                    width: "100%",
                                    textAlign: "center"
                                }}>
                                    <Button className="calculate-btn" style={{
                                        width: "300px",
                                        textAlign: "center",
                                        fontFamily: "montserrat",
                                        width: "300px",
                                        marginLeft: "0px",
                                        marginTop: "20px",
                                        marginBottom: "20px",
                                        background: "white",
                                        color: "#008000",
                                        boxShadow: "none",
                                        border: "1px solid #008000",
                                        borderRadius: "0px",
                                        transition: "0.4s ease",
                                        height: "50px"
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
                                        textAlign: "center",
                                        fontFamily: "montserrat",
                                        width: "300px",
                                        marginLeft: "0px",
                                        marginTop: "20px",
                                        marginBottom: "20px",
                                        background: "white",
                                        color: "#008000",
                                        boxShadow: "none",
                                        border: "1px solid #008000",
                                        borderRadius: "0px",
                                        transition: "0.4s ease",
                                        height: "55px"
                                    }} variant="contained" onClick={() => setTotalCPE(biomassEmission + materialEmission + gas)}>Total Emissions in Construction Phase</Button>

                                    <TextField style={{
                                        margin: "20px",
                                        width: "300px"
                                    }} disabled={true} id="outlined-basic" label="Emissions (kg CO2)" variant="outlined" value={totalCPE}
                                    />
                                </Grid></div>



                        </div>

















                        {/* </div> */}
                        <div className='main-content' style={{
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',

                        }}
                        >
                            <Grid item xs={12} lg={12}>

                                <h1 style={{
                                    marginTop: "30px"
                                }}>Operation Phase</h1>


                            </Grid>

                            <div style={{
                                border: "1px solid #008000",
                                margin: "20px",
                                padding: "20px",
                                textAlign: "center",

                            }}>
                                <Grid container
                                    className="form-grid"
                                    xs={12}
                                    direction={"column"} spacing={5}
                                    justifyContent="center"


                                >




                                    <Grid item xs={12}>
                                        <TextField style={{
                                            width: "500px"
                                        }} required id="outlined-basic" label="Length of road (in miles)" variant="outlined" value={distance}
                                            onChange={(e) => {
                                                setDistance(e.target.value)
                                            }} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField style={{
                                            width: "500px"
                                        }} required id="outlined-basic" label="Average Daily Traffic" variant="outlined" value={adt}
                                            onChange={(e) => {
                                                setAdt(e.target.value)
                                            }} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField style={{
                                            width: "500px"
                                        }} required id="outlined-basic" label="Days" variant="outlined" value={days}
                                            onChange={(e) => {
                                                setDays(e.target.value)
                                            }} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Button className="calculate-btn" style={{
                                            width: "300px",
                                            textAlign: "center",
                                            fontFamily: "montserrat",
                                            width: "300px",
                                            marginLeft: "0px",
                                            marginTop: "20px",
                                            marginBottom: "20px",
                                            background: "white",
                                            color: "#008000",
                                            boxShadow: "none",
                                            border: "1px solid #008000",
                                            borderRadius: "0px",
                                            transition: "0.4s ease",
                                            height: "55px"
                                        }} variant="contained" onClick={() => setOperation(176.45 * distance * adt / 1000)}>Total Emissions in Operation Phase</Button>

                                        <TextField style={{
                                            margin: "20px",
                                            width: "300px"
                                        }} disabled={true} id="outlined-basic" label="Emissions (MT CO2 emissions/year)" variant="outlined" value={operation}
                                        />
                                    </Grid>

                                </Grid>
                            </div>
                        </div>
                    </Paper>
                </div>


            </div>
            {/* </div > */}
        </>
    )
}

export default Lca2