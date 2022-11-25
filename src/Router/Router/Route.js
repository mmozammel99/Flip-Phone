import AllSeller from "../../Pages/Admin/AllSeller/AllSeller";
import AllBuyers from "../../Pages/Admin/AllBuyers/AllBuyers";
import Login from "../../Pages/Login/Login";
import Signup from "../../Signup/Signup";
import AdminRoute from "../AdminRout/AdminRout";
import DashboardLayout from "../../Layout/DashboardLayout";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children:[
            // {
            //     path: '/dashboard',
            //     element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            // },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
        ]
    },
])
export default router