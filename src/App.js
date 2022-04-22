import { Routes, Route } from "react-router-dom";
import About from "./About";
import FoodList from "./FoodList";
import HomeContent from "./HomeContent";
import Navbar from "./Navbar";
import NotFound from "./NotFound";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/food-category-list" element={<FoodList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;