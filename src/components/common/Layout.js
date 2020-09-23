import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import "./layout.style.css";
import DropDown from "./h-dropdown/hdropdown";
import NavSlide from "./mobile-menu/mobile-menu"
import Footer from "./footer/footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight,faBars,faTimes,faChevronDown} from "@fortawesome/free-solid-svg-icons";
import "../../styles/app.css";



const DefaultLayout = ({  children, bodyClass, isHome,nav }) => {


        const [Shop,setShop] = useState(false);
    return (
        
        <>
            <Helmet>
                <html lang="en" />
                {/* <style type="text/css">{`${site.codeinjection_styles}`}</style> */}
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">
                <div className="viewport-top">
                <header className="site-head" style={isHome?{background:"#333"}:{background:"#F5F5F5 "}}>
                        <div className="container">
                            <nav className="site-nav">
                                <div className="site-nav-left">
                                    <Link to="/">
                                       
                                         <img src="/images/logo.png" alt="Parrot Crow" />
                                    </Link>
                                </div>
                                <div className="site-nav-right">
                                 <NavSlide home={isHome}/>
                                <ul className={` ${isHome?"menu":"menu-light"}`}>
                                    <li>
                                    <a onClick={()=>setShop(!Shop)}>Shop <FontAwesomeIcon icon={faChevronDown} /></a>
                                    </li>
                                    <li >
                                   
                                        <a href="https://www.parrotcrow.in/pages/wholesale-kids-wear-manufacturer-tirupur">Wholesale</a>
                                    </li>
                                    <li>
                                        <a href="https://www.parrotcrow.in/pages/contact-us">Contact</a>
                                    </li>
                                    <li >
                                       
                                        <a href="https://www.parrotcrow.in/collections/clearance-kids-wear" >Clearance</a>
                                    </li>
                                    <li>
                                        <a href="https://www.parrotcrow.in/pages/cloth-masks-wholesale" >Mask</a>
                                    </li>
                                </ul>
                                </div>
                            </nav>
                            { isHome ?
                                <div className="site-banner">
                                    <h1 className="site-banner-title">Parrot Crow</h1>
                                    <p className="site-banner-desc">5 problems 1 Solution React</p>
                                </div> :
                                null}
                        </div>
                    </header>
                    <DropDown shop={Shop}/>
                    <main className="site-main">
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

// DefaultLayout.propTypes = {
//     children: PropTypes.node.isRequired,
//     bodyClass: PropTypes.string,
//     isHome: PropTypes.bool,
//     data: PropTypes.shape({
//         file: PropTypes.object,
//         allGhostSettings: PropTypes.object.isRequired,
//     }).isRequired,
// };

// const DefaultLayoutSettingsQuery = (props) => (
//     <StaticQuery
//         // query={graphql`
//         //     query GhostSettings {
//         //         allGhostSettings {
//         //             edges {
//         //                 node {
//         //                     ...GhostSettingsFields
//         //                 }
//         //             }
//         //         }
//         //         file(relativePath: { eq: "ghost-icon.png" }) {
//         //             childImageSharp {
//         //                 fixed(width: 30, height: 30) {
//         //                     ...GatsbyImageSharpFixed
//         //                 }
//         //             }
//         //         }
//         //     }
//         // `}
//         render={(data) => <DefaultLayout data={data} {...props} />}
//     />
// );

export default DefaultLayout;

