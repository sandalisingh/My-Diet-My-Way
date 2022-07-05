import '../App.css';
import NavSingle from './NavSingle';
// import Navbar from 'react-bootstrap/Navbar';
// import {Nav, Container} from "react-bootstrap"

function NavbarSet(props){
    
    return(
        <header>

            <div className="NavBarBox">
            
            <ul>
                <li><img style={{float:"left"}} className='LogoImg' src='Logo.gif' alt='Logo'></img></li>
                <NavSingle Title="Home" Link="/" />
                <NavSingle Title="About" Link="/about" />
                <NavSingle Title="Blogs" Link="/blogs" />
                <NavSingle Title="AddBlog" Link="/addblog" />
                <NavSingle Title="Q 'n' A" Link="/qna" />
                <NavSingle Title="Login" Link="/login" />
            </ul>
            </div>
        </header>
    );
}

export default NavbarSet;