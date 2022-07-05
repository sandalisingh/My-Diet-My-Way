import React from "react"; 
import { Form, Button } from "react-bootstrap";

function AddBlog() {
    return(
        <div className="container DarkGreenBox" style={{padding:"3% 3% 0.1%", marginBottom:"0.2px"}}>
        <Form action="/addblog" method="post" style={{color:"#48466D"}}>
        <h2 className="MdFont CursiveFont LightGreenFontShade">ADD BLOG</h2>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="InputLabel">Title</Form.Label>
          <Form.Control className="InputFocusGreen" name="BlogTitle" type="text" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="InputLabel">Content</Form.Label>
          <Form.Control className="InputFocusGreen" name="BlogContent" type="text" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="InputLabel">Image</Form.Label>
          <Form.Control className="InputFocusGreen" name="BlogImage" type="text" required/>
        </Form.Group>

        <Button className="ButtonStyle" variant="primary" type="submit">Submit</Button>
      </Form>
      </div>
    );
}

export default AddBlog;