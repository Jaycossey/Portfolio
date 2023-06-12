// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLinkedIn } from '@fortawesome/free-brands-svg-icons'

export default function WelcomeText() {
    return (
        <>
            <div id="welcome-container" className="col-start-2 col-span-1 row-span-2 mr-10 text-right">
                <p className="text-3xl p-5 pt-12">Hello, World!</p>
                <p className="text-xl p-5">My name is Ian,</p>
                <p className="text-xl p-5">I am a front end developer.</p>
            </div>
            <div id="contact-container" className="col-start-4 col-span-2 row-span-2 mr-10 grid grid-cols-4">
                <p className="text-xl col-span-4 pt-12 text-right">About me default text, figure it out, or even a short blog post anything that would be about 5-10 lines leading into...</p>
                <p className="text-xl col-span-4 text-right">Work with me!</p>
                <div id="linkedin-icon" className="w-20 h-20 m-auto col-span-2">LinkedIn</div>
                <div id="email-icon" className="w-20 h-20 m-auto col-span-2">email</div>
                <div id="github-icon" className="w-20 h-20 col-span-2">github</div>
                <div id="codepen-icon" className="w-20 h-20 col-span-2">codepen</div>
            </div>
        </>
    );
}