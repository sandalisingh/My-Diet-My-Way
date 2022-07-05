import React, { useState, useEffect} from "react";
import LineTitle from "../Components/LineTitle"
import { Form, Button } from "react-bootstrap";


function Login2() {
 
  
     //----------------------------------- L O G  I N -----------------------------------------
  const [errorMessages, setErrorMessages] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDietitian, setIsDietitian] = useState(false);

  const database = [
    {
      username: "user1",
      email: "user1@gmail.com",
      password: "pass1"
    },
    {
      username: "user2",
      email : "user2@gmail.com",
      password: "pass2"
    },
    {
      username: "dietitianRashu",
      email: "dt.rashumalhotra@gmail.com",
      password: "Password"
    }
  ];

  const errors = {
    uname: "Invalid Username",
    email: "Invalid Email",
    pass: "Invalid Password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, email, pass } = document.forms[0];  //inputs from form

    // Find username in db
    const userData = database.find((user) => user.username === uname.value);
    // console.log(uname.value);
    // console.log(pass.value);

    // Compare password
    if (userData) {
      if (userData.email !== email.value) {
        // Invalid password
        console.log(email.value);
        setErrorMessages({ name: "email", message: errors.email });
        console.log(errorMessages.message);
      } else if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        //valid password and username
        setIsSubmitted(true);
        if(uname.value === "dietitianRashu") {
          setIsDietitian(true);
        }
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
      // console.log(errorMessages.message);
    }
  };
  
  const renderErrorMessage = () => {
    // if (Errors.isError ) {
      // console.log("i work fxn           - " + errorMessages.message)
      return (
        <div className="Error SmFont CursiveFont"><small>{errorMessages.message}</small></div>
       );
    // }
  }

    const renderForm = () => (
        <Form onSubmit={handleSubmit} className="container" style={{color:"#48466D"}}>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="InputLabel">Username</Form.Label>
          <Form.Control className="InputFocusGreen" type="text" name="uname" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="InputLabel">Email</Form.Label>
          <Form.Control className="InputFocusGreen" type="email" name="email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="InputLabel">Password</Form.Label>
          <Form.Control className="InputFocusGreen" type="password" name="pass" required />
          
        </Form.Group>
        
        {renderErrorMessage("uname")}
        {renderErrorMessage("email")}
        {renderErrorMessage("pass")}

        <Button className="ButtonStyle" variant="primary" type="submit">Submit</Button>

      </Form>
    );
    
    useEffect( () => renderForm(), [] );

  return (
    <div className="container ">
      <div className="outer ToCenter DarkGreenBox LoginBox BlogBox CurvedContainer">
      <div className="middle">
        <LineTitle Light={true} Title="Login" OnlyLine={false} />
        <div className="MdFont CursiveFont LightGreenFontShade"></div>
        
        {
            isSubmitted ?  
            ( isDietitian? "Dietitian successfully logged in": "User successfully logged in" )
            : renderForm 
            
        }

        {/* { renderForm } */}
        <LineTitle Light={true} OnlyLine={true} />
      </div></div>
    </div>
  );
}

export default Login2;