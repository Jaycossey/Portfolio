export default function UnderConstructionSign() {
    return (
        <>
            <h1 id="sign-text" className="underline text-center font-semibold text-lg text-white shadow-xl z-10 relative translate-y-20">Under Construction!</h1>
            <div id="string-left" className="border-2 border-orange-900 w-20 m-auto translate-y-2 -translate-x-10 -skew-y-12"></div>
            <div id="string-left" className="border-2 border-orange-900 w-20 m-auto translate-y-1 translate-x-10 skew-y-12"></div>
            <div id="board-1" className="w-full h-1/5 border-4 border-orange-900 rounded-xl translate-y-3 bg-orange-500">
              <div id="detail" className="w-2/5 border-2 border-orange-800 m-auto translate-y-6 -translate-x-10 -skew-x-6 rounded-lg"></div>
              <div id="detail" className="w-1/5 border-2 border-orange-800 m-auto translate-y-1 translate-x-14 skew-x-3 rounded-lg"></div>
              <div id="detail" className="w-2/6 border-2 border-orange-800 m-auto translate-y-2 ml-0 skew-x-1 rounded-lg"></div></div>
            <div id="board-2" className="w-full h-1/5 border-4 border-t-1 border-orange-900 rounded-xl translate-y-2 -skew-y-1 bg-orange-500">
              <div id="detail" className="w-2/5 border-2 border-orange-800 m-auto translate-y-4 translate-x-3 -skew-x-3 rounded-lg"></div>
              <div id="detail" className="w-1/5 border-2 border-orange-800 m-auto translate-y-1 translate-x-10 skew-x-3 rounded-lg"></div>
              <div id="detail" className="w-2/6 border-2 border-orange-800 m-auto translate-y-2 ml-0 skew-x-1 rounded-lg"></div>
            </div>
            <div id="board-3" className="w-full h-1/5 border-4 border-t-1 border-orange-900 rounded-xl translate-y-1 skew-y-1 bg-orange-500">
              <div id="detail" className="w-2/5 border-2 border-orange-800 m-auto translate-y-4 translate-x-10 -skew-x-3 rounded-lg"></div>
              <div id="detail" className="w-1/6 border-2 border-orange-800 m-auto translate-y-1 translate-x-4 skew-x-3 rounded-lg"></div>
              <div id="detail" className="w-2/6 border-2 border-orange-800 m-auto translate-y-4 ml-0 skew-x-6 rounded-lg"></div>
            </div>
            <div id="board-4" className="w-full h-1/5 border-4 border-t-0 border-orange-900 rounded-xl translate-y-1 skew-x-2 bg-orange-500">
              <div id="detail" className="w-2/5 border-2 border-orange-800 m-auto translate-y-4 -skew-x-3 rounded-lg"></div>
              <div id="detail" className="w-2/5 border-2 border-orange-800 m-auto translate-y-4 translate-x-10 -skew-x-12 rounded-lg"></div>
              <div id="detail" className="w-1/6 border-2 border-orange-800 m-auto translate-y-2 ml-0 skew-x-1 rounded-lg"></div>
            </div>
        </>
    );
}