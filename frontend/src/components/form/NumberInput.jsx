import { motion } from "framer-motion";

export default function NumberInput({
  label,
  icon,
  name,
  placeholder,
  register,
  errors,
  validation,
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

      <input
        type="number"
        placeholder={placeholder}
        {...register(name, validation)}
        className={`w-full rounded-xl border bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:ring-2 ${
          errors[name]
            ? "border-red-500 focus:ring-red-500/30"
            : "border-white/10 focus:border-cyan-400 focus:ring-cyan-400/30 hover:border-cyan-400/40"
        }`}
      />

      {errors[name] && (
        <motion.p
          initial={{ opacity: 0, y: -3 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-400"
        >
          {errors[name].message}
        </motion.p>
      )}
    </motion.div>
  );
}