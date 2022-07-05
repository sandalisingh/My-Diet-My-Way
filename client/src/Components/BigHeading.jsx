import ImageBox from "./ImageBox";
import Container from 'react-bootstrap/Container'
import {Col, Row} from "react-bootstrap"

function BigHeading(props){
    let element = null;
    if ( props.NoImage === true ) {
        element = <div className="">

                    <h1 className="CursiveFont VyLgFont TopNavMargin GreenFontShade">
                        {props.Title}
                    </h1> 

                    <h4 className="ThirdFontShade SmFont NonCursiveFont UppercaseText">  
                    {props.Content}
                    </h4>

                </div>
    } else {
        element = <Container><Row>
                    <Col className='' xs={12} md={12} lg={6}>
                        <ImageBox 
                            PictureSource={props.Image} 
                            PictureAlternateText="ProfilePictureMissing"
                        />
                    </Col>
                    <Col xs={12} md={12} lg={6} 
                        className="AnotherShadeBox"
                    >
                        <div className="">

                            <h1 className="CursiveFont VyLgFont TopNavMargin GreenFontShade">
                                {props.Title}
                            </h1> 

                            <h4 className="ThirdFontShade SmFont NonCursiveFont UppercaseText">  
                            {props.Content}
                            </h4>

                        </div>
                    </Col>
                    </Row></Container>
    }
    return(
        <div className="BigHeadingBox">
            {element}
        </div>
    );
}

export default BigHeading;