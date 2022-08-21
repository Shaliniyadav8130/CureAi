
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from "./components/pages/Home";
import  About from "./components/pages/About";
import  Hospital from "./components/pages/Hospital";

function App() {
  return (
<>
      <Router>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/hospital" element={<Hospital/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
