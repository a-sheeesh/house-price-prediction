import { FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <div className="flex items-center gap-3">
        <FaHome className="text-cyan-400 text-2xl" />

        <h1 className="text-2xl font-bold text-white">
          EstateAI
        </h1>
      </div>

      <p className="text-slate-400">
        AI Powered Property Valuation
      </p>
    </nav>
  );
}