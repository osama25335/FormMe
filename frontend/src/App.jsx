import { Toaster } from 'react-hot-toast'
import LandingPage from './pages/landingPage'
import {Navigate, Route, Routes} from "react-router-dom";
import DashboardPage from './pages/dashboardPage';
import GetForm from './pages/getForm.jsx';
import LoginPage from './pages/loginPage';
import { useEffect, useState } from 'react';
import { authUsersStore } from './stores/authUsersStore.js';
import { Loader } from 'lucide-react';
import { ProtectedRoute } from './protectRoutes/protectRoute.jsx';
import AppRoutes from './routesDOM/routes.jsx';
import UnauthorizedPage from './pages/unauthorizedPage.jsx';
function App() {
  const {authUser, isCheckingAuth,checkAuth} = authUsersStore();

  useEffect(()=>{
    checkAuth();
  },[checkAuth]);
  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          authUser?.role === "user"
            ? <Navigate to="/form" replace />
            : authUser?.role === "admin"
              ? <Navigate to="/dashboard" replace />
              : <LandingPage />
        }
      />

      <Route
        path="/login"
        element={
          authUser?.role === "user"
            ? <Navigate to="/form" replace />
            : authUser?.role === "admin"
              ? <Navigate to="/dashboard" replace />
              : <LoginPage />
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="admin">
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/form"
        element={
          <ProtectedRoute role="user">
            <GetForm />
          </ProtectedRoute>
        }
      />

      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="/*" element={<AppRoutes />} />
    </Routes>

    <Toaster/>
    </>
  )
}

export default App
