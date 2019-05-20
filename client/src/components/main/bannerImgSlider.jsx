import PropTypes from "prop-types"
import React from "react"
import Image from "../image"

const ImageSlider = () => (
    <div className="imgs-slider__wrapper">
              <div className="imgs-slider__part">
                <Image name="love1" fixed={true}></Image>
                <Image name="moments1" fixed={true}></Image>
                <Image name="details1" fixed={true}></Image>
              </div>
              <div className="imgs-slider__part">
                <Image name="details3" fixed={true}></Image>
                <Image name="moments2" fixed={true}></Image>
                <Image name="love2" fixed={true}></Image>
              </div>
              <div className="imgs-slider__part">
                <Image name="love3" fixed={true}></Image>              
                <Image name="moments3" fixed={true}></Image>              
                <Image name="details2" fixed={true}></Image>              
              </div>
            </div>
)

export default ImageSlider;