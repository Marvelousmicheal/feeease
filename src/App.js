import "./Styles/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import Preloader from "./Components/Preloader";
import { useState } from "react";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Dashboard from "./Pages/Dashboard";

function App() {
  //this is for the reloader
  const [showLoader, setshowLoader] = useState(true);

  setTimeout(() => {
    setshowLoader(false);
  }, 9000);
  //stop here///

  return showLoader ? (
    <>
      <Preloader />
    </>
  ) : (
    <div className="App">
      <>
        <Router>
          <Header />
          <Routes>
             <Route path="/" element={<SignIn/>} /> 
            <Route path="/About-us" element={<AboutUs />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/Sign-up" element={<Signup />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
