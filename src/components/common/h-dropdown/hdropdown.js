import React from "react";
import "./hdropdown.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
const DropDown=(props)=>{
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
                                   
                                        <ul className="boy-list cat-list">
                                            <li>
                                                <a href="https://www.parrotcrow.in/collections/boys-t-shirts">
                                                    T- Shirts
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.parrotcrow.in/collections/boys-polos">
                                                    Polos
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.parrotcrow.in/collections/boys-t-shirts">
                                                    Shorts
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.parrotcrow.in/collections/jeans">
                                                    Jeans
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.parrotcrow.in/collections/jogger">
                                                    Joggers
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="cat-hover"> <a href="https://www.parrotcrow.in/collections/boys" className="boys-button cat-button">Shop Boys <FontAwesomeIcon icon={faAngleDoubleRight} /></a></div>
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
                                        <ul className="girl-list cat-list">
                                            <li>
                                                <a href="https://www.parrotcrow.in/collections/girls-t-shirts/retail">
                                                    T-Shirts
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.parrotcrow.in/collections/girls-capri/retail">
                                                    Capri
                                                </a>
                                            </li>
                                            {/* <li>
                                                <a href="/collections/shorts-1/retail">
                                                    Shorts
                                                </a>
                                            </li> */}
                                        </ul>
                                            <div className="cat-hover"> <a className="girls-button cat-button" href="https://www.parrotcrow.in/collections/girls">Shop Girls <FontAwesomeIcon icon={faAngleDoubleRight} /></a></div>
                                        </div >
                                </div>
                            </div>
                        </div>
        </>
    )
    }
    
export default DropDown;



