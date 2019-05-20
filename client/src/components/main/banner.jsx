import React from 'react';
import Img from "gatsby-image";
import BannerAnimatedText from "./bannerAnimatedText"
import ImageSlider from "./bannerImgSlider"
import { Link } from "gatsby"
import { IoIosArrowDown } from 'react-icons/io';


export default () => (
    <div id="mainPage__banner">
        <BannerAnimatedText />
        <ImageSlider />
                
        <Link onClick={(e)=>{ e.preventDefault(); document.querySelector('.body').scrollIntoView({behavior: 'smooth', block: 'start'}) }}>
          <IoIosArrowDown className="scroll-down" />
        </Link>    
    </div>
)