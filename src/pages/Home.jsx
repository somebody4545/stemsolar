import React, {useState, useContext, useEffect, useRef} from "react";
import gsap from 'gsap';

const IntroAnim = () => {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            {opacity: 0, y: 20},
            {opacity: 1, y: 0, duration: 1, ease: "power2.out"}
        );
    }, []);

    return (
        <div ref={textRef}>
            <h1 className={"text-6xl font-bold pb-2"}>
                Welcome to <span
                className="text-7xl bg-gradient-to-r from-accent-300 to-primary-500 bg-clip-text text-transparent">STEM Solar</span>
            </h1>
            <h2 className={"text-xl pb-5"}>Students with a mission to make the world a better place.</h2>
            <h2 className={"text-xl"}>“Empowering schools to adopt sustainable energy solutions”</h2>
        </div>
    )
        ;
};
const Home = () => {
    return (<>
            <div
                className={'z-10 after:bg-stem after:h-full after:w-full after:bg-cover after:absolute after:-z-10 after:top-0 after:left-0 after:bg-fixed after:bg-primary-900 after:bg-blend-overlay h-screen w-full flex flex-col align-center relative justify-center text-text-50 text-center gap-5 px-[5%]'}>
                <div className={'h-12'}></div>
                <IntroAnim></IntroAnim>
            </div>
            <section
                className={'drop-shadow-2xl py-16 max-md:pb-0 min-h-[80%] w-full bg-background-default flex flex-col text-text-default gap-5'}>
                <h1 className={"text-6xl font-bold px-20 max-md:pb-10 max-md:px-8"}>
                    The Plan
                </h1>
                <div
                    className={'xl:w-[70rem] w-full min-h-36 flex flex-col md:mx-auto md:py-16 md:flex-row flex-nowrap [&>*]:w-full [&>*]:p-5 [&>*]:relative [&>*]:transition-all [&>*]:cursor-pointer'}>
                    <a href={"/timeline"}
                       className={'group bg-primary-100 hover:bg-background-default hover:outline -outline-offset-4 outline-4 outline-black overflow-clip'}>
                        <h1 className={'text-3xl group-hover:font-bold transition-all pb-5'}>What we did</h1>
                        <p className={'text-lg'}>We have established credibility and built momentum through discussions
                            with decision makers.</p>
                        <div className={"w-full min-h-14 h-full"}>
                            <span
                                className={"material-symbols-outlined text-5xl absolute bottom-5 md:group-hover:right-[10%] md:right-[80%] max-md:left-5  transition-all"}>
                            arrow_right_alt
                            </span>
                        </div>
                    </a>
                    <a href={"/current"}
                       className={'group bg-primary-200 hover:bg-background-default hover:outline -outline-offset-4 outline-4  outline-1 outline-black overflow-clip'}>
                        <h1 className={'text-3xl group-hover:font-bold transition-all pb-5'}>What we're doing</h1>
                        <p className={'text-lg'}>Tesla STEM’s solar efficiency has been determined to be standard. We
                            are working with Alcott Elementary School.</p>
                        <div className={"w-full min-h-14 h-full"}>
                            <span
                                className={"material-symbols-outlined text-5xl absolute bottom-5 max-md:left-5 md:group-hover:right-[10%] md:right-[80%]  transition-all"}>
                            arrow_right_alt
                            </span>
                        </div>
                    </a>
                    <a href={"/future"}
                       className={'group bg-primary-300 hover:bg-background-default hover:outline -outline-offset-4 outline-4  outline-1 outline-black overflow-clip'}>
                        <h1 className={'text-3xl group-hover:font-bold transition-all pb-5'}>What we'll do</h1>
                        <p className={'text-lg'}>Expand renewable energy advocacy to more schools, collaborate with
                            local government.</p>
                        <div className={"w-full min-h-14 h-full"}>
                            <span
                                className={"material-symbols-outlined text-5xl absolute bottom-5 md:group-hover:right-[10%] md:right-[80%] max-md:left-5  transition-all"}>
                            arrow_right_alt
                            </span>
                        </div>
                    </a>
                </div>
            </section>
            <section
                className={'py-16 min-h-[80%] w-full md:pb-24 bg-background-50 flex flex-col text-text-default gap-5'}>
                <h1 className={"text-6xl font-bold px-20 pb-10 md:pb-24 max-md:px-8"}>
                    Meet the Team
                </h1>
                <div
                    className={"[&>*]:w-full flex flex-col gap-5 [&>*]:min-h-48 w-full [&>*]:mx-auto [&>*]:bg-primary-200 mx-auto [&>*]:w-4/5 [&>*]:max-w-[75rem]"}>
                    <div className={'flex flex-col md:flex-row-reverse'}>
                        <img className={'w-full max-w-80 max-md:mx-auto my-auto p-8'} src="pranav.png"
                             alt="Pranav Takrani"/>
                        <div className={'w-full p-8 my-auto'}>
                            <h1 className={'text-2xl pb-4 font-bold'}>Who we are</h1>
                            <p>We are the founders of STEM solar. We started this nonprofit in 2021 when were just
                                Freshman in high school. With a shared passion for sustainability and education. We saw
                                an opportunity to make a real impact by helping schools transition to renewable energy
                                through the installation of solar panels. With the help of Dr.Wrenchy and other
                                Stakeholder's at Tesla STEM high school in Remond Washington, we turned our vision into
                                reality.</p>
                        </div>
                    </div>
                    <div className={'flex flex-col md:flex-row'}>
                        <img className={'w-full max-w-80 max-md:mx-auto my-auto p-8'} src="river.png"
                             alt="River Clarke"/>
                        <div className={'w-full p-8 my-auto'}>
                            <h1 className={'text-2xl pb-4 font-bold'}>River Clarke</h1>
                            <p>As a co-founder and project manager of Tesla STEM Solar, I helped lead a dedicated team
                                in advocating for clean energy initiatives. I also played a key role in integrating STEM
                                Solar’s clean energy projects into the Environmental Engineering & Sustainable Design
                                (EESD) class at Tesla STEM, empowering our team to drive impactful sustainability
                                efforts for years to come.</p>
                        </div>
                    </div>
                    <div className={'flex flex-col md:flex-row-reverse'}>
                        <img className={'w-full max-w-80 max-md:mx-auto my-auto p-8'} src="pranav2.jpeg"
                             alt="Pranav Takrani"/>
                        <div className={'w-full p-8 my-auto'}>
                            <h1 className={'text-2xl pb-4 font-bold'}>Pranav Takrani</h1>
                            <p>Hi, I’m Pranav Takrani, co-founder of Tesla STEM solar. I’ve been mainly in charge of the
                                technical aspects of the project, including various cleaning systems, but also
                                managerial roles in the overall growth of the project.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home;