import React from 'react'
import Face from '../assets/face.jpg'

const About = () => {
  return (
    <div name="about" className="w-full h-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1920px]">
                <div className="md:text-left pb-8">
                    <h1 className ="text-4xl sm:text-5xl border-b-4 font-bold text-[#00FFBF]">About</h1>
                </div>
            </div>
            <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-5">
                <div className="md:text-left px-5 md:border-r-2 col-span-1">
                    <p className ="text-[#00FFBF] font-bold text-3xl py-2">Greetings, my name is Derek!</p>
                    <p>Good day! I'm a software developer with a specialty in web development from Windsor, Ontario, Canada. I enjoy using my talents to develop interactive and user-friendly online applications that can significantly improve people's lives. Look no further if you need a motivated team member to add new thoughts and vigour to your next endeavour. 
                        Let's work together to make something truly amazing.
                    </p>
                </div>
                <div className="px-20 md:px-5 text-center flex items-center justify-center">
                    <img className="rounded-lg border-2 mw-[500px] justify-center items-center md:items-center left-0" src={Face}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About