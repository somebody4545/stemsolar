import React, {useState, useContext, useEffect, useRef} from "react";
import gsap from 'gsap';

const Home = () => {
    return (<>
            <div
                className={'z-10 after:bg-stem after:h-full after:w-full after:bg-cover after:absolute after:-z-10 after:top-0 after:left-0 after:bg-fixed after:bg-primary-900 after:bg-blend-overlay h-screen w-full flex flex-col align-center relative justify-center text-text-50 text-center gap-5 px-16'}>
                <h1 className={"text-6xl font-bold pb-2"}>
                    404 - Page Not Found
                </h1>
                <h2 className={"text-xl pb-5"}>How did you get here?</h2>
                <a href="/"><h2 className={"text-xl text-primary-200 underline"}>Go Back!</h2></a>
            </div>
        </>

    )
}

export default Home;