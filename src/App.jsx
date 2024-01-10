import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "./assets/css/table.scss";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import { config } from "./components/Form/Form";
import axiosConfig from "./config/axios";
import AdvertismentList from "./Pages/AdvertismentList";
import Dashboard from "./Pages/Dashbord";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
config({ axios: axiosConfig });
function App() {
  const router = createBrowserRouter([
    {
      path: "/dealer",
      element: <Layout />,
      children: [
        {
          path: "/dealer/",
          element: <Dashboard />,
        },
        {
          path: "/dealer/ads-list",
          element: <AdvertismentList />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
