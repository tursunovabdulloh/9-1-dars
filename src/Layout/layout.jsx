import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/footer";
// taost
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
}
