import profilePic from '../src/assets/profile-pic.png'
import underHoodCode from '../src/assets/underHood.png'

const defaultBgState = {
    bgToggle: false,
};

function setHidden() {
document.getElementById('underHood').setAttribute('style', 'opacity:0');    
}

function toggleCodeBg() {

    const underHoodImage = document.getElementById('underHood');
    if (defaultBgState.bgToggle == false) {
    defaultBgState.bgToggle = true;
    underHoodImage.setAttribute('style', 'opacity:0.9');
    } else if (defaultBgState.bgToggle == true) {
    defaultBgState.bgToggle = false;
    underHoodImage.setAttribute('style', 'opacity:0');
    }
}

export default function UnderHood() {
    return (
        <>
            <div id="underHood-container" className="fixed w-screen">
                <img id="underHood" src={underHoodCode} onLoad={setHidden} className="m-auto mt-20 w-4/5 rounded-3xl border-8 duration-300" />
            </div>
            <div id="profile-container" className="row-span-2">
                <a href="#" className="rounded-3xl bg-transparent shadow-2xl shadow-slate-400" data-te-toggle="tooltip" title="Click for an under the hood look!">
                    <img id="profile-pic" onClick={toggleCodeBg} src={profilePic} className="rounded-full scale-90 hover:scale-100 duration-300 hover:cursor-pointer hover:border-8 border-r-8 border-b-8 border-violet-300 shadow-violet-900 -translate-x-10 -translate-y-5 hover:translate-x-5 hover:translate-y-5 active:scale-90" />
                </a>
            </div>
        </>
    );
}
