import {Row, Col} from 'react-bootstrap'
import ImageBox from './ImageBox';

function SingleBlog(props) {
    function handleClick(event) {
        fetch(`/blogs/deletion?delID=${encodeURIComponent(event)}`)
          .then(response => response.json())
          .then(state => this.setState(state));
        console.log("to be deleted - ");
        console.log(encodeURIComponent(event));
        window.location.reload(false);      //to refresh the page
    }

    return(
        <div className="container">
            <Row className='BlogBox DarkGreenBox LightGreenFontShade'>
                <Col className="maskImage " xs={12} md={12} lg={6}>
                    <ImageBox 
                        PictureSource={props.Image} 
                        PictureAlternateText="ProfilePictureMissing"
                    />
                </Col>
                <Col xs={12} md={12} lg={6}>
                    <h2 className="CursiveFont">{props.Title}</h2>
                    <p className="NonCursiveFont">{props.Content}</p>
                    <small><i>{props.Date}</i></small>
                    <i onClick={() => handleClick(props.id)} className="icon DeleteIcon fal fa-trash"></i>
                    {/* <i  class="fa-solid fa-trash-can"></i> */}
                </Col>
            </Row>
        </div>
    );
}

export default SingleBlog;