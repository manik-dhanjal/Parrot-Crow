import React,{useEffect,useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faInstagram,faTwitter,faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPlus ,faMinus} from "@fortawesome/free-solid-svg-icons";
import "./footer.style.css"
import data from "./footer.data"
const screenDetect=()=>{

}
const Footer =()=>{
    return(
        <footer>
        <div className="f-sec1">
            <div className="container">
                <div className="col-grid">
                    <div className="col-icon">
                        <svg
                            fill="white"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            enable-background="new 0 0 24 24"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlSpace="preserve"
                        >
                            <g>
                                <g>
                                    <path
                                        d="M11.9,22.8C6,22.8,1.1,18,1.1,12c0-6,4.8-10.8,10.8-10.8c6,0,10.8,4.8,10.8,10.8c0,0.2-0.2,0.4-0.5,0.4
c-0.2,0-0.4-0.2-0.4-0.4c0-5.5-4.5-9.9-9.9-9.9C6.5,2.1,2,6.6,2,12c0,5.4,4.4,9.9,9.9,9.9c0.3,0,0.5,0.2,0.5,0.5
C12.4,22.7,12.2,22.8,11.9,22.8z"
                                    ></path>
                                </g>
                                <g>
                                    <path
                                        d="M12,22.8c-0.6,0-1.1,0-1.7-0.1c-2.9-0.4-5.4-2-7.1-4.3c-1.7-2.3-2.4-5.2-1.9-8c0.4-2.9,2-5.4,4.3-7.1
c4.8-3.5,11.6-2.4,15.1,2.4c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.5,0.1-0.6-0.1C16.7,1.8,10.5,0.8,6.1,4c-2.1,1.6-3.5,3.9-4,6.5
c-0.4,2.6,0.2,5.2,1.8,7.4c1.6,2.1,3.9,3.6,6.5,4c2.6,0.4,5.2-0.2,7.4-1.8c0.2-0.2,0.5-0.1,0.6,0.1c0.2,0.2,0.1,0.5-0.1,0.6
C16.4,22.1,14.2,22.8,12,22.8z"
                                    ></path>
                                </g>
                                <g>
                                    <path
                                        d="M11.9,16.8c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.8,4.7-4.8c2.6,0,4.8,2.1,4.8,4.8c0,0.2-0.2,0.4-0.5,0.4
c-0.3,0-0.5-0.2-0.5-0.4c0-2.1-1.7-3.9-3.8-3.9c-2.1,0-3.8,1.7-3.8,3.9c0,2.1,1.7,3.8,3.8,3.8c0.3,0,0.5,0.2,0.5,0.5
C12.4,16.6,12.2,16.8,11.9,16.8z"
                                    ></path>
                                </g>
                                <g>
                                    <path
                                        d="M11.9,16.8c-0.7,0-1.3-0.2-1.9-0.4c-1.2-0.5-2-1.5-2.5-2.7c-0.5-1.2-0.4-2.5,0.1-3.6C8.1,8.9,9,8,10.2,7.6
c1.2-0.4,2.5-0.4,3.6,0.1c1.2,0.5,2,1.5,2.5,2.7c0.1,0.2,0,0.5-0.3,0.6c-0.2,0.1-0.5,0-0.6-0.2c-0.4-1-1.1-1.7-2-2.1
c-0.9-0.4-2-0.5-2.9-0.1c-1,0.4-1.7,1.1-2.1,2c-0.4,1-0.4,2-0.1,3c0.4,1,1.1,1.7,2,2.1c0.9,0.4,2,0.5,2.9,0.1
c0.2-0.1,0.5,0,0.6,0.2c0.1,0.3,0,0.5-0.3,0.6C13.1,16.7,12.5,16.8,11.9,16.8z"
                                    ></path>
                                </g>
                                <g>
                                    <path
                                        d="M19.3,18.2c-1.9,0-3.5-1.6-3.5-3.5v-2.4c0-0.2,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5v2.4c0,1.4,1.2,2.6,2.6,2.6
c1.4,0,2.6-1.2,2.6-2.6V12c0-0.3,0.2-0.5,0.4-0.5c0.3,0,0.5,0.2,0.5,0.5v2.7C22.7,16.6,21.2,18.2,19.3,18.2z"
                                    ></path>
                                </g>
                                <g>
                                    <path d="M16.2,13.5c-0.3,0-0.5-0.2-0.5-0.5V8.8c0-0.3,0.2-0.4,0.5-0.4c0.3,0,0.5,0.2,0.5,0.4v4.3C16.7,13.3,16.5,13.5,16.2,13.5z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <a
                        className="col-head"
                        href="mailto:customerservice@parrotcrow.in"
                    >
                        <strong>
                            customerservice@parrotcrow.in
                        </strong>
                    </a>

                    <div className="col-subhead">
                        Contact us for any question
                    </div>
                </div>
                <div className="col-grid">
                    <div className="col-icon">
                        <svg
                            fill="white"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            enable-background="new 0 0 24 24"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlSpace="preserve"
                        >
                            <g>
                                <g>
                                    <path
                                        d="M2.4,3.1C2.4,3.1,2.4,3.1,2.4,3.1C2.2,3.1,2,2.9,2,2.7l0-0.2c0-0.1,0-0.2,0-0.3C2,2,2.2,1.8,2.4,1.8H3
c0.2,0,0.4,0.2,0.4,0.4c0,0.2-0.2,0.4-0.4,0.4c-0.1,0-0.1,0-0.1,0.1C2.8,3,2.7,3.1,2.4,3.1z"
                                    ></path>
                                </g>
                                <g>
                                    <path
                                        d="M22.6,22.9c-0.1,0-0.2,0-0.3,0l-0.2,0c-1.8,0-3.5-0.3-5.1-0.8C10.1,20.1,4.7,14.7,2.8,7.8C2.3,6.2,2,4.5,2,2.7
C2,2.1,2.5,1.8,3,1.8h6.5c0,0,0.1,0,0.1,0c0.5,0.1,0.8,0.5,0.8,0.9v4.4c0,0.6-0.4,1-1,1H8.9c0.7,3.7,3.7,6.7,7.6,7.3l0.2,0v-0.1
c0-0.5,0.4-1,1-1h4.4c0.5,0,0.8,0.3,1,0.8c0,0.1,0,0.1,0,0.2v7.1C23.1,22.7,22.8,22.9,22.6,22.9z M3,2.7C2.9,2.7,2.9,2.7,3,2.7
c0,1.7,0.2,3.3,0.6,4.9c1.9,6.5,7.1,11.8,13.6,13.6c1.6,0.4,3.3,0.7,4.9,0.7l0,0v-6.6c0,0,0,0,0-0.1c0,0,0-0.1-0.1-0.1h-4.4
c-0.1,0-0.1,0-0.1,0.1v0.5c0,0.2-0.1,0.4-0.4,0.4l-0.6,0.1c0,0-0.1,0-0.1,0c-4.3-0.6-7.8-4.1-8.4-8.5c0-0.1,0-0.1,0-0.1
c0-0.2,0.2-0.4,0.5-0.4h1.1c0.1,0,0.1,0,0.1-0.1V2.7c0-0.1,0-0.1-0.1-0.1c0,0,0,0-0.1,0H3z"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <a
                        className="col-head"
                        href="tel:+919345393943"
                    >
                        <strong>+(91) 93453 93943</strong>
                    </a>

                    <div className="col-subhead">
                        Mon - Fri: 9:00am - 5:00pm
                    </div>
                </div>
                <div className="col-grid">
                    <div className="col-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="512px"
                            viewBox="0 0 60 60"
                            width="512px"
                        >
                            <g>
                                <g
                                    id="Page-1"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    <g
                                        id="006---Call"
                                        fill="rgb(0,0,0)"
                                        fill-rule="nonzero"
                                    >
                                        <path
                                            id="Shape"
                                            d="m30 0c-10.9083086.00439016-20.95532575 5.92716181-26.24109703 15.4692705-5.28577129 9.5421086-4.97790395 21.2008819.80409703 30.4507295l-4.446 11.406c-.24886295.7028792-.08606091 1.4858367.42236253 2.0312517.50842343.5454149 1.27803872.7627149 1.99663747.5637483l12.872-3.7c10.9695448 6.0978506 24.5755501 4.7228661 34.1033019-3.4463835 9.5277519-8.1692496 12.9633064-21.4059761 8.6111796-33.1777086-4.3521269-11.77173253-15.5719974-19.59020223-28.1224815-19.5969079zm0 58c-4.8994146.0059712-9.7139537-1.2788027-13.959-3.725-.2383497-.1374002-.5218618-.1734247-.787-.1l-13.263 3.848 4.62-11.85c.11699318-.2999878.08237734-.6379576-.093-.908-6.98692093-10.7410422-5.79303-24.854029 2.89896834-34.26871 8.69199836-9.41468088 22.66494176-11.72955111 33.92866106-5.62089491 11.2637192 6.10865621 16.9450552 19.08263761 13.7952411 31.50301291-3.1498142 12.4203753-14.3273212 21.1189446-27.1408705 21.121592z"
                                            data-original="#000000"
                                            class="active-path"
                                            data-old_color="#000000"
                                            fill="#FFFFFF"
                                        ></path>
                                        <path
                                            id="Shape"
                                            d="m38.224 5.333c-.5246705-.17535041-1.0921496.10782949-1.2675.6325s.1078295 1.09214959.6325 1.2675c5.3809442 1.80562684 9.9527305 5.4510873 12.911 10.295.186314.3049262.5211514.4872923.8783822.4784027.3572309-.0088896.6825832-.2076843.8535-.5215.1709169-.3138158.1614318-.6949765-.0248822-.9999027-3.2030073-5.2473688-8.1546164-9.19647454-13.983-11.152z"
                                            data-original="#000000"
                                            class="active-path"
                                            data-old_color="#000000"
                                            fill="#FFFFFF"
                                        ></path>
                                        <path
                                            id="Shape"
                                            d="m50.161 34.6-6.961-.77c-.9295345-.1039641-1.8528698.2419534-2.4852804.9310833-.6324105.6891298-.8979442 1.638708-.7147196 2.5559167.0803466.3388406-.0452493.6933262-.321.906-3.55 2.415-9.622.845-14.12-3.653s-6.071-10.57-3.654-14.121c.2110357-.2743129.5630035-.3998481.9-.321.9173575.1841464 1.867487-.0810627 2.5568577-.7136943.6893707-.6326315 1.035012-1.5565439.9301423-2.4863057l-.774-6.966c-.1882457-1.65898141-1.6528587-2.87331243-3.318-2.751-3.1666627.10350963-6.1830135 1.37516434-8.468 3.57-6.532 6.538-3.868 19.845 5.951 29.663 4.3107217 4.481428 9.8129978 7.636788 15.858 9.094 1.4059739.3034315 2.8396734.4599386 4.278.467 3.5334465.1308894 6.9697518-1.1721513 9.528-3.613 2.1939875-2.2854563 3.4651969-5.3015956 3.569-8.468.1181541-1.6664009-1.0956181-3.1308578-2.755-3.324zm-2.228 10.378c-2.73 2.73-6.987 3.654-11.98 2.6-5.6642201-1.3761979-10.8174111-4.3418935-14.853-8.548-9.041-9.038-11.709-21.076-5.951-26.83 1.9422938-1.8465255 4.4981621-2.91060999 7.177-2.988h.075c.5730866-.01066182 1.0620678.41234572 1.134.981l.774 6.966c.0306639.2942755-.0805249.5855827-.2994679.7845859-.218943.1990033-.5195125.2819542-.8095321.2234141-1.1265337-.2427182-2.2888447.2131442-2.95 1.157-2.946 4.332-1.273 11.494 3.893 16.66s12.329 6.84 16.66 3.891c.9432615-.6615856 1.3986517-1.8236973 1.156-2.95-.0597702-.29113.02478-.5932014.227-.811.1996411-.2201676.4924866-.331657.788-.3l6.965.773c.5968854.0770337 1.0281674.6090948.98 1.209-.0761879 2.6801887-1.1395519 5.2378176-2.986 7.182z"
                                            data-original="#000000"
                                            class="active-path"
                                            data-old_color="#000000"
                                            fill="#FFFFFF"
                                        ></path>
                                    </g>
                                </g>
                            </g>{" "}
                        </svg>
                    </div>
                    <div className="col-head">
                        <strong>Whatsapp</strong>
                    </div>
                    <div className="col-subhead">
                        Mon - Fri: 9:00am - 5:00pm
                    </div>
                </div>
                <div className="col">
                    <a
                        className="contact-btn"
                        href="https://www.parrotcrow.in/pages/contact-us"
                    >
                        Contact us
                    </a>
                </div>
            </div>
        </div>

        <div className="f-sec2">
            <div className="details container">
                <div className="d-col">
                    <FooterDropDown {...data.findArray}/>
                    <FooterDropDown {...data.followArray}/>
                </div>
                <div className="d-col">
                    <FooterDropDown {...data.infoArray}/>
                </div>
                <div className="d-col">
                    <FooterDropDown {...data.helpArray}/>
                </div>
                <div className="d-col">
                    <FooterDropDown {...data.parrotArray} />
                    <div className="f-logo">
                        <img src="/images/logo_footer.png" style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
            <div className="f-sec3 container">
                <h2 className="form-head">JOIN OUR NEWSLETTER</h2>
                <div className="contact-form">
                    <form action="https://parrotcrow.us19.list-manage.com/subscribe/post?u=2e3981b47ed4e645aeb225270&amp;id=2e2a2f6f7f"  method="post"    class="mailing-form" name="mc-embedded-subscribe-form" target="_blank"    >
                        <div class="group-input">
                            <input placeholder="E-mail address"  type="email" required="required" name="EMAIL" class="email"/>
                            <button  type="submit"  class="f-subscribe" >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
           <div className="f-copyright container">
                 Copyright © 2020, ParrotCrow. All Rights Reserved.
           </div>
        </div>
    </footer>
    )
}
export default Footer;


