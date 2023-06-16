import enigmaTopView from '../src/assets/enigma.png'
import plugboardView from '../src/assets/enigma-plugboard.png'

// Read this code tomorrow, make sure to check that it is scaleable (not currently it isnt) and then begin to build the functionality. remember
// that the idea is to allow user to choose 3 of 5 rotars and set the starting point of them! this will need adding at some point but want this to get
// working first. THIS IS MAIN PRIORITY!!

/* 
    THIS IS IMPORTANT TO KNOW!! 
            There are 2 types of components in react, functional and class components, I have been using functional components as that was the most 
            memorable for me and was easier to use, however I realise that knowing the difference and where and when to use each of them is vital
            to my journey in react. So here goes:
                Functional components: 
                    These are functions which accept arguments as the properties of the component and return JSX
                    There is no state or lifecycle methods with functional components.
                    React hooks are used to manage state variables.

                Class components:
                    Extend the built in component class and can have state and lifecycle methods.
                    The react team recommends defining components as functions rather than classes, so currently I am on the right track.
                    
                The useState Hook: 
                    This hook allows you to add state to functional components, returning an array with 2 values. 
                    This hook takes initial state value as an argument and returns an updated value whenever the setter function is called.
                    ie: - 
                        const [state, setState] = useState(initialValue);
                    the initial value is the value I want to start with (in my case a string containing "Hello, World") and the state is the current 
                    state value that can be used in the component. the setState function can be used to update state, re rendering the component.
                    useState can hold any type of value, whereas the ckass component is limited to objects.

                    Never directly modify an object or array stored in useState. instead, create a new updated version of the array/object and call setState
                    with the new version. ie:- 
                        const updateName = () => {
                            ({...state, name: 'John'});
                        };

                        const updateAge = () => {
                            ({...state, age: state.age + 1});
                        };

                        const [array, setArray] = useState([1, 2, 3, 4]);
                        const addItem = () => {
                            setArray([...array, 6]);
                        };

                    useState enables adding state to functional components, so calling React.useState inside a component generates a single piece of state associated
                    with that component.

                    useState should only be used in the local component state although larger projects may require additional solutions (think about how this component
                    will be rendered on click of the window. so taking the bool from the window as an argument, if true then render)

                    The initial state will only be used as an argument once on the initial load. 
                    useState doesnt return the variable, it returns the array
                    const Message = () => {
                        const messageState = useState('');
                        const message = messageState[0]; // contains ''
                        const setMessage = messageState[1] // contains the function.
                    }

                    normally, array destructuring will simplify the code
                    const Message = () => {
                        const [message, setMessage] = useState('');
                    }

                    then you can use the state variable in the functional component like any other variable.

                    return (
                        <div>
                            <p>{message}</p>
                        </div>
                    )

                    to use hooks to update the state:
                        The second element returned in the use state function takes a new value to update the state variable. 
                        an example here: 

                        const [cipherText, setCipherText] = useState('');

                        return (
                            <div>
                                <input type="text" value={cipherText} onChange={e => setCipherText(e.target.value)} />
                            </div>
                            <div>
                                <p>{cipherText}</p>
                            </div>
                        )

                        so with this in mind, I can then instead use that cipherText variable to pass as an argument to the encrypt function and 
                        return that value to be the new value of the ciphertext textarea. 

                        the function above wont update the value immediately, instead, queuing the update operation and on re-rendering the component
                        the argument of useState will be ignored and the function will return the most recent value.

                        (the article -- written by Esteban Herrara link: https://blog.logrocket.com/guide-usestate-react/ -- expands on updating with the inclusion of the previous state but that isnt needed for this component.)

                        There are 2 things to keep in mind, 

                            only call hooks at the top level and only call hooks in react functions

                        a functional component can make many calls to useState or other hooks, each hook is stored in a list and 
                        a variable keeps track of the currently executed hook.

                        below is a direct copy/paste of the step by step of how this works.
                            React initializes the list of Hooks and the variable that keeps track of the current Hook
                            React calls your component for the first time
                            React finds a call to useState, creates a new Hook object (with the initial state), changes the current Hook variable to point to this object, adds the object to the Hooks list, and returns the array with the initial state and the function to update it
                            React finds another call to useState and repeats the actions of the previous step, storing a new Hook object and changing the current Hook variable
                            The component state changes
                            React sends the state update operation (performed by the function returned by useState) to a queue to be processed
                            React determines it needs to re-render the component
                            React resets the current Hook variable and calls your component
                            React finds a call to useState, but this time, since there’s already a Hook at the first position of the list of Hooks, it just changes the current Hook variable and returns the array with the current state, and the function to update it
                            React finds another call to useState and because a Hook exists in the second position, once again, it just changes the current Hook variable and returns the array with the current state and the function to update it

                        useState and useEffect are two of the most important hooks in react, allowing state management and side effect management in functional components.
                        both of these hooks are different and should be used in different ways (useEffect was used in the settelment generator for the API call)

                        if the new state is the same as the previous state, react wont trigger a re-render 
                        useState doesnt merge objects when state is updated, but replaces them.
                        useState follows the same rules as other hooks
                        pay attention to the order in which the functions are called.

*/

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
                    <input id="plaintext" type="text" className="w-80 h-20 rounded-md font-mono p-2" placeholder="Hello, World!" ></input>
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