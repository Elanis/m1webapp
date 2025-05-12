import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Meteo from "./pages/Meteo";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meteo" element={<Meteo />} />
      </Route>
    </Routes>
  );
}
