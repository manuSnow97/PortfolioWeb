import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover" src="https://a-static.besthdwallpaper.com/black-hair-wallpaper-3840x2160-2420_54.jpg" alt="" />
            <div className="w-full h-screen absolute top-0 left-0">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-red-600">Manuel Nieva</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-200">I'm a
                        <TypeAnimation
                            sequence={[
                                'Full-Stack', // Types 'One'
                                2000, // Waits 1s
                                'Coder', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />

                    </h2>
                    <div className="flex justify-between pt-6 max-w-[50px] w-full text-gray-200">
                        <FaLinkedinIn className="cursor-pointer" size={20} />
                        <FaGithub className="cursor-pointer" size={20} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main