import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-5 px-7 py-10 bg-[url(./public/bg-aboutus.jpeg)] bg-contain bg-no-repeat space-y-5">
        <div className='text-center md:text-left md:w-2/3'>      
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="mb-4">
                At FormMeUp, we take your privacy seriously. This Privacy Policy describes what information we collect, how we use it, and your rights regarding that information.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
            <p className="mb-4">
                We may collect the following types of information when you use our service:
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li>Personal information (name, email, etc.) you provide via forms</li>
                <li>Technical data (browser type, IP address, device info)</li>
                <li>Usage data (pages visited, actions taken on site)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
            <p className="mb-4">
                We use the information we collect to:
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li>Provide and maintain the service</li>
                <li>Improve user experience</li>
                <li>Respond to customer support inquiries</li>
                <li>Send updates or important notices (only if you opt in)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
            <p className="mb-4">
                We do not sell, rent, or share your personal information with third parties except:
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li>To comply with legal obligations</li>
                <li>To protect our rights or enforce terms</li>
                <li>With trusted service providers who support our platform (under confidentiality)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Security</h2>
            <p className="mb-4">
                We implement reasonable measures to protect your data. However, no method of transmission or storage is 100% secure.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
            <p className="mb-4">
                You may request to access, correct, or delete your personal information at any time by contacting us at <a href="mailto:freelancerusama25@gmail.com" className="hover:text-primary-color-hover duration-200">freelancerusama25@gmail.com</a>.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
            <p className="mb-4">
                We may update this policy occasionally. If we do, we’ll update the "Last updated" date below.
            </p>
            <p className="mt-6 text-sm text-gray-500">Last updated: 12/06/2025</p>
        </div>
    </div>
    <Footer/>
    </>
  )
};

export default PrivacyPolicy;
