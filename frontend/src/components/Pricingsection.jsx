import { Link } from "react-router-dom";
import { PricingCard } from "../ui/pricingcard";
 
export default function PricingSection(){
    return(
    <>
        <section id="pricing">
            <div className="container m-auto px-7 pt-10 pb-20">
                <div className="text-center *:block pb-10">
                    <span className="font-bold text-xs text-secondary-dark">Affordable</span>
                    <h2 className="text-2xl lg:text-4xl font-bold my-3 text-secondary-dark">Pricing Plans</h2>
                    <span className="text-secondary-light leading-5 mb-3">Choose the plan that fits your needs best.</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                    <div className="p-6 shadow hover:shadow-md shadow-primary-color [&>ul]:*:nth-2:text-secondary-lighter w-full md:w-3/4 duration-300">
                        <PricingCard price={"30$"} typePlan={"basic plan"}/>
                        <Link to="contactus" className=" text-white text-center inline-block w-full py-3 bg-secondary-color hover:bg-secondary-color-hover font-medium max-md:py-1.5 max-md:font-normal duration-200">started</Link>
                    </div>
                    <div className="p-6 shadow hover:shadow-md shadow-primary-color w-full md:w-3/4 duration-300">
                        <PricingCard price={"50$"} typePlan={"Standard plan"}/>
                        <Link to="contactus" className=" text-white text-center inline-block w-full py-3 bg-primary-color hover:bg-primary-color-hover font-medium max-md:py-1.5 max-md:font-normal duration-200">started</Link>
                    </div>
                    <div className="p-6 shadow hover:shadow-md shadow-primary-color w-full md:w-3/4 duration-300">
                        <PricingCard price={"75.55$"} typePlan={"pro plan"}/> 
                        <Link to="contactus" className=" text-white text-center inline-block w-full py-3 bg-secondary-color hover:bg-secondary-color-hover font-medium max-md:py-1.5 max-md:font-normal duration-200">started</Link>
                    </div>
                </div>
             
            </div>
        </section>
    </>);
}