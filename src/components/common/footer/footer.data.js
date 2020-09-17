import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faInstagram,faTwitter,faYoutube } from "@fortawesome/free-brands-svg-icons";

const footerData={
    findArray:{
    title:"Find us",
    id:"find",
    height:"405px",
    list:[
        {
            item:( <h2 className="d-col-head address-head">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" width="24px" class=""><g><path d="m424.472656 301h-113.214844l58.960938-94.078125c13.5625-21.511719 20.734375-46.382813 20.734375-71.921875 0-74.4375-60.5625-135-135-135-74.441406 0-135 60.5625-135 135 0 25.539062 7.167969 50.410156 20.710937 71.886719l58.984376 94.113281h-113.21875l-87.429688 211h511.902344zm-76.933594 120h94.183594l25.277344 61h-111.683594zm-22.46875 61h-138.386718l7.582031-61h123.03125zm104.222657-91h-85.578125l-7.648438-60h68.363282zm-278.339844-256c0-57.898438 47.101563-105 105-105 57.894531 0 105 47.101562 105 105 0 19.867188-5.570313 39.203125-16.132813 55.953125l-88.867187 141.800781-88.890625-141.832031c-10.539062-16.71875-16.109375-36.054687-16.109375-55.921875zm105 254.246094 36.503906-58.246094h13.367188l7.648437 60h-115.480468l7.460937-60h13.996094zm-148.480469-58.246094h67.75l-7.460937 60h-85.152344zm-37.292968 90h93.855468l-7.585937 61h-111.546875zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"></path><path d="m330.953125 135c0-41.355469-33.644531-75-75-75s-75 33.644531-75 75 33.644531 75 75 75 75-33.644531 75-75zm-120 0c0-24.8125 20.1875-45 45-45s45 20.1875 45 45-20.1875 45-45 45-45-20.1875-45-45zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF"></path></g> </svg>
            </h2>),
            link:"#",
            id:20
        },
        {
            item:(<p className="address-1">
            <strong>
                Production:<br />
                # 5 'Jaishree Building'<br />Amarjyothi Gardens<br />
                Railway feeder Road <br />Tirupur 641601<br />
            </strong>
        </p>),
            link:"#",
            id:16
        },
        {
            item:( <p className="address-2">
            <strong>
                Sales:<br /># 21 North End Road<br />
                Krishnaswa Nagar<br/> Ramanathapuram<br />
                Coimbatore 641045 <br /> India
            </strong>
            </p>),
            link:"#",
            id:17
        },
        {
            item:"+(91) 93453 93943",
            link:"tel:+919345393943",
            id:18
        },
        {
            item:"sales@parrotcrow.in",
            link:"mailto:sales@parrotcrow.in",
            id:19
        }
    ]
},
followArray:{
    title:"Follow us",
    id:"follow",
    height:"50px",
    list:[
        {
            item:(<FontAwesomeIcon icon={faTwitter} />),
            link:"https://twitter.com/parrotcrow",
            id:12
        },
        {
            item:(<FontAwesomeIcon icon={faFacebookF} />),
            link:"https://www.facebook.com/parrotcrow",
            id:13
        },
        {
            item:(<FontAwesomeIcon icon={faInstagram} />),
            link:"https://www.instagram.com/parrotcrow",
            id:14
        },
        {
            item:(<FontAwesomeIcon icon={faYoutube} />),
            link:"https://www.youtube.com/channel/UCPr1lhB3TpYVbuMb_V-SV_w",
            id:15
        }
    ]
},
infoArray:{
    title:"Information",
    id:"info",
    height:"170px",
    list:[
        {
            item:"Our Story",
            link:"https://parrotcrow.myshopify.com/pages/our-story",
            id:7
        },
        {
            item:"Wholesale",
            link:"https://parrotcrow.myshopify.com/pages/wholesale-kids-wear-manufacturer-tirupur",
            id:8
        },
        {
            item:"Improving Rural Schools",
            link:"https://parrotcrow.myshopify.com/pages/improve-rural-schools",
            id:9
        },
        {
            item:"Privacy Policy",
            link:"https://parrotcrow.myshopify.com/pages/privacy-policy",
            id:10
        },
        {
            item:"Terms & Conditions",
            link:"https://parrotcrow.myshopify.com/pages/terms-conditions",
            id:11
        }
    ]
},
helpArray:{
    title:"Help",
    id:"help",
    height:"140px",
    list:[
        {
            item:"Contact Us",
            link:"https://parrotcrow.myshopify.com/pages/contact-us",
            id:3
        },
        {
            item:"Shipping & Delivery",
            link:"https://parrotcrow.myshopify.com/pages/shipping-delivery",
            id:4
        },
        {
            item:"Returns & Cancellation",
            link:"https://parrotcrow.myshopify.com/pages/returns-cancellation",
            id:5
        },
        {
            item:"FAQs",
            link:"https://parrotcrow.myshopify.com/pages/parrot-crow-kids-wear-faq",
            id:6
        }
    ]
}
,parrotArray:{
    title:" My ParrotCrow",
    id:"my-parrot",
    height:"75px",
    list:[
        {
            item:"My Account",
            link:"https://parrotcrow.myshopify.com/account",
            id:1
        },
        {
            item:"Search",
            link:"https://parrotcrow.myshopify.com/search",
            id:2
        }
    ]
}

}

export default footerData;