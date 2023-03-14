import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="p-4 w-full h-full flex justify-center items-center">
    <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1920px]">
            <div className="sm:text-left pb-8">
                <h1 className ="text-4xl sm:text-5xl border-b-4 font-bold text-[#00FFBF]">Contact</h1>
            </div>
        </div>
        <div className="text-1xl sm:text-2xl px-20">
            <p>Submit the form below or send me an email -- <a href="mailto:thibertderek@gmail.com" className="text-[#00FFBF]">thibertderek@gmail.com</a></p>
        </div>
        <form method="POST" action="https://getform.io/f/316eb73c-f136-4dbb-92a1-5472734c2d7f" className="flex flex-col max-w-[1000px] px-20">
            <input className="p-2 my-2 bg-[#ccd6f6] text-black" type="text" placeholder="Name" name="name"/>
            <input className="p-2 my-2 bg-[#ccd6f6] text-black" type="email" placeholder="Email" name="email"/>
            <textarea className="p-2 my-2 bg-[#ccd6f6] text-black" cols="30" rows="10" type="message" placeholder="Message" name="name"/>
            <button className="border-2 items-center hover:bg-white hover:text-black duration-300 px-4 py-3 my-8 mx-auto flex">Send</button>
            </form>
    </div>
    </div>
  )
}

export default Contact