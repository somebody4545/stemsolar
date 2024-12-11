import React from "react";

const Footer = () => {
    return (
        <section className="flex flex-col md:flex-row w-full bg-background-100 p-16 gap-12">
            <div className={'text-2xl md:w-2/3 flex flex-col align-center h-full my-auto text-center md:text-left font-bold'}>
                <h1 className={''}>STEM Solar</h1>
                {/* socials */}
                <div className={'flex flex-row gap-5'}>
                    <a href={"https://www.instagram.com"}><img src="" alt=""/></a>
                    <a href={"https://www.facebook.com"}><img src="" alt=""/></a>
                    <a href={"https://www.twitter.com"}><img src="" alt=""/></a>
                </div>
            </div>
            <div className={'md-w-1/3 flex flex-col align-center h-full my-auto'}>
                <h1 className={'text-xl font-bold'}>Additional Resources</h1>
                <a href={"https://tesla.lwsd.org"}>Tesla STEM Website</a>
            </div>
            <div className={'md-w-1/3 flex flex-col align-center h-full my-auto'}>
                <h1 className={'text-xl font-bold'}>Contact Us</h1>
                <p>Phone: xxx-xxxx-xxxx</p>
                <p>Email: admin@stemsolar.something</p>
            </div>
        </section>
    )
}
export default Footer;
