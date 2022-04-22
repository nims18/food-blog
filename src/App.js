import { Routes, Route } from "react-router-dom";
import About from "./About";
import HomeContent from "./HomeContent";
import Navbar from "./Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;