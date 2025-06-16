import { Check } from "lucide-react";

export const PricingCard = ({typePlan, price, nbrPage, tasks})=>{

    return(
    <>
        <div className="text-center *:block py-4">
            <span className="font-semibold capitalize">{typePlan}</span>
            <h1 className="pt-4 text-5xl font-bold">{price}</h1>
        </div>
        <ul className="my-10">{
                Object.entries(tasks).map(([key, task])=>(
                    key === "task_1" ? <div className="flex justify-satrt text-secondary-dark items-center space-x-2"><Check className="inline-block text-primary-color" size={24} /> <li className="py-2" key={key}>{nbrPage + task}</li></div> :
                   <div className="flex justify-satrt items-center text-secondary-dark py-2 space-x-2"><Check className="inline-block text-primary-color" size={24} /> <li className="" key={key}>{task}</li></div> 
                ))
        }</ul>
    </>
    );
}