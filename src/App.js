import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import LoginPage from "./LoginPage";
import Communities from "./Communities";
import Properties from "./Properties";
import AboutUs from "./AboutUs";
import Header2 from "./Header2";
import SignupPage from "./SignupPage";
import ContactUs from "./ContactUs";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
