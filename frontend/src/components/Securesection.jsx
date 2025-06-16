import { Link } from "react-router-dom";
import { Box } from "../ui/Box";
import { ButtonLinear, ButtonSeconde } from "../ui/Buttons";
export default function SecureSection(){
    return(
    <>
        <section className="Security">
            <div className="container mx-auto px-7 py-10 flex flex-col lg:flex-row justify-center items-center gap-10">
                <div className="flex-1 max-lg:text-center max-lg:p-7">
                    <span className="block font-bold text-xs mb-3 text-secondary-dark">Secure</span>
                    <h2 className="font-body-font text-secondary-color font-bold text-2xl lg:text-4xl my-3">Access Custom Forms Anytime, Anywhere</h2>
                    <p className="text-secondary-light leading-6 mb-3">With FormMeUp, clients can easily access tailored online forms through secure links. Fill them out conveniently and download as PDFs.</p>
                    <div className="lg:flex py-6 mb-3 gap-2">
                        <Box heading={"Easy Access"} paragraph={"Fill out forms securely and receive them instantly."}/>
                        <Box heading={"Secure Links"} paragraph={"Your data is protected with password access."}/>
                    </div>
                    <div className="md:space-x-4 max-md:flex max-md:flex-col max-md:items-center gap-6">
                        <ButtonSeconde><Link to="security">Learn More</Link></ButtonSeconde>
                        <ButtonLinear><Link to="contactus">Contact US</Link></ButtonLinear>
                    </div>
                </div>
                <div className="flex-1">
                    <img src="/form.png" alt="" />
                </div>
            </div>
        </section>
    </>);
}