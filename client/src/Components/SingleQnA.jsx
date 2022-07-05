import {Col, Row} from "react-bootstrap"

function SingleQnA(props) {
    return (
        <div className="container">
            <div className='outer'>
                <div className='middle CurvedContainer'  style={{backgroundColor:"#F1D4D4"}}>
                    <div className="inner BlogBox">
                        
                        <div className=' UppercaseText NonCursiveFont SmMdFont GreenFontShade'>
                        <Row><Col xs={1}>
                            <h2 className="LgFont" style={{fontFamily:"'Corinthia', cursive"}}>Q.</h2> 
                        </Col>
                        <Col xs={11}>
                            {props.Ques}
                        </Col></Row>
                        
                        </div>

                        <div className=' NonCursiveFont VySmFont GreenFontShade'>
                            {props.Ans}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleQnA;