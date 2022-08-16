import {
    AppBar,
    Checkbox,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Toolbar,
    Typography,
} from "@material-ui/core";
import {
    TextField,
    Button,
    FormControlLabel,
    RadioGroup,
    FormLabel,
    FormControl,
    Radio,
    CssBaseline,
} from "@mui/material";
import { Box } from "@mui/system";
import MUIDataTable from "mui-datatables";

import PieChart from "src/components/PieChart";

import React, { useState } from "react";
import "./equipment.css";
import "./Material.css";
import axios from "axios";
import ResponsiveAppBar from "src/components/ResponsiveAppBar";
import SplitSection from "src/components/SplitSection";
import equipmentDetails from "../data/equiment_estimator";

// import materialDetails from "../data/material_estimator";

const Equipment = () => {
    const [equip, setEquip] = React.useState("");
    const [no, setNo] = useState("");
    const [hours, setHours] = useState("");
    const [emission, setEmission] = useState(0);
    const [gallons, setGallons] = useState(0);
    const [chartDataEmission, setChartDataEmission] = useState([]);
    const [chartDataFuel, setChartDataFuel] = useState([]);
    const [data, setData] = useState([]);
    var emissions_rate = 0;
    const columns = [
        "Division",
        "Fuel Rate(Gal/hr)",
        "Equipment Name",
        "Numbers Used",
        "Hours",
        "Emissions(MT of CO2)",
        "Fuel Used(Gallons)",
    ];

    const options = {
        selectableRows: false,
        elevation: 0
    };

    const handleChange = (event) => {
        setEquip(event.target.value);
    };
    const calculate = () => {
        setEmission(0);
        setChartDataEmission([]);
        setChartDataFuel([]);
        setGallons(0);
        {
            data.map((d) => {
                setEmission((prev) => d[5] + prev);

                setChartDataEmission((prev) => [
                    ...prev,
                    { argument: d[2], value: d[5] },
                ]);

                setChartDataFuel((prev) => [...prev, { argument: d[2], value: d[6] }]);

                setGallons((prev) => d[6] + prev);
            });
        }
    };
    const addNew = ({ id }) => {
        setData((previous) => [
            ...previous,
            [
                equip["Equip Type ID"],
                equip["Fuel Rate (Gal/hr)"],
                equip["Equipment"],
                no,
                hours,
                (no * hours * equip["EmissionRate/hr"]) / 1000,
                no * hours * equip["Fuel Rate (Gal/hr)"],
            ],
        ]);
    };


    return (
        <>
            <div className="appbar">
                <CssBaseline />
                <ResponsiveAppBar />
            </div>
            <div className="main-container">
                <SplitSection
                    heading="Equipment GHG Estimator"
                    description="The ThreeAres Material Estimator allows the user to generate emission reports that estimate the carbon dioxide emissions associated with materials used in highway constructions projects. Materials are classified according to MDOT's Standard Specifications for Construction's Division 9  material classifications. The tool estimates cradle to gate emissions and can be used to differentiate impacts of using composite materials that make up the roadway."
                    image="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1239.jpg"
                    routepath=""
                    height="90vh"
                    border="30px solid white"
                />
                <div className="main-content"
                    style={{
                        margin: "20px",
                        border: "1px solid #008000"
                    }}
                >
                    <Paper elevation={0}
                    >
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        // minHeight="100vh"
                        >
                            <Grid
                                container
                                className="form-grid"
                                xs={12}
                                lg={6}
                                direction={"column"}
                                spacing={5}
                                justifyContent="center"
                            >
                                <Grid item xs={12}>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Equipment
                                        </InputLabel>
                                        <Select
                                            labelId="Equipment"
                                            id="demo-simple-select"
                                            value={equip}
                                            label="Equipment"
                                            onChange={handleChange}
                                        >
                                            {equipmentDetails.map((item) => (
                                                <MenuItem value={item}>{item["Equipment"]}</MenuItem>
                                            ))}
                                            {/* <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem> */}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        className="textfield"
                                        style={{
                                            width: "100%",
                                            paddingBottom: '10px'
                                        }}
                                        size="normal"
                                        required
                                        id="outlined-basic"
                                        label="Number Used"
                                        variant="outlined"
                                        value={no}
                                        onChange={(e) => {
                                            setNo(e.target.value);
                                        }}
                                    />
                                    <TextField
                                        className="textfield"
                                        style={{
                                            width: "100%",
                                        }}
                                        size="normal"
                                        required
                                        id="outlined-basic"
                                        label="Hours"
                                        variant="outlined"
                                        value={hours}
                                        onChange={(e) => {
                                            setHours(e.target.value);
                                        }}
                                    />
                                </Grid>

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%",
                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Button
                                        id="calculate-btn"
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
                                        onClick={addNew}
                                    >
                                        ADD New Emission
                                    </Button>

                                    <Button
                                        id="calculate-btn"
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
                                        onClick={calculate}
                                    >
                                        Calculate
                                    </Button>
                                </div>
                            </Grid>

                            {/* test */}
                            <Grid
                                container
                                className="form-grid"
                                xs={12}
                                lg={6}
                                direction={"column"}
                                spacing={5}
                                justifyContent="center"

                            >
                                <Grid item xs={12}

                                >
                                    <TextField
                                        className="textfield"
                                        style={{
                                            margin: "20px",
                                            width: "300px",
                                        }}

                                        id="outlined-basic"
                                        label="Emissions"
                                        variant="outlined"
                                        value={emission}
                                    />
                                    <TextField
                                        className="textfield"
                                        style={{
                                            margin: "20px",
                                            width: "300px",
                                        }}

                                        id="outlined-basic"
                                        label="Gallons"
                                        variant="outlined"
                                        value={gallons}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            background: "white",
                        }}
                    >

                    </div>
                </div>
            </div>

            <div style={{
                margin: "20px"
            }}>
                <div style={{
                    border: "1px solid #008000"
                }}>

                    <MUIDataTable

                        title={"Emission List"}

                        data={data}
                        columns={columns}
                        options={options}

                        style={{
                            fontFamily: "Montserrat !important",
                            marginTop: "10px"
                        }}
                    />

                </div>
            </div>

            <div className="whitespace" style={{
                height: "20px"
            }}></div>

            {chartDataEmission.length > 0 && (
                <>
                    <div style={{
                        margin: "20px",
                    }}>
                        <div style={{
                            // background: "blue",
                            padding: "10px",
                            border: "1px solid #008000",
                        }}>
                            <PieChart
                                data={chartDataEmission}
                                label="Emission Rate PieChart"
                            />
                        </div>
                    </div>

                    <div className="whitespace" style={{
                        height: "20px"
                    }}></div>
                </>

            )}
        </>
    );
};

export default Equipment;
