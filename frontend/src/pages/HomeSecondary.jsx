import React, { Component } from "react";
import Categories from "../components/Categories";
import NewsLetter from "../components/NewsLetter";
import PopularPorductsHeading from "../components/PopularPorductsHeading";
import Products from "../components/Products";
import Slider from "../components/Slider";
import ResponsiveAppBar from "src/components/ResponsiveAppBar";
import SplitSection from "src/components/SplitSection";
import './HomeSecondary.css';

class HomeSecondary extends Component {
  state = {};

  render() {
    return (
      <div className="HomeSecondary">
        <ResponsiveAppBar/>
        <Slider />
        <SplitSection image="https://images.pexels.com/photos/3357026/pexels-photo-3357026.jpeg"/>
        
        <NewsLetter />
      </div>
    );
  }
}

export default HomeSecondary;
