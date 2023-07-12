
// create component which takes props for each of the keyboards
const KeyboardElements = (props) => {
    // create states for each keyboard
    // lightboard will take props (name it something like cipherLetter)
    // keyboard will setState or setInputLetter
    // plugboard will setState or setPlugboardSettings

    // handle click of keyboard
    function handleKeyboardClick() {
        console.log("keyboard click");
    }

    // handle click of plugboard
    function handlePlugboardClick() {
        console.log("plugboard click");
    }
    
    // props are passed when the component is called
    const board = props.board;
    const keys = props.keys;

    // create an array to store the <p> elements
    let elementArray = [];

    // for each letter in the keys array create the elements and assign their value, innerText, key and ID
    keys.forEach(letter => {
        let element = document.createElement('p');
        element.innerText = letter;
        element.value = letter;
        element.key = letter;
        element.type = board;
        element.id = board + "(" + letter + ")";
        elementArray.push(element);
    });

    console.log(elementArray[0].id);
    
    // easier referencing to compare board type
    const keyboardType = ["lightboard", "keyboard", "plugboard"];

    // return a div which contains the layout and appearance of the keyboards based on the board type
    if (board === keyboardType[0]) {
        return (
            <div id="keys" className="w-full h-full col-span-4 grid grid-cols-12 grid-rows-3 gap-1 p-1 border-slate-700 border-4 text-center text-white [&>p]:bg-slate-700 [&>p]:rounded-full [&>p]:border-2 [&>p]:border-slate-400 [&>p]:w-8 [&>p]:h-8 [&>p]:shadow-3xl">
                {elementArray.map(p => <p>{p.innerText}</p>)}
                <div id="spacing" className="row-start-1 col-start-1 col-span-1"></div>
                <div id="spacing" className="row-start-1 col-span-2 col-start-11"></div>
                <div id="spacing" className="row-start-2 col-start-1 col-span-2"></div>
                <div id="spacing" className="row-start-2 col-span-3 col-start-10"></div>
                <div id="spacing" className="row-start-3 col-span-1 col-start-1"></div>
            </div>
        );
    } else if (board === keyboardType[1]) {
        return (
        <div id="keys" className="w-full h-full col-span-4 grid grid-cols-12 grid-rows-3 gap-1 p-1 border-slate-700 border-4 text-center text-white [&>p]:bg-slate-800 [&>p]:rounded-full [&>p]:border-2 [&>p]:border-slate-200 [&>p]:w-8 [&>p]:h-8 [&>p]:shadow-3xl">
            {elementArray.map(p => <p className="hover:cursor-pointer hover:scale-110" onClick={handleKeyboardClick}>{p.innerText}</p>)}
            <div id="spacing" className="row-start-1 col-start-1 col-span-1"></div>
            <div id="spacing" className="row-start-1 col-span-2 col-start-11"></div>
            <div id="spacing" className="row-start-2 col-start-1 col-span-2"></div>
            <div id="spacing" className="row-start-2 col-span-3 col-start-10"></div>
            <div id="spacing" className="row-start-3 col-span-1 col-start-1"></div>
        </div>
        );
    } else if (board === keyboardType[2]) {
        return (
            <div id="keys" className="w-full h-full col-span-4 grid grid-cols-12 grid-rows-3 gap-1 p-1 border-slate-700 border-4 text-center text-white [&>p]:bg-slate-800 [&>p]:rounded-sm [&>p]:border-2 [&>p]:border-slate-400 [&>p]:w-8 [&>p]:h-8 [&>p]:shadow-3xl">
                {elementArray.map(p => <p className="hover:scale-110 hover:cursor-pointer" onClick={handlePlugboardClick}>{p.innerText}</p>)}
                <div id="spacing" className="row-start-1 col-start-1 col-span-1"></div>
                <div id="spacing" className="row-start-1 col-span-2 col-start-11"></div>
                <div id="spacing" className="row-start-2 col-start-1 col-span-2"></div>
                <div id="spacing" className="row-start-2 col-span-3 col-start-10"></div>
                <div id="spacing" className="row-start-3 col-span-1 col-start-1"></div>
            </div>
        );
    }
}

export default KeyboardElements;
    /*
        So in order to create the keyboards dynamically and also to learn more about react, I am going to create a keyboardElements component which takes props as an argument
        these props will be (rotarArray & index)

        this will help keep this component simple and avoid repeating the original array.

        as this is going to be a way to quickly render the keyboards dynamically I can use the rotararray to just run with a for loop. 

        Can more than 1 argument be used in the component? then can use a switch statement to determine the properties for each of the lightboard switchboard and plugboard.

        would be good to either style here or on the parent divs for the separate stylingss?

        right so look into how to bind props to this and if its needed (pretty sure it is just state management)

        then work out how to use the data to return the keyboards dynamically.


    */