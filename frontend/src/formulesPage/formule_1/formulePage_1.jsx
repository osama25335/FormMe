import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react"
import PdfViewerPage_1 from "./pdfViewerPage_1";
export default function FormulePage_1() {

  const [formData, setFormData] = useState({
    username: "",
    about: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    byEmail: {
      comments: false,
      candidates: false,
      offers: false,
    },
    pushNotification: "",
  });

  const [errors, setErrors] = useState({});

  // shared input style
  const inputClass =
    "w-full p-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:ring focus:border-blue-400";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("byEmail.")) {
      // checkbox group
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        byEmail: {
          ...prev.byEmail,
          [key]: checked,
        },
      }));
    } else if (type === "radio") {
      // pushNotification radios
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      // text, textarea, etc.
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // clear error on first change
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErr = {};

    if (!formData.username.trim()) newErr.username = "Username is required";
    if (!formData.about.trim()) newErr.about = "Please tell us about yourself";
    if (!formData.firstName.trim()) newErr.firstName = "First name is required";
    if (!formData.lastName.trim()) newErr.lastName = "Last name is required";
    if (
      !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    )
      newErr.email = "Valid email is required";
    if (!formData.country.trim()) newErr.country = "Country is required";
    if (!formData.street.trim()) newErr.street = "Street address is required";
    if (!formData.city.trim()) newErr.city = "City is required";
    if (!formData.state.trim()) newErr.state = "State/Province is required";
    if (!formData.zip.trim()) newErr.zip = "ZIP/Postal code is required";
    if (!formData.pushNotification)
      newErr.pushNotification = "Select a push‑notification option";

    return newErr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", formData);
    alert("Saved!");
    // …next steps here
  };

  return (
    <>
    <div className="max-w-4xl mx-auto my-8 p-8 bg-secondary-dark text-white shadow-lg rounded-lg">

    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-8 bg-gray-900 text-white space-y-8"
    >
      {/* Profile */}
      <div>
        <h3 className="text-xl font-semibold">Profile</h3>
        <p className="text-sm text-gray-400 mb-4">
          This information will be displayed publicly.
        </p>

        <label className="block">Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.username && (
          <p className="text-red-400 text-sm mt-1">{errors.username}</p>
        )}

        <label className="block mt-4">About</label>
        <textarea
          name="about"
          rows="3"
          value={formData.about}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.about && (
          <p className="text-red-400 text-sm mt-1">{errors.about}</p>
        )}
      </div>

      {/* Personal Information */}
      <div>
        <h3 className="text-xl font-semibold">Personal Information</h3>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>First name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label>Last name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.lastName && (
              <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <label className="block mt-4">Email address</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
        )}

        <label className="block mt-4">Country</label>
        <input
          name="country"
          value={formData.country}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.country && (
          <p className="text-red-400 text-sm mt-1">{errors.country}</p>
        )}

        <label className="block mt-4">Street address</label>
        <input
          name="street"
          value={formData.street}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.street && (
          <p className="text-red-400 text-sm mt-1">{errors.street}</p>
        )}

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <label>City</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.city && (
              <p className="text-red-400 text-sm mt-1">{errors.city}</p>
            )}
          </div>
          <div>
            <label>State / Province</label>
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.state && (
              <p className="text-red-400 text-sm mt-1">{errors.state}</p>
            )}
          </div>
          <div>
            <label>ZIP / Postal code</label>
            <input
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.zip && (
              <p className="text-red-400 text-sm mt-1">{errors.zip}</p>
            )}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div>
        <h3 className="text-xl font-semibold">Notifications</h3>
        <p className="text-sm text-gray-400">By email:</p>
        <div className="mt-2 space-y-2">
          {[
            ["comments", "Comments"],
            ["candidates", "Candidates"],
            ["offers", "Offers"],
          ].map(([key, label]) => (
            <label key={key} className="flex items-center gap-2">
              <input
                type="checkbox"
                name={`byEmail.${key}`}
                checked={formData.byEmail[key]}
                onChange={handleChange}
              />
              {label}
            </label>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-400">Push notifications:</p>
        <div className="mt-2 space-y-2">
          {["Everything", "Same as email", "No push notifications"].map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input
                type="radio"
                name="pushNotification"
                value={opt}
                checked={formData.pushNotification === opt}
                onChange={handleChange}
              />
              {opt}
            </label>
          ))}
          {errors.pushNotification && (
            <p className="text-red-400 text-sm mt-1">
              {errors.pushNotification}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="reset"
          onClick={() =>
            setFormData({
              username: "",
              about: "",
              firstName: "",
              lastName: "",
              email: "",
              country: "",
              street: "",
              city: "",
              state: "",
              zip: "",
              byEmail: { comments: false, candidates: false, offers: false },
              pushNotification: "",
            })
          }
          className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 rounded hover:bg-green-700"
        >
          Save
        </button>
      </div>
    </form>


    </div>
    <div>
      <div className="mx-auto w-full lg:w-3/4">
        {formData &&           
          <PDFViewer width='100%' height="1000vh">
            <PdfViewerPage_1 formData={formData}/>
          </PDFViewer>
        }
      </div>
    </div>
  </>

  )
}
