import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { messagesStore } from "../stores/messagesStore";
import { authUsersStore } from "../stores/authUsersStore";
import { Trash2 } from "lucide-react";


export default function DashboardPage(){

  const {deleteRequest, getRequests, requests} = messagesStore();
  const {logout} = authUsersStore();
  useEffect(()=>{
    getRequests();
  },[getRequests, requests]);
  const handleDelete = async (id) => {
    try {
        await deleteRequest(id);
    } catch (error) {
        console.error("Error deleting message:", error);
    }

};
  return (
    <>
        <Navbar />
        <section>
            <div className="p-6">
                <div className="flex justify-between items-center py-5">
                  <h2 className="text-xl font-semibold mb-4">User Submissions</h2>
                  <button className=" capitalize text-white bg-primary-color hover:bg-primary-color-hover px-4 py-3 font-medium max-md:px-2 max-md:py-1.5 max-md:font-normal duration-200" onClick={()=>logout()}>logout</button>
                </div>
                
                <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="px-3 py-4 text-left font-semibold text-gray-700">Email</th>
                        <th className="px-3 py-4 text-left font-semibold text-gray-700">Message</th>
                        <th className="px-3 py-4 text-left font-semibold text-gray-700">File</th>
                        <th className="px-3 py-4 text-right font-semibold text-gray-700">Date</th>
                        <th className="px-3 py-4 text-center font-semibold text-gray-700">Delete</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    {requests.map((item) => (
                        <tr key={item._id} className="hover:bg-gray-50 transition">
                        <td className="px-4 py-3 text-gray-800">{item.useremail}</td>
                        <td className="px-4 py-3 text-gray-700 max-w-xs truncate">{item.usermessage}</td>
                        <td className="px-4 py-3">
                          <ul>
                            {item.files.map((file, index)=>(
                            <li key={index}> <a href={file}>{file}</a></li>
                            ))
                          }
                          </ul>
                        </td>
                        <td className="px-4 py-3 text-right text-gray-500">
                            {new Date(item.createdAt).toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-gray-500">
                          <button
                          onClick={()=>handleDelete(item._id)}
                          >
                          <Trash2 className="text-red-600 hover:text-red-800 duration-200"/>
                          
                          </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
          </section>

    </>
    );
  };

  