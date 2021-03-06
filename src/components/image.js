import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ filename, className }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  sizes(maxWidth: 800) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      `}

      render={(data) => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(filename)
        })
        if (!image) return

        const imageSizes = image.node.childImageSharp.sizes
        return <Img className={className} sizes={imageSizes} />
      }}
    />
  )
}

export default Image
