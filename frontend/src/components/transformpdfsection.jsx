import { FileText } from "lucide-react";

export default function TransformPdfSection(){

    return(
    <>
       <section id="transformPDF">
            <div className="container mx-auto px-7 py-10 flex flex-col lg:flex-row justify-center items-center gap-10">
                <div className="flex-1">
                    <img src="/pdfFile.png" alt="" />
                </div>
                <div className="flex-1 max-lg:text-center max-lg:p-7">
                    <FileText className="text-primary-color inline-block" strokeWidth={2.5} size={40}/>
                    <h2 className="font-body-font text-secondary-color font-bold text-2xl lg:text-4xl my-3">Transform Your Responses into Professional PDF Documents Instantly</h2>
                    <p className="text-secondary-light leading-6 mb-3">With FormMeUp, you can easily convert filled forms into high-quality downloadable PDFs. Streamline your workflow and enhance your productivity with our secure and user-friendly platform.</p>
                </div>
            </div>
        </section>
    </>
    );
}