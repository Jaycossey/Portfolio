// THIS IS MY NEXT FIX!!!! so having the code for this work on the vanilla JS version (player run and jump animations) but not in react is making me question my sanity. 
// Once the actual pixel art bg is finished and added on here then I can begin to work the canvas (seen some tutorials for react canvas elements and components) and add 
// the player sprites and parallax bg (3 layer for this little strip rather than 5) to enable some interactivity. 
// 
// Once the basic 2 animations are added for the player, I want to be able to create the first level enemys and give users the option to "play" an auto sidescroller for 
// the bottom of the screen. Using react states for the animations and also have a high score show on the screen. Can I create a leaderboard for this? would be a cool feature
// but not nearly a priority for now.

import { useState } from "react";


/* 
    OK, so I am slowly learning that I need to plan things at a high level then break it down into a lower level and then more functional look.

    So what are the deciding factors and outside things I need? 
        - Spritesheets,
        - How the user interacts with the animations, remember that I need to be able to change the interaction when more animations etc are added
        - I need to add scalability for more animations and backgrounds. 
        - Remember the end goal, this will be the start of the sidescroller I want to build, it will be its own component loading when the user chooses.

    Internal factors would be how the code works with itself to draw the animation on the canvas, high level look at the old code, (needs uploading as well)
        - CANVAS width & size
        - how to manage the animation states
        - managing getContext('2d') in react
        - sprite width & height
        - managing reusable animation functions to be able to draw the next frame with the directions / next frame, enabling me to just change the arguments 
                of the function to simply call animate(arguments for whether bg or player or enemy once added)
        
    So what I need to do is talk myself through how this works, I want the bg to auto scroll from right to left, I want the 'playersprite' to be able to be an endless
    animation as well. 
    I want the user to be able to select from the dropdown and choose an animation state which will trigger the players animation to change, if jump, the player aprite
    will also move up on the screen away from its x axis and then back again within a short time. if the user chooses flight, the background will switch to an "arial" side
    scroller, I only want those 3 animations for the main component and that will be where my focus is today.

    So, What do I need in terms of assets? 
        The full 3 animations for player sprites
        The two different background images

    I need to manage the current animationState and useState for the dropdown menu
    I need to visually see the changes myself to aid in debugging, meaning linking an image to the canvas itself with jquery and getContext 
    I need to find out how canvas works in react or if it is different to what I have learned for vanilla JS
    I need to then work out how each state interacts with each other, and create onChange events to handle the state management. Used somthing very similar in the enigma for 
    plugboards so can work with that knowledge for dropdowns.
    The changes then trigger the state changes for each element. So for the sprite it would trigger another function to handle the animation changes at the setState useState hooks
        These would change the spriteHeight (animation state)
        and the total frames, as well as stagger frames if choosing a slower animation like flight
        It would also be needed to trigger the y value of the canvas element both up and down to show a more impressive jump and flight.

    So How do I approach it? Lets approach it functionally and in order.

        I need the assets created and imported if not already. Can create a basic bg with tiles easy enough, then span it across for a full screen length to repeat twice to prevent 
        overlap.

        I also need a flight animation for the player.

        Then I need to use jquery to link the animation functions and spritesheets to the canvases and getContext for the draw functions

        Once I have that I can start to set initial states for the animations, I need:

        animationStates.

        This would be the only part that requires me to useState, animationStates would be the variables and objects they always were, useState is defined by the value of the select
        menu, which is just that name, I then can use (basic terms) if animationState == run then set these variables be x y and z, and then the animate function will automatically
        update. So the only thing I need to remember is that it is only 3 states run, jump, fly. 
        animationStates = [
            {
                name: 'jump'
                values: height
                width: framerate
                and: so on
            }
        ]

        function animate() {
            do the thing with the standard variable names
        }

        in react, const [animationStates, setAnimationStates] = useState('variable name for default animation state, which is "run"')
        link the setAnimationStates to a jQuery variable, then on the canvas element run animate. The part I am going wrong with is assuming that I am creating individual functions
        for each animation state, simply put, these animations will run infinitely and are separate to the state management. All I am doing with the state is creating the switch between
        them. KISS at its finest, and this is how I can start truly progressing, this realisation without using google and just thinking logically has been eye opening and I believe was 
        worthy of a mention. This will all be moved to Update logs and formatted at some point but back to the code.

        so how would canvas work here? How can I translate this myself and have it make sense, I need to look at it literally before I can actually write code that I dont fully understand
        context was a new concept when I did it in vanilla JS so I need to look at it in depth to be able to use it, then I need to work out how to use that in react in order to draw
        the sprites onto the canvas. 

        I will carry this on in the following order:
            - create the remaining spriteAnimations and bgs.
            - create a simple draw function for the canvas element
            - change the data within to reflect a reusable function for animating any canvas of any size.
            - could potentially work in pseudocode to explain the maths and how each of the animation states work with each other. create each animation state values with variable names to 
                describe how they work
            
*/

export default function Animation() {

    return (
        <>
            <div id="animation-container" className="border-2 border-yellow-400 col-span-5 row-span-1 grid grid-rows-3 grid-cols-10">
            <select id="animation-choice" className="text-center rounded-3xl h-10 w-60 relative m-auto col-start-5 shadown-xl bg-violet-300 z-10">
                <option>--Please Select--</option>
                <option>Run</option>
                <option>Fly</option>
            </select>
            <canvas id="playerCanvas" className="w-16 h-16 col-start-2 row-start-2 border-2 border-red-700">{/* canvas height & width = 64px */}</canvas>
            <canvas id="parallaxCanvas" className="w-screen h-32 fixed mt-5 border-2 border-black">{/* margin-20px!! CANVAS HEIGHT = 128px */}</canvas>
            {/* <Canvas draw={playerAnimate} width={64} height={64} /> */}
            </div>
        </>
    );
}