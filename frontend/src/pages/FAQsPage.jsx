import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const faqs = [
  {
    question: "What is FormMeUp?",
    answer:
      "FormMeUp is a web platform that allows you to create, fill out, and generate secure PDF forms online. It helps you reduce paperwork and save time with digital form solutions.",
  },
  {
    question: "How do I create a custom form?",
    answer:
      "You can request a custom form through the landing page. Once we receive your request, we'll build the form according to your needs and send you a secure link to access it.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we prioritize data privacy and security. All data submitted through our forms is encrypted and handled securely. We do not share your information with third parties.",
  },
  {
    question: "Can I generate a PDF from a form submission?",
    answer:
      "Absolutely. Once you've filled out a form, simply click the 'Convert to PDF' button. Your data will be compiled into a professionally formatted PDF document.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. FormMeUp is entirely web-based. All you need is a browser — no downloads or installations required.",
  },
  {
    question: "Can I access my form later?",
    answer:
      "Yes. As long as you have the secure link and password (if set), you can revisit and access your form.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach us via the contact form on the website or use socialmedia. We aim to respond to all inquiries within 24–48 hours.",
  },
];

const FAQs = () => {
  return (
    <>
        <Navbar/>
            <div className="container mx-auto my-5 px-7 py-10 bg-[url('./bg-aboutus.jpeg')] bg-contain bg-no-repeat space-y-5">
                <div className='text-center md:text-left md:w-2/3'> 
                    <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                        <div key={index} className="border-b pb-4">
                            <h2 className="text-xl font-semibold">{faq.question}</h2>
                            <p className="text-gray-700 mt-2">{faq.answer}</p>
                        </div>
                        ))}
                    </div>
                </div>            
            </div>
        <Footer/>
    </>
  );
};

export default FAQs;
