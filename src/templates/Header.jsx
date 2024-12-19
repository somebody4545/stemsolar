import React, { useState } from "react";

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="z-20 flex-col absolute w-full bg-gradient-to-r from-background-600 via-background-600 to-background-800 text-white p-5">
            <div className="flex flex-col md:justify-between md:flex-row items-start md:items-center">
                <div className={'flex justify-between items-center w-full md:w-auto'}>
                    <a href="/"><h1 className="text-3xl font-bold">STEM Solar</h1></a>
                    <button className="md:hidden" onClick={toggleExpand}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
                <div className={`max-md:py-8 max-md:gap-3 flex-col md:flex-row ${isExpanded ? 'flex' : 'hidden'} md:flex`}>
                    <a href="/" className="mx-2">Home</a>
                    <a href="/timeline" className="mx-2">Timeline</a>
                    <a href="#contact" className="mx-2">Contact Us</a>
                    <a href="https://stemsolar.substack.com/" className="mx-2">Newsletter</a>
                </div>
            </div>
        </div>
    );
};

export default Header;