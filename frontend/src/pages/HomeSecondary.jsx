import React, { Component } from "react";
import Categories from "../components/Categories";
import NewsLetter from "../components/NewsLetter";
import PopularPorductsHeading from "../components/PopularPorductsHeading";
import Products from "../components/Products";
import Slider from "../components/Slider";
import ResponsiveAppBar from "src/components/ResponsiveAppBar";

class HomeSecondary extends Component {
  state = {};

  render() {
    return (
      <div>
        <ResponsiveAppBar/>
        <Slider />
        
        <NewsLetter />
      </div>
    );
  }
}

export default HomeSecondary;
