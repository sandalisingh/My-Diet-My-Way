import Container from 'react-bootstrap/Container'
import {Col, Row} from "react-bootstrap"

function HighlightBox(props) {
    let altCol1, altCol2;
    altCol1 = <Col className='MidText' xs={12} md={12} lg={6}>
                <img className="RoundImage GreyPicture" src={props.HighlightImg} alt={props.HighlightAltImg} />
            </Col>
    altCol2 = <Col xs={12} md={12} lg={6}>
                <div>
                    <h5 className='MidText UppercaseText NonCursiveFont VySmFont GreenFontShade'>{props.HighlightTitle}</h5>
                    <p className='MidText NonCursiveFont VySmFont GreenFontShade'>{props.HighlightText}</p>
                </div>
            </Col>
    if( props.SecondChild === "true") {
        let temp = altCol1;
        altCol1 = altCol2;
        altCol2 = temp;
    } 

    return (
    <div className="FullWidthContainer">
    <Container >
        <Row>
            {altCol1}
            {altCol2}
        </Row>
    </Container>
    </div>
 );
}

export default HighlightBox;