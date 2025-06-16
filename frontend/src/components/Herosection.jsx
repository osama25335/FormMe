import { Link } from "react-router-dom";
import {ButtonPrincipal, ButtonSeconde } from "../ui/Buttons";

export default function HeroSection(){

    return(<>
    
    <section id="hero">
        <div className="container mx-auto px-7 py-10 flex flex-col lg:flex-row justify-center items-center gap-10">
            <div className="flex-1 max-lg:text-center max-lg:p-7">
                <h1 className="font-primary-font leading-12 text-secondary-color font-bold text-3xl md:text-4xl lg:text-[44px] mb-3">Transform Your Form Experience with Form<span className="text-primary-color">Me</span>Up</h1>
                <p className="text-secondary-light leading-6 mb-3">Say goodbye to cumbersome paper forms and hello to streamlined online solutions. With FormMeUp, you can easily create, fill, and download secure forms in just a few clicks.</p>
                <div className="md:space-x-4 my-6 max-md:*:my-2 max-md:flex max-md:flex-col max-md:items-center">
                    <ButtonPrincipal><Link to="contactus">Get Started</Link></ButtonPrincipal>
                    <ButtonSeconde><Link to="aboutus">Learn More</Link></ButtonSeconde>
                </div>
            </div>
            <div className="flex-1">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    </section>
    
    </>);
}