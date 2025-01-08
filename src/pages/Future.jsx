import React from "react";

const Future = () => {
    return (
        <>
            <section className={'pt-36 pb-14 px-14 bg-background-900 text-text-50'}>
                <h1 className={'text-6xl font-bold'}>Our Goals</h1>
            </section>
            <div className={'relative bg-background-900 text-text-50 px-[15%] sm:py-32 max-sm:py-4'}>
                <div className={'flex flex-col-reverse md:flex-row items-center'}>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <h2 className={'text-4xl font-bold pb-2'}>Expand Renewable Energy Advocacy to More Schools</h2>
                        <p>Continue promoting renewable initiatives by advocating for additional schools
                            in the district to adopt solar power, energy-efficient lighting, and
                            sustainable building practices by 2035.
                        </p>
                    </div>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <img src="path/to/your/image.jpg" alt="Future Plans" className={'w-full h-auto rounded-lg'}/>
                    </div>
                </div>
                <div className={'flex flex-col-reverse md:flex-row-reverse items-center'}>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <h2 className={'text-4xl font-bold pb-2'}>Collaborate with
                            Local Government and Environmental
                            Organizations</h2>
                        <p>Partner with city officials and environmental nonprofits to secure funding
                            and resources for sustainability projects, increasing the reach and impact of
                            STEM Solar’s initiatives.
                        </p>
                    </div>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <img src="path/to/your/image.jpg" alt="Future Plans" className={'w-full h-auto rounded-lg'}/>
                    </div>
                </div>
                <div className={'flex flex-col-reverse md:flex-row items-center'}>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <h2 className={'text-4xl font-bold pb-2'}>Develop a Student Led Sustainability Curriculum</h2>
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

export default Future;