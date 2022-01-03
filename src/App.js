import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthProvider";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import Home from "./pages/Home/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import EventDetails from "./pages/Home/Events/EventDetails/EventDetails";
import Header from "./components/SharedComponents/Header/Header";
import Footer from "./components/SharedComponents/Footer/Footer";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/eventDetails/:id" element={<EventDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
