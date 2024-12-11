import React from "react";

const Header = () => {
    return (
        <div className="flex flex-col w-full bg-gradient-to-r from-background-600 via-background-600 to-background-800 text-white p-5">
            <div className="flex justify-between items-center">
                <a href="/"><h1 className="text-3xl font-bold">STEM Solar</h1></a>
                <div className="flex">
                    <a href="/home" className="mx-2">Home</a>
                    <a href="/timeline" className="mx-2">Timeline</a>
                    <a href="/contact" className="mx-2">Contact Us</a>
                </div>
            </div>
        </div>
    )
}
export default Header;