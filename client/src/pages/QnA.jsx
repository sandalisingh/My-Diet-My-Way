import React, { useState } from "react";

import '../App.css';
import SingleQnA from "../Components/SingleQnA"

function QnA(){
    // const [isAsk, setIsAsk] = useState(false);
    const [isAskElement, setIsAskElement] = useState(null);
    // let noWidth = {display:"none"};
    // let fullWidth = {display:"block"}

    const MouseOver = (event) => {
        // setIsAsk(true);
        setIsAskElement(
            <input 
                // style={{fullWidth}}
                className="SearchInput QuesBox SmMdFont CursiveFont " 
                type="text" 
                placeholder='Type a Question...'
            />
        );
    }

    const MouseOut = (event) => {
        setIsAskElement( null );
    }

    let QnAList = [
        {
            _id: 1,
            Ques: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed augue lacus viverra vitae congue eu consequat. Fermentum et sollicitudin ac orci phasellus egestas tellus. Rhoncus urna neque viverra justo nec ultrices dui. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Non consectetur a erat nam at. Diam sollicitudin tempor id eu nisl nunc. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Vestibulum morbi blandit cursus risus. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Consectetur adipiscing elit duis tristique. Sit amet justo donec enim diam. Sed arcu non odio euismod lacinia at quis risus sed. Facilisis sed odio morbi quis commodo odio."
        },{
            _id: 2,
            Ques: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed augue lacus viverra vitae congue eu consequat. Fermentum et sollicitudin ac orci phasellus egestas tellus. Rhoncus urna neque viverra justo nec ultrices dui. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Non consectetur a erat nam at. Diam sollicitudin tempor id eu nisl nunc. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Vestibulum morbi blandit cursus risus. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Consectetur adipiscing elit duis tristique. Sit amet justo donec enim diam. Sed arcu non odio euismod lacinia at quis risus sed. Facilisis sed odio morbi quis commodo odio."
        },{
            _id: 3,
            Ques: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed augue lacus viverra vitae congue eu consequat. Fermentum et sollicitudin ac orci phasellus egestas tellus. Rhoncus urna neque viverra justo nec ultrices dui. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Non consectetur a erat nam at. Diam sollicitudin tempor id eu nisl nunc. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Vestibulum morbi blandit cursus risus. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Consectetur adipiscing elit duis tristique. Sit amet justo donec enim diam. Sed arcu non odio euismod lacinia at quis risus sed. Facilisis sed odio morbi quis commodo odio."
        },{
            _id: 4,
            Ques: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed augue lacus viverra vitae congue eu consequat. Fermentum et sollicitudin ac orci phasellus egestas tellus. Rhoncus urna neque viverra justo nec ultrices dui. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Non consectetur a erat nam at. Diam sollicitudin tempor id eu nisl nunc. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Vestibulum morbi blandit cursus risus. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Consectetur adipiscing elit duis tristique. Sit amet justo donec enim diam. Sed arcu non odio euismod lacinia at quis risus sed. Facilisis sed odio morbi quis commodo odio."
        },{
            _id: 5,
            Ques: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed augue lacus viverra vitae congue eu consequat. Fermentum et sollicitudin ac orci phasellus egestas tellus. Rhoncus urna neque viverra justo nec ultrices dui. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Non consectetur a erat nam at. Diam sollicitudin tempor id eu nisl nunc. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Vestibulum morbi blandit cursus risus. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Consectetur adipiscing elit duis tristique. Sit amet justo donec enim diam. Sed arcu non odio euismod lacinia at quis risus sed. Facilisis sed odio morbi quis commodo odio."
        },{
            _id: 6,
            Ques: "6Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed augue lacus viverra vitae congue eu consequat. Fermentum et sollicitudin ac orci phasellus egestas tellus. Rhoncus urna neque viverra justo nec ultrices dui. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Non consectetur a erat nam at. Diam sollicitudin tempor id eu nisl nunc. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Vestibulum morbi blandit cursus risus. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Consectetur adipiscing elit duis tristique. Sit amet justo donec enim diam. Sed arcu non odio euismod lacinia at quis risus sed. Facilisis sed odio morbi quis commodo odio."
        },{
            _id: 7,
            Ques: "7Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed augue lacus viverra vitae congue eu consequat. Fermentum et sollicitudin ac orci phasellus egestas tellus. Rhoncus urna neque viverra justo nec ultrices dui. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Non consectetur a erat nam at. Diam sollicitudin tempor id eu nisl nunc. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Vestibulum morbi blandit cursus risus. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Consectetur adipiscing elit duis tristique. Sit amet justo donec enim diam. Sed arcu non odio euismod lacinia at quis risus sed. Facilisis sed odio morbi quis commodo odio."
        },{
            _id: 8,
            Ques: "8Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed augue lacus viverra vitae congue eu consequat. Fermentum et sollicitudin ac orci phasellus egestas tellus. Rhoncus urna neque viverra justo nec ultrices dui. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Non consectetur a erat nam at. Diam sollicitudin tempor id eu nisl nunc. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Vestibulum morbi blandit cursus risus. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Consectetur adipiscing elit duis tristique. Sit amet justo donec enim diam. Sed arcu non odio euismod lacinia at quis risus sed. Facilisis sed odio morbi quis commodo odio."
        },{
            _id: 9,
            Ques: "9Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Sed augue lacus viverra vitae congue eu consequat. Fermentum et sollicitudin ac orci phasellus egestas tellus. Rhoncus urna neque viverra justo nec ultrices dui. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Non consectetur a erat nam at. Diam sollicitudin tempor id eu nisl nunc. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Vestibulum morbi blandit cursus risus. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Consectetur adipiscing elit duis tristique. Sit amet justo donec enim diam. Sed arcu non odio euismod lacinia at quis risus sed. Facilisis sed odio morbi quis commodo odio."
        }
    ]
    return(
        <div>
        { QnAList.map((item)=> (
            <SingleQnA key = {item._id} id = {item._id}  Ques={item.Ques} Ans={item.Ans}/>
        ) ) }

       
        <div onMouseOver={MouseOver} onMouseOut={MouseOut} className="AddQues Shadow ToCenter "> 
            <h2 className='LgFont NavBarText' style={{fontFamily:"'Corinthia', cursive"}}>?</h2> 
            <div >{isAskElement}</div>
        </div>
        </div>
    );
}

export default QnA;