import React, { useState } from 'react';

function Navigation(props) {

    const {
        selectedComponent,
        setSelectedComponent
    } = props;

    const [navActive, setNavActive] = useState('About');



    return (

        <nav className="ml-5">

            <ul className="d-inline-flex mt-5" col-sm-12>

                <li className={`px-5 ${navActive === 'About' && 'navActive'}`} key='About'>
                    <a className="h3" href="#about" onClick={() => {
                        setNavActive('About')
                        setSelectedComponent('About')
                    }}>About Me</a>
                </li>

                <li className={`px-5 ${navActive === 'Portfolio' && 'navActive'}`} key='Portfolio'>
                    <span className="h3" onClick={() => {
                        setNavActive('Portfolio')
                        setSelectedComponent('Portfolio')
                    }}>Portfolio</span>
                </li>

                <li className={`px-5 ${navActive === 'Contact' && 'navActive'}`}>
                    <span className="h3" onClick={() => {
                        setNavActive('Contact')
                        setSelectedComponent('Contact')}}>Contact</span>
                </li>

                <li className={`px-5 ${navActive === 'Resume' && 'navActive'}`}>
                    <span className="h3" onClick={() => {
                        setNavActive('Resume')
                        setSelectedComponent('Resume')}}>Resume</span>
                </li>
            </ul>

        </nav>
    )

}


export default Navigation;