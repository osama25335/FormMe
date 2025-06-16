
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
        <div className="flex-1 p-6 text-left shadow shadow-primary-color hover:shadow-md duration-200">
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