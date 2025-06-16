// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// // Validation schema
// const schema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   dateOfBirth: Yup.string().required("Date of birth is required"),
//   sex: Yup.string().required("Sex is required"),
//   tempAddress: Yup.string().required("Temporary address is required"),
//   permAddress: Yup.string().required("Permanent address is required"),
//   qualification: Yup.string().required("Educational qualification is required"),
//   workExperience: Yup.string().required("Work experience is required"),
//   addressProof: Yup.string().required("Address proof is required"),
//   profession: Yup.string().required("Current profession is required"),
//   nationality: Yup.string().required("Nationality is required"),
//   skill: Yup.string().required("Area of skill is required"),
//   scheme: Yup.string().required("Scheme is required"),
//   passportNumber: Yup.string().required("Passport number is required"),
//   immigrantDetails: Yup.string().optional(),
//   declarationName: Yup.string().required("Declaration name is required"),
//   signature: Yup.string().required("Signature is required"),
// });

// const  RegistrationForm_7 = ()=> {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//     // send to backend or use for PDF generation
//   };

//   return (
//     <div className="bg-gray-900 text-white p-6 max-w-4xl mx-auto rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold mb-6">Worker Registration Form</h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

//         {/* Basic Info */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label>Name</label>
//             <input {...register("name")} className="input" />
//             <p className="text-red-500 text-sm">{errors.name?.message}</p>
//           </div>
//           <div>
//             <label>Date of Birth</label>
//             <input type="date" {...register("dateOfBirth")} className="input" />
//             <p className="text-red-500 text-sm">{errors.dateOfBirth?.message}</p>
//           </div>
//           <div>
//             <label>Sex</label>
//             <select {...register("sex")} className="input">
//               <option value="">Select</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//             <p className="text-red-500 text-sm">{errors.sex?.message}</p>
//           </div>
//         </div>

//         {/* Addresses */}
//         <div>
//           <label>Temporary Address</label>
//           <textarea {...register("tempAddress")} className="input" />
//           <p className="text-red-500 text-sm">{errors.tempAddress?.message}</p>
//         </div>
//         <div>
//           <label>Permanent Address</label>
//           <textarea {...register("permAddress")} className="input" />
//           <p className="text-red-500 text-sm">{errors.permAddress?.message}</p>
//         </div>

//         {/* Education & Experience */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label>Educational Qualification</label>
//             <input {...register("qualification")} className="input" />
//             <p className="text-red-500 text-sm">{errors.qualification?.message}</p>
//           </div>
//           <div>
//             <label>Previous Work Experience</label>
//             <input {...register("workExperience")} className="input" />
//             <p className="text-red-500 text-sm">{errors.workExperience?.message}</p>
//           </div>
//         </div>

//         {/* More Fields */}
//         <div>
//           <label>Address Proof Provided</label>
//           <input {...register("addressProof")} className="input" />
//           <p className="text-red-500 text-sm">{errors.addressProof?.message}</p>
//         </div>
//         <div>
//           <label>Current Profession</label>
//           <textarea {...register("profession")} className="input" />
//           <p className="text-red-500 text-sm">{errors.profession?.message}</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label>Nationality</label>
//             <input {...register("nationality")} className="input" />
//             <p className="text-red-500 text-sm">{errors.nationality?.message}</p>
//           </div>
//           <div>
//             <label>Area of Skill</label>
//             <input {...register("skill")} className="input" />
//             <p className="text-red-500 text-sm">{errors.skill?.message}</p>
//           </div>
//         </div>

//         <div>
//           <label>Scheme Under Which Registration is Done</label>
//           <input {...register("scheme")} className="input" />
//           <p className="text-red-500 text-sm">{errors.scheme?.message}</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label>Passport Number</label>
//             <input {...register("passportNumber")} className="input" />
//             <p className="text-red-500 text-sm">{errors.passportNumber?.message}</p>
//           </div>
//           <div>
//             <label>Immigrant Details (if any)</label>
//             <input {...register("immigrantDetails")} className="input" />
//           </div>
//         </div>

//         {/* Declaration */}
//         <div>
//           <label>
//             Declaration (Write your name to confirm information accuracy)
//           </label>
//           <input {...register("declarationName")} className="input" />
//           <p className="text-red-500 text-sm">{errors.declarationName?.message}</p>
//         </div>

//         {/* Signature */}
//         <div>
//           <label>Signature</label>
//           <input {...register("signature")} className="input" />
//           <p className="text-red-500 text-sm">{errors.signature?.message}</p>
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
// export default RegistrationForm_7;