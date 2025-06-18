import Footer from "../components/footer";
import Navbar from "../components/Navbar";

const AboutUsPage = () => {
    return (
    <>
    <Navbar/>
    <section id="aboutus">
        <div className="container mx-auto my-5 px-7 py-10 bg-[url('./bg-aboutus.jpeg')] bg-contain bg-no-repeat space-y-5 ">
            <div className="text-center md:text-left md:w-2/3">
                <h2 className="font-body-font text-secondary-color font-bold text-2xl lg:text-4xl my-3">About Us</h2>
                <p className="mb-4">
                    At <strong>FormMeUp</strong>, we’re on a mission to simplify how individuals and businesses manage forms. We're a team of passionate developers, designers, and digital problem-solvers committed to transforming traditional form processes into smart, secure, and streamlined digital experiences.
                </p>

                <p className="mb-4">
                    Whether you're a freelancer, small business owner, or part of a large organization, handling forms and documentation shouldn't be a headache. That’s why FormMeUp provides powerful tools that let you easily build custom forms, fill them online, and convert submissions into professionally formatted PDF documents — all in just a few clicks.
                </p>

                <p className="mb-4">
                    We understand that time is valuable. That’s why our platform is designed with efficiency at its core. Say goodbye to manual paperwork, clunky PDF editors, or expensive software. With FormMeUp, everything you need is in one place — accessible anytime, from anywhere.
                </p>

                <p className="mb-4">
                    But we don’t just stop at convenience. Your data matters, and we take privacy and security seriously. Every form and PDF you create is handled with care using secure technologies, ensuring your information stays protected and confidential.
                </p>

                <p className="mb-4">
                    Behind FormMeUp is a vision: to empower people with better tools for everyday tasks — whether it's applying for a service, collecting feedback, managing clients, or automating internal processes. We’re constantly working to improve, inspired by the real needs of our users.
                </p>

                <p className="mb-4">
                    Thank you for choosing FormMeUp. We’re proud to help make your workflow simpler, faster, and smarter.
                </p>

                <p className="text-sm text-gray-500 mt-6">If you have questions or want to work with us, feel free to <a href="/contact" className="text-blue-600 underline">contact our team</a>.</p>
            </div>
        </div>
    </section>
    <Footer/>
    </>

    );
};

export default AboutUsPage;