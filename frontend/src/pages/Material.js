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
import { Box } from "@mui/system";
import MUIDataTable from "mui-datatables";

import PieChart from "src/components/PieChart";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from "react";
import "./equipment.css";
import "./Material.css";
import axios from "axios";
import ResponsiveAppBar from "src/components/ResponsiveAppBar";
import SplitSection from "src/components/SplitSection";
import materialsList from '../data/mat2';

import materialDetails from "../data/material-updated";
import { ViewKanban } from "@mui/icons-material";

const Material = () => {
  const [equip, setEquip] = React.useState("");
  const [weight, setWeight] = useState("");
  const [chartDataEmission, setChartDataEmission] = useState([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [emission, setEmission] = useState(0);
  const [currentCategory,setCurrentCategory]=useState("");
  const [qualityElement,setQualityElement]=useState([]);
  const [qualityVal,setQualityVal]=useState(null);

  // const planPieChart=[];
  const [planPieChart,setPlanPieChart]=useState([]);

  useEffect(()=>{
    setPlanPieChart([]);
    compareListMaterial?.map((data,id)=> {
      var tot=0;
      data.map(val=>{
          tot+=val.value;
      })

      console.log("DIe",data);
      
      setPlanPieChart((prev) => [
        ...prev,
        { argument: `Plan ${id}`, value: tot },
      ]);

      // planPieChart.push(
      //   { argument: data.argument, value: data.value },
      // )

  })
  },[]);
  var bestPackage = null;
    var minCostEmission= 1000000000000;
  var compareListMaterial = [[]];

  compareListMaterial=JSON.parse(localStorage.getItem('compareListMaterial'));


  var emissions_rate = 0;
  const columns = [
    "Division",
    "Material Name",
    "Weight",
    "Emissions(MT of CO2)",
  ];
  const [data, setData] = useState([]);

  const options = {
    selectableRows: false,
    elevation: 0
  };

  const handleChange = (event) => {
    setEquip(event.target.value);
  };

  const handleChange2 = (e) =>{
    console.log("VALASD",e.target.value.simulation)
    setQualityVal(e.target.value);
  }
  const calculate = () => {
    setEmission(0);
    setChartDataEmission([]);
    {
      data.map((d) => {
        setEmission((prev) => d[3] + prev);
        console.log(d[5]);
        setChartDataEmission((prev) => [
          ...prev,
          { argument: d[1], value: d[3] },
        ]);
      });
    }
  };
  const addNew = ({ id }) => {
    // onClick={()=>{setCurrentCategory(item.DivId)}}
    setCurrentCategory(equip["DivId"]);
    setData((previous) => [
      ...previous,
      [
        equip["DivID"],

        equip["Material Description"],
        weight,
        weight * equip["Published Factor"],
      ],
    ]);
  };

  const addToCompareList = () =>{

    console.log("StringValue",data);
    
    var currentVal=[];
    
    {
        data.map((d) => {

            currentVal.push(                    {
                argument: d[1],value: d[3]
            }
            )
           
        });
    }

    if(!compareListMaterial)compareListMaterial=[[]]
    console.log("PREvious Value",compareListMaterial);
    compareListMaterial.push(currentVal);
    
    console.log("CurrentValue",currentVal);

    localStorage.setItem('compareListMaterial', JSON.stringify(compareListMaterial));

    window.location.reload();
    // setTimeout(()=>{
    // compareList=JSON.parse(localStorage.getItem('compareList'));

    // },1000);

}

const qualityAdd = ()=>{
  console.log("ADFUCK",parseInt(qualityVal['simulation']['Tensile Strength']))
  setQualityElement((prev) => [
    ...prev,
    { argument: `${qualityVal.name} Tensile Strength  = ${parseInt(qualityVal['simulation']['Tensile Strength'])}`, value:parseInt(qualityVal['simulation']['Tensile Strength'])},
  ]);
}
const clearCompareList = ()=>{
    localStorage.removeItem("compareListMaterial");
    window.location.reload();
}
console.log("MaterialDetails",materialDetails)
  return (
    <>
      <div className="appbar">
        <CssBaseline />
        <ResponsiveAppBar />
      </div>
      <div className="main-container">
        <SplitSection
          heading="Material GHG Estimator"
          description="The ThreeAres Material Estimator allows the user to generate emission reports that estimate the carbon dioxide emissions associated with materials used in highway constructions projects. Materials are classified according to MDOT's Standard Specifications for Construction's Division 9  material classifications. The tool estimates cradle to gate emissions and can be used to differentiate impacts of using composite materials that make up the roadway."
          image="https://static.wixstatic.com/media/0ceaae_698bea7b05b54506af9171dbaa1e360c~mv2.gif"
          routepath="#calculator-div"
          height="90vh"
          border="30px solid white"
        />
        <div className="main-content" id="calculator-div"
          style={{
            margin: "20px",
            // border: "1px solid #008000",
            borderRadius: "20px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            marginTop: "40px"
          }}
        >
          <Paper elevation={0}

          sx={{
            borderRadius: "20px !important"
          }}
          >
            <Box
              display="flex"
              flexDirection={matches ? 'row' : 'column'}
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
                      Materials
                    </InputLabel>
                    <Select
                      labelId="Materials"
                      id="demo-simple-select"
                      value={equip}
                      label="Material"
                      onChange={handleChange}

                      sx={{
                        // maxWidth: "60vw",
                        overflow: "hidden",
                        marginTop: "20px"
                      }}
                    >
                      {/* {
                        materialDetails.filter((item)=>{

                        })
                      } */}
                      {materialDetails.map((item) => {
                        if(item.DivId == currentCategory || currentCategory == "")
                        return(
                        <MenuItem value={item} >
                          {item["Material Description"]}
                        </MenuItem>
                      )})}
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

                    }}
                    autoComplete='off'


                    size="normal"
                    required
                    id="outlined-basic"
                    label="Weight"
                    variant="outlined"
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value);
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
                    margin: "0px"
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
                    Add Aggregates
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
                    Calculate Emission
                  </Button>
                  <Button  style={{
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
                                        onClick={addToCompareList}
                                        >Compare Plans</Button>
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
                                        }}
                                        onClick={clearCompareList}
                                        > Clear Comparison</Button>
                </div>
              </Grid>

              {/* test */}
              <Grid
                container
                className="form-grid"
                xs={12}
                sm={12}
                lg={6}
                // direction={"column"}
                // spacing={5}
                justifyContent="center"

              >
                <Grid item xs={12} sm={12} lg={6}

                >
                  <TextField
                    className="textfield"
                    style={{
                      // margin: "20px",
                      width: "100%",
                    }}

                    id="outlined-basic"
                    label="Emissions (MT of CO2)"
                    variant="outlined"
                    value={emission}
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
          // border: "1px solid #008000",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "20px"
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
            // border: "1px solid #008000",
            padding: "10px !important",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            
          }}>
            <div style={{


              padding: "10px",
              // border: "1px solid #008000",
              
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
       {
            compareListMaterial?.length > 0 && (  <div style={{
              margin: "20px",
              background: "white",
              padding: "20px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              borderRadius: "20px",
              marginBottom: "40px"
            }}>
                <h3><b>Compare List</b></h3><br />
                <div id="compareList"
                //  style={{display: 'flex',flexDirection:'row',justifyContent:"space-between"}}
                  style={{
                    
                  }}
                  >
                    {
                        compareListMaterial?.map((data,id)=> {
                            var tot=0;
                            data.map(val=>{
                                tot+=val.value;
                            })
                            
                            // setPlanPieChart((prev) => [
                            //   ...prev,
                            //   { argument: data.argument, value: data.value },
                            // ]);

                            // planPieChart.push(
                            //   { argument: data.argument, value: data.value },
                            // )

                            if(  data.length>0 && tot<minCostEmission){
                                minCostEmission=tot;
                                bestPackage=(id);
                            }
                            return data.length>0 &&  <div style={{
                                // background: "blue",
                                // padding: "10px",
                                border: "1px solid #008000",
                            }}>
                                <PieChart
                                    data={data}
                                    label={`Plan ${id}`}
                                />
                                {

                                    <p style = {{
                                      margin: "10px"
                                    }}>Total emissions for plan {id}: {tot}</p>
                                }
                            </div>
                        })

                    }
                </div>
               {bestPackage && ( <PieChart
                                    data={planPieChart}
                                    label={`Plan Optimization Metrics`}
                                />)}
               {bestPackage && ( <p style = {{
                width: "100%",
                textAlign: "center",
                paddingBottom: "10px"
               }}><b>Best Plan to use is :  Plan {bestPackage}</b></p>)}

            </div>
            )
        } 
        <div 

        className="hideinmobile"
        style={{
                margin: "20px",
                background: "white !important",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"

            }}>
              <h3>Quality Checker Material</h3>
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
                    <Grid item xs={12} lg={12}>
                        {/* <Item> */}
                            <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                      Materials
                    </InputLabel>
                    <Select
                      labelId="Materials"
                      // id="demo-simple-select"
                      value={qualityVal?.name}
                      label="Material"
                      onChange={handleChange2}

                      sx={{
                        maxWidth: "99%",
                        overflow: "hidden",
                        marginTop: "20px"
                      }}
                    >
                      {/* {
                        materialDetails.filter((item)=>{

                        })
                      } */}
                      {materialsList.map((item) => {
                        return(
                        <MenuItem value={item} key={item.matid} >
                          {item["name"]}
                        </MenuItem>
                      )})}
                      {/* <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                            </FormControl>
                        {/* </Item> */}
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
                    onClick={e=>qualityAdd()}
                    >Calculate</Button>
                    {qualityElement.length>0  && 

                     <PieChart
                                        data={qualityElement}
                                        // label={`Quality Checker Material`}
                                    />}
                </Grid>



            </div>
    </>
  );
};

export default Material;
