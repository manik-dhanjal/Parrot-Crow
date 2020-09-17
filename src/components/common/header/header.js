import React,{useState} from "react";
import "./header.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart,faChevronDown,faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import HeaderrMobile from "../header mobile/header.mobile"
const Header=()=>{
    const [Shop,setShop] = useState(false);
    return(
     <>
        <header>
            <div className="nav-top desktop">
                <div className="container">
                <ul className="menu">
                    <li>
                        <a href="#https://www.parrotcrow.in/account">My Account</a>
                    </li>
                    <li>
                        <a href="https://www.parrotcrow.in/collections/all">WishList</a>
                    </li>
                    <li>
                        <a href="https://www.parrotcrow.in/cart">Shoping Cart</a>
                    </li>
                    <li>
                        <a href="https://www.parrotcrow.in/checkout">Checkout</a>
                    </li>
                </ul>
                <ul className="menu-2">
                    <li className="heart-icon">
                        <a href="https://www.parrotcrow.in/collections/all">
                            <FontAwesomeIcon icon={faHeart} />
                        </a>
                    </li>
                    <li className="user-icon">
                        <a href="https://www.parrotcrow.in/account">
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                    </li>
                </ul>
               </div> 
            </div>
            <div className="container desktop">
                <div className="nav-2">
                    <div className="brand-logo">
                        <a href="https://www.parrotcrow.in">
                            <img src="/images/logo.svg" />
                        </a>
                    </div>
                    <ul className="menu">
                        <li>
                        <a href="" onClick={()=>setShop(!Shop)}>Shop <FontAwesomeIcon icon={faChevronDown} /></a>
                        </li>
                        <li style={{position:"relative"}}>
                        <span className="megamenu-label green" >
                                HUGE Profit
                        </span>
                            <a href="https://www.parrotcrow.in/pages/wholesale-kids-wear-manufacturer-tirupur">Wholesale</a>
                        </li>
                        <li>
                            <a href="https://www.parrotcrow.in/pages/contact-us">Contact</a>
                        </li>
                        <li style={{position:"relative"}}>
                            <span className="megamenu-label red" >
                                Sale
                            </span>
                            <a href="https://www.parrotcrow.in/collections/clearance-kids-wear" style={{color:"red"}}>Clearance</a>
                        </li>
                        <li>
                            <a href="https://www.parrotcrow.in/pages/cloth-masks-wholesale" style={{color:"green"}}>Mask</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <DropDown shop={Shop}/>
        <HeaderrMobile/>
    </>
        )
}
export default Header;



const DropDown=(props)=>{
    console.log(props.shop)
return(
    <>
    
    <div className="shop-drop" style={props.shop?{top:"120px" ,zIndex:"200"}:{top:"-600px",zIndex:"200"}}>
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