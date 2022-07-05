import HighlightBox from "./HighlightBox";
import LineTitle from "./LineTitle";

function Highlights() {
    return (
    <div className=""  style={{marginTop:"3%"}}><br></br>
        <LineTitle OnlyLine={false} Title="Highlights"/>
        <div className="BigContainer" >
            <HighlightBox 
                HighlightTitle="Highlight One"
                HighlightText="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. "
                HighlightImg="Plate1.gif"
                HighlightAltImg="Highligt1Missing"
            />

            <HighlightBox 
                HighlightTitle="Highlight Two"
                HighlightText="Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum."
                HighlightImg="Plate2.gif"
                HighlightAltImg="Highligt2Missing"
                SecondChild="true"
            />

            <HighlightBox 
                HighlightTitle="Highlight Three"
                HighlightText="et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. "
                HighlightImg="Plate3.gif"
                HighlightAltImg="Highligt3Missing"
            />
        </div>
        <LineTitle OnlyLine={true} />
    </div>
 );
}

export default Highlights;