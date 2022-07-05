import FormSet from "./FormSet";
import Container from 'react-bootstrap/Container'
import {Col, Row} from "react-bootstrap"
import LineTitle from "./LineTitle";

function FooterForm() {
    return (
    <div className="DarkGreenBox" style={{padding:"3% 3% 0.1%", marginBottom:"0.2px"}}>
        <LineTitle OnlyLine={true} Light={true}/>
        <Container >
            <Row>
                <Col xs={12} md={12} lg={5}>
                    <FormSet 
                        Title="Feedback"
                        FirstInput="NAME"
                        SecondInput="EMAIL ID"
                        ThirdInput="SAY SOMETHING"
                        PhoneNumberInput="false"
                        />
                </Col>
                <Col xs={0} md={0} lg={2}>
                </Col> <br></br><br></br><br></br>
                <Col xs={12} md={12} lg={5}>
                    <FormSet
                        Title="Newsletter"
                        FirstInput="NAME"
                        SecondInput="EMAIL ID"
                        ThirdInput="PHONE NO"
                        PhoneNumberInput="true"
                        />
                </Col>
            </Row>
        </Container>
        <LineTitle OnlyLine={true} Light={true}/>
    </div> 
 );
}

export default FooterForm;