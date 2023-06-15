import QuoteMachineScreen from '../src/assets/quotemachinescreen.png'

// works the same as the settlement generator and links to the codepen project, would like eventually to add in the option to have this create a popup window
// to save having to change between different websites to work but will settle on this for now.
export default function QuoteMachineCard() {
    return (
        <>
            <div id="porfolio-card">
                <div id="quoteMachine-card" className="mt-2 col-span-2 row-span-2 hover:scale-110 hover:cursor-pointer hover:underline hover:underline-offset-2 hover:z-10 duration-150">
                    <div id="quoteMachine" className="w-full h-full border-4 border-violet-400 hover:border-violet-800 rounded-2xl bg-violet-300">
                        <a href="https://codepen.io/Jaycossey/pen/dyjdmWG" target="_blank" rel="noreferrer">
                        <div id="porfolio-window" className="w-4/5 h-3/4 border-2 border-violet-400 rounded-2xl m-auto mt-2 drop-shadow-lg">
                            <img src={QuoteMachineScreen} className="h-full rounded-2xl" />
                        </div>
                        <h1 id="portfolio-title" className="text-lg text-center font-bold text-violet-500 drop-shadow-lg">Dethklok Quote Generator</h1>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}