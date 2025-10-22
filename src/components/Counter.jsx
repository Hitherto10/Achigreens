// Counter.jsx

import React, { useState, useEffect, useRef } from 'react';

/**
 * Counts up to a target number when the component scrolls into view.
 * @param {number} finalNumber - The number to count up to.
 * @param {number} duration - The total duration of the count-up animation in milliseconds.
 * @returns {JSX.Element}
 */
const Counter = ({ finalNumber, duration = 2000 }) => {
    // Current number being displayed
    const [count, setCount] = useState(0);
    // Reference to the DOM element for Intersection Observer
    const countRef = useRef(null);
    // Flag to ensure the animation only runs once
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Check if the element is intersecting (visible) and hasn't animated yet
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    startCounting();
                    // Stop observing after the animation starts
                    observer.unobserve(entry.target);
                }
            },
            {
                // Root is the viewport, threshold of 0.5 means at least 50% must be visible
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        // Cleanup function
        return () => {
            if (countRef.current) {
                // Ensure the observer is disconnected if the component unmounts
                observer.unobserve(countRef.current);
            }
        };
    }, [hasAnimated, finalNumber, duration]); // Re-run effect if props change

    const startCounting = () => {
        const start = 0;
        const end = parseInt(finalNumber, 10);
        const startTime = performance.now();

        const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            // Calculate the current value using a simple linear interpolation
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        };

        requestAnimationFrame(updateCount);
    };

    // Use a string to ensure the returned number is always rendered as text
    return (
        <span ref={countRef}>
            {count.toLocaleString()}
        </span>
    );
};

export default Counter;