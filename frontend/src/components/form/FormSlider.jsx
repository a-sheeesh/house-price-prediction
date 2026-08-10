import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function FormSlider({
  label,
  value,
  name,
  register,
  errors,
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="space-y-4 lg:col-span-3"
    >
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
          <span className="text-cyan-400">
            <FaStar />
          </span>
          {label}
        </label>

        <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm font-semibold text-cyan-400">
          {value}/10
        </span>
      </div>

      <input
        type="range"
        min="1"
        max="10"
        step="1"
        {...register(name, {
          required: "Overall Quality is required",
        })}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-cyan-400"
      />

      <div className="flex justify-between text-xs text-slate-500">
        <span>Poor</span>

        <span>Average</span>

        <span>Excellent</span>
      </div>

      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3">
        <p className="text-sm text-slate-300">
          <span className="font-semibold text-cyan-400">
            Note:
          </span>{" "}
          Higher quality homes generally receive higher predicted valuations.
        </p>
      </div>

      {errors[name] && (
        <p className="text-sm text-red-400">
          {errors[name].message}
        </p>
      )}
    </motion.div>
  );
}