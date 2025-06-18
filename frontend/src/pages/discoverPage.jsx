import { X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export const DescoverStepsPage = ()=>{
    return(<>
    <Navbar/>
    <section>
        <div className="container mx-auto mt-5 px-7 py-10 h-screen bg-[url('./bg-aboutus.jpeg)'] bg-cover p-6 [&>h5]:text-secondary-color [&>h5]:font-semibold">
        <h2 className="font-body-font text-secondary-color font-bold text-2xl lg:text-4xl my-3">How FormMeUp Works</h2>
        <p className="text-secondary-light mb-5">FormMeUp is designed to simplify every step of your form journey — whether you're a business, an organization, or an individual user.</p>
        <h5> Secure Access:</h5>
        <p className="text-secondary-light leading-5 mb-3">Each form is protected by a unique link and password, ensuring only authorized users can view and complete it. You can choose to receive the link via email, SMS, or your preferred channel.</p>
        <h5>Customizable Forms:</h5>
        <p className="text-secondary-light leading-5 mb-3">Our platform supports dynamic fields, conditional logic, and user-friendly interfaces to make form completion seamless for anyone — no tech skills required.</p>
        <h5>Instant PDF Conversion:</h5>
        <p className="text-secondary-light leading-5 mb-3">Once the form is submitted, it’s automatically converted into a professionally formatted PDF. Download it instantly or share it securely — all in one click.</p>
        <h5>Data Protection:</h5>
        <p className="text-secondary-light leading-5 mb-3">We prioritize your data’s safety with encryption, secure storage, and compliance with industry-standard privacy protocols.</p>
        <p>Whether you're collecting client information, onboarding new employees, or handling registration forms, FormMeUp helps you do it faster, safer, and smarter.</p>
        </div>
    </section>
    <Footer/>
    </>);
}