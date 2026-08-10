import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaChartLine,
  FaCheckCircle,
  FaRobot,
} from "react-icons/fa";

export default function ResultCard({ price, loading }) {
  return (
    <AnimatePresence mode="wait">
      {!loading && price && (
        <motion.section
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl">

            <div className="border-b border-white/10 px-8 py-6">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-cyan-500/15 p-3">
                  <FaHome className="text-2xl text-cyan-400" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Estimated Property Value
                  </h2>

                  <p className="text-slate-400">
                    Generated using our AI valuation model
                  </p>
                </div>

              </div>

            </div>

            <div className="px-8 py-10">

              <motion.h1
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                }}
                className="mb-8 text-center text-5xl font-extrabold text-cyan-400"
              >
                {price.formatted_price}
              </motion.h1>

              <div className="grid gap-5 md:grid-cols-3">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <div className="mb-3 flex items-center gap-2 text-cyan-400">

                    <FaChartLine />

                    <span className="font-semibold">
                      Confidence
                    </span>

                  </div>

                  <p className="text-2xl font-bold text-white">
                    {price.confidence}
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <div className="mb-3 flex items-center gap-2 text-cyan-400">

                    <FaRobot />

                    <span className="font-semibold">
                      Model
                    </span>

                  </div>

                  <p className="text-2xl font-bold text-white">
                    {price.model}
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <div className="mb-3 flex items-center gap-2 text-cyan-400">

                    <FaCheckCircle />

                    <span className="font-semibold">
                      Status
                    </span>

                  </div>

                  <p className="text-2xl font-bold text-green-400">
                    Success
                  </p>

                </div>

              </div>

            </div>

          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}