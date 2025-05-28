import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import QA from "./pages/QA";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/qa" element={<QA />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}