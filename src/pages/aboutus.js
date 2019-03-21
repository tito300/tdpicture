import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import Img from 'gatsby-image';

import '../styles/component/aboutus__page.scss'
import { graphql } from 'gatsby';

export default ({ data }) => (
    <Layout themeColor="black">
        <div className='aboutus-wrapper'>
            <div className="aboutus-presentation">
                <div className="aboutus-presentation__box-1">
                    <h2 className="aboutus-presentation__title">About Us</h2>
                    <p className="aboutus-presentation__text">TD Photography is family owned business located in rowlett. 
                        My name is Tarek and I specialize in photographing wedding parties and engagment sessions. My wife and I are passionate about 
                        making art and not just taking pictures. We pay attention to our clients small 
                        details and make sure we deliver what is expected.<br/><br/>
                        Please feel free to contact us if you have any questions. Enjoy viewing our website.
                        <br/><br/>
                        Thank you <br/>
                        Tarek & Kellie
                        </p>
                </div>
                <div className="aboutus-presentation__box-2">
                    <div className="aboutus-img-slider-wrapper">
                        <Img  className="gi-1" fixed={data.dallas_skyline.childImageSharp.fixed} 
                            style={{ height: data.dallas_skyline.childImageSharp.fixed.height, width: data.dallas_skyline.childImageSharp.fixed.width, marginRight: '10px' }} 
                            imgStyle={{height: '100%', width: 'auto'}}
                        />
                        <Img  className="gi-2" fixed={data.event.childImageSharp.fixed} 
                            style={{ height: data.event.childImageSharp.fixed.height, width: data.event.childImageSharp.fixed.width, marginRight: '10px' }} 
                            imgStyle={{height: '100%', width: 'auto'}}
                        />
                        <Img  className="gi-3" fixed={data.personal_photo.childImageSharp.fixed} 
                            style={{ height: data.personal_photo.childImageSharp.fixed.height, width: data.personal_photo.childImageSharp.fixed.width, marginRight: '10px' }} 
                            imgStyle={{height: '100%', width: 'auto'}}
                        />
                        <div className="arrow-wrapper">
                            <div className="arrow arrow-1"></div>
                            <div className="arrow arrow-2"></div>                        
                            <div className="arrow arrow-3"></div>
                            <div className="arrow-text-wrapper">
                                <p>Location</p>
                                <p>Work</p>
                                <p>US</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutus-presentation__box-3"></div>
                <div className="aboutus-presentation__box-4"></div>
            </div>
        </div>
    </Layout>
)

export const query = graphql`
{
    dallas_skyline: file(relativePath: {eq: "dallas-skyline-2.jpg"}) {
        childImageSharp {
        fixed(width: 350, height: 250) {
            originalName
            srcSet
            width
            height
            }
        }
    }
    event: file(relativePath: {eq: "event.jpg"}) {
        childImageSharp {
        fixed(width: 350, height: 250) {
            originalName
            srcSet
            width
            height
            }
        }
    }
    personal_photo: file(relativePath: {eq: "tk.jpg"}) {
        childImageSharp {
        fixed(width: 350, height: 250, quality: 100) {
            originalName
            srcSet
            width
            height
            }
        }
    }
}
`