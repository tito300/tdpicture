import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import Img from "./image"
import HeaderAnimatedText from "./HeaderAnimatedText"
import ImageSlider from "./image_slider.js"
// import FontAwesome from 'react-fontawesome';


import "../styles/component/header.scss"


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgClassName: 'background-img',
      imageLoaded: false,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({scroll: window.scrollY});
  }

  componentDidMount() {
    const el = document.querySelector('nav');
    const clientWidth = document.documentElement.clientWidth;
    this.setState({top: el.offsetTop, height: el.offsetHeight, clientWidth });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    const el = document.querySelector('nav');


    this.state.scroll > this.state.top ? 
        el.classList.add('sticky') :
        el.classList.remove('sticky'); 
  }

  showImage = (e) => {
    this.setState({
      imgClassName: "background-img show",
      imageLoaded: true
    })
  }

  scrollToId = (e) => {
    e.preventDefault();
    console.dir(e.currentTarget);
    if(e.currentTarget.dataset.to){
      document.querySelector(`#${e.currentTarget.dataset.to}`).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  render() {
    const { siteTitle } = this.props;
    const { imgClassName } = this.state;

    return (
      <StaticQuery query={graphql`
      {
        blurred: file(relativePath: {eq: "header-v2.jpg"}) {
          childImageSharp {
            fixed(width: 60) {
              originalName
              srcSet
              height
              width
              aspectRatio
            }
          }
        }
        blurredWide: file(relativePath: {eq: "header-v2-wide.jpg"}) {
          childImageSharp {
            fixed(width: 60) {
              originalName
              srcSet
              height
              width
              aspectRatio
            }
          }
        }
        blurredExtraWide: file(relativePath: {eq: "header-v2-extra-wide.jpg"}) {
          childImageSharp {
            fixed(width: 60) {
              originalName
              srcSet
              height
              width
              aspectRatio
            }
          }
        }
        headerMid: file(relativePath: {eq: "header-v2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              originalName
              srcSet
            }
          }
        }
        headerLarge: file(relativePath: {eq: "header-v2-wide.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              originalName
              srcSet
            }
          }
        }
        headerExtraLarge: file(relativePath: {eq: "header-v2-extra-wide.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              originalName
              srcSet
            }
          }
        }
      }
      `} 
      render={(data) => {
        return (
          <header id="header" 
            className={this.state.imageLoaded ? 'img-loaded' : ''}
          > 
            <Link to="/">
              <div className="title-wrapper">{siteTitle}</div>
            </Link>
            <nav className="nav-wrapper">
              <ul className="nav">
                <li className="nav-li">
                  <Link to="/aboutus">About us</Link>
                </li>
                <li className="nav-li">
                  <Link to="/#work-display">Work</Link>
                </li>
                <li className="nav-li">
                  <Link to="#">Pricing</Link>
                </li>
                <li className="nav-li">
                  <Link to="#">Blog</Link>
                </li>
              </ul>
            </nav>

            {/* <HeaderAnimatedText />
            <ImageSlider />

            <Link data-to="main-container" onClick={this.scrollToId}>
              <IoIosArrowDown className="scroll-down" />
            </Link> */}
          </header>
        )
    
      }} >
      </StaticQuery>
    )
  } 
} 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
