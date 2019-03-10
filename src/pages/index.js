import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

import '../styles/component/main-page__body.scss';

const IndexPage = ({ data }) => {
  let size = Math.floor(data.allS3Image.edges.length / 4);
  return (
  <Layout>
    <SEO title="Home" keywords={[`photography`, `wedding`, `engagement`]} />
    <div className="body">
      <div className="photo-display__column">
        {data.allS3Image.edges.slice(0, size).map(({ node }, i)=> {
          if([3].includes(i)) return (<Img fluid={node.file.image.fluid} style={{marginBottom: '10px', transform: 'scale(1.2) rotate(3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/>)
          if([11].includes(i)) return (<Img fluid={node.file.image.fluid} style={{marginBottom: '10px', transform: 'scale(1.1) rotate(-3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/>)
          return (<Img fluid={node.file.image.fluid} style={{marginBottom: '10px'}}/>)
        })}  
      </div>
      <div className="photo-display__column">
        {data.allS3Image.edges.slice(size, (size + size)).map(({ node }, i)=> {
          if([6].includes(i)) return (<Img fluid={node.file.image.fluid} style={{marginBottom: '10px', transform: 'scale(1.1) rotate(3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/>)
          if([10].includes(i)) return (<Img fluid={node.file.image.fluid} style={{marginBottom: '10px', transform: 'scale(1.1) rotate(-3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/>)
            return (<Img fluid={node.file.image.fluid} style={{marginBottom: '10px'}}/>)
          })} 
      </div>
      <div className="photo-display__column">
        {data.allS3Image.edges.slice((size + size), (size + size + size)).map(({ node }, i)=> {
          if([1].includes(i)) return (<Img fluid={node.file.image.fluid} style={{marginBottom: '10px', transform: 'scale(1.1) rotate(3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/>)
          if([4].includes(i)) return (<Img fluid={node.file.image.fluid} style={{marginBottom: '10px', transform: 'scale(1.1) rotate(-3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/>)
              return (<Img fluid={node.file.image.fluid} style={{marginBottom: '10px'}}/>)
        })} 
      </div>
      <div className="photo-display__column">
        {data.allS3Image.edges.slice((size + size + size), (size + size + size + size)).map(({ node }, i)=> {
          if([6].includes(i)) return (<Img fluid={node.file.image.fluid} style={{marginBottom: '10px', transform: 'scale(1.2) rotate(3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/>)
          if([11].includes(i)) return (<Img fluid={node.file.image.fluid} style={{marginBottom: '10px', transform: 'scale(1.1) rotate(-3deg)', zIndex: 2, boxShadow: '0px 0px 21px -3px black'}}/>)
                return (<Img fluid={node.file.image.fluid} style={{marginBottom: '10px'}}/>)
        })}
      </div>
    </div>
  </Layout>
)}

export default IndexPage

export const query =  graphql`
{
  allS3Image(filter: {Key: {regex: "/^wedding/ig"}}, sort: {fields: Key} ) {
    edges {
      node{
        id
        Name
        Key
        Extension
        file: localFile {
          image: childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          } 
        }
      }
    }
  }
}
`
