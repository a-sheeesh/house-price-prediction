import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative text-center py-28 px-6">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="inline-block mb-6 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300"
      >
        AI Powered House Price Prediction
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        className="text-7xl font-black leading-tight"
      >
        Estimate Property
        <br />

        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Value Instantly
        </span>

      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="max-w-3xl mx-auto mt-8 text-xl text-slate-400"
      >
        Powered by an XGBoost machine learning model trained on real-world
        housing data to deliver fast and reliable property value estimates.
      </motion.p>

    </section>
  );
}