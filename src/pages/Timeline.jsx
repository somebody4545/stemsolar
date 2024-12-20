import React, {useState, useContext, useEffect, useRef} from "react";
import gsap from 'gsap';
const Timeline = () => {
    return (<>
            <section className={'pt-36 pb-14 px-14 bg-background-900 text-text-50 '}>
                <h1 className={'text-6xl font-bold'}>What we've done</h1>
            </section>
            <div className={'relative'}>
                <div className={'absolute mx-auto h-full w-full z-10 max-md:hidden'}>
                    <div className={'bg-background-default w-4 h-full mx-auto rounded-t-2xl'}>

                    </div>
                </div>
                <div
                    className={'w-full h-screen bg-background-900 text-text-50 relative px-14 flex-row flex max-sm:flex-col items-center'}>
                    <div className={'max-sm:w-full w-2/5 flex flex-col'}>
                        <h1 className={'text-8xl'}>
                            2021
                        </h1>
                        <h2 className={'font-bold text-4xl pb-2'}>Planning</h2>
                        <p>Created a 3d model of interior and exterior of Tesla STEM High School. Presented 3D model to
                            a
                            group touring the school, including Utah-based visitors planning to build a similar school.
                            Pitched ideas on renewable and energy-efficient improvements for both schools. Milestone:
                            The
                            idea for STEM Solar was born, focused on advocating for Tesla STEM to become 100% solar
                            powered
                            by 2030. Main Focus: Networking and brainstorming ideas for renewable solutions. </p>
                    </div>
                </div>
                <div
                    className={'w-full h-screen bg-background-900 text-text-50 relative px-14 flex-row-reverse max-md:flex-col flex items-center'}>
                    <div className={'max-sm:w-full w-2/5 flex flex-col'}>
                        <h1 className={'text-8xl'}>
                            2022
                        </h1>
                        <h2 className={'font-bold text-4xl pb-2'}>Planning</h2>
                        <p>Held the first ten meetings with the district to discuss project feasibility. Conducted a
                            helioscope analysis of the school to assess solar viability. Expanded campaign efforts to
                            involve district-level support. Milestone: established credibility and build momentum
                            through
                            formal discussions with decision-makers. </p>
                    </div>
                </div>
                <div
                    className={'w-full h-screen bg-background-900 text-text-50 relative px-14 flex-row max-md:flex-col flex items-center'}>
                    <div className={'max-sm:w-full w-2/5 flex flex-col'}>
                        <h1 className={'text-8xl'}>
                            2023
                        </h1>
                        <h2 className={'font-bold text-4xl pb-2'}>Planning</h2>
                        <p>Increased the number of district meetings to refine project goals. Discovered that Tesla STEM
                            is
                            already highly energy-efficient; a solar installation would not be cost-effective. Shifted
                            focus
                            toward advocating for sustainable solutions in other schools. Milestone: Campaigned for the
                            reconstruction of Alcott Elementary School to be 100% solar-powered by 2030, incorporating
                            low-light fixtures and renewable technologies. </p>
                    </div>
                </div>
                <div
                    className={'w-full h-screen bg-background-900 text-text-50 relative px-14 flex-row-reverse max-sm:flex-col flex items-center'}>
                    <div className={'max-sm:w-full w-2/5 flex flex-col'}>
                        <h1 className={'text-8xl'}>
                            2024
                        </h1>
                        <h2 className={'font-bold text-4xl pb-2'}>Planning</h2>
                        <p>Focus on passing the project to a new group of students to ensure continuity. Milestone:
                            Transitioning leadership and securing a sustainable future for the STEM Solar initiative
                            beyond graduation. </p>
                    </div>
                </div>
                <div className={'absolute h-64 bg-gradient-to-t from-zinc-900 to-transparent w-full bottom-0 z-20'}>

                </div>
            </div>
        </>

    )
}

export default Timeline;