import React from 'react';
import './App.css';
import NavbarSet from './Components/NavbarSet';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
    
import Home from "./pages/Home"
import About from './pages/About';
import Blogs from "./pages/Blogs"
import AddBlog from "./pages/AddBlog"
import QnA from "./pages/QnA"
// import Login2 from "./pages/Login2"
import Login from "./pages/Login"
import Footer from './Components/Footer';
  
function App() {
return (
    <div>
    <Router>
    <NavbarSet />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/addblog' element={<AddBlog/>} />
        <Route path='/qna' element={<QnA/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Route path='/login' element={<Login2/>} /> */}
    </Routes>
    </Router>
    <Footer/>
    </div>
);
}
  
export default App;