import React from 'react'
import Face from '../assets/face.jpg'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {SiFiverr, SiUpwork} from 'react-icons/si'
import Resume from '../assets/DerekThibert_CV.pdf'

const Home = () => {
  return (
    <div name='home' className='w-full h-full md:h-screen'>
        <div className = 'max-w-[1000px] mx-auto items-center pb-10 flex flex-col justify-center h-full'>
            <div className="py-10">
                <img className="rounded-lg border-2 left-0 max-w-full justify-center items-center md:items-center md:max-w-[500px]" src={Face}/>
            </div>
            <h1 className='text-[#00FFBF] font-bold text-4xl md:text-7xl'>Derek Thibert</h1>
            <h2 className ='text-3xl md:text-5xl py-2'>Software Developer</h2>
            <button className="text-2xl border-2 items-center hover:bg-white hover:text-black duration-300 px-4 py-3 my-8 mx-auto flex"><a href={Resume} download="Resume">Resume</a></button>
            {/* <p className ='text-2xl py-2'>Let's build together.</p> */}
            {/* <ul className="flex">
              <li className = "py-2 text-4xl hover:scale-150 duration-300"><a href="https://www.linkedin.com/in/derek-thibert/"><FaLinkedin /></a></li>
              <li className = "py-2 text-4xl hover:scale-150 duration-300"><a href="https://github.com/thibert-derek"><FaGithub /></a></li>
              <li className = "py-2 text-4xl hover:scale-150 duration-300"><a href="https://www.fiverr.com/thibertderek95?public_mode=true"><SiFiverr /></a></li>
              <li className = "py-2 text-4xl hover:scale-150 duration-300"><a href="https://www.upwork.com/freelancers/~01478999416d7e1b54"><SiUpwork /></a></li>
        </ul> */}
        </div>

    </div>
  )
}

export default Home