import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import "./layout.style.css";
import { Navigation } from ".";
import Header from "./header/header";
import Footer from "./footer/footer"

import "../../styles/app.css";



const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node;
    console.log(site);
    const twitterUrl = site.twitter
        ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
        : null;
    const facebookUrl = site.facebook
        ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
        : null;
        
    return (
        
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">
                <div className="viewport-top">
                <header className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
                        <div className="container">
                            <nav className="site-nav">
                                <div className="site-nav-left">
                                    <Link to="/">
                                        {/* {site.logo ?
                                            <img className="site-logo" src={site.logo} alt={site.title} />
                                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                        } */}
                                         <img src="/images/logo.svg" alt={site.title} />
                                    </Link>
                                </div>
                                <div className="site-nav-right">
                                <ul className="menu ">
                                    <li>
                                    <a href="" >Shop</a>
                                    </li>
                                    <li >
                                    {/* <span className="megamenu-label green" >
                                            HUGE Profit
                                    </span> */}
                                        <a href="https://www.parrotcrow.in/pages/wholesale-kids-wear-manufacturer-tirupur">Wholesale</a>
                                    </li>
                                    <li>
                                        <a href="https://www.parrotcrow.in/pages/contact-us">Contact</a>
                                    </li>
                                    <li >
                                        {/* <span className="megamenu-label red" >
                                            Sale
                                        </span> */}
                                        <a href="https://www.parrotcrow.in/collections/clearance-kids-wear" >Clearance</a>
                                    </li>
                                    <li>
                                        <a href="https://www.parrotcrow.in/pages/cloth-masks-wholesale" >Mask</a>
                                    </li>
                                </ul>
                                    {/* { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                                    { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>}
                                    <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a> */}
                                </div>
                            </nav>
                            { isHome ?
                                <div className="site-banner">
                                    <h1 className="site-banner-title">{site.title}</h1>
                                    <p className="site-banner-desc">{site.description}</p>
                                </div> :
                                null}
                            {/* <nav className="site-nav">
                                <div className="site-nav-left">
                                    
                                    <Navigation data={site.navigation} navClass="site-nav-item" />
                                </div>
                                <div className="site-nav-right">
                                    <Link className="site-nav-button" to="/about">About</Link>
                                </div>
                            </nav> */}
                        </div>
                    </header>
                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>
                </div>

                <div className="viewport-bottom">
                   <Footer/>
                </div>
            </div>
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

const DefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: { eq: "ghost-icon.png" }) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery;
