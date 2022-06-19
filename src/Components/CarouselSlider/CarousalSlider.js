import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "../../Assets/Css/Home.css";

function CarousalSlider() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }; 
  return (
    <div className='cardHome'>   <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="image/mount.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="image/mount2.png"
        alt="Second slide"
      />

      <Carousel.Caption className='secondslide'>
        <h3>Second slide</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
   
  </Carousel></div>
  )
}

export default CarousalSlider