import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-[9999] border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Link to="/" className="flex items-center gap-4">
          <div className="rounded-xl bg-cyan-500/15 p-3">
            <FaHome className="text-2xl text-cyan-400" />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              EstateAI
            </h1>

            <p className="text-sm text-slate-400">
              AI Powered Property Valuation
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-cyan-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-slate-300 hover:text-cyan-400 transition"
            }
          >
            About
          </NavLink>

          <a
            href="/#contact"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

        <div className="hidden rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 lg:block">
          XGBoost AI Model
        </div>

      </div>
    </motion.nav>
  );
}