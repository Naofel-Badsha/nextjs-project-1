'use client'

import React, { useState } from 'react';
import Nav from './Nav';
import Phone from './Phone';


const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const openNavHandler = () =>setShowNav(true);
    const closeNavHandler = () =>setShowNav(false);

    return (
        <div>
            <Nav openNav={openNavHandler}/>
            <Phone showNav={showNav} closeNav={closeNavHandler }/>
           
        </div>
    );
};

export default ResponsiveNav;