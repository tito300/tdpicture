import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { TiPin } from "react-icons/ti"

// import Img from "./image"
import InfoSection from "../components/main/infoSection"
import ImagesDisplay from "../components/main/imagesDisplay"
import Banner from "../components/main/banner"
import ViewerModel from "../components/main/viewerModel"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import '../styles/component/main-page__body.scss'


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
    if(e.target.className.includes && 
      (e.target.className.includes('viewer-wrapper') || e.target.className.includes('close-btn'))
    ) {
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
    let { shuffledEdges, currentViewerId, animate, openViewer } = this.state;
    let size = Math.floor(data.all_images.edges.length / 4);
    
    return (
    <Layout>
      <SEO title="Home" keywords={[`photography`, `wedding`, `engagement`]} />
      <ViewerModel 
        shuffledEdges={shuffledEdges} 
        openViewer={openViewer} 
        closeImageViewer={this.closeImageViewer} 
        handleArrowClick={this.handleArrowClick} 
        imgRef={this.imgRef} 
        currentViewerId={currentViewerId}
      />
      <Banner />
      <div className="body" style={{
              margin: `0 auto`,
              maxWidth: 1200,
              width: '95%',
              padding: `0px 10px 10px`,
              paddingTop: '0px',
            }}>
        <InfoSection data={data} />
        <ImagesDisplay  
          shuffledEdges={shuffledEdges} 
          size={size} 
          openImageViewer={this.openImageViewer}/>
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
