import { motion, AnimatePresence } from "framer-motion";
import {
  FaHistory,
  FaHome,
  FaRulerCombined,
  FaRupeeSign,
  FaClock,
} from "react-icons/fa";

export default function PredictionHistory({ history }) {
  if (history.length === 0) return null;

  return (
    <section className="mx-auto mt-14 mb-20 max-w-6xl px-6">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl bg-cyan-500/15 p-3">
          <FaHistory className="text-xl text-cyan-400" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            Recent Predictions
          </h2>

          <p className="text-slate-400">
            Your latest AI-generated property valuations
          </p>
        </div>
      </div>

      <AnimatePresence>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {history.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/15 p-3">
                  <FaHome className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-lg font-semibold text-white">
                    {item.neighborhood}
                  </p>

                  <p className="text-sm text-slate-400">
                    Residential Property
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-400">
                    <FaRulerCombined className="text-cyan-400" />
                    Living Area
                  </span>

                  <span className="font-semibold text-white">
                    {item.area} sq ft
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-400">
                    <FaRupeeSign className="text-cyan-400" />
                    Estimated Price
                  </span>

                  <span className="font-bold text-cyan-400">
                    {item.price}
                  </span>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <FaClock />
                    Just now
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
}