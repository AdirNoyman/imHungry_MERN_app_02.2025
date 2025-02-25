import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import HomePage from "./pages/HomePage"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout> } />
        <Route path="/user-profile" element={<span>User Profile Page 😎</span>} />
        {/* This is the Catch all route => redirect to Home Page */}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes