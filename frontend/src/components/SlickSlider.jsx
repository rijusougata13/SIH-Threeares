import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import SplitSection from 'src/components/SplitSection';


function Item(props)
{
    return (
        <Paper style={{
            backgroundColor: "#f2f2f2",
            // padding: "30px"
        }}>
            <SplitSection 
            heading={props.item.name}
            description={props.item.description}
            image={props.item.source}
   
            height="500px"
            border="30px solid white"
            imageHeight="400px"
            imageWidth="400px"
            imagePadding="40px"
            />

        </Paper>
    )
}

const SlickSlider = () => {

    var items = [
        {
            name: "GHG Calculator",
            description: "The newest technology for calculation of quantum of CO2 emission during highway construction.",
            source: "https://threeares.netlify.app/images/about_us_2.png"
        },
        {
            name: "Get Optimized, Accurate Results",
            description: "ThreeAre's is committed to providing the most effective tool which estimates the cradle to gate emissions and can be used to differentiate impacts of using composite materials that make up the roadway.",
            source: "https://threeares.netlify.app/images/about_us_1.png"
        },
        {
            name: "We are going green",
            description: "ThreeAres is the latest flagship project in the green economy project: the sign of an industry committed to the green economy, and at the forefront of efforts to stimulate change for the better.",
            source: "https://threeares.netlify.app/images/about_us_3.png"
        }

    ]

    
    return ( 
        <Carousel
        indicatorIconButtonProps={{
            style: {
                marginBottom: '50px', 
                marginTop: '-10px'   // 1      // 3
            }
        }}

        activeIndicatorIconButtonProps={{
            style: {
                backgroundColor: "#008000"
            }
        }}

        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default SlickSlider;