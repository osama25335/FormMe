import Footer from '../components/footer';
import Navbar from '../components/Navbar';

const TermsAndConditions = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-5 px-7 py-10 bg-[url(./public/bg-aboutus.jpeg)] bg-contain bg-no-repeat space-y-5">
      <div className='text-center md:text-left md:w-2/3'>
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to FormMeUp! These terms and conditions outline the rules and regulations for the use of our website and services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use FormMeUp if you do not agree to all of the terms stated on this page.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. License</h2>
        <p className="mb-4">
          Unless otherwise stated, FormMeUp owns the intellectual property rights for all material on the site. You may access it for personal use, subject to restrictions.
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li>Don’t republish material</li>
          <li>Don’t sell, rent, or sub-license material</li>
          <li>Don’t reproduce or copy material without permission</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
        <p className="mb-4">
          You agree not to use the site for any unlawful purposes or to violate any laws in your jurisdiction.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
        <p className="mb-4">
          [Your Company] shall not be held responsible for any damages that arise from the use or inability to use the service.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. Changes will be posted on this page with the updated date.
        </p>

        <p className="mt-6 text-sm text-gray-500">Last updated: 12/06/2025</p>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default TermsAndConditions;
