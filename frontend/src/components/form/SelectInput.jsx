import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function SelectInput({
  label,
  icon,
  name,
  register,
  options,
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="space-y-2"
    >
      <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
        <span className="text-cyan-400">{icon}</span>
        {label}
      </label>

      <div className="relative">
        <select
          {...register(name)}
          className="w-full appearance-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 pr-10 text-white outline-none transition-all duration-300 hover:border-cyan-400/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
        >
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-slate-900"
            >
              {option}
            </option>
          ))}
        </select>

        <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />
      </div>
    </motion.div>
  );
}