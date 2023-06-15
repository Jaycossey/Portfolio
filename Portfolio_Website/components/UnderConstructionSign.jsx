export default function UnderConstructionSign() {
    return (
        <>
            <div id="sign-grid-container" className="grid grid-cols-4 grid-rows-4 gap-0 mt-5 drop-shadow-2xl">
              <div id="string" className="border-2 border-orange-900 col-span-1 h-0 -translate-x-1  rotate-12 col-start-3 row-start-1"></div>
              <div id="string" className="border-2 border-orange-900 col-span-1 h-0 translate-x-1 -rotate-12 col-start-2 row-start-1"></div>
              <div id="board" className="border-4 border-orange-900 row-start-2 bg-orange-500 h-10 col-span-4 -translate-y-7 rounded-md skew-x-2 grid grid-cols-4 grid-rows-4">
                <div id="detail" className="border-2 border-orange-900 col-span-2 col-start-2 row-start-2 h-0"></div>
                <div id="detail" className="border-2 border-orange-900 col-span-1 col-start-4 row-start-3 h-0"></div>
                <div id="detail" className="border-2 border-orange-900 col-span-2 col-start-1 row-start-2 h-0"></div>
              </div>
              <div id="board" className="border-4 border-orange-900 row-start-3 bg-orange-500 h-10 col-span-4 -translate-y-7 rounded-md -skew-x-3">
                <h1 className="text-center text-white underline underline-offset-3">Under Construction!</h1>
              </div>
              <div id="board" className="border-4 border-orange-900 row-start-4 bg-orange-500 h-10 col-span-4 -translate-y-7 rounded-md skew-x-4 grid grid-cols-4 grid-rows-4">              
                <div id="detail" className="border-2 border-orange-900 col-span-2 col-start-2 row-start-2 h-0"></div>
                <div id="detail" className="border-2 border-orange-900 col-span-2 col-start-3 row-start-3 h-0"></div>
                <div id="detail" className="border-2 border-orange-900 col-span-1 col-start-1 row-start-3 h-0"></div>
              </div>
            </div>
        </>
    );
}