import React, { useState } from 'react';

function Navigation(props) {

    const {
        selectedComponent,
        setSelectedComponent
    } = props;



    return (

        <nav className="ml-5">

            <ul className="d-inline-flex mt-5">

                <li className="px-5">
                    <a className="text-dark h3" href="#about" onClick={() => setSelectedComponent('About')}>About Me</a>
                </li>

                <li className={`px-5 ${selectedComponent && 'navActive'}`}>
                    <span className="text-dark h3" onClick={() => setSelectedComponent('Portfolio')}>Portfolio</span>
                </li>

                <li className={`px-5 ${selectedComponent && 'navActive'}`}>
                    <span className="text-dark h3" onClick={() => setSelectedComponent('Contact')}>Contact</span>
                </li>

                <li className={`px-5 ${selectedComponent && 'navActive'}`}>
                    <span className="text-dark h3" onClick={() => setSelectedComponent('Resume')}>Resume</span>
                </li>
            </ul>

        </nav>
    )

}


export default Navigation;