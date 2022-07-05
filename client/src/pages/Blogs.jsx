import React, {useState,useEffect} from 'react';
import '../App.css';
import LineTitle from "../Components/LineTitle"
import SingleBlog from '../Components/SingleBlog';
import { Col, Row } from 'react-bootstrap';

function Blogs(){

    const [ data, setData] = useState([]);
    
    const getData = () => {
        let url = 'http://localhost:3001/blogs'; //URL of the resource we want to fetch
        fetch(url).then((response) => response.json()).then((receivedData) => setData(receivedData));
    }

    //Runs on the first render
    //And any time any dependency value changes
    useEffect( () => getData(), [] );

    // let BlogObject = [{
    //         _id:1,
    //         Title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    //         Image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
    //         Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor consequat id porta nibh. Non pulvinar neque laoreet suspendisse. Porttitor massa id neque aliquam vestibulum morbi blandit. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Arcu dictum varius duis at consectetur lorem. Sit amet est placerat in. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Ornare aenean euismod elementum nisi quis eleifend. Elit eget gravida cum sociis natoque penatibus et. Aenean et tortor at risus viverra adipiscing at in tellus. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Urna neque viverra justo nec ultrices dui sapien eget mi. Sit amet mattis vulputate enim nulla aliquet porttitor lacus."
    //     },{
    //         _id:2,
    //         Title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    //         Image: "https://idowaz.com/blog/wp-content/uploads/2021/10/Healthy-Food-Doesnt-Have-To-Be-Expensive.jpg",
    //         Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor consequat id porta nibh. Non pulvinar neque laoreet suspendisse. Porttitor massa id neque aliquam vestibulum morbi blandit. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Arcu dictum varius duis at consectetur lorem. Sit amet est placerat in. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Ornare aenean euismod elementum nisi quis eleifend. Elit eget gravida cum sociis natoque penatibus et. Aenean et tortor at risus viverra adipiscing at in tellus. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Urna neque viverra justo nec ultrices dui sapien eget mi. Sit amet mattis vulputate enim nulla aliquet porttitor lacus."
    //     },{
    //         _id:3,
    //         Title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    //         Image: "https://media.glamour.com/photos/61bcb8f968c608fa532e0bbc/1:1/w_2000,h_2000,c_limit/healthy%20food%20delivery.jpg",
    //         Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor consequat id porta nibh. Non pulvinar neque laoreet suspendisse. Porttitor massa id neque aliquam vestibulum morbi blandit. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Arcu dictum varius duis at consectetur lorem. Sit amet est placerat in. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Ornare aenean euismod elementum nisi quis eleifend. Elit eget gravida cum sociis natoque penatibus et. Aenean et tortor at risus viverra adipiscing at in tellus. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Urna neque viverra justo nec ultrices dui sapien eget mi. Sit amet mattis vulputate enim nulla aliquet porttitor lacus."
    //     },{
    //         _id:4,
    //         Title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    //         Image: "https://www.morelandobgyn.com/hubfs/Imported_Blog_Media/GettyImages-854725402-1.jpg",
    //         Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor consequat id porta nibh. Non pulvinar neque laoreet suspendisse. Porttitor massa id neque aliquam vestibulum morbi blandit. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Arcu dictum varius duis at consectetur lorem. Sit amet est placerat in. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Ornare aenean euismod elementum nisi quis eleifend. Elit eget gravida cum sociis natoque penatibus et. Aenean et tortor at risus viverra adipiscing at in tellus. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Urna neque viverra justo nec ultrices dui sapien eget mi. Sit amet mattis vulputate enim nulla aliquet porttitor lacus."
    //     },
    // ]
    
    return(
        <div ><br></br>
        <Row className='container'>
        <Col xs={12} md={12} lg={2}>
            <LineTitle style={{display:"block"}} NoLine={true} Title="Blogs"/>
        </Col><Col xs={12} md={12} lg={10}>
            <input type="text" className='SmMdFont SearchInput CursiveFont ' placeholder='Search'/>
        </Col>    
        </Row>
        {/* { BlogObject.map((item)=> (
            <SingleBlog key = {item._id} id = {item._id} BlogObject={item}/>
        ) ) } */}
        { data && data.length>0 && data.map((item)=> (
            <SingleBlog key = {item._id} id = {item._id} Date={item.Date} Image={item.Image} Title={item.Title} Content={item.Content}/>
            ) ) }
        </div>
    );
}

export default Blogs;