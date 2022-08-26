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
  Modal
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
import LocModal from './LocModal'
import React, { useEffect, useState } from "react";
import "./equipment.css";
import "./Material.css";
import ResponsiveAppBar from "src/components/ResponsiveAppBar";
import SplitSection from "src/components/SplitSection";
import haversine from "haversine";
import transportDetails from "../data/transport_estimator";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MapPicker from 'react-google-map-picker';

const DefaultLocation = { lat: 22.7196, lng: 75.8577 };
const DefaultZoom = 10;

const Transport = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [origin, setOrigin] = useState('')
  const [dest, setDest] = useState('')
  const [mass, setMass] = useState('')
  const [gco2, setGco2] = React.useState('');
  const [type, setType] = useState(null)
  const [data, setData] = useState([])
  const [O, setO] = useState({
    latitude: 22.7196, longitude: 75.8577
  })
  const [D, setD] = useState({
    latitude: 22.5726, longitude: 88.3639
  })
  const [st, setSt] = useState(null)

  var emissions_rate = 0
  const columns = ["Origin", "Destination", "Mass", "Type", "Distance", "Emission"];
  const options = {
    selectableRows: false
  };
  const [transportDataEmission, setTransportDataEmission] = useState([]);



  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [location, setLocation] = useState({
    lat: '',
    lng: '',
  });
  const [zoom, setZoom] = useState(DefaultZoom);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '400px',
    width: '500px',
    maxWidth: '80vw',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,

  };


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleChange = (event) => {
    console.log(event.target.value)
    setType(event.target.value['type'] + "," + event.target.value['engineConfig'] + "," + event.target.value['subtype'])
    setGco2(event.target.value['gCO2/t-km']);
  };
  const addNew = (d) => {
    // console.log(res)
    setData(previous => [
      ...previous, [
        O.latitude + ", " + O.longitude,
        D.latitude + ", " + D.longitude,
        mass,
        type,
        d.toFixed(4),
        (d * mass * gco2 * 0.001).toFixed(4),

      ]
    ])
  };

  const calculate = async () => {
    // setDist(null)
    // const request = {
    //   method: "GET",

    //   headers: {
    //     'no-cors': true,
    //     'Access-Control-Allow-Origin': '*',
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // };
    // if (value === 'ROAD')
    //   emissions_rate = 1.65
    // else if (value === 'RAIL')
    //   emissions_rate = .0157
    // else if (value === 'AIR')
    //   emissions_rate = 1.404

    // await axios.get(`https://distanceto.herokuapp.com/distance?pin1=${origin}&pin2=${dest}`).then((response) => {
    //   // setDist(parseInt(response.data))
    //   // 
    //   // console.log('axios', response.data)
    //   // setRes((parseInt(response.data) * emissions_rate * mass))
    //   addNew((response.data))
    // })

    // console.log(O, D)
    addNew(haversine(O, D))

    // setTransportDataEmission([]);

    // setTransportDataEmission(prev => [
    //   ...prev, {
    //     argument: `Road`, value: 1.65 * mass * haversine(O, D)
    //   }
    // ])

    // setTransportDataEmission(prev => [
    //   ...prev, {
    //     argument: `Rail`, value: 0.0157 * mass * haversine(O, D)
    //   }
    // ])

    // setTransportDataEmission(prev => [
    //   ...prev, {
    //     argument: `Air`, value: 1.404 * mass * haversine(O, D)
    //   }
    // ])


    setTransportDataEmission([])




    setTransportDataEmission(prev => [
      ...prev, {
        argument: `Rigid (4X2Axle) 4UD`, value: 307.2 * mass * haversine(O, D)
      }
    ])

    setTransportDataEmission(prev => [
      ...prev, {
        argument: `Rigid (4X2Axle) 4RD`, value: 197.2 * mass * haversine(O, D)
      }
    ])

    setTransportDataEmission(prev => [
      ...prev, {
        argument: `Tractor (4X2Axle)`, value: 84 * mass * haversine(O, D)
      }
    ])

    setTransportDataEmission(prev => [
      ...prev, {
        argument: `Tractor (6X2Axle)`, value: 58.3 * mass * haversine(O, D)
      }
    ])

    // transportDetails.map(item => {
    //   setTransportDataEmission(prev => [
    //     ...prev, {
    //       argument: `${item.type},${item.engineConfig}`, value: item["gCO2/t-km"] * mass * haversine(O, D)
    //     }
    //   ])
    // })




  }

  //  function handleChangeLocation (lat, lng, state){
  //   if (state === "origin")
  //   setOrigin({lat:lat, lng:lng})

  //   else
  //   setDest({lat:lat, lng:lng})
  // }

  // function handleChangeZoom (newZoom){
  //   setZoom(newZoom);
  // }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }

  return (
    <>
      <LocModal
        open={open}
        setOpen={setOpen}
        st={st}
        // lat={lat}
        // lng={lng}
        setO={setO}
        setD={setD}

      />
      <div className="appbar">
        <CssBaseline />
        <ResponsiveAppBar />
      </div>
      <div className="main-container">
        <SplitSection
          style={{
            overflowWrap: 'normal'
          }}
          heading="Route Emission Optimizer"
          description="Transport heralds the development of a region. The demand for infrastructure augmentation increases with the region’s pursuit of development goals. The basic infrastructures required for the region’s economic growth are roads, railways, water and air connectivity. With the increase in economic activities, the dependence of fossil fuel based energy sources and consequent green house gas (GHG) emissions have increased rapidly in recent times. The transport sector in India consumes about 16.9% (36.5 mtoe: million tonnes of oil equivalent) of total energy (217 mtoe in 2005-06). "
          image="https://cdn.kibrispdr.org/data/1789/map-gif-16.gif"
          routepath=""
          height="90vh"
          border="30px solid white"
        />
        <div className="main-content"
          style={{
            margin: "20px",
            // border: "1px solid #008000",
            borderRadius: "20px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Paper elevation={0}
          >
            <Box
              display="flex"
              flexDirection={matches ? 'row' : 'column'}
              justifyContent="center"
              alignItems="center"
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
                  onClick={handleOpen}>Choose Origin</Button> */}
                  <TextField
                    className="textfield"
                    style={{
                      width: "100%",
                      paddingBottom: '10px'
                    }}
                    size="normal"
                    required
                    id="outlined-basic"
                    // disabled={true}
                    label="Origin" variant="outlined" value={O.latitude + ", " + O.longitude}
                    onClick={() => {
                      setSt('O')
                      handleOpen()
                    }}
                  // onChange={(e) => {
                  //   setOrigin(e.target.value)
                  // }}
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
                    label="Destination" variant="outlined" value={D.latitude + ", " + D.longitude} onClick={() => {
                      setSt('D')
                      handleOpen()
                    }} />
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
                  {/* <FormControl
                    display={'flex'}
                    flexDirection={matches ? 'column' : 'row'}
                    style={{

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
                  </FormControl> */}
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Transport Type
                    </InputLabel>
                    <Select
                      labelId="TransportType"
                      id="demo-simple-select"
                      // value={}
                      label="Type"
                      onChange={handleChange}

                      sx={{
                        // maxWidth: "60vw",
                        overflow: "hidden"
                      }}
                    >
                      {transportDetails.map((item) => (
                        <MenuItem value={item}>
                          {item.engineConfig + ", " + item.type + ", " + item.subtype}
                        </MenuItem>
                      ))}
                      {/* <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
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
          // border: "1px solid #008000",
          borderRadius: "20px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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

      {/* {
        console.log("Piechart",transportDataEmission)
      } */}
      {transportDataEmission.length > 0 && <div
        style={{
          margin: "20px",
          // border: "1px solid #008000",
          borderRadius: "20px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          padding: "10px !important"
        }}
      >
        <PieChart
          data={transportDataEmission}
          label={`Plan Optimization Metric`}
        />
      </div>
      }

      {/* <iframe src="https://maps.google.com/maps?&hl=en&q=dermatologist&t=&z=13&ie=UTF8"></iframe> */}

      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
          
            <MapPicker id="modal-modal-description" defaultLocation={defaultLocation}
            zoom={zoom}
            mapTypeId="roadmap"
            style={style}
            onChangeLocation={() => {
              
              handleChangeLocation()
            }} 
            onChangeZoom={handleChangeZoom}
            apiKey=''/>

      </Modal> */}


      <div style={{
        height: "20px"
      }}>
        {/* <button onClick={handleResetLocation}>Reset Location</button>
    <label>Latitute:</label><input type='text' value={location.lat} disabled/>
    <label>Longitute:</label><input type='text' value={location.lng} disabled/>
    <label>Zoom:</label><input type='text' value={zoom} disabled/> */}


      </div>
    </>
  );
};

export default Transport;
