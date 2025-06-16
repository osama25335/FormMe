import { PDFViewer } from "@react-pdf/renderer";
import React, { useState } from "react";
import PdfViewerPage_5 from "./pdfViewerPage_5";

const RoomReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    state: "",
    city: "",
    address: "",
    phone: "",
    email: "",
    rooms: "",
    roomType: "",
    purpose: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "radio" ? e.target.value : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phone.match(/^\d{7,15}$/)) newErrors.phone = "Valid phone is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (!formData.rooms || Number(formData.rooms) < 1)
      newErrors.rooms = "Enter valid room quantity";
    if (!formData.roomType) newErrors.roomType = "Select a room type";
    if (!formData.purpose) newErrors.purpose = "Mention the purpose";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitted Data:", formData);
      alert("Form submitted successfully!");
      // Optionally: send to backend, clear form etc.
    }
  };

  return (
    <>
    <div className="max-w-4xl mx-auto my-8 p-8 bg-gray-900 text-white shadow-lg rounded-lg">
      <h2 className="text-3xl text-primary-color font-bold text-center mb-8"> Room reservation</h2>      
      <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      {/* Personal Information */}
      <section className="mt-6">
        <h3 className="font-semibold mb-4 italic">Personal Information:</h3>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {["country", "state", "city"].map((field) => (
            <div key={field}>
              <input
                name={field}
                placeholder={field[0].toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}
        </div>

        <div className="mt-4">
          <textarea
            name="address"
            placeholder="Mailing Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            rows="3"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div>
            <input
              name="email"
              placeholder="Email-ID"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>
      </section>

      {/* Reservation Details */}
      <section className="mt-8">
        <h3 className="font-semibold mb-4 italic">Reservation Details:</h3>
        <div className="mb-4">
          <input
            name="rooms"
            type="number"
            placeholder="Number of rooms required"
            value={formData.rooms}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          {errors.rooms && <p className="text-red-500 text-sm">{errors.rooms}</p>}
        </div>

        <label className="font-semibold block mb-2">Type of Room Executive</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {["Deluxe", "Family", "Single", "Standard"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="radio"
                name="roomType"
                value={type}
                checked={formData.roomType === type}
                onChange={handleChange}
              />
              {type}
            </label>
          ))}
        </div>
        {errors.roomType && <p className="text-red-500 text-sm">{errors.roomType}</p>}

        <div>
          <textarea
            name="purpose"
            placeholder="Mention the purpose of room booking"
            value={formData.purpose}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            rows="3"
          />
          {errors.purpose && <p className="text-red-500 text-sm">{errors.purpose}</p>}
        </div>
      </section>

      <div className="text-center mt-6">
        <button className="bg-primary-color-hover text-white py-2 px-6 rounded hover:bg-primary-color-hover">
          Submit
        </button>
      </div>
    </form>
    </div>
        <div>
      <div className="mx-auto w-full lg:w-3/4">
            {formData &&           
          <PDFViewer width='100%' height="1000vh">
            <PdfViewerPage_5 formData={formData}/>
          </PDFViewer>}
      </div>
    </div>
    </>
    
  );
};

export default RoomReservationForm;
