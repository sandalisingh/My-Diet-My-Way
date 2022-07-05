import React, {useState} from "react";

import LineTitle from "../Components/LineTitle"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function GetInTouch() {
    const [style1, setStyle1] = useState({display: 'none'});
    const [style2, setStyle2] = useState({display: 'block'});

    return(
        <div 
            onMouseEnter={e => {
                setStyle1({display: 'block'});
                setStyle2({display: 'none'});
            }}
            onMouseLeave={e => {
                setStyle1({display: 'none'});
                setStyle2({display: 'block'});
            }} 
            className="Contact"
        >   
            <div className="outer">
                {/* <div className="middle"> */}
                    {/* <div className="inner"> */}
                        <div className="middle" style={style2} ><br></br><br></br><br></br>
                            <LineTitle  NoLine={true} Light={false} Title="Get In Touch!"/>
                        </div>
                    
                        <div className="middle" ><br></br><br></br><br></br>
                            <div className="inner ">
                            <div style={style1} className="ContactsIconAndText">
                                <a href="tel:+91-9910584860" className="NavBarText CursiveFont   ">
                                    <FontAwesomeIcon icon={faPhone} /> Call Me
                                </a><br></br>
                                <a className="NavBarText CursiveFont   " href='mailto:dt.rashumalhotra@gmail.com'>
                                    <FontAwesomeIcon icon={faEnvelope} /> Email Me
                                </a>
                            </div></div>
                        </div>  
                    {/* </div>            */}
                {/* </div> */}
            </div>         
        </div>
    );
}

export default GetInTouch;