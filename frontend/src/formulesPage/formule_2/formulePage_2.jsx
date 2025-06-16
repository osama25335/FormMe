import { useState } from "react"
import PdfViewerPage_2 from "./pdfViewerPage_2";
import { PDFViewer } from "@react-pdf/renderer";

export default function GreenCardApplicationForm() {
  const fields = [
    "Name",
    "Country of Birth",
    "Sex",
    "Email Address",
    "Confirm Email Address",
    "Telephone",
    "Home",
    "Office",
    "List of unmarried children under 21",
    "No children",
  ];

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
    setErrors({ ...errors, [key]: "" });
  };

  const handleCheckbox = (group, value) => {
    setFormData({ ...formData, [group]: value });
    setErrors({ ...errors, [group]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    fields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = "This field is required";
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("✅ Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <>

    <div className="max-w-4xl mx-auto my-8 p-8 bg-gray-900 text-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary-color">Green Card Application</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {["Name", "Country of Birth", "Sex", "Email Address", "Confirm Email Address", "Telephone", "Home", "Office", "List of unmarried children under 21", "No children"].map((label, idx) => (
          <div key={idx}>
            <label className="block text-sm font-semibold mb-1">{label}:</label>
            <input
              type="text"
              value={formData[label] || ""}
              onChange={(e) => handleChange(label, e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white focus:outline-none focus:ring focus:border-blue-400"
            />
            {errors[label] && <p className="text-red-400 text-sm mt-1">{errors[label]}</p>}
          </div>
        ))}

        <div>
          <label className="block text-sm font-semibold mb-1">Marital Status:</label>
          <div className="flex gap-6">
            {["Single", "Married", "With Children"].map((status) => (
              <label key={status} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="marital"
                  value={status}
                  checked={formData["Marital Status"] === status}
                  onChange={() => handleCheckbox("Marital Status", status)}
                />
                {status}
              </label>
            ))}
          </div>
          {errors["Marital Status"] && <p className="text-red-400 text-sm mt-1">{errors["Marital Status"]}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Employment Status:</label>
          <div className="flex gap-6">
            {["Employed", "Self employed", "Student"].map((status) => (
              <label key={status} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="employment"
                  value={status}
                  checked={formData["Employment Status"] === status}
                  onChange={() => handleCheckbox("Employment Status", status)}
                />
                {status}
              </label>
            ))}
          </div>
          {errors["Employment Status"] && <p className="text-red-400 text-sm mt-1">{errors["Employment Status"]}</p>}
        </div>

        <div className="bg-gray-800 border border-gray-600 p-4 rounded">
          <label className="block text-sm font-semibold mb-2">Service and Payment details:</label>
          <div className="space-y-2">
            {["First year application", "Application for 4 years", "Unlimited application"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData[opt] || false}
                  onChange={() => handleChange(opt, !formData[opt])}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-primary-color text-white px-6 py-2 rounded hover:bg-primary-color-hover duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div>
      <div className="mx-auto w-fit sm:w-full lg:w-3/4">
          {formData &&           
          <PDFViewer width='100%' height="900vh">
            <PdfViewerPage_2 formData={formData}/>
          </PDFViewer>}
      </div>
    </div>
</>

  );
}
