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
} from "@mui/material";
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
import { Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import './transport.css'
import axios from 'axios'
import PieChart from "src/components/PieChart";

import React, { useState } from "react";
import "./equipment.css";
import "./Material.css";
import ResponsiveAppBar from "src/components/ResponsiveAppBar";
import SplitSection from "src/components/SplitSection";

import materialDetails from "../data/material_estimator";

const Material = () => {
  const [origin, setOrigin] = useState('')
  const [dest, setDest] = useState('')
  const [mass, setMass] = useState('')
  const [value, setValue] = React.useState('ROAD');
  const [dist, setDist] = useState(0)
  const [data, setData] = useState([])

  const [res, setRes] = useState(0)
  var emissions_rate = 0
  const columns = ["Origin", "Destination", "Mass", "Means", "Distance", "Emission"];
  const options = {
    selectableRows: false
  };
  const handleChange = (event) => {

    setValue(event.target.value);
  };
  const addNew = (d) => {
    // console.log(res)
    setData(previous => [
      ...previous, [
        origin,
        dest,
        mass,
        value,
        d,
        d * mass * emissions_rate,

      ]
    ])
  };

  const calculate = async () => {
    setDist(null)
    const request = {
      method: "GET",

      headers: {
        'no-cors': true,
        'Access-Control-Allow-Origin': '*',
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    if (value === 'ROAD')
      emissions_rate = 1.65
    else if (value === 'RAIL')
      emissions_rate = .0157
    else if (value === 'AIR')
      emissions_rate = 1.404

    await axios.get(`https://distanceto.herokuapp.com/distance?pin1=${origin}&pin2=${dest}`).then((response) => {
      // setDist(parseInt(response.data))
      // 
      // console.log('axios', response.data)
      // setRes((parseInt(response.data) * emissions_rate * mass))
      addNew((response.data))
    })


  }

  return (
    <>
      <div className="appbar">
        <CssBaseline />
        <ResponsiveAppBar />
      </div>
      <div className="main-container">
        <SplitSection
          heading="Transportation Estimator Calculator"
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
                  <TextField
                    className="textfield"
                    style={{
                      width: "100%",
                      paddingBottom: '10px'
                    }}
                    size="normal"
                    required
                    id="outlined-basic"
                    label="Origin" variant="outlined" value={origin}
                    onChange={(e) => {
                      setOrigin(e.target.value)
                    }}
                  />
                  <TextField
                    className="textfield"
                    style={{
                      width: "100%",
                      paddingBottom: '10px'
                    }}
                    size="normal"
                    required
                    id="outlined-basic"
                    label="Destination" variant="outlined" value={dest} onChange={(e) => {
                      setDest(e.target.value)
                    }}
                  />
                  <TextField
                    className="textfield"
                    style={{
                      width: "100%",
                      paddingBottom: '10px'
                    }}
                    size="normal"
                    required
                    id="outlined-basic"
                    label="Cargo Mass" variant="outlined" value={mass} onChange={(e) => {
                      setMass(e.target.value)
                    }}
                  />
                  <FormControl style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <FormLabel id="demo-radio-buttons-group-label">Means &nbsp; &nbsp;</FormLabel>
                    <RadioGroup
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                      aria-labelledby="demo-radio-buttons-group-label"
                      // defaultValue="female"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="RAIL" control={<Radio />} label="Rail" />
                      <FormControlLabel value="ROAD" control={<Radio />} label="Road" />
                      <FormControlLabel value="AIR" control={<Radio />} label="Air" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
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
                  onClick={calculate}>ADD New Emission</Button>

                {/* <Button
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
                </Button> */}
              </div>


              {/* test */}
              {/* <Grid
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
                </Grid>
              </Grid> */}
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

            title={"Transport Emission List"}
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

      {/* {chartDataEmission.length > 0 && (
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

      )} */}
    </>
  );
};

export default Material;
