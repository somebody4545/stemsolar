import React, {useState, useContext, useEffect, useRef} from "react";
import gsap from 'gsap';
const IntroAnim = () => {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
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
                className={'h-screen w-full bg-primary-900 flex flex-col align-center justify-center text-text-50 text-center gap-5 px-16'}>
                <IntroAnim></IntroAnim>
            </div>
            <section
                className={'py-16 max-sm:pb-0 min-h-[80%] w-full bg-background-default flex flex-col text-text-default gap-5'}>
                <h1 className={"text-6xl font-bold px-20 max-sm:pb-10 max-sm:px-8"}>
                    The Plan
                </h1>
                <div
                    className={'xl:w-[70rem] w-full min-h-36 flex flex-col md:mx-auto md:py-16 md:flex-row flex-nowrap [&>*]:w-full [&>*]:p-5 [&>*]:relative [&>*]:transition-all [&>*]:cursor-pointer'}>
                    <div
                        className={'bg-primary-100 hover:bg-background-default hover:outline outline-1 outline-[black]'}>
                        <h1 className={'text-3xl pb-5'}>What we did</h1>
                        <p className={'text-lg'}>We have established credibility and built momentum through discussions
                            with decision makers.</p>
                        <div className={"w-full min-h-14 h-full"}>
                            <span className={"material-symbols-outlined text-5xl absolute bottom-5"}>
                            arrow_right_alt
                            </span>
                        </div>
                    </div>
                    <div
                        className={'bg-primary-300 hover:bg-background-default hover:outline outline-1 outline-[black]'}>
                        <h1 className={'text-3xl pb-5'}>What we're doing</h1>
                        <p className={'text-lg'}>Tesla STEM’s solar efficiency has been determined to be standard. We
                            are working with Alcott Elementary School.</p>
                        <div className={"w-full min-h-14 h-full"}>
                            <span className={"material-symbols-outlined text-5xl absolute bottom-5"}>
                            arrow_right_alt
                            </span>
                        </div>
                    </div>
                    <div
                        className={'bg-primary-200 hover:bg-background-default hover:outline outline-1 outline-[black]\''}>
                        <h1 className={'text-3xl pb-5'}>What we'll do</h1>
                        <p className={'text-lg'}>Expand renewable energy advocacy to more schools, collaborate with
                            local government.</p>
                        <div className={"w-full min-h-14 h-full"}>
                            <span className={"material-symbols-outlined text-5xl absolute bottom-5"}>
                            arrow_right_alt
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={'py-16 min-h-[80%] w-full bg-background-50 flex flex-col text-text-default gap-5'}>
                <h1 className={"text-6xl font-bold px-20 pb-10 max-sm:px-8"}>
                    Meet the Team
                </h1>
                <div
                    className={"[&>*]:w-full flex flex-col gap-5 [&>*]:min-h-48 [&>*]:bg-primary-200 mx-auto [&>*]:w-[75vw] [&>*]:max-w-[50rem] [&>*]:rounded-2xl"}>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default Home;