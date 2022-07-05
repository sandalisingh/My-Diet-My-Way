import React, {useState} from "react"; 
import { Form, Button } from "react-bootstrap";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function FormSet (props) {
  let LastInput=null;
  const [value, setValue] = useState()

  if (props.PhoneNumberInput === "true") {
    LastInput = <Form.Group className="mb-3" controlId="formBasicFeedback">
                  <Form.Label className="InputLabel">PHONE NUMBER</Form.Label>
                  <PhoneInput
                    className="Input InputFocusGreen"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue} 
                    required 
                  />
                </Form.Group>
  } else if (props.PhoneNumberInput === "false") {
    LastInput = <Form.Group className="mb-3" controlId="formBasicFeedback">
                  <Form.Label className="InputLabel">{props.ThirdInput}</Form.Label>
                  <textarea className="InputFocusGreen Input" placeholder="Type..." required/>
                </Form.Group>
  }
   
  return (
      <Form style={{color:"#48466D"}}>
        <h2 className="MdFont CursiveFont LightGreenFontShade">{props.Title}</h2>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="InputLabel">{props.FirstInput}</Form.Label>
          <Form.Control className="InputFocusGreen" type="text" placeholder="Enter your name" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="InputLabel">{props.SecondInput}</Form.Label>
          <Form.Control className="InputFocusGreen" type="email" placeholder="Enter your email id" required/>
        </Form.Group>

        {LastInput}

        <Button className="ButtonStyle" variant="primary" type="submit">Submit</Button>
      </Form>
    );
}

export default FormSet;