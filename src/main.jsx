import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home.jsx';
import Booking from './pages/ฺBooking.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx'
import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/booking",
    element: <Booking/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/SignUp",
    element: <SignUp/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
