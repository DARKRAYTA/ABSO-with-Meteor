import React from 'react';
import Nav from "./Nav";
import NavItem from "./NavItem";
//import ImageAbout from '/images/about.png'

export default function About () {
    return (
        <div className="relative divide-y bg-white">
            <Nav>
                <div className="flex items-stretch lex-no-shrink flex-grow">
                    <div className="flex items-stretch justify-end ml-auto">
                        <NavItem href="/home" isActive>Home</NavItem>
                        <NavItem href="/about">About</NavItem>
                    </div>
                </div>
            </Nav>
            <p className="absolute text-6xl top-24 left-3">Developed by Daniel Carrozzo</p>
            <img src='/images/about.png'/>
        </div>
    );
}