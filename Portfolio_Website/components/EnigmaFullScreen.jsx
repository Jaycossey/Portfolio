import enigmaTopView from '../src/assets/enigma.png'
import plugboardView from '../src/assets/enigma-plugboard.png'

// Read this code tomorrow, make sure to check that it is scaleable (not currently it isnt) and then begin to build the functionality. remember
// that the idea is to allow user to choose 3 of 5 rotars and set the starting point of them! this will need adding at some point but want this to get
// working first. THIS IS MAIN PRIORITY!!

const rotarArray = [
    {
        name: 'ETW',
        combination: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    {
        name: 'i',
        combination: ["E", "K", "M", "F", "L", "G", "D", "Q", "V", "Z", "N", "T", "O", "W", "Y", "H", "X", "U", "S", "P", "A", "I", "B", "R", "C", "J"]
    },
    {
        name: 'ii',
        combination: ["A", "J", "D", "K", "S", "I", "R", "U", "X", "B", "L", "H", "W", "T", "M", "C", "Q", "G", "Z", "N", "P", "Y", "F", "V", "O", "E"]
    },
    {
        name: 'iii',
        combination: ["B", "D", "F", "H", "J", "L", "C", "R", "P", "T", "X", "V", "Z", "N", "Y", "E", "I", "W", "G", "A", "K", "M", "U", "S", "Q", "O"]
    },
    {
        name: 'iv',
        combination: ["E", "S", "O", "V", "P", "Z", "J", "A", "Y", "Q", "U", "I", "R", "H", "X", "L", "N", "F", "T", "G", "K", "D", "C", "M", "W", "B"]
    },
    {
        name: 'v',
        combination: ["V", "Z", "B", "R", "G", "I", "T", "Y", "U", "P", "S", "D", "N", "H", "L", "X", "A", "W", "M", "J", "Q", "O", "F", "E", "C", "K"]
    }
];
// rotar starting position is the combination index!!!! remember this when starting the funcitonal side of this.
// ie: rotarArray.v, combination[7] etc, work out the details when its less hot. 

export default function EnigmaFullScreen() {
    {/* This is where it gets complicated, I need to add an event listener to the input field (plaintext) and then call the encrypt function on change and then
        the print ciphertext function once the encryption has been completed.

        I need to create the functions for encrypt and printcipher.
    */}
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
                        <h2 className="text-md">Choose the plugboard settings.</h2>
                        <h2>Choose your rotars and starting positions</h2>
                    </div>
                    <input id="plaintext" type="text" className="w-80 h-20 rounded-md font-mono p-2" placeholder="Hello, World!"></input>
                    <button type="button" for="plaintext" className="m-2 rounded-md bg-violet-300 h-10 w-20 border-2 border-violet-500 hover:scale-105 duration-200">Encrypt</button>
                </div>
                <div id="ciphertext" className="col-start-3 text-right mr-20">
                    <h1 className="text-lg underline underline-offset-2 font-mono">Your Cipher Here!</h1>
                    <textarea id="display-cipher" className="w-full h-80 rounded-3xl p-10 font-mono" placeholder="Cipher Text"></textarea>
                </div>
                <div id="close-window" className="col-start-3 translate-x-80 mt-40 translate-y-1 rounded-3xl row-start-5 w-1/5 h-1/2 text-center border-r-8 border-b-4 border-l-4 border-violet-900 bg-gradient-to-l from-violet-400 via-violet-300 to-transparent hover:cursor-pointer hover:scale-75 duration-200">
                    <div id="toggleHereX" className="text-2xl mt-5">
                        <h1 className="text-violet-400 font-bold font-mono">X</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

/*
    How to approach this problems functionality (must replace plugboard image to remove the watermark, avoid copyrights?) 
        - The enigma machine was created by Arthur Scherbius in 1918 in germany, originally to assist in the banking and commercial world.
        - The original design did not have the plugboard and only had 3 rotars.

        - the rotars are all numbered 1-26 IN ORDER!!! (or lettered a-z)
        - The right hand rotar will rotate first
        - Then once a rotation is completed the middle, then finally the left rotar
        - So every month a sheet was sent out determining the date, rotar position and plugboard connections
        - there are 6 ways to arrange the 3 rotars and starting positions
        - This leads to a total of 17,576 total combinations of rotar positions
        - The plugboard has up to 10 pairs of letters that are hardcoded, with a total combination of 100,391,791,500 combinations for just 6 pairs of letters 
        - the total combinations to set up the enigma machine is 1.06 x 10 ^ 16 (10,000 trillion) combinations.

        - The sender and reciever would have the same setup to ensure that the decryption can be made by inputting the cipher text through the enigma machine 
        
        - I want there to be the ability to show the lightboard for each letter pressed to visualise the encryption
        - There has to be the choice of 3/5 rotars to choose from
        
        - Functionally I will need:
            - An array of rotars which will be arrays of combinations of letters, maybe create with OOP upon load? Hardcoding would be time consuming.
            - A way to work with the plugboard to allow user to choose those letter combinations
            - On change (input.value) will get passed through (in this order!!):
                - Keyboard - (plaintext)
                - Plugboard
                - ETW (Entry Wheel)
                - Rotar - right
                - Rotar - middle
                - Rotar - left
                - Reflector / UKW (sends letters back through the machine but on a different path)
                - Rotar - left
                - rotar - middle
                - rotar - right
                - Etw
                - plugboard
                - lightboard (ciphertext)

            - I have found a copy of an enigma code book (mentioned above for the starting positions on each date etc)
            - I will need to display the time and date for authenticity, at midnight the rotar positions and plugboard combinations should reflect the cycle? 
            - Looking at a visual representation, the second and 3rd rotars only turn once for each of the previous rotars 26th turns. 

            - So, The letter passed through the entry wheel, standard alphabet, 
                then through the plugboard, if that letter is plugged to another then the attached letter is passed through the rotars
                then reflector then back through the rotars in reverse order, 
                then the plugboard again if the new coded letter is plugged, (remember that the letter cannot be the same as the original)
                then out the etw, and then the lightboard.
*/