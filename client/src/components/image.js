import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({name, style, fixed}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        header: file(relativePath: {eq: "header-v2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        moments1: file(relativePath: {eq: "moments-1.jpg"}) {
          childImageSharp {
            fixed(width: 400) {
              originalName
              srcSet
            }
          }
        }
        moments2: file(relativePath: {eq: "moments-2.jpg"}) {
          childImageSharp {
            fixed(width: 400) {
              originalName
              srcSet
            }
          }
        }
        moments3: file(relativePath: {eq: "moments-3.jpg"}) {
          childImageSharp {
            fixed(width: 500) {
              originalName
              srcSet
            }
          }
        }
        details1: file(relativePath: {eq: "details-1.jpg"}) {
          childImageSharp {
            fixed(width: 500) {
              originalName
              srcSet
            }
          }
        }
        details2: file(relativePath: {eq: "details-2.jpg"}) {
          childImageSharp {
            fixed(width: 500) {
              originalName
              srcSet
            }
          }
        }
        details3: file(relativePath: {eq: "details-3.jpg"}) {
          childImageSharp {
            fixed(width: 500) {
              originalName
              srcSet
            }
          }
        }
        love1: file(relativePath: {eq: "love-1.jpg"}) {
          childImageSharp {
            fixed(width: 500) {
              originalName
              srcSet
            }
          }
        }
        love2: file(relativePath: {eq: "love-2.jpg"}) {
          childImageSharp {
            fixed(width: 500) {
              originalName
              srcSet
            }
          }
        }
        love3: file(relativePath: {eq: "love-3.jpg"}) {
          childImageSharp {
            fixed(width: 500) {
              originalName
              srcSet
            }
          }
        }
      }
    `}
    render={data => fixed ? <Img fixed={data[name].childImageSharp.fixed}/> 
                              : <Img fluid={data[name].childImageSharp.fluid}/>}
  />
)
export default Image
