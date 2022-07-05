import React, { useState, useEffect} from "react";
import LineTitle from "../Components/LineTitle"

import LoginForm from "../Components/LoginForm";


function Login() {
  const [ data, setData] = useState([]);
  let LoggedInStatement = null;
  let isSuccessfullyLoggedIn = false, ErrorMessage = null;
  let  isError = false, LoggedInUser = null;
    
  const getData = () => {
      let url = 'http://localhost:3001/loginUser'; //URL of the resource we want to fetch
      fetch(url).then((response) => response.json()).then((receivedData) => setData(receivedData));
      // isSuccessfullyLoggedIn =  receivedData.isSuccessfullyLoggedIn;
      // if( isSuccessfullyLoggedIn === false && receivedData.isError === true) {
      //   ErrorMessage = receivedData.ErrorMessage;
      //   isError = receivedData.isError;
      // } else if ( isSuccessfullyLoggedIn === true ) {
      //   LoggedInUser = receivedData.LoggedInUsername
      //   LoggedInStatement = LoggedInUser + " successfully logged in!"
      // }
      // data = { 
      //     isSuccessfullyLoggedIn : isSuccessfullyLoggedIn,
      //     LoggedInUser : LoggedInUser,
      //     isError : isError,
      //     ErrorMessage : ErrorMessage
      //  };
  }

  //Runs on the first render
  //And any time any dependency value changes
  useEffect( () => getData(), [] );

  // Login form
  const renderForm = (
    <LoginForm isError={data.isError} ErrorMessage={data.ErrorMessage}/>
  );

  return (
    <div className="container ">
      <div className="outer ToCenter DarkGreenBox LoginBox BlogBox CurvedContainer">
      <div className="middle">
        <LineTitle Light={true} Title="Login" OnlyLine={false}/>
        {isSuccessfullyLoggedIn ? <div className="MdFont CursiveFont LightGreenFontShade">{ LoggedInStatement }</div> : renderForm}
        <LineTitle Light={true} OnlyLine={true}/>
      </div></div>
    </div>
  );
}

export default Login;