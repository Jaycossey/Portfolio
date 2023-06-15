import { useState } from 'react'
import './App.css'
import UnderHood from '../components/UnderHood.jsx'
import WelcomeText from '../components/WelcomeText.jsx'
import UnderConstructionSign from '../components/UnderConstructionSign.jsx'
import Animation from '../components/Animation.jsx'
import SettlementCard from '../components/SettlementCard.jsx'

function App() {
    
  return (
    <>
      <div id="background" className="w-screen h-screen fixed bg-gradient-to-br from-violet-600 via-violet-100 to-violet-400 grid grid-cols-5 grid-rows-6 gap-2">
        <UnderHood />
        <WelcomeText />
        <div id="portfolio-container" className="col-span-5 row-span-3 grid grid-cols-10 grid-rows-5 gap-2">
          <SettlementCard />
          <div id="under-construction-card" className="col-span-2 row-span-2 row-start-2 col-start-4">
            <UnderConstructionSign />
          </div>
          <div id="under-construction-card" className="col-span-1 row-span-2 row-start-1 col-start-8">
            <UnderConstructionSign />
          </div>
          <div id="under-construction-card" className="col-span-2 row-span-2">
            <UnderConstructionSign />
          </div>
          <div id="under-construction-card" className="col-span-2 row-span-2 col-start-2">
            <UnderConstructionSign />
          </div>
          <div id="under-construction-card" className="col-span-2 row-span-2 col-start-4 row-start-4">
            <UnderConstructionSign />
          </div>
          <div id="under-construction-card" className="col-span-3 row-span-2 col-start-6 row-start-3">
            <UnderConstructionSign />
          </div>
          <div id="under-construction-card" className="col-span-2 row-span-4 col-start-9 row-start-2">
            <UnderConstructionSign />
          </div>
        </div>
        <Animation />
      </div>
    </>
  )
}

export default App
