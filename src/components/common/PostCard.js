import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
var url1 = require('url');


const PostCard = ({ post }) => {
    const url = `${url1.parse(post.url).path}/`
    // const url ='/';
    //  const readingTime = readingTimeHelper(post)
    const readingTime = "2 mins";
console.log(readingTime)
    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                
                    <div className="post-card-image" style={post.image?{ backgroundImage: `url(${post.image.src})` }:{ backgroundImage: `url(/images/logo.png)` ,backgroundSize:"contain"}}></div>
                {/* {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>} */}
                {/* {post.featured && <span>Featured</span>} */}
                <h2 className="post-card-title">{post.title}</h2>
            </header>
            <section className="post-card-excerpt load-external-scripts" dangerouslySetInnerHTML={{ __html: post.excerptHtml }}  />
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    {/* <div className="post-card-avatar">
                        {post.primary_author.profile_image ?
                            <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                            <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                        }
                    </div> */}
                    {/* <span>{ post.primary_author.name }</span> */}
                </div>
                <div className="post-card-footer-right">
                    <div>{readingTime}</div>
                </div>
            </footer>
        </Link>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        images: PropTypes.string,
        featured: PropTypes.bool,
        // tags: PropTypes.arrayOf(
        //     PropTypes.shape({
        //         name: PropTypes.string,
        //     })
        // ),
        excerptHtml: PropTypes.string.isRequired,
        // primary_author: PropTypes.shape({
        //     name: PropTypes.string.isRequired,
        //     profile_image: PropTypes.string,
        // }).isRequired,
    }).isRequired,
}

export default PostCard
