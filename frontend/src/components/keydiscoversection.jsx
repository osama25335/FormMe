import { ButtonLinear, ButtonTransparent } from "../ui/Buttons";
import { Card } from "../ui/card";

export default function KeyDiscoverSection(){
    return(<>
            <section className="py-3">
                <div className="container mx-auto px-7 py-10">
                    <div className="text-center max-lg:p-7 w-1/2 mx-auto">
                        <span className="font-bold text-xs mb-3 text-secondary-dark">Secure</span>
                        <h2 className="font-body-font text-secondary-color font-bold text-2xl lg:text-4xl mb-3">Discover the Key Benefits of FormMeUp</h2>
                        <p className="text-secondary-light leading-5 mb-3">FormMeUp simplifies your workflow by providing easy access to custom online forms. With our secure password protection, you can trust that your data is safe while enjoying efficient PDF conversion.</p>
                    </div>
                    <div className="flex justify-center items-center gap-10"> 
                        <Card img="/access.png" heading="Access Forms Anytime, Anywhere" paragraph="No more hassle—get your forms with just a click."/>
                        <Card img="/security.png" heading="Your Data, Always Protected" paragraph="Each form is safeguarded with password protection."/>
                        <Card img="/access.png" heading="Convert Forms to PDFs Effortlessly" paragraph="Transform your filled forms into downloadable PDFs in seconds."/>
                    </div>
                    <div className="md:space-x-4 flex max-md:flex-col justify-center items-center">
                        <ButtonTransparent>Learn More</ButtonTransparent>
                        <ButtonLinear>Contact Us</ButtonLinear>
                    </div>

                </div>
            </section>
    </>);
}