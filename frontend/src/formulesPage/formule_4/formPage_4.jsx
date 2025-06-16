import React, { useState } from "react";
import PdfViewerPage_4 from "./pdfViewerPage_4";
import { PDFViewer } from "@react-pdf/renderer";

export default function WorkerRegistrationForm() {
  const fields = [
    "Name",
    "Date of birth",
    "Sex",
    "Temporary address",
    "Permanent address",
    "Educational qualification",
    "Previous work experience",
    "Address proof provided",
    "Current profession, including post, name of office and address",
    "Nationality",
    "Areas of skill",
    "Scheme under which registration is to be done",
    "Passport number",
    "Immigrant details",
    "Declaration name",
    "Signature",
  ];

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
    setErrors({ ...errors, [key]: "" }); // Clear error on change
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
      <h2 className="text-3xl text-primary-color font-bold text-center mb-8">Worker Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          ["Name", "text"],
          ["Date of birth", "date"],
          ["Sex", "text"],
          ["Temporary address", "text"],
          ["Permanent address", "text"],
          ["Educational qualification", "text"],
          ["Previous work experience", "text"],
          ["Address proof provided", "text"],
          ["Current profession, including post, name of office and address", "text"],
          ["Nationality", "text"],
          ["Areas of skill", "text"],
          ["Scheme under which registration is to be done", "text"],
          ["Passport number", "text"],
        ].map(([label, type], idx) => (
          <div key={idx}>
            <label className="block text-sm font-semibold mb-1">{label}:</label>
            <input
              type={type}
              value={formData[label] || ""}
              onChange={(e) => handleChange(label, e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white focus:outline-none focus:ring focus:border-blue-400"
            />
            {errors[label] && <p className="text-red-400 text-sm mt-1">{errors[label]}</p>}
          </div>
        ))}

        <div>
          <label className="block text-sm font-semibold mb-1">
            In case of an immigrant, mention your native country as well as year of immigration:
          </label>
          <textarea
            rows="3"
            value={formData["Immigrant details"] || ""}
            onChange={(e) => handleChange("Immigrant details", e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white focus:outline-none focus:ring focus:border-blue-400"
          ></textarea>
          {errors["Immigrant details"] && (
            <p className="text-red-400 text-sm mt-1">{errors["Immigrant details"]}</p>
          )}
        </div>

        <div className="bg-gray-800 border border-gray-600 p-4 rounded">
          <p className="italic mb-2">
            Declaration: I,{" "}
            <input
              type="text"
              placeholder="Your Name"
              value={formData["Declaration name"] || ""}
              onChange={(e) => handleChange("Declaration name", e.target.value)}
              className="bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white"
            />, declare that the information provided here is accurate...
          </p>
          {errors["Declaration name"] && (
            <p className="text-red-400 text-sm mt-1">{errors["Declaration name"]}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Signature:</label>
          <input
            type="text"
            value={formData["Signature"] || ""}
            onChange={(e) => handleChange("Signature", e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded p-2 text-white focus:outline-none focus:ring focus:border-blue-400"
          />
          {errors["Signature"] && (
            <p className="text-red-400 text-sm mt-1">{errors["Signature"]}</p>
          )}
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-primary-color text-white px-6 py-2 rounded hover:bg-primary-color-hover"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div>
      <div className="mx-auto w-full lg:w-3/4">
            {formData &&           
          <PDFViewer width='100%' height="1000vh">
            <PdfViewerPage_4 formData={formData}/>
          </PDFViewer>}
      </div>
    </div>
    </>
  );
}
