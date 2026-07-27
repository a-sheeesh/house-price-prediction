import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mt-16"
    >
     <h1 className="text-6xl font-bold text-white">
        Predict House Prices
     </h1>

      <p className="text-slate-400 mt-6 text-xl max-w-2xl mx-auto">
        Estimate residential property values instantly using our
        machine learning model trained on real housing data.
      </p>
    </motion.div>
  );
}