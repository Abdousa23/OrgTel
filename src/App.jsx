import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
// import useAuthContext from "./context/AuthContext";
import "./pages/Home";
import "./pages/Feedback";
import Signup from "./pages/Signup";
import Reservations from "./pages/Reservations";
import Profile from "./pages/Profile";
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import { Feedback } from "@mui/icons-material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RoomDetails from "./pages/RoomDetails";
import { FormContextProvider } from "./context/FormContext";
function App() {
  const {auth} = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signup" element={
          <FormContextProvider>
            <Signup />
          </FormContextProvider>
        } />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reservations/:roomid" element={<RoomDetails />} />
        {/* {auth?.user && ( */}
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/feedback" element={<Feedback />} />

          </>
        {/* )} */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
