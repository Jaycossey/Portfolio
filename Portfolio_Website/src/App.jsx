import { useState } from 'react'
import './App.css'
import UnderHood from '../components/UnderHood.jsx'
import WelcomeText from '../components/WelcomeText.jsx'
  
function App() {
    
  return (
    <>
      <div id="background" className="w-screen h-screen fixed bg-gradient-to-br from-violet-600 via-violet-100 to-violet-400 grid grid-cols-5 grid-rows-6 gap-2">
        <UnderHood />
        <WelcomeText />
        <div id="portfolio-container" className="border-2 border-red-700 col-span-5 row-span-3 grid grid-cols-10 grid-rows-5 gap-2">
          <div id="under-construction-card" className="border-2 border-black col-span-2 row-span-2"></div>
          <div id="under-construction-card" className="border-2 border-black col-span-2 row-span-2 row-start-2 col-start-4"></div>
          <div id="under-construction-card" className="border-2 border-black col-span-1 row-span-1 row-start-1 col-start-8"></div>
          <div id="under-construction-card" className="border-2 border-black col-span-2 row-span-2"></div>
          <div id="under-construction-card" className="border-2 border-black col-span-2 row-span-2 col-start-2"></div>
          <div id="under-construction-card" className="border-2 border-black col-span-2 row-span-1 col-start-5 row-start-5"></div>
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
