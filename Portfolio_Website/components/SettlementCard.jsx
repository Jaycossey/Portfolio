import SettlementScreen from '../src/assets/SettlementGeneratorScreenshot.png'

// This works, sends the user to the codepen project and using noreferrer and target_blank helps with the security vulnerabilities external links provide but as with all
// the projects, I want to either have the option to show the codepen or the popup window on this same page. This may need looking into with the zindex issue with the togglebg 
// underhood function which needs fixing. At present this isnt a priority, I need to focus on building different projects for the portfolio and ensuring I have enough on here first.

export default function SettlementCard() {
    return (
        <>
            <div id="portfolio-card" className="z-10 mt-2 col-span-2 row-span-2 hover:scale-110 hover:cursor-pointer hover:underline hover:underline-offset-2 hover:z-10 hover:translate-x-5 hover:translate-y-5 duration-150">
                <div id="settlement-container" className="w-full h-full border-4 border-violet-400 hover:border-violet-800 rounded-2xl bg-violet-300">
                    <a href="https://codepen.io/Jaycossey/pen/zYmJgZw" target="_blank" rel="noreferrer">
                    <div id="porfolio-window" className="w-4/5 h-3/4 border-2 border-violet-400 rounded-2xl m-auto mt-2 drop-shadow-lg">
                        <img src={SettlementScreen} className="h-full rounded-2xl" />
                    </div>
                    <h1 id="portfolio-title" className="text-lg text-center font-bold text-violet-500 drop-shadow-lg">Settlement Generator</h1>
                    </a>
                </div>
            </div>
        </>
    );
}