// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLinkedIn } from '@fortawesome/free-brands-svg-icons'

// MAJOR FIX NEEDED!!!!! cant seem to get fontawesome icons to work, need to dedicate a couple of hours to this as need the links and everything to work. 
    // LinkedIn, GitHub, Codepen all to link to their respective sites
    // EMAIL -- this will create a popup window to give the option to contact me via email OR to sign up to the planned monthly email which gives 3-4 topics of things I have 
    //          learned since the last one. 
                // depending on what was chosen, either a form to submit an email OR a form to sign up to the emails
                // plans for the emails are to take name, email and to then use code to send "personalised" monthly updates with tutorials and coding topics which cover things 
                // I have learned.
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