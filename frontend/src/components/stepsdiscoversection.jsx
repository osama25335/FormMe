import { FileText, LayoutTemplate, MessageSquareLock, Waypoints } from "lucide-react";
import { StepCard } from "../ui/card";
import { ButtonLinear, ButtonTransparent } from "../ui/Buttons";
import { Link } from "react-router-dom";

export default function StepsDiscoverSection(){

    return(
    <>
        <section id="steps">
            <div className="container m-auto px-7 py-10">
                <div className="text-center lg:text-left lg:w-1/2">
                    <span className="hidden lg:block"><Waypoints className="text-primary-color" strokeWidth={2.5} size={40} /></span>
                    <h2 className="font-primary-font text-2xl lg:text-4xl font-bold leading-11 my-3 text-secondary-dark">Discover How FormMeUp Simplifies Form Management</h2>
                    <p className="text-secondary-light leading-6 mb-3">Using FormMeUp is a breeze. Follow our simple steps to create, fill, and download your custom forms securely.</p>
                </div>
                <div className="flex max-md:flex-col justify-center items-stretch *:flex-1 gap-10 py-6 mb-3 flex-wrap">
                    <StepCard icon={<MessageSquareLock className="text-primary-color" size={32} />} heading={"Step 1: Access Your Custom Form"} paragraph={"Receive a secure link and password via your preferred communication method."}/>
                    <StepCard icon={<LayoutTemplate className="text-primary-color" size={32}/>} heading={"Step 2: Complete the Form"} paragraph={"Easily complete the form with the provided fields."}/>
                    <StepCard icon={<FileText className="text-primary-color" size={32}/>} heading={"Step 3: Download Your PDF"} paragraph={"Convert your filled form into a downloadable PDF instantly."}/>
                </div>
                <div className="md:space-x-4 max-md:flex max-md:flex-col max-md:items-center max-md:text-center gap-6">
                    <ButtonTransparent> <Link to="discoversteps"> Learn More</Link></ButtonTransparent>
                    <ButtonLinear><Link to="contactus">Get Started</Link></ButtonLinear>
                </div>
            </div>
        </section>
    </>);
}