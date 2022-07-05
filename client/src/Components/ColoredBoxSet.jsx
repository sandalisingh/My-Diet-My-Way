import SingleCard from "../Components/SingleCard"
import {Row} from "react-bootstrap"

function ColoredBoxSet(props) {
    // let colors = ["#006778", "2", "3", "4"];
    return(
        <Row className="g-4">
          {props.AboutList.map((item) => (
            <SingleCard  key = {item._id} id = {item._id} Color={item.Color} Title={item.Title} Content={item.Content}/> 
          ))}
        </Row>
    );
}

export default ColoredBoxSet;