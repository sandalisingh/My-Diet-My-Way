import CarouselBigBox from '../Components/CarouselBigBox';
import ColoredBoxSet from '../Components/ColoredBoxSet';
import BigHeading from "../Components/BigHeading"
import LineTitle from '../Components/LineTitle';
import GetInTouch from "../Components/GetInTouch"

function About(){
    let intro = {
            Title : <small>Dietitian</small>,
            Content: <span><h1><i>Rashu Malhotra</i></h1><br></br>
        <small>M.sc  Foods and Nutrition, B.Ed.<br></br>
        (Online Consulation Available)<br></br>
        </small>
    </span>
    };

    let AboutList = [
        {
            _id:2,
            Color: "#CCD1E4",
            Title: <span>Get detailed and<br></br> systematic diet charts</span>,
            Content: <span>
                Weekly consultation over the phone <br></br>
                Diet plans @WhatsApp/ SMS/Email.<br></br>
                Pay thru PayTM/Mobiwik/Internet banking/Cash/Cheque
            </span>
        },{
            _id:3, Color: "#CCD1E4",
            Title: "Single Consultation only ",
            Content: <span>
                Includes general dietary suggestions and modifications required. 
                No diet plan provided.<br></br>
            </span>
        },{
            _id:4, Color: "#CCD1E4",
            Title: <span>Consultation <br></br>with Diet plan</span>,
            Content: <span>     
                Includes general dietary suggestions and modifications required
                 with single diet plan and one follow up included<br></br>
            </span>
        },{
            _id:7, Color: "#CCD1E4",
            Title: <span>Weight loss or gain <br></br> Body Building</span>,
            Content: <span>
                1 month - you just want to try it out<br></br>
                3 months - you are committed<br></br>
                6 months - you want to make lifestyle changes<br></br>
            </span>
        },{
            _id:8, Color: "#CCD1E4",
            Title: <span>Weight loss<br></br> with any disease</span>,
            Content: <span>like diabetes, BP, Thyroid, PCOD etc</span>
        },{
            _id:5, Color: "#CCD1E4",
            Title: <span>Consultation for<br></br>Disease Specific<br></br>or disorder</span> ,
            Content: <span className='VySmFont'>   
                Single diet plan for specific diseases like, Thyroid, Diabetes, PCOD,  Celiac disease, food allergies, etc. One follow up included.<br></br>
            </span>
        }
    ];

    // let DietList = {
    //     _id: 1, Color: "#D9D7F1",
    //     Title : "SERVICES / DIET PLANS OFFERED",
    //     Content: <span><Row>
    //                     <Col sm={4}><li>Healthy Living</li>
    //                     <li>Weight Loss</li>
    //                     <li>Weight Gain</li></Col>
    //                     <Col sm={4}><li>Body Building</li>
    //                     <li>Therapeutic diets</li>
    //                     <li>Diabetes</li>
    //                     <li>Hypertention</li></Col>
    //                     <Col sm={4}><li>Thyroid</li>
    //                     <li>Pregnancy</li>
    //                     <li>Clear skin</li></Col>
    //                 </Row></span>,
        
    // };

    return(
        <div>
            <BigHeading
                Image="Maam.gif"
                Title={intro.Title}
                Content = {intro.Content}
            />

            <GetInTouch />

            <div className='DarkGreenBox' >
                <LineTitle Light={true} Title="ABOUT"/>
                <div className='container'>
                    <ColoredBoxSet 
                        AboutList={AboutList}
                    />
                </div>
                <LineTitle OnlyLine={true} Light={true}/>
            </div>

            <CarouselBigBox Title="Succes stories from our lovely clients"/>
        </div>
    );
}

export default About;