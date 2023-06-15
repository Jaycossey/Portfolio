import enigmaTopView from '../src/assets/enigma.png'
import plugboardView from '../src/assets/enigma-plugboard.png'

// Read this code tomorrow, make sure to check that it is scaleable (not currently it isnt) and then begin to build the functionality. remember
// that the idea is to allow user to choose 3 of 5 rotars and set the starting point of them! this will need adding at some point but want this to get
// working first. THIS IS MAIN PRIORITY!!
export default function EnigmaFullScreen() {
    return (
        <>
            <div className="absolute z-20 ml-60 mt-20 border-8 border-violet-500 rounded-3xl w-4/5 h-4/5 bg-violet-200 bg-opacity-90 grid grid-cols-3 grid-rows-5">
                <div id="img-container" className="col-start-2">
                    <img id="enigma-top" src={enigmaTopView} className="m-auto mt-5" />
                    <img id="plugboard" src={plugboardView} className="m-auto -translate-y-5" />
                </div>
                <div id="plaintext-container" className="col-start-1 ml-20">
                    <div id="input explanation">
                    <h1 className="text-lg underline underline-offset-2 font-mono">Enigma Machine</h1>
                    <p>Input the plaintext here!</p>
                    <p>The Enigma machine works by selecting 3 starting rotars.</p>
                    <p>You align the rotars with the key that was chosen.</p>
                    <p>Select the plugboard for hardcoded letters.</p>
                    <p>Letters cannot be coded as themselves.</p>
                    <p>The input letter is sent through the machine, the first rotar rotates.</p>
                    <p>Once the rotar has completed a revolution the next rotar begins turning.</p>
                    <p>As the letter goes through the machine, it goes through the plugboard, then the rotars (all 3).</p>
                    <p>The letter then hits the reflector and passes through the machine again.</p>
                    <p>Once the letter passes the plugboard again, the lightboard shows the now encoded letter.</p>
                    </div>
                    <input id="plaintext" type="text" className="w-80 h-20 rounded-md font-mono p-2" placeholder="Hello, World!"></input>
                    <button type="button" for="plaintext" className="m-2 rounded-md bg-violet-300 h-10 w-20 border-2 border-violet-500 hover:scale-105 duration-200">Encrypt</button>
                </div>
                <div id="ciphertext" className="col-start-3 text-right mr-20">
                    <h1 className="text-lg underline underline-offset-2 font-mono">Your Cipher Here!</h1>
                    <textarea id="display-cipher" className="w-full h-80 rounded-3xl p-10" placeholder="Cipher Text"></textarea>
                </div>
                <div id="close-window" className="col-start-3 translate-x-80 mt-40 translate-y-1 rounded-3xl row-start-5 w-1/5 h-1/2 text-center border-r-8 border-b-4 border-l-4 border-violet-900 bg-gradient-to-l from-violet-400 via-violet-300 to-transparent hover:cursor-pointer hover:scale-75 duration-200">
                    <div id="toggleHereX" className="text-2xl mt-5">
                        <h1 className="text-violet-400 font-bold font-sans">X</h1>
                    </div>
                </div>
            </div>
        </>
    );
}