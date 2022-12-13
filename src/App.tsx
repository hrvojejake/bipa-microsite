import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BeautyBallsProvider } from "./context/BeautyBallsContext";

function App() {
  return (
    <BeautyBallsProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nagrade" element={<Products />} />
      </Routes>
    </BeautyBallsProvider>
  );
}

export default App;