const FooterDropDown=(props)=>{
    const [Drop,setDrop]=useState(false);
    const [mobile,setMobile]=useState(true);
     const body=  document.querySelector("body");
    const SizeCheck=()=>{
        
        if(body.clientWidth>768&&(mobile||!Drop))
        {
            setMobile(false)
            setDrop(true)
            
        }
        else if(body.clientWidth<=768&&(!mobile||Drop))
        {
            setMobile(true) 
            setDrop(false)
        } 
    }
    useEffect(() => {
       SizeCheck()
        window.addEventListener("resize",SizeCheck)
        
    }, [])
    return(
        <>
         <h2 className="d-col-head" id={`${props.id}-head`} onClick={()=> mobile?setDrop(!Drop):setDrop(true)} >{props.title} <span className="minus-icon" style={Drop&&mobile?{display:'inline'}:{display:"none"}}><FontAwesomeIcon icon={faMinus} /></span> <span className="plus-icon" style={!Drop&&mobile?{display:'inline'}:{display:"none"}}><FontAwesomeIcon icon={faPlus} /></span></h2>
                    <ul className="d-col-list f-dropdown" id={props.id} style={Drop?{height:props.height}:{height:"0px"}} >
                        {props.list.map(({id,...otherProps})=><DropListItem key={id} {...otherProps}/>)}
                    </ul>
        </>
    )
}

const DropListItem=({link,item})=>{
    return(
        <li>
            <a href={link}>
                {item}         
            </a>
        </li>
    )
}