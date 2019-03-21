import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { TiPin } from "react-icons/ti";

// import Img from "./image"
import HeaderAnimatedText from "../components/HeaderAnimatedText"
import ImageSlider from "../components/image_slider.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import '../styles/component/main-page__body.scss';


class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
  }

  state = {
    openViewer: false,
    shuffledEdges: [],
    currentViewerId: null,
    animate: ''
  }

  componentDidMount() {
    let { data } = this.props;
    let edges = data.all_images.edges.filter(({ node }) => { 
      if(node.file === null) console.log(`${node.id} did not have a file field and so was excluded`);
      return (node.file)})
    let shuffledEdges = this.getShuffledArr(edges);
    this.setState({
      shuffledEdges
    })
  }

  openImageViewer = (e) => {
      let i = e.currentTarget.id.split('-')[1];
      this.setState({
        openViewer: true,
        currentViewerId: parseInt(i),
      })
  }

  closeImageViewer = (e) => {
    if(e.target.className.includes && e.target.className.includes('viewer-wrapper')) {
      this.setState({
        openViewer: false,
        currentViewerId: null,
      })
    }
  }

  handleArrowClick = (e) => {
    let { currentViewerId, shuffledEdges } = this.state;
    if(e.currentTarget.className.baseVal && e.currentTarget.className.baseVal.includes('viewer__arrow-forward')) {
      this.setState({
        animate: 'hide-left'
      }, ()=> {
        setTimeout(()=> {
          let currentIndex = currentViewerId === (shuffledEdges.length - 1) ? 0 : (currentViewerId + 1);
          this.setState({
            currentViewerId: currentIndex,
            animate: 'show-right',
          })
        }, 700)
      })
    } else if(e.currentTarget.className.baseVal && e.currentTarget.className.baseVal.includes('viewer__arrow-back')) {
      this.setState({
        animate: 'hide-right'
      }, ()=> {
        setTimeout(()=> {
          let currentIndex = currentViewerId === 0 ? (shuffledEdges.length - 1) : (currentViewerId - 1)
          this.setState({
            currentViewerId: currentIndex,
            animate: 'show-left'
          })
        }, 700)
      })
    }
  }

  getShuffledArr = arr => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
  }

  
  render() {
    let { data } = this.props;
    let { shuffledEdges, currentViewerId, animate } = this.state;
    let size = Math.floor(data.all_images.edges.length / 4);
    
    return (
    <Layout>
      <SEO title="Home" keywords={[`photography`, `wedding`, `engagement`]} />
      <div className={this.state.openViewer ? `viewer-wrapper open` : 'viewer-wrapper'} onClick={this.closeImageViewer}>
        <div className="viewer-box">
          <div className="viewer-image__wrapper" >
            <div><IoIosArrowBack className="viewer__arrow-back" onClick={this.handleArrowClick}/></div>
            {currentViewerId !== null ? <img ref={this.imgRef} className={`viewer-img {animate}`}
                                          srcSet={shuffledEdges[currentViewerId].node.file.image.fluid.srcSet} style={{maxHeight: '100%'}}/>
                : null}
            <div><IoIosArrowForward className="viewer__arrow-forward" onClick={this.handleArrowClick}/></div>  
          </div>
        </div>
      </div>
      <div id="mainPage__banner">
        <HeaderAnimatedText />
        <ImageSlider />
                
        <Link /* data-to="main-container" onClick={this.scrollToId} */ onClick={(e)=>{ e.preventDefault(); document.querySelector('.body').scrollIntoView({behavior: 'smooth', block: 'start'}) }}>
                  <IoIosArrowDown className="scroll-down" />
        </Link>    
      </div>
      <div className="body" style={{
              margin: `0 auto`,
              maxWidth: 1200,
              width: '95%',
              padding: `0px 10px 10px`,
              paddingTop: '0px',
            }}>
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
        <div id="work-display" className="photos-display">
          <div className="photo-display__column">
            {shuffledEdges.slice(0, size).map(({ node }, i)=> {
              if([4].includes(i)) return (<div id={`photo-${i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={this.openImageViewer}>
                  <Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.3) rotate(-3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/>
                </div>)
              if([11].includes(i)) return (<div id={`photo-${i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={this.openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.3) rotate(3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
              return (<div id={`photo-${i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={this.openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px'}}/></div>)
            })}  
          </div>
          <div className="photo-display__column">
            {shuffledEdges.slice(size, (size + size)).map(({ node }, i)=> {
              if([6].includes(i)) return (<div id={`photo-${size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={this.openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.3) rotate(3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
              if([10].includes(i)) return (<div id={`photo-${size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={this.openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.3) rotate(-3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
                return (<div id={`photo-${size + i}`} className={`photo-container`} data-id={node.id} onClick={this.openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px'}}/></div>)
              })} 
          </div>
          <div className="photo-display__column">
            {shuffledEdges.slice((size + size), (size + size + size)).map(({ node }, i)=> {
              if([1].includes(i)) return (<div id={`photo-${size + size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={this.openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.3) rotate(3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
              if([4].includes(i)) return (<div id={`photo-${size + size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={this.openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.3) rotate(-3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
                  return (<div id={`photo-${size + size + i}`} className={`photo-container`} data-id={node.id} onClick={this.openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px'}}/></div>)
            })} 
          </div>
          <div className="photo-display__column">
            {shuffledEdges.slice((size + size + size), (size + size + size + size)).map(({ node }, i)=> {
              if([6].includes(i)) return (<div id={`photo-${size + size + size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={this.openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.3) rotate(3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
              if([11].includes(i)) return (<div id={`photo-${size + size + size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={this.openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px', transform: 'scale(1.3) rotate(-3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/></div>)
                    return (<div id={`photo-${size + size + size + i}`} key={node.id} className={`photo-container`} data-id={node.id} onClick={this.openImageViewer}><Img fluid={node.file.image.fluid} style={{marginBottom: '14px'}}/></div>)
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
  }
}

export default IndexPage

export const query =  graphql`
{
  all_images: allS3Image(filter: {Key: {regex: "/^wedding/ig"}}, sort: {fields: Key} ) {
    edges {
      node{
        id
        Name
        Key
        Extension
        file: localFile {
          image: childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          } 
        }
      }
    }
  }
  info_img: allS3Image(filter: {Key: {regex: "/^wedding/22N2A0404/ig"}} ) {
    edges {
      node{
        id
        Name
        Key
        Extension
        file: localFile {
          image: childImageSharp {
            fluid(maxWidth: 500, maxHeight: 650) {
              ...GatsbyImageSharpFluid_withWebp
            }
          } 
        }
      }
    }
  }
}
`
