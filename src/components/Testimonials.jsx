import React from 'react'
import {FaQuoteLeft} from 'react-icons/fa'

const Testimonials = () => {
    return (
        <div className="w-full h-full flex">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1920px]">
                    <div className="sm:text-left pb-8">
                        <h1 name="testimonials" className="text-4xl sm:text-5xl border-b-4 font-bold text-[#00FFBF]">Testimonials</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 px-10 sm:px-20 py-10 justify-center gap-4 items-center">
                            
                            <span className='justify-center w-[100%] items-center border-2'>
                                <div className="px-6 py-4">
                                    
                                    <FaQuoteLeft />
                                    <p className="py-4 italic">Derek worked for Cowlick Studios as a 3W Care specialist providing direct support to customers with changes or issues they were having with their websites. Derek was able to solve and troubleshoot code problems in a quick and efficient manner while maintaining a positive interaction with customers.</p>
                                    <h3 className="font-bold text-2xl italic text-[#00FFBF]">- Daryl Driedger (Cowlick Studios)</h3>
                                </div>
                            </span>
                            {/* <span className='justify-center w-[100%] items-center border-2'>
                                <div className="px-6 py-4">
                                    
                                    <FaQuoteLeft />
                                    <p className="py-4 italic"></p>
                                    <h3 className="font-bold text-2xl italic text-[#00FFBF]">- Cameron Proctor (University of Windsor)</h3>
                                </div>
                            </span> */}
                            {/* <span className='justify-center my-5 w-[100%] items-center border-2'>
                                <div>
                                    <img className="mx-auto lg:h-[350px] lg:w-[500px]" src={JNE} />
                                </div>
                                <div className="px-6 py-4">
                                    <h3 className="font-bold text-2xl text-[#00FFBF]">JNE Contracting</h3>
                                    <p className="py-4">Developed the website for a local contracting business. Used WordPress, CSS and HTML.</p>
                                    <div className="justify-between items-right">
                                        <a className="px-4 my-2 border-2 hover:bg-white hover:text-black duration-300" href="https://jnecontracting.ca/">
                                        Site
                                        </a> */}
                                        {/* <a className="px-4 mx-2 my-2 border-2 md:hover:bg-white md:hover:text-black md:duration-300" href="https://github.com/thibert-derek/eyetothesky">
                                            Code
                                        </a> */}
                                    {/* </div>
                                </div>
                            </span> */}
                            {/* <span className='justify-center my-5 w-[100%] items-center border-2'>
                                <div>
                                    <img className="mx-auto lg:h-[350px] lg:w-[500px]" src={tictactoe} />
                                </div>
                                <div className="px-6 py-4">
                                    <h3 className="font-bold text-2xl text-[#00FFBF]">Tic Tac Toe</h3>
                                    <p className="py-4">A school project take on a classic 2 player game. Used JavaScript, CSS and HTML.</p>
                                    <div className="justify-between items-right">
                                        <a className="px-4 my-2 border-2 hover:bg-white hover:text-black duration-300" href="https://github.com/thibert-derek/TicTacToe">
                                        Code
                                        </a> */}
                                        {/* <a className="px-4 mx-2 my-2 border-2 md:hover:bg-white md:hover:text-black md:duration-300" href="https://github.com/thibert-derek/eyetothesky">
                                            Code
                                        </a> */}
                                    {/* </div>
                                </div>
                            </span> */}
                            {/* <span className='border-2'>
                                <div>
                                <img className="sm:max-h-[400px]" src={weather}/>
                                </div>
                                <div className="px-4 py-4">
                                    <h3 className = "font-bold text-2xl text-[#00FFBF]">Eye To The Sky</h3>
                                    <p className="py-4">Personal project building a weather application. Used OpenWeatherAPI, React and Tailwind.</p>
                                    <div className = "justify-between items-right">
                                        <a className="px-4 my-2 border-2 hover:bg-white hover:text-black duration-300" href="/">
                                        Demo
                                        </a>
                                        <a className="px-4 mx-2 my-2 border-2 hover:bg-white hover:text-black duration-300" href="https://github.com/thibert-derek/eyetothesky">
                                        Code
                                        </a>
                                    </div>
                                </div>
                            </span>
                            <span className='border-2 justify-center'>
                                <div>
                                <img className="sm:max-h-[500px]" src={weather}/>
                                </div>
                                <div className="px-4 py-4">
                                    <h3 className = "font-bold text-2xl text-[#00FFBF]">Eye To The Sky</h3>
                                    <p className="py-4">Personal project building a weather application. Used OpenWeatherAPI, React and Tailwind.</p>
                                    <div className = "justify-between items-right">
                                        <a className="px-4 my-2 border-2 hover:bg-white hover:text-black duration-300" href="/">
                                        Demo
                                        </a>
                                        <a className="px-4 mx-2 my-2 border-2 hover:bg-white hover:text-black duration-300" href="https://github.com/thibert-derek/eyetothesky">
                                        Code
                                        </a>
                                    </div>
                                </div>
                            </span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials