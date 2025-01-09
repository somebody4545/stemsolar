import React from "react";

const Progress = () => {
    return (
        <>
            <section className={'pt-36 pb-14 px-14 bg-background-900 text-text-50'}>
                <h1 className={'text-6xl font-bold'}>STEM Solar - Now</h1>
            </section>
            <div className={'relative bg-background-900 text-text-50 px-[15%] sm:py-32 max-sm:py-4'}>
                <div className={'flex flex-col-reverse md:flex-row items-center'}>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <h2 className={'text-4xl font-bold pb-2'}>Website Development</h2>
                        <p>
                            Using React, Tailwind CSS, and Vercel, we have created a website that showcases our mission
                            and progress, providing a platform for us to connect with potential partners and donors.
                            Our website has a focus of maintaining visual appeal, while being accessible to all and
                            following proper web standards to ensure a consistent design across all devices Along with
                            this, we created a cohesive color scheme and logo to represent our organization.
                        </p>
                        <a href="/branding.pdf" className={"text-accent-300"}>→ Check out our branding</a>
                    </div>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <img src="/website.png" alt="Future Plans" className={'w-full h-auto rounded-lg shadow-inner'}/>
                    </div>
                </div>
                <div className={'flex flex-col-reverse md:flex-row-reverse items-center'}>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <h2 className={'text-4xl font-bold pb-2'}>Education</h2>
                        <p>Through the Education project our goal was to essentially create immersive lesson plans
                            targeted at various ages and subclassifications of students ranging from elementary
                            schoolers to high schoolers to teach them about the STEM Solar initiative as well as other
                            environmental science issues. Through our project we created engaging activities to convey
                            the educational content in a more interactive and fun manner to encourage more retention.
                            Lastly, we collected responses from students to analyze the data regarding how much they
                            comprehended, how they were impacted and personal changes they will make in their day-to-day
                            lives.
                        </p>
                    </div>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <img src="/education.jpg" alt="Future Plans" className={'w-full h-auto rounded-lg'}/>
                    </div>
                </div>
                <div className={'flex flex-col-reverse md:flex-row items-center'}>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <h2 className={'text-4xl font-bold pb-2'}></h2>
                        <p>Create a program that trains students in renewable energy, sustainable
                            architecture, and environmental advocacy, ensuring future students are
                            equipped to lead STEM Solar and similar initiatives
                        </p>
                    </div>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <img src="path/to/your/image.jpg" alt="Future Plans" className={'w-full h-auto rounded-lg'}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Progress;