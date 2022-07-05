function ImageBox(props){
    return(
        <div className="ImageOuterBox">
            <img  className="ImageBox"
                src={props.PictureSource} 
                alt={props.PictureAlternateText} 
                style={{zIndex:-1}}
                // className="ProfilePic"
            />
        </div>
    ); 
}

export default ImageBox;