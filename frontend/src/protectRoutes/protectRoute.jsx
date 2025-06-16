import { Navigate } from "react-router-dom";
import { authUsersStore } from "../stores/authUsersStore";

export const ProtectedRoute = ({ children, role }) => {
  const { authUser, isCheckingAuth } = authUsersStore();

  if (isCheckingAuth)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  if (!authUser) return <Navigate to="/login" replace />;
  if (role && authUser.role !== role) return <Navigate to="/unauthorized" replace />;

  return children;
};