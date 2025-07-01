import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to the top of the page with a smooth animation on route change
    window.scrollTo({
      top: 0,         // Scroll to the very top (0 pixels from the top)
      behavior: 'smooth' // This is the magic property for smooth scrolling
    });
  }, [pathname]); // Re-run effect whenever pathname changes

  return null; // This component doesn't render anything itself
}

export default ScrollToTop;