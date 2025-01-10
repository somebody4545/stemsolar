import React from "react";

const Progress = () => {
    return (
        <>
            <section className={'pt-36 pb-14 px-14 bg-background-900 text-text-50'}>
                <h1 className={'text-6xl font-bold'}>STEM Solar - Now</h1>
            </section>
            <div className={'relative bg-background-900 text-text-50 px-[15%] sm:py-32 max-sm:py-4 max-sm:pb-16'}>
                <div className={'max-w-screen-lg mx-auto'}>
                    <div className={'flex flex-col-reverse md:flex-row items-center'}>
                        <div className={'w-full md:w-1/2 p-4'}>
                            <h2 className={'text-4xl font-bold pb-2'}>Website Development</h2>
                            <p>
                                Using React, Tailwind CSS, and Vercel, we have created a website that showcases our
                                mission
                                and progress, providing a platform for us to connect with potential partners and donors.
                                Our website has a focus of maintaining visual appeal, while being accessible to all and
                                following proper web standards to ensure a consistent design across all devices. Along
                                with
                                this, we created a cohesive color scheme and logo to represent our organization.
                            </p>
                            <a href="/branding.pdf" className={"text-accent-300"}>→ Check out our branding</a>
                        </div>
                        <div className={'w-full md:w-1/2 p-4'}>
                            <img src="/website.png" alt="Future Plans"
                                 className={'w-full h-auto rounded-lg shadow-inner'}/>
                        </div>
                    </div>
                    <div className={'flex flex-col-reverse md:flex-row-reverse items-center'}>
                        <div className={'w-full md:w-1/2 p-4'}>
                            <h2 className={'text-4xl font-bold pb-2'}>Solar Chargers</h2>
                            <p>The Solar Chargers Team goal was to help reduce fossil fuel emissions and promote clean
                                energy and fight the misconception that solar energy is not viable in the rainy Seattle
                                area. They chose to do this by creating a smaller solar charger at Tesla Stem High
                                School
                                that would charge multiple students’ phones at once. Additionally, they made a shelf
                                that
                                allowed all students to use this solar charger easily during lunch or between classes.
                                <br/>
                                They managed to create a working 50-watt solar panel system that could charge up to 5
                                phones
                                at once. The system stabilized the 12-volt input from the solar panel at 5 volts to
                                safely
                                charge phones. Additionally, their system could store power in a battery to also charge
                                phones while there was no sunlight. They aim to improve their system by making it larger
                                and
                                more accessible, hoping to promote solar energy as an option for households and schools
                                within the district.
                            </p>
                        </div>
                        <div className={'w-full md:w-1/2 p-4'}>
                            <img src="/solarcharger.jpg" alt="Solar Charger"
                                 className={'w-full h-auto rounded-lg aspect-square'}/>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col-reverse md:flex-row items-center'}>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <h2 className={'text-4xl font-bold pb-2'}>Education</h2>
                        <p>Through the Education project our goal was to essentially create immersive lesson plans
                            targeted at various ages and subclassifications of students ranging from elementary
                            schoolers to high schoolers to teach them about the STEM Solar initiative as well as
                            other
                            environmental science issues. Through our project we created engaging activities to
                            convey
                            the educational content in a more interactive and fun manner to encourage more
                            retention.
                            Lastly, we collected responses from students to analyze the data regarding how much they
                            comprehended, how they were impacted and personal changes they will make in their
                            day-to-day
                            lives.
                        </p>
                    </div>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <img src="/education.jpg" alt="Future Plans" className={'w-full h-auto rounded-lg'}/>
                    </div>
                </div>
                <div className={'flex flex-col-reverse md:flex-row-reverse items-center'}>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <h2 className={'text-4xl font-bold pb-2'}>Cleaning Systems</h2>
                        <p>
                            Our team was asked to make a solution for the manual labor necessary to keep solar panels
                            clean so as to maximize STEM Solar’s solar panel energy output while also limiting the
                            expenses necessary to upkeep them. We made both a simple and complex design to solve this,
                            the simple design being cheaper and easier to construct, and the complex design being more
                            ideal in terms of function and effectiveness.
                        </p>
                    </div>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <img src="/cleaning.jpg" alt="Future Plans" className={'w-full h-auto rounded-lg'}/>
                    </div>
                </div>
                <div className={'flex flex-col-reverse md:flex-row items-center'}>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <h2 className={'text-4xl font-bold pb-2'}>Solar @ Stem</h2>
                        <p>
                            The Solar @ STEM group’s goal was to survey the students and staff of Tesla STEM about their
                            opinion and knowledge about solar energy. They decided to publish a Microsoft Forms survey
                            for students and staff to complete and conducted in-person interviews with teachers to
                            gather additional information about their knowledge and opinions of solar energy at home and
                            in the school. They compiled all the data from these sources and data from other groups to
                            create a STEM Solar section in the school’s Climate Action Plan.
                        </p>
                    </div>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <img src="/cleaning.jpg" alt="Future Plans" className={'w-full h-auto rounded-lg'}/>
                    </div>
                </div>
                <div className={'flex flex-col-reverse md:flex-row-reverse items-center'}>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <h2 className={'text-4xl font-bold pb-2'}>Community Outreach</h2>
                        <p>
                            The goal of period 3 community outreach was to gain the support of administrative
                            organizations for TS Solar projects to be implemented in schools, particularly Tesla STEM
                            but also local comprehensive high schools. The team contacted many administrators, in
                            particular those of Juanita High School, Lake Washington High School, and Kirkland City
                            Council. They developed informative presentations about TS solar that could be used in the
                            meetings. The plan was to present to JHS, LWHS, and Kirkland City Council to forge a
                            partnership that the next group of students doing this unit can use to get approval or
                            possibly funding for projects to be implemented.
                        </p>
                    </div>
                    <div className={'w-full md:w-1/2 p-4'}>
                        <img src="/cleaning.jpg" alt="Future Plans" className={'w-full h-auto rounded-lg'}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Progress;