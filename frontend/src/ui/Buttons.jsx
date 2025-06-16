import {ArrowRight} from 'lucide-react';

export const ButtonPrincipal=({children, onclick})=>{
    const hundleOnclick = (e)=>{
        if (onclick) {
            e.preventDefault();
            onclick(e);
        }
    }
    return(<>
        <button onClick={hundleOnclick} className=" text-white bg-primary-color hover:bg-primary-color-hover px-4 py-3 font-medium max-md:px-2 max-md:py-1.5 max-md:font-normal duration-200">{children}</button>
    </>)

}
export const ButtonSeconde=({children, onclick})=>{
    const hundleOnclick = (e)=>{
        if (onclick) {
            e.preventDefault();
            onclick(e);
        }
    }
    return(<>
        <button onClick={hundleOnclick}  className=" text-white px-4 py-3 bg-secondary-xlight hover:bg-secondary-xlight-hover font-medium max-md:px-2 max-md:py-1.5 max-md:font-normal duration-200">{children}</button>
    </>)

}
export const ButtonLinear=({children, onclick})=>{
    const hundleOnclick = (e)=>{
        if (onclick) {
            e.preventDefault();
            onclick(e);
        }
    }
    return(<>
        <button onClick={hundleOnclick} className=" group font-normal text-secondary-color hover:text-secondary-color-hover *:mx-1 duration-200">{children}<ArrowRight className='group-hover:text-secondary-color-hover text-secondary-color inline-block' absoluteStrokeWidth={false} size={24}/></button>
    </>)

}
export const ButtonTransparent=({children, onclick})=>{
    const hundleOnclick = (e)=>{
        if (onclick) {
            e.preventDefault();
            onclick(e);
        }
    }
    return(<>
        <button onClick={hundleOnclick} className="font-normal px-4 py-3 bg-transparent text-secondary-color border-1 border-secondary-color duration-200">{children}</button>
    </>)

}