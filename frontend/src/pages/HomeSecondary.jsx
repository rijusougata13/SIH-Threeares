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
import { Grid } from "@material-ui/core";
import './HomeSecondary.css';

class HomeSecondary extends Component {
  state = {};

  render() {
    return (
      <div className="HomeSecondary">
        <ResponsiveAppBar/>
        {/* <Slider /> */}
        <SlickSlider  />
        
        <SplitSectionInverted
        heading="Meet Threeares"
        // image="https://www.uopeople.edu/wp-content/uploads/2020/03/person-holding-green-grains-1230157-1-scaled-e1585570094956.jpg"
        height="400px"
        description="The aim of this research is to calculate the carbon footprint for different HMA and PCC pavement sections and develop recommendations on how the established footprints can be used for the development of green construction standards. Life-cycle assessment methodologies will be used in this research."
        videourl="https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY2MDc5NjY3NH0.S_Bm6Vq9hZh77Pc6w1H3Un34ssKyg0eAdv-WY7WQ0xjuFknDrJKsU_5bc2Aq3DXuTquLlbc1FJHpSQXCN3NrKiLJK5LHwh3K4b4yzEQo_gLW9KjgNzrJ-iQaLScJ-s5vQ9Qa1291QVIWHw9zHvLN1KXIPgXLCuvE5EVimgt7AnGbXFf6kHuSPB1Y5U220_L2xxleCp1PuxaK46ny7jOkwrM5TtXoEmbT-oXbZofDf87brEu3fBeBnVXQAoMF3aUJ6HDialXidFEepwEcqo-0ZwyGDM9UWHBfWgxEzOsL69r9Uk4H9dB89D1hBHyLjWgGmXLf3ho3H_flySg9zTDNd42d50jwumZiu17CvjE-txXto9pGaUweTr5IbogfvYyITHqiO5bZqPCeGLfCI0UBJNR8d4dgYPCEo2QpwxBmr_kragiQPzixTqHVmOMPxZiZEgNXG3UviyujN_dy4AWvMC2AlljnUVT1sm09Q-yp_L6Vljyjoc5WWTivSM-bOxoH9jJINauCaxyRlw2RbBRUy6pKtnt2iQu_cXiDKrNQcFGxaerYbPko5zGjQ5hMYVtzKVGSuotTnsEjLSYBzf7tGuVYHDXipclwq2EmkYCVQnjCSpGrXCaCkyFMjWiGUVXPjXVZzgguD0pRCZQ03N0KS0HY5GrJigR5Rsec2TQ_mRc"
        />

        <SplitSection 
        heading="About us"
        description="The main objectives of the THREEARES project are to achieve tangible, long‐term benefits for
        the global environment and to contribute proactively to the shaping of dynamic sustainable
        road development policies going forward."
        image="https://wecareonline.lk/img/counseling.jpg"
        height="400px"
        />

        <SplitSectionInverted
        heading="Objectives"
        image="https://www.uopeople.edu/wp-content/uploads/2020/03/person-holding-green-grains-1230157-1-scaled-e1585570094956.jpg"
        height="400px"
        description="none"
        />
        
        <NewsLetter />
      </div>
    );
  }
}

export default HomeSecondary;
