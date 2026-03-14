import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from './Hero';
import Divisions from './LearningDivisions';
import Showcase from './Showcase';

const LearningPath = () => {
    const location = useLocation();

    useEffect(() => {

        if (location.hash) {
            const elementId = location.hash.replace('#', '');
            const element = document.getElementById(elementId);

            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);
    return(
        <>
        <Hero/>
        <Divisions/>
        <Showcase/>
        </>
    )
}

export default LearningPath