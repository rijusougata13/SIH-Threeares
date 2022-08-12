import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
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
            routepath=""
            />

        </Paper>
    )
}

const SlickSlider = () => {

    var items = [
        {
            name: "GHG Calculator",
            description: "The newest technology for calculation of quantum of CO2 emission during highway construction.",
            source: "https://images.pexels.com/photos/3357026/pexels-photo-3357026.jpeg"
        },
        {
            name: "Get Optimized, Accurate Results",
            description: "ThreeAre's is committed to providing the most effective tool which estimates the cradle to gate emissions and can be used to differentiate impacts of using composite materials that make up the roadway.",
            source: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            name: "We are going green",
            description: "ThreeAres is the latest flagship project in the green economy project: the sign of an industry committed to the green economy, and at the forefront of efforts to stimulate change for the better.",
            source: "https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }

    ]

    
    return ( 
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default SlickSlider;