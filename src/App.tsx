import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Prijava from "./pages/Prijava";
import Error404 from "./pages/Error404";
import { BeautyBallsProvider } from "./context/BeautyBallsContext";

function App() {
  return (
    <BeautyBallsProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nagrade" element={<Products />} />
        <Route path="/prijavi-se" element={<Prijava />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BeautyBallsProvider>
  );
}

export default App;
