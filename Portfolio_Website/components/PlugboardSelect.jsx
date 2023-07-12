import { useEffect, useState } from "react";

export default function PlugboardSelect() {
    // create each letter for the qwertz plugboard, an array to store the options and a create element variable called to populate the options array
    const plugboardDisplayOptions = "QWERTZUIO\nASDFGHJK\nPLYXCVBNM";
    const optionElements = [];
    const [plugboardChoices, setPlugboardChoices] = useState([]);

    const plugboardContainer = document.getElementById('plugboard-container');
    

    function populatePlugboardOptions() {
        for (let i = 0; i < plugboardDisplayOptions.length; i++) {
            let letter = plugboardDisplayOptions[i];
            let option = document.createElement('p');
            option.key = i;
            option.value = letter;
            option.innerText = letter;
            optionElements.push(option);
        }
        console.log(optionElements);
    }
    
    
    // plugboardContainer.appendChild(individualLetterOptions);
    // werent far off what I wanted, so what I need to do is forEach on the array and then append to the parent div
    populatePlugboardOptions();
    

    // So if I look at it this way, I cant seem to append the p elements to the parent div, why this is i dont know and I am too tired to figure it out atm
    // Hitting this wall has left me stumped. The elements are in the array, yet I dont know if it is a react specific problem or something I am missing, this 
    // worked when creating the settlement generator in JS. Will do some research and come back to this shortly. For now Im gonna work on something else.

    return (
        <div id="plugboard-container" className="w-80 h-40 border-2 rounded-md text-center grid grid-flow-row grid-rows-3 grid-cols-10">
            
        </div>
    );
}