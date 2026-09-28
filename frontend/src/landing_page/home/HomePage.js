import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Education from './Education';
import OpenAccount from "../OpenAccount";

function HomePage() {
    return (  
        <>  
           <Hero />
           <Stats />
           <Education />
           <OpenAccount /> 
        </>
    );
}

export default HomePage;