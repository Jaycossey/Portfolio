export default function PlugboardSelect() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const plugboardSelectElement = document.getElementById('plugboardSelect');

    function createPlugboardOption(letter) {
            let plugboardOption = document.createElement("option");
            plugboardOption.value = alphabet[letter];
            plugboardOption.textContent = alphabet[letter];
    }

    // THIS ISNT THE PLAN!!!!! remember, you need to make this dynamically, so that the user can select another letter without any duplicates on the plugboard.
    // CHANGE THIS ASAP!!! need to create the following:
        // options element with textContent and value
        // both of those should be the respective letters of the alphabet (use the for loop)
        // when one is selected then remove child from the subsequent select elements options. only 1 of each value should exist in each select input.

        // REVISIT THIS TOMORROW BUT CURRENTLY MAKING GOOD PROGRESS

    return (
        <>
            <select id="plugboardSelect" className="w-10"></select>
        </>
    );
}