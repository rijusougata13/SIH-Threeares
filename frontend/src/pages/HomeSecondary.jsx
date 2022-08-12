import React, { Component } from "react";
import Categories from "../components/Categories";
import NewsLetter from "../components/NewsLetter";
import PopularPorductsHeading from "../components/PopularPorductsHeading";
import Products from "../components/Products";
import Slider from "../components/Slider";
import SlickSlider from "../components/SlickSlider";
import ResponsiveAppBar from "src/components/ResponsiveAppBar";
import SplitSection from "src/components/SplitSection";
import { Grid } from "@material-ui/core";
import './HomeSecondary.css';

class HomeSecondary extends Component {
  state = {};

  render() {
    return (
      <div className="HomeSecondary">
        <ResponsiveAppBar/>
        {/* <Slider /> */}
        <SlickSlider />
        
      

        <SplitSection 
        heading="About us"
        description="The main objectives of the THREEARES project are to achieve tangible, long‐term benefits for
        the global environment and to contribute proactively to the shaping of dynamic sustainable
        road development policies going forward."
        image="https://images.pexels.com/photos/3357026/pexels-photo-3357026.jpeg"
        />
        
        <NewsLetter />
      </div>
    );
  }
}

export default HomeSecondary;
