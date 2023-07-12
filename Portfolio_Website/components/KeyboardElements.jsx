const KeyboardElements = (props) => {
    const board = props.board;
    const keys = props.keys;

    console.log(keys);
    console.log(board);

    let elementArray = [];

    keys.forEach(letter => {
        let element = document.createElement('p');
        element.innerText = letter;
        element.value = letter;
        element.key = letter;
        element.id = board;
        elementArray.push(element);
    });
    
    // the elements are created and have their own keys and values
    console.log(elementArray[0]);

    return (
        <div id="keys" className="w-full h-full col-span-4 grid grid-cols-12 grid-rows-3 gap-1 p-1 border-black border-4 text-center text-white [&>p]:bg-slate-800 [&>p]:rounded-full [&>p]:border-2 [&>p]:border-slate-200 [&>p]:w-8 [&>p]:h-8 [&>p]:shadow-3xl">
            {elementArray.map(p => <p>{p.innerText}</p>)}
            <div id="spacing" className="row-start-1 col-start-1 col-span-1"></div>
            <div id="spacing" className="row-start-1 col-span-2 col-start-11"></div>
            <div id="spacing" className="row-start-2 col-start-1 col-span-2"></div>
            <div id="spacing" className="row-start-2 col-span-3 col-start-10"></div>
            <div id="spacing" className="row-start-3 col-span-1 col-start-1"></div>
        </div>
    );
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