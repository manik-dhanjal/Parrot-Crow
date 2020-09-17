import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import "./layout.style.css";
import { Navigation } from ".";
import Header from "./header/header";
import Footer from "./footer/footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight,faBars,faTimes,faChevronDown} from "@fortawesome/free-solid-svg-icons";
import "../../styles/app.css";



const DefaultLayout = ({ data, children, bodyClass, isHome,nav }) => {
    
    const site = data.allGhostSettings.edges[0].node;
    console.log(site);
    const twitterUrl = site.twitter
        ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
        : null;
    const facebookUrl = site.facebook
        ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
        : null;

        const [Shop,setShop] = useState(false);
    return (
        
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">
                <div className="viewport-top">
                <header className="site-head" style={isHome?{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }:{background:"#F5F5F5 "}}>
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
                                 <NavSlide/>
                                <ul className={` ${isHome?"menu":"menu-light"}`}>
                                    <li>
                                    <a onClick={()=>setShop(!Shop)}>Shop <FontAwesomeIcon icon={faChevronDown} /></a>
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
                    <DropDown shop={Shop}/>
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
const DropDown=(props)=>{
    console.log(props.shop)
return(
    <>
    
    <div className="shop-drop" style={props.shop?{top:"85px" ,zIndex:"200"}:{top:"-600px",zIndex:"200"}}>
                        <div className="container">
                            <div
                                className=" boy-menu"
                                style={{
                                    background: `url(/images/Boys-Menu.png)`,
                                }}
                            >
                            <div className="menu-cont">
                                <h2 className="drop-head">Boys</h2>
                               
                                    <ul class="boy-list cat-list">
                                        <li>
                                            <a href="/collections/boys-t-shirts">
                                                T- Shirts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/collections/boys-polos">
                                                Polos
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/collections/shorts">
                                                Shorts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/collections/jeans">
                                                Jeans
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/collections/jogger">
                                                Joggers
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="cat-hover"> <a href="#" className="boys-button cat-button">Shop Boys <FontAwesomeIcon icon={faAngleDoubleRight} /></a></div>
                                </div>
                            </div>
                            <div
                                className=" girl-menu"
                                style={{
                                    background: `url(/images/girls-menu.png) `,
                                }}
                            >
                                 <div className="menu-cont">
                                    <h2 className="drop-head">Girls</h2>
                                    <ul class="girl-list cat-list">
                                        <li>
                                            <a href="/collections/girls-t-shirts/retail">
                                                T-Shirts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/collections/girls-capri/retail">
                                                Capri
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/collections/shorts-1/retail">
                                                Shorts
                                            </a>
                                        </li>
                                    </ul>
                                        <div className="cat-hover"> <a className="girls-button cat-button" href="#">Shop Girls <FontAwesomeIcon icon={faAngleDoubleRight} /></a></div>
                                    </div >
                            </div>
                        </div>
                    </div>
    </>
)
}

function noScroll() {
    window.scrollTo(0, 0);
  }
const NavSlide=()=>{
    const [mobileMenu,setMobileMenu]=useState(false);
    const [menuDropM,setmenuDropM]=useState({girls:false,boys:false});
    useEffect(() => {
        
        mobileMenu
            ?window.addEventListener('scroll', noScroll)
            :window.removeEventListener('scroll', noScroll);
       
    }, [mobileMenu])
    return(
        <>
        <div className="menu-burger" onClick={()=>setMobileMenu(!mobileMenu)}>
            <FontAwesomeIcon icon={faBars} />
        </div>  
        <div className="mobile-menu mobile" style={mobileMenu?{left:"0px"}:{left:"-95vw"}}>
                        <div class="mobile-nav-icon btn-cont">
                                <button type="button" className="close-button" onClick={()=>setMobileMenu(false)}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                        </div>
                        <ul class="mobile-nav">
                                <li class="mobile-nav__item">
                                    
                                </li>
                                <li class="mobile-nav__item">
                                    <a class="mobile-nav__link" href="/">Home</a>
                                </li>
                                <li class="mobile-nav__item menu-item-has-children">
                                    <a class="mobile-nav__link" href="/collections/boys">Boys</a>
                                    <span class="mobile-child-menu" onClick={()=>{setmenuDropM({girls:menuDropM.girls,boys:!menuDropM.boys})}}><FontAwesomeIcon icon={faChevronDown} /></span>
                                    <ul class="mobile-nav-sub" style={menuDropM.boys?{height:"270px"}:{height:"0px"}}>
                                        <li class="mobile-nav__item">
                                            <a class="mobile-nav__link" href="/collections/boys-t-shirts">T-Shirts</a>
                                        </li>
                                        <li class="mobile-nav__item">
                                            <a class="mobile-nav__link" href="/collections/boys-polos/retail">Polos</a> 
                                        </li>
                                        <li class="mobile-nav__item">
                                            <a class="mobile-nav__link" href="/collections/shorts">Shorts</a>
                                        </li>

                                        <li class="mobile-nav__item">
                                            <a class="mobile-nav__link" href="/collections/jogger">Jogger</a>
                                        </li>

                                        <li class="mobile-nav__item">
                                            <a class="mobile-nav__link" href="/collections/jeans">Jeans</a>                                  
                                        </li>
                                    </ul>
                                </li>
                                <li class="mobile-nav__item menu-item-has-children">
                                    <a class="mobile-nav__link" href="/collections/girls">Girls</a>
                                    <span class="mobile-child-menu" onClick={()=>{setmenuDropM({girls:!menuDropM.girls,boys:menuDropM.boys})}}><FontAwesomeIcon icon={faChevronDown} /></span>
                                    <ul class="mobile-nav-sub" style={menuDropM.girls?{height:"150px"}:{height:"0px"}}>
                                        <li class="mobile-nav__item">
                                        <a class="mobile-nav__link" href="/collections/girls-t-shirts">T-Shirts</a>
                                        </li>
                                        <li class="mobile-nav__item">
                                            <a class="mobile-nav__link" href="/collections/shorts-1">Shorts</a>
                                        </li>
                                        <li class="mobile-nav__item">
                                        <a class="mobile-nav__link" href="/collections/girls-capri/retail">Capri</a> 
                                        </li>
                                    </ul>
                                </li>
                                <li class="mobile-nav__item">
                                    <a class="mobile-nav__link" href="/pages/cloth-masks-wholesale">Mask 3-Layer</a>                           
                                </li>
                                <li class="mobile-nav__item">
                                    <a class="mobile-nav__link" href="/collections/clearance-kids-wear/retail">Clearance</a>          
                                </li>
                                <li class="mobile-nav__item mobile-active">
                                    <a class="mobile-nav__link" href="/pages/wholesale-kids-wear-manufacturer-tirupur">Wholesale</a>
                                </li>
                                <li class="mobile-nav__item">
                                    <a class="mobile-nav__link" href="/pages/our-story">Our Story</a>
                                </li>
                                <li class="mobile-nav__item">
                                    <a class="mobile-nav__link" href="/pages/contact-us">Contact Us</a>
                                </li>
                                <li class="mobile-nav__item">
                                        <a href="/account" class="mobile-nav__link">Login/Register</a>
                                </li>
                                <li class="mobile-nav__item">
                                    <a href="/pages/" class="mobile-nav__link">Wish List</a>
                                </li>
                            
                        </ul>
                    </div>  
                    </>
    )
}