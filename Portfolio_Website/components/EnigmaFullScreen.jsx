import { useState } from 'react';
import KeyboardElements from './KeyboardElements.jsx';

const rotarArray = [
    {
        name: 'lightboard',
        combination: ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "A", "S", "D", "F", "G", "H", "J", "K","P", "Y", "X", "C", "V", "B", "N", "M", "L"]
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


export default function EnigmaFullScreen() {
    // set state hook here for plaintext

    // need to import and update the state of key presses on keyboards, then create a rotar component to handle the new data.
    // so on click in keyboard will update the users keypressState, push that to a newState array, and then use that data to pass through the rotars
    // on click with the plugboard will handle its own state and pass to here as the first part of the letters journey.

    /*
        so step by step, handle the clicks of the keyboard and the plugboard.
        keyboard will push the letterValue through to an array
        plugboard will only handle multiples of 2, ensure that the user is prompted until even numbers (10 or lower) are selected
        lightboard will take whatever the final state is that is passed to it and "light up" whenever the final letterState is passed to it.
    */

    return (
        <>
            <div className="absolute z-20 ml-60 mt-20 border-8 border-violet-500 rounded-3xl w-4/5 h-4/5 bg-violet-200 bg-opacity-90 grid grid-cols-4 grid-rows-5 font-mono">

                <div id="explanation-rotar-selection" className="border-2 row-span-2 m-10 p-2 bg-slate-200 rounded-md shadow-lg">
                    <h2 className="underline underline-offset-2">The Enigma Machine</h2>
                    <p className="text-sm">Choose your rotars here and starting positions</p>
                    <div id="rotar-select" className="grid grid-cols-5 grid-rows-2 border-2 border-black">
                        <input id="rotar1-selector" type="radio" className="m-5 col-start-1"></input>
                        <input id="rotar2-selector" type="radio" className="m-5 col-start-2"></input>
                        <input id="rotar3-selector" type="radio" className="m-5 col-start-3"></input>
                        <input id="rotar4-selector" type="radio" className="m-5 col-start-4"></input>
                        <input id="rotar5-selector" type="radio" className="m-5 col-start-5"></input>
                    </div>
                </div>

                <div id="plaintext-display" className="row-span-3 row-start-3 m-2 col-start-1 p-10">
                    <textarea id="plaintext" className="w-full h-full rounded-xl resize-none p-10 shadow-lg" placeholder="this is plaintext, will update as keys are pressed on keyboard"></textarea>
                </div>

                <div id="enigma-css-container" className="col-span-2 col-start-2 row-span-5 border-8 p-5 border-orange-400 bg-orange-500 rounded-md my-10 grid grid-cols-5 grid-rows-5">
                    <div id="enigma-rotar-container" className="border-2 col-span-4 row-span-2 grid grid-cols-3 bg-slate-700">
                        <div id="rotar-container" className="border-2 p-20">
                            <div id="rotar" className="w-10 h-full border-2 border-black rounded-2xl grid grid-rows-3 bg-slate-400 p-1">
                                <p id="rotar3-letter" className="text-center font-mono bg-white rounded-md row-start-2 h-7">1</p>
                            </div>
                        </div>
                        <div id="rotar-container" className="border-2 p-20">
                            <div id="rotar" className="w-10 h-full border-2 border-black rounded-2xl grid grid-rows-3 bg-slate-400 p-1">
                                <p id="rotar2-letter" className="text-center font-mono bg-white rounded-md row-start-2 h-7">1</p>
                            </div>
                        </div>
                        <div id="rotar-container" className="border-2 p-20">
                            <div id="rotar" className="w-10 h-full border-2 border-black rounded-2xl grid grid-rows-3 bg-slate-400 p-1">
                                <p id="rotar1-letter" className="text-center font-mono bg-white rounded-md row-start-2 h-7">1</p>
                            </div>
                        </div>
                    </div>

                    <div id="enigma-logo" className="col-span-1 border-2 row-span-2 bg-slate-500 grid grid-rows-3">
                        <h2 className="text-center row-start-2 mt-5 bg-black border-2 rounded-full h-16 m-2 shadow-lg p-2 uppercase font-mono font-bold text-3xl text-slate-200">Enigma</h2>
                    </div>

                    <div id="lightboard-container" className="border-2 col-span-5 bg-slate-600 grid grid-cols-5">
                        <div id="plugboardDecals" className="col-span-1 text-center text-white my-auto p-2">
                            <p className=" underline underline-offset-2">Lightboard</p>
                            <p>This will show your cipher</p>
                        </div>
                        <KeyboardElements board="lightboard" keys={rotarArray[0].combination} />
                    </div>

                    <div id="keyboard-container" className="border-2 col-span-5 bg-slate-600 grid grid-cols-5">
                        <div id="plugboardDecals" className="col-span-1 text-center text-white my-auto p-2">
                            <p className=" underline underline-offset-2">Keyboard</p>
                            <p>Type Here!</p>
                        </div>
                        <KeyboardElements board="keyboard" keys={rotarArray[0].combination} />
                    </div>

                    <div id="plugboard-container" className="border-2 col-span-5 bg-slate-600 grid grid-cols-5">
                        <div id="plugboardDecals" className="col-span-1 text-center text-white my-auto p-2">
                            <p className=" underline underline-offset-2">Plugboard</p>
                            <p>Choose up to 10 pairs!</p>
                        </div>
                        <KeyboardElements board="plugboard" keys={rotarArray[0].combination} />
                    </div>

                </div>

                <div id="ciphertext-display" className="row-span-3 row-start-3 m-2 col-start-4 p-10">
                    <textarea id="ciphertext" className="w-full h-full rounded-xl resize-none p-10 shadow-lg" placeholder="this is ciphertext"></textarea>
                </div>

                <div id="close-window" className="col-start-4 translate-x-80 mt-40 translate-y-1 rounded-3xl shadow-lg row-start-5 w-1/5 h-1/2 text-center border-r-8 border-b-4 border-l-4 border-violet-900 bg-gradient-to-l from-violet-400 via-violet-300 to-transparent hover:cursor-pointer hover:scale-75 duration-200">
                    <div id="toggleHereX" className="text-2xl mt-5">
                        <h1 className="text-violet-400 font-bold font-mono">X</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

// because I have changed how I want this to display and increase user funcitonality, I need to populate the 3 "keyboard" containers. Each of the same qwertz setup. 
// I do however need to remember that I want to have each one have its own functions attached. So the plugboard container needs to have its separate plugboard function
// the lightboard have its own funcitons 
// the keyboard to have its own functions

// The idea is that the user will choose 3 of the 5 rotars and choose a number to start each rotar at (between 1 and 26) the rotars are placed right to left in order chosen
// create a function that will (on the radio button clicks) set the state for the rotar selection and the index it begins at. 
// once the max rotars have been selected prevent the user from clicking other rotars, or add a button to restart the enigma setup would be easier.

// once rotars are populated and functioning correctly move to the plugboard functions
// on first click highlight plugboard index i and prompt for second selection, if plugboard has 10 combinations alert user no more can be selected.
// if no plugboard selections then do nothing

// on click for the keyboard itself add that letter to the plaintext state, it is with this we will use the cipher with, everything on screen is purely cosmetic.
// so on click for keyboard, update plaintext only

// on the plaintext state, then we can manipulate the encryption. Take it step by step, might be worth finishing the keyboards for more visual and go from there, just use default first 3
// rotars for the initial development and then work out ui after that works?

// FIRST:
/* 
    create the lightboard
    keyboard
    plugboard

    do this by creating a jquery function to create p elements with the styling relevant to each of the 3 sections.

    each of those elements needs a key corresponding to both the letter and the plug light and keyboards

    maybe set an id of the elements container and then create the key as the letter value? that will come later, figure out basics to start.

    
    once the machine is fully populated reference the keys and ids for the individual functions
    
    so on keyboard click update the plaintext state
    if plaintext  is updated then add to the textarea, use that data to then encrypt, pass through plugboard, rotars, reflectors, rotars, plugboards and finally lightboard. 
    KISS and use different functions for each step.
    when the lightboard function is created, make sure to use that to pass the ciphertext value.

    HIGHLY RECOMMEND LOOKING AT THE "COMPONENT DID MOUNT" before looking at state management, want the user to be able to click onto the card before mounting component to bring the 
    enigma fullscreen up and then want to be able to click the close icon at the bottom right to unmount the component. 

    I like the way this is looking and once I have the functionality figured out then I think I have this sorted. 

    REMEMBER ALL ABOUT STATE MANAGEMENT AFTER CREATING THE KEYBOARDS
*/

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


                        NOW!!!!! So it has been a couple days to refresh my head and all that, but, thanks to all of that information above, and being able to understand how it works 
                        behind the scenes, and realising that all I am doing is setting the state to be a variable and having the ability to use that variable, I can now take the next 
                        steps to use that input data and put it through an encryption algorithm for the enigma machine. I already have the 5 rotars, as well as the ETW to be able to 
                        manipulate and 

*/