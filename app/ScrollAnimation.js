'use client'
import { useEffect, useState, useRef } from "react";
import 'devicon/devicon.min.css';

function ScrollAnimation() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasFaded, setHasFaded] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const timeoutRef = useRef(null);
  

  //handle loading
  useEffect(() => {
    setInterval(() => {
      if (document.querySelector('#hero-bg')) {
        setImageLoaded(true);
      }
    }, 300)
  }, []);



  const handleScroll = () => {
    if (!imageLoaded) return;
    
    var element = document.querySelector('#hero-bg');
    var position = window.scrollY; 
    
    if (position > window.innerHeight * 0.18 && hasRevealed) {
      console.log('fade out')
      element.classList.remove('fade-in')
      element.classList.add('fade-out');
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        element.classList.add('hidden')
      }, 500);
      
      element.classList.remove('hero-op')
      setHasFaded(true);
    }
    else {
      if (hasFaded === true || !hasRevealed && position < window.innerHeight * 0.18) {
        setHasRevealed(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          element.classList.remove('hidden')
        }, 100);
        element.classList.remove('hero-op')
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
      }
    }
  }
  
    useEffect(() => {
        handleScroll(); // This is so that the effect runs on mount
        window.addEventListener('scroll', handleScroll);
        
        return () => { window.removeEventListener('scroll', handleScroll) };
      }, [hasFaded, hasRevealed, imageLoaded]);
      return null;
}
export default ScrollAnimation;