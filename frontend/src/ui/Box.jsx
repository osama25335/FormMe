export const Box=({heading, paragraph})=>{
    return(<>
        <div className="flex-1 shadow hover:shadow-md shadow-primary-color duration-200 p-6 mb-3">
            <h3 className="mb-2 text-secondary-dark font-bold">{heading}</h3>
            <p className="text-secondary-light">{paragraph}</p>
        </div>
    </>)

}