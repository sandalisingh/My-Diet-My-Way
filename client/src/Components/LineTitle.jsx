function LineTitle(props) {
    let addClass = "";
    let element = null;
    if(props.NoLine === true) {
        if(props.Light === true){
            addClass = "LightGreenFontShade";
        }
        element = <h2 className={addClass+" CursiveFont MdFont"}>{props.Title}</h2>;
    }else if (props.OnlyLine === true) {
        if(props.Light === true){
            addClass = "LightLine";
        }
        element = <div><div className={addClass+" LineTextLine"} style={{}}></div><br></br><br></br></div>;
    }else{
        if(props.Light === true){
            addClass = "LightGreenFontShade LightLine";
        }
        element = <h2 className={addClass+" LineTextLine CursiveFont MdFont"}>{props.Title}</h2>;
    }

    return(
        <div>
       {element}
       </div>
    );
}

export default LineTitle;