import { useNavigate } from "react-router-dom";
import { ShieldOff } from "lucide-react"; // lucide icon (if you're using it)

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Option 1: Icon */}
      <ShieldOff className="w-20 h-20 text-red-500 mb-6" />

      {/* Option 2: Or use an image instead */}
      {/* <img src="/unauthorized.svg" alt="Unauthorized" className="w-64 h-64 mb-6" /> */}

      <h1 className="text-4xl font-bold text-red-600 mb-4">403 - Unauthorized</h1>
      <p className="text-gray-600 mb-6">
        You don’t have permission to access this page.
      </p>

      <div className="flex gap-4">
        <button className="font-normal text-secondary-color hover:text-secondary-color-hover *:mx-1 duration-200" onClick={() => navigate("/")}>Go to Home</button>
        <button className="font-normal text-secondary-color hover:text-secondary-color-hover *:mx-1 duration-200" variant="outline" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
