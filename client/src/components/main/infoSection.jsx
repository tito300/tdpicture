import React from 'react';
import Img from "gatsby-image";

export default ({ data }) => (
    <div className="info-section">
        <div className="info-wrapper">
        <div className="info__text-section">
            <h3>Our Philosophy</h3>
            <p>We are a family owned business based in Dallas. We pride ourselves in capturing moments that will be treasured forever. The Small details give our photos life and allow the moments to be vibrant and alive. Love is at the center of all our picture.</p>
        </div>
        <div className="info__img-section">
            <Img fluid={data.info_img.edges[0].node.file.image.fluid} style={{width: '100%', boxShadow: '0 0 20px #d5d5d5'}} imgStyle={{width: '100%', height: 'auto'}}/>
        </div>
        </div>
    </div>
)