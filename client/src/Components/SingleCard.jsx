import Card from 'react-bootstrap/Card'
import {Col} from "react-bootstrap"


function SingleCard(props) {
    return(
        <Col className='outer FixedHeightContainer' md={12} lg={4}>
        <div className='middle CurvedContainer'>
            <Card   style={{backgroundColor:"#F1D4D4"}}>
            <Card.Body className="inner OneCard">
                <div className='MidText UppercaseText NonCursiveFont SmMdFont GreenFontShade'>
                    {props.Title}
                </div>
                <div className='MidText NonCursiveFont VySmFont GreenFontShade'>
                    {props.Content}
                </div>
            </Card.Body>
            </Card>
        </div>
        </Col>
    ); 
}

export default SingleCard;