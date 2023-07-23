import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Styles/index.css";
import { AppRoutes } from "./Routes/routes";
import { Header } from "./Components/Header";

function App() {

  return (
    <>
      <Header/>
      
      <AppRoutes />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </>
  )
}

export default App
