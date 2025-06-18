import {Check} from "lucide-react"
export const Card = ({img, heading, paragraph})=>{
    return(
        <>
        <div className="text-center shadow shadow-primary-color">
            <div className="h-1/2">
                <img className="" src={img} alt=""/>
            </div>
            <div className="p-6">
                <h3 className="my-2 text-xl font-semibold">{heading}</h3>
                <p className="text-secondary-light leading-5">{paragraph}</p>
            </div>

        </div>
        </>
    );
}
export const StepCard = ({icon, heading, paragraph})=>{
    return(
        <>
        <div className="flex-1 p-6 text-left bg-white shadow shadow-primary-color hover:shadow-md duration-200 ">
            <div className="mb-2">
                {icon}
            </div>
            <div>
                <h3 className="my-2 text-xl font-semibold">{heading}</h3>
                <p className="text-secondary-light leading-5">{paragraph}</p>
            </div>
        </div>
        </>
    );
}

export const PricingCard = ({typePlan, price, nbrPages})=>{

    return(
    <>
        <div className="text-center *:block py-4">
            <span className="font-bold capitalize text-secondary-dark">{typePlan}</span>
            <h1 className="py-4 text-5xl font-bold text-secondary-dark">{price}</h1>
            <p className="text-secondary-light leading-6 mb-3">We create your form in {nbrPages} page and we provide you any <span className="text-primary-color">style</span> you want</p>
        </div>

        <ul className="my-3 space-y-4">
        <li className="flex items-center gap-3 text-secondary-dark">
            <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
            <span>Page edited {nbrPages}</span>
        </li>
        <li className="flex items-center gap-3 text-secondary-dark">
            <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
            Calculation function
        </li>
        <li className="flex items-center gap-3 text-secondary-dark">
            <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
            Drop down menu
        </li>
        <li className="flex items-center gap-3 text-secondary-dark">
            <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
            Text boxes
        </li>
        <li className="flex items-center gap-3 text-secondary-dark">
            <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
            Picture upload
        </li>
        <li className="flex items-center gap-3 text-secondary-dark">
            <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
            File signature
        </li>
        <li className="flex items-center gap-3 text-secondary-dark">
            <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
            Basic function buttons
        </li>
        </ul>

    </>
    );
}