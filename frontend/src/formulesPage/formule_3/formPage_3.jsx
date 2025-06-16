import React, { useState } from "react";
import PdfViewerPage_3 from "./pdfViewerPage_3";
import { PDFViewer } from "@react-pdf/renderer";

const fields = [
  { name: "workshopName", label: "Name of the Workshop" },
  { name: "subject", label: "Subject of the Workshop" },
  { name: "location", label: "Place where Workshop has been Conducted" },
  { name: "date", label: "Date", type: "date" },
  { name: "instructor", label: "Instructor Name" },
  { name: "signedBy", label: "Signed by the Concerned Person" },
];

const questions = [
  { name: "presentationClarity", label: "Was the presentation clear and relevant to the topic?" },
  { name: "sessionOrganization", label: "Was the workshop session well organized?" },
  { name: "materialSufficiency", label: "Was the instruction material provided sufficient and relevant?" },
  { name: "instructorCapability", label: "Was the instructor capable of clearing all the doubts of the students?" },
  { name: "attendance", label: "Have all students attended the workshop?" },
];

export default function WorkshopEvaluationForm({ onSubmit }) {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    if (onSubmit) onSubmit(formData);
  };

  return (
    <>
    <div className="max-w-4xl mx-auto my-8 p-8 bg-gray-900 text-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Workshop Evaluation</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map(({ name, label, type = "text" }) => (
          <div key={name}>
            <label className="block font-semibold mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name] || ""}
              onChange={(e) => handleChange(name, e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 p-2 rounded"
              required
            />
          </div>
        ))}

        {questions.map(({ name, label }) => (
          <div key={name}>
            <label className="block font-semibold mb-1">{label}</label>
            <select
              name={name}
              value={formData[name] || ""}
              onChange={(e) => handleChange(name, e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 p-2 rounded"
              required
            >
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
              <option>Partially</option>
            </select>
          </div>
        ))}

        <div>
          <label className="block font-semibold mb-1">
            What did you like the most of this workshop?
          </label>
          <textarea
            name="likedMost"
            value={formData.likedMost || ""}
            onChange={(e) => handleChange("likedMost", e.target.value)}
            rows="3"
            className="w-full bg-gray-800 border border-gray-600 p-2 rounded"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold mb-1">
            According to you, which areas of this workshop needed improvements?
          </label>
          <textarea
            name="improvementAreas"
            value={formData.improvementAreas || ""}
            onChange={(e) => handleChange("improvementAreas", e.target.value)}
            rows="3"
            className="w-full bg-gray-800 border border-gray-600 p-2 rounded"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Would you like to attend a similar type of workshop again in the future?
          </label>
          <select
            name="futureInterest"
            value={formData.futureInterest || ""}
            onChange={(e) => handleChange("futureInterest", e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 p-2 rounded"
            required
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Signature of the Institutional Authority</label>
          <input
            type="text"
            name="authoritySignature"
            value={formData.authoritySignature || ""}
            onChange={(e) => handleChange("authoritySignature", e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 p-2 rounded"
            required
          />
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit & Generate PDF
          </button>
        </div>
      </form>
    </div>
        <div>
          <div className="mx-auto w-full lg:w-3/4">
              {formData &&           
              <PDFViewer width='100%' height="1000vh">
                <PdfViewerPage_3 formData={formData}/>
              </PDFViewer>}
          </div>
        </div>
    </>
  );
}
