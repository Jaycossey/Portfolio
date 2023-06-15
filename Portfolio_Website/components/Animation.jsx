
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