import AllSeller from "../../Pages/Admin/AllSeller/AllSeller";
import AllBuyers from "../../Pages/Admin/AllBuyers/AllBuyers";
import Login from "../../Pages/Login/Login";
import Signup from "../../Signup/Signup";
import AdminRoute from "../AdminRout/AdminRout";
import DashboardLayout from "../../Layout/DashboardLayout";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import AddProduct from "../../Pages/Sellers/AddProduct/AddProduct";
import MyProduct from "../../Pages/Sellers/MyProduct/MyProduct";
import PageNotFount from "../../Pages/Shared/Error/PageNotFount";
import DisplayError from "../../Pages/Shared/Error/DisplayError";
import Categories from "../../Pages/Categories.js/Categories";
import ReportedItems from "../../Pages/Admin/ReportedItems/ReportedItems";
import AllProducts from "../../Pages/AllProducts/AllProduct";
import AllUser from "../../Pages/Admin/AllUsers/AlUsers";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            /// user
            {
                path: '/dashboard',
                element: <AllProducts></AllProducts>
            },

            // admin
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/alluser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },


            // seller

            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            
        ]
    },

    {
        path: '/*',
        element: <PageNotFount></PageNotFount>
    }

])
export default router