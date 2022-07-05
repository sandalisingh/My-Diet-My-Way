// import CarouselSingle from "./CarouselSingle";
import CarouselBox from "./CarouselBox";
import LineTitle from "./LineTitle";

function CarouselBigBox(props) {
  
    return (
    // <div className="DecreaseTopMargin DarkGreenBox">
        <div className="LightGreenBox">
          <LineTitle Light={true} Title= {props.Title}/>
          <div className='container DecreaseTopMargin'>
            <CarouselBox />
          </div>
          <LineTitle OnlyLine={true} Light={true}/><br></br>
        </div> 
        
    // </div>
 );
}

export default CarouselBigBox;