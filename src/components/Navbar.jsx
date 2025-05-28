import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">📄 Doc Intelligence</Link>
      <div className="flex gap-6">
        <Link to="/" className={`hover:underline ${pathname === "/" ? "underline" : ""}`}>Dashboard</Link>
        <Link to="/upload" className={`hover:underline ${pathname === "/upload" ? "underline" : ""}`}>Upload</Link>
        <Link to="/qa" className={`hover:underline ${pathname === "/qa" ? "underline" : ""}`}>Q&A</Link>
      </div>
    </nav>
  );
}