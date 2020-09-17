import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faTimes,faChevronDown} from "@fortawesome/free-solid-svg-icons";
import "./mobile-menu.style.css"
function noScroll() {
    window.scrollTo(0, 0);
  }

const NavSlide=({home})=>{
    const [mobileMenu,setMobileMenu]=useState(false);
    const [menuDropM,setmenuDropM]=useState({girls:false,boys:false});
    useEffect(() => {
        
        mobileMenu
            ?window.addEventListener('scroll', noScroll)
            :window.removeEventListener('scroll', noScroll);
       
    }, [mobileMenu])
    return(
        <>
        <div className="menu-burger"  onClick={()=>setMobileMenu(!mobileMenu)}>
            <FontAwesomeIcon icon={faBars} style={home?{color:"white"}:{color:"#333"}} />
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
export default NavSlide;