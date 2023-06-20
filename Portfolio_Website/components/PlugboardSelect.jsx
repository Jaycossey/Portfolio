import { useEffect, useState } from "react";

export default function PlugboardSelect() {

    /* 
        So, using chat gpt I managed to render each of the select elements dynamically however the side effects were a bit wonky, for lack of a better word. What I need to
        do is set the state of availiable options / letters. set an array of select elements to render below by just calling that array. (currently shown in the react comment below.)

        lets work out what data I need to keep track of, where that data is and how to display it dynamically
    */

    // so setting the options and selected values with usestate. these functions will return 2 values, the variable of availiableoptions/selectedvalues, and the setstate function.
    const [availiableOptions, setAvailiableOptions] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    // selected values is an empty array until user selects an option
    const [selectedValues, setSelectedValues] = useState([]);

    // create an array to store the select and option elements
    const selectElements = [];
    
    // need to now make the options and have them update depending on the value of other plugs. so for select.1 and select.2 they need to link together and for the remaining 
    // select options they need to change in order to reflect user choice. so value of the blank option will be the chosen letter for that option. and the remaining optionelements 
    // must not be duplicates of the selected letters.
    
    const optionElements = [];
    // we need to set availiable options to reflect the choices made.
    // populate the availiable options array with the options elements, from a-z then can useeffect to handle the changes and side effects of userchange.
    for (let j = 0; j < availiableOptions.length; j++) {
        optionElements.push(
            <option key={j} value={availiableOptions[j]}>{availiableOptions[j]}</option>
        )
    }

    // will need to check this will be what I need but reckon that im on the right lines, basically handling the changes and updaiting the value for the select option. 
    // then I want to remove / add the current value from other lists / this value.
    // makes sense in my head but for now I need to do things other than code for a bit 
    function handleChange() {

    }

    // populate the selectElements Array with 10 (hardcoded) plugboard select elements. as well as a blank option.
    // remember that select elements should link together, so 1+2 make 1 plug, 2+4 and so on.
    for (let i = 0; i < 10; i++) {
        selectElements.push(
            <select key={i} className="rounded-md w-10 m-auto" onChange={handleChange}>
                <option value=""></option>
                {optionElements}
            </select>
        )
    }

    return (
        <>
            {selectElements}
        </>
    );
}