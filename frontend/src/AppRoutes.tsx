import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout>HOME PAGE</Layout> } />
        <Route path="/user-profile" element={<span>User Profile Page 😎</span>} />
        {/* This is the Catch all route => redirect to Home Page */}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes