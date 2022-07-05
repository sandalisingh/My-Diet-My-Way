import { Carousel } from 'react-bootstrap';

function CarouselBox() {
    return(
        <Carousel fade={true}  autoPlay={true} interval={3000}>

            <Carousel.Item className='VyLightGreenBox' id="borderedBox">
              <Carousel.Caption className='VySmFont NonCursiveFont GreenFontShade'>
                <h3>First slide label</h3>
                <p className='GreyFontShade'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='VyLightGreenBox' id="borderedBox">
              <Carousel.Caption className='VySmFont NonCursiveFont GreenFontShade'>
                <h3>2nd slide label</h3>
                <p className='GreyFontShade'>Vitae semper quis lectus nulla at. Aenean vel elit scelerisque mauris pellentesque pulvinar. Velit euismod in pellentesque massa placerat duis ultricies. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Tempus urna et pharetra pharetra massa massa. Malesuada fames ac turpis egestas. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='VyLightGreenBox' id="borderedBox">
              <Carousel.Caption className='VySmFont NonCursiveFont GreenFontShade'>
                <h3>3 slide label</h3>
                <p className='GreyFontShade'>Cursus turpis massa tincidunt dui ut. Non consectetur a erat nam at lectus urna duis convallis. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Blandit aliquam etiam erat velit scelerisque in dictum. Id diam vel quam elementum. Egestas congue quisque egestas diam in arcu cursus euismod quis. Sit amet consectetur adipiscing elit ut aliquam purus.</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel> 
    );
}

export default CarouselBox;