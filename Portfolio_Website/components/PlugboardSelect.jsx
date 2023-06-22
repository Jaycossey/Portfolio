import { useEffect, useState } from "react";

export default function PlugboardSelect() {
    const MAX_PLUGBOARD = 10;
    let USER_PLUGBOARD_NUMBER = 5;

    // so setting the options and selected values with usestate. these functions will return 2 values, the variable of availiableoptions/selectedvalues, and the setstate function.
    const [availiableOptions, setAvailiableOptions] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    // selected values is an empty array until user selects an option
    const [selectedValues, setSelectedValues] = useState([]);

    // create an array to store the select and option elements
    const selectElements = [];
    
    // create array to store the option elements
    const optionElements = [];

    // populate the availiable options array with the options elements, from a-z then can useeffect to handle the changes and side effects of userchange.
    for (let j = 0; j < availiableOptions.length; j++) {
        optionElements.push(
            <option key={j} value={availiableOptions[j]}>{availiableOptions[j]}</option>
        )
    }

    // need to handle all changes made relating to user input
    function handleChange() {
        // so. basically for now, I need to ensure that once the user selects a letter from plugboard[i] that same letter is removed from all other plugboard options
        // I also need to remember to add that letter back in once it changes.
        // this should be as simple as array manipulation using the JS built in functions. so on change, the setavailiable options would update the options state management
        // the selected values would also need to be handled here. pushing the selected letters to the selectedValues array with the setSelectedValues function.

        // first off, once the letter has been selected, remove that letter from all other select elements.

        // secondly I want to set the selected values array by pushing the letter into that array as a value. THESE VALUES MUST BE IN ORDER!! so, rather than pushing, I would
        // need to replace the ith value of the selectedValues array with the letter chosen, can use the select elements key to ensure that the letters are assigned to a static
        // location in that array.

        // once that is done, prompt the user to the ith+5 plugboard input

        // they will then select the joining letter and the handleChange gets called again.

        // if the user changes the plugboard already selected then I need to handle that by splicing the previous value back into the availiable options array AND remove from the 
        // selected values array

        // then prompting for the user to resubmit a value for that select option. OR to select no values and handle that as well. If value == "" then 
        // clear selectedValues.correspondingkey

        // weird sense of dejavu over with, now I need to actually implement this plan with some code.

    }

    // populate the selectElements Array with 10 (hardcoded need to change this at some point to give user choice on how many plugboards the user wants)
    // plugboard select elements. as well as a blank option. have a global to use for this which I can link up to the input using jQuery OR i could also remove the input and simply ensure
    // that the user only chooses the ith and ith+5 options from keys 0 - 4.  
    // remember that select elements should link together, so 1+2 make 1 plug, 2+4 and so on.
    for (let i = 0; i < USER_PLUGBOARD_NUMBER * 2; i++) {
        selectElements.push(
            <select key={i} className="rounded-md w-10 m-auto" onChange={handleChange}>
                <option value=""></option>
                {optionElements}
            </select>
        )
    }    
    
    return (
        <>
            {/* <div className="col-span-5">
                <input id="user-plugboard-total" type="number" min="0" max="5" placeholder="0-5" className="text-center rounded-md ml-2"></input>
            </div> */}
            {selectElements}
        </>
    );
}