
export const PricingCard = ({typePlan, price})=>{

    return(
    <>
        <div className="text-center *:block py-4">
            <span className="font-semibold capitalize">{typePlan}</span>
            <h1 className="pt-4 text-5xl font-bold">{price}</h1>
        </div>
        <ul className="my-10">
            <li>page edited</li>
            <li>Calculation function</li>
            <li>Drop down menu</li>
            <li>Text boxes</li>
            <li>Picture upload</li>
            <li>File signature</li>
            <li>Basic function buttons</li>
        </ul>
    </>
    );
}