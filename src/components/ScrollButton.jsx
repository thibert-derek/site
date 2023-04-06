import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
// import ScrollToTop from 'react-scroll-to-top';
import {Button} from './Scrollstyle';
const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 300){
      setVisible(true)
    } else if (scroll <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

    return (
        <Button className="hidden md:inline hover:scale-125 duration-300">
    <FaArrowCircleUp onClick={scrollToTop} 
    style={{display: visible ? 'inline' : 'none'}}/>
    </Button>
    )
  }

export default ScrollButton;