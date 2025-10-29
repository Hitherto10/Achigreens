// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top-left corner
        // For smooth scrolling, you can use:
        // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [pathname]); // Re-run effect whenever the pathname changes

    return null; // This component doesn't render anything visible
};

export default ScrollToTop;