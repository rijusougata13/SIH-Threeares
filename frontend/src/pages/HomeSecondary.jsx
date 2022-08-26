import React, { Component } from "react";
import Categories from "../components/Categories";
import NewsLetter from "../components/NewsLetter";
import PopularPorductsHeading from "../components/PopularPorductsHeading";
import Products from "../components/Products";
import Slider from "../components/Slider";
import SlickSlider from "../components/SlickSlider";
import ResponsiveAppBar from "src/components/ResponsiveAppBar";
import SplitSection from "src/components/SplitSection";
import SplitSectionInverted from "src/components/SplitSectionInverted";
import SplitSectionInverted2 from "src/components/SplitSectionInverted2";
import { Grid } from "@material-ui/core";
import './HomeSecondary.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

class HomeSecondary extends Component {
  state = {};

  render() {
    return (
      <div className="HomeSecondary">
        <ResponsiveAppBar/>
        {/* <Slider /> */}

        <SlickSlider  />
        
        <AnimationOnScroll animateIn="animate__fadeInLeft" delay={300} animateOnce={true}>
        <SplitSectionInverted2
        heading="Meet Threeares"
        // image="https://www.uopeople.edu/wp-content/uploads/2020/03/person-holding-green-grains-1230157-1-scaled-e1585570094956.jpg"
        height="400px"
        description="The aim of this research is to calculate the carbon footprint for different HMA and PCC pavement sections and develop recommendations on how the established footprints can be used for the development of green construction standards. Life-cycle assessment methodologies will be used in this research."
        videourl="https://www.youtube.com/embed/sFhXWzSu2zk?muted=1"
        // image="https://i.pinimg.com/originals/da/83/47/da8347dcb9b4e70c5d01780db65a139b.gif"
        imageHeight="100%"
        imageWidth="100%"
        imagePadding="0px"
        
        />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInRight" delay={100} animateOnce={true}>
        <SplitSection 
        heading="About us"
        description="The main objectives of the THREEARES project are to achieve tangible, long‐term benefits for
        the global environment and to contribute proactively to the shaping of dynamic sustainable
        road development policies going forward."
        image="https://cdn.dribbble.com/users/2065768/screenshots/4438259/whatwedo---dribbble.gif"
        height="400px"
        imageHeight="100%"
        imageWidth="100%"
        imagePadding="0px"
        />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInLeft" delay={100} animateOnce={true}>
        <SplitSectionInverted2
        heading="Objectives"
        image="https://cliply.co/wp-content/uploads/2019/07/371906770_HITTING_TARGET_400x400.gif"
        height="400px"
        description="none"
        imageHeight="100%"
        imageWidth="100%"
        imagePadding="0px"
        />
        </AnimationOnScroll>
        
        <NewsLetter />
      </div>
    );
  }
}

export default HomeSecondary;
