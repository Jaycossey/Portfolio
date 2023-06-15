import enigmaTopImage from '../src/assets/enigma.png'
import EnigmaFullScreen from './EnigmaFullScreen.jsx'

// Currently the toggle functions dont work (not linked and also need to double chekc the method.) the card is mostly fine for now but remember to edit the image in the card
// Also remembe to actually finish the enigma fullscreen before finishing this. This is a main project that you are undertaking, this must not break the website!!!!! fix the enigma
// funcitonality first and allow a cipher to be run before fucking with any more of the aesthetics. 

// set default window state for the enigma machine.
let defaultWindowState = false;
let background = document.getElementById('background');

export default function EnigmaMachineCard() {

    // onClick function, sets states and calls render / hide functions depending on state
    function toggleEnigmaWindow() {
        if (defaultWindowState == false) {
            defaultWindowState = true;
            background.appendChild(<EnigmaFullScreen />);
        }
        else if (defaultWindowState == true) {
            defaultWindowState = false;
            hideEnigmaWindow();
        }
    }

    return (
        <>
            <div id="porfolio-card">
                <div id="enigma-card" className="mt-2 col-span-2 row-span-4 hover:scale-110 hover:cursor-pointer hover:underline hover:underline-offset-2 hover:z-10 duration-150" onClick={(toggleEnigmaWindow)}>
                    <div id="portfolio-window" className="w-full h-full border-4 border-violet-400 hover:border-violet-800 rounded-2xl bg-violet-300">
                        <div id="porfolio-window" className="w-4/5 h-3/4 border-2 border-violet-400 rounded-2xl m-auto mt-2 drop-shadow-lg">
                            <img src={enigmaTopImage} className="h-20 m-auto" />
                        </div>
                        <h1 id="portfolio-title" className="text-lg text-center font-bold text-violet-500 drop-shadow-lg">Enigma Machine</h1>
                    </div>
                </div>
            </div>
        </>
    );
}