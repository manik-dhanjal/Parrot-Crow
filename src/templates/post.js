import React from 'react'
import PropTypes from 'prop-types'
import { graphql,Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import "../styles/post.style.css"
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import Url from "url"
/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.shopifyArticle
    const Rpost= data.allShopifyArticle.nodes
    console.log(Rpost)
    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                {/* <style type="text/css">{`${post.codeinjection_styles}`}</style> */}
            </Helmet>
            <Layout nav={true}>
                <div className="container post-cont">
                    <article className="content">
                        { post.image ?
                            <figure className="post-feature-image">
                                <img src={ post.image.src } alt={ post.title } />
                            </figure> : null }
                        <section className="post-full-content">
                            <h1 className="content-title">{post.title}</h1>
                            {/* The main post content */ }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                            />
                        </section>
                    </article>
                    <aside >
                        <h3 className="r-head">Recent Post</h3>
                        <hr/>
                        <ul className="post-list">
                            {Rpost.map((node)=>(
                                <li><Link href={Url.parse(node.url).path}>{node.title}</Link></li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
query($slug:String!){
    shopifyArticle(url: {regex: $slug}) {
      image {
        src
      }
      title
      url
      excerptHtml
      contentHtml
    }
    allShopifyArticle(limit: 5, sort: {fields: publishedAt}) {
        nodes {
          title
          url
        }
      }
  }  
`

// query($slug: String!) {
//     ghostPost(slug: { eq: $slug }) {
//         ...GhostPostFields
//     }
// }