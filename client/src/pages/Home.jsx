import '../App.css';
import NavbarSet from "../Components/NavbarSet"
import BigHeading from "../Components/BigHeading"
import CarouselBigBox from "../Components/CarouselBigBox"
import Highlights from "../Components/Highlights"
import FooterForm from "../Components/FooterForm"

function Home(){
    return(
        <div>
            <NavbarSet/>
            <BigHeading
                NoImage = {false}
                Image="Maam.gif"
                Title="My Diet My Way"
                Content="Hi! I'm Rashu and I'm A Certified Health Nutritionist "
            /> 
            <CarouselBigBox Title="Frequently Asked Questions"/>
            <div className="PastelGreenBackground">
            <Highlights /></div>
            <FooterForm/>
        </div>
    );
}

export default Home;