// import { Carousel } from 'react-bootstrap';

function CarouselSingle (props) {
    return (
        <div className='VyLightGreenBox' id="borderedBox">
            <h3 style={{color:"#F7DDDE"}} className='VySmFont NonCursiveFont'>{props.Ques}</h3>
            <p className='VySmFont NonCursiveFont GreyFontShade'>{props.Ans}</p>
        </div>
    );
}

export default CarouselSingle;