import { useState } from 'react'
import './App.css'
import profilePic from './assets/profile-pic.png'
import playerAnimate from '../components/Animation.jsx'
import './UnderConstruction.css'

function App() {

  return (
    <>
      <div id="background" className="w-screen h-screen fixed bg-gradient-to-br from-violet-600 via-violet-100 to-violet-400 grid grid-cols-5 grid-rows-6 gap-2">
        <div id="profile-container" className="row-span-2">
          <img id="profile-pic" src={profilePic} className="rounded-full scale-90 hover:scale-100 duration-300 hover:cursor-pointer hover:border-8 border-r-8 border-b-8 border-violet-300 shadow-violet-900 -translate-x-5 -translate-y-5 hover:translate-x-5 hover:translate-y-5" />
        </div>

        <div id="welcome-container" className="border-2 border-black col-start-2 col-span-1 row-span-2 mr-10 text-right">
          <p className="text-3xl p-5 pt-12">Hello, World!</p>
          <p className="text-xl p-5">My name is Ian</p>
          <p className="text-xl p-5">I am a front end developer.</p>
        </div>
        <div id="contact-container" className="border-2 border-black col-start-4 col-span-2 row-span-2 mr-10 grid grid-cols-4">
          <p className="text-2xl col-span-4">About me default text, figure it out, or even a short blog post anything that would be about 5-10 lines leading into...</p>
          <p className="text-2xl col-span-4">Work with me!</p>
          <div id="linkedin-icon" className="w-20 h-20 m-auto border-2 border-black col-span-2">Linked</div>
          <div id="email-icon" className="w-20 h-20 m-auto border-2 border-black col-span-2">email</div>
          <div id="github-icon" className="w-20 h-20 border-2 border-black col-span-2">github</div>
          <div id="codepen-icon" className="w-20 h-20 border-2 border-black col-span-2">codepen</div>
        </div>
        <div id="portfolio-container" className="border-2 border-red-700 col-span-5 row-span-3 grid grid-cols-10 grid-rows-5 gap-2">
          <div id="under-construction-card" className="border-2 border-black col-span-2 row-span-2"></div>
          <div id="under-construction-card" className="border-2 border-black col-span-2 row-span-2 row-start-2 col-start-4"></div>
          <div id="under-construction-card" className="border-2 border-black col-span-1 row-span-1 row-start-1 col-start-9"></div>
          <div id="under-construction-card" className="border-2 border-black col-span-2 row-span-2"></div>
          <div id="under-construction-card" className="border-2 border-black col-span-2 row-span-2 col-start-2"></div>
          <div id="under-construction-card" className="border-2 border-black col-span-2 row-span-1 col-start-6 row-start-5"></div>
          <div id="under-construction-card" className="border-2 border-black col-span-3 row-span-2 col-start-6 row-start-3"></div>
          <div id="under-construction-card" className="border-2 border-black col-span-2 row-span-4 col-start-9 row-start-2"></div>
        </div>
        <div id="animation-container" className="border-2 border-yellow-400 col-span-5 row-span-1 grid grid-rows-3 grid-cols-10">
          <select id="animation-choice" className="text-center rounded-3xl h-10 w-60 relative m-auto col-start-5 shadown-xl bg-violet-300 z-10">
            <option>--Please Select--</option>
            <option>--  Run  --</option>
            <option>--  Jump  --</option>
          </select>
          <canvas id="playerCanvas" className="border-2 border-black w-16 h-16 col-start-2 row-start-2">{/* canvas height & width = 64px */}</canvas>
          <canvas id="parallaxCanvas" className="w-screen h-32 border-2 border-black fixed mt-5">{/* margin-20px!! CANVAS HEIGHT = 128px */}</canvas>
          {/* <Canvas draw={playerAnimate} width={64} height={64} /> */}
        </div>
      </div>
    </>
  )
}

export default App
