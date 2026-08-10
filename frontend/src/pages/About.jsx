import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaDatabase,
  FaReact,
  FaServer,
  FaCheckCircle,
  FaArrowDown,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            About EstateAI
          </p>

          <h1 className="mt-4 text-5xl font-black">
            AI Powered House Price Prediction
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-400 leading-8">
            EstateAI is a machine learning powered web application that
            estimates residential property prices using an XGBoost regression
            model. Users can enter property details and receive an instant,
            AI-generated price prediction through a modern, responsive
            interface.
          </p>
        </motion.div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-8">
          Technology Stack
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <FaReact className="text-4xl text-cyan-400 mb-4" />
            <h3 className="font-bold text-xl">Frontend</h3>
            <p className="mt-3 text-slate-400">
              React + Tailwind CSS
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <FaServer className="text-4xl text-green-400 mb-4" />
            <h3 className="font-bold text-xl">Backend</h3>
            <p className="mt-3 text-slate-400">
              FastAPI
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <FaBrain className="text-4xl text-violet-400 mb-4" />
            <h3 className="font-bold text-xl">Machine Learning</h3>
            <p className="mt-3 text-slate-400">
              Scikit-learn + XGBoost
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <FaDatabase className="text-4xl text-yellow-400 mb-4" />
            <h3 className="font-bold text-xl">Dataset</h3>
            <p className="mt-3 text-slate-400">
              Ames Housing Dataset
            </p>
          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-10">
          Prediction Workflow
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center">

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 w-56">
            🏠
            <h3 className="mt-3 font-semibold">
              Enter Property Details
            </h3>
          </div>

          <FaArrowDown className="md:hidden text-cyan-400 text-2xl" />

          <div className="hidden md:block text-cyan-400 text-3xl">
            →
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 w-56">
            🤖
            <h3 className="mt-3 font-semibold">
              XGBoost Model
            </h3>
          </div>

          <FaArrowDown className="md:hidden text-cyan-400 text-2xl" />

          <div className="hidden md:block text-cyan-400 text-3xl">
            →
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 w-56">
            💰
            <h3 className="mt-3 font-semibold">
              Estimated Price
            </h3>
          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-3xl font-bold mb-8">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {[
            "AI Powered Price Prediction",
            "XGBoost Regression Model",
            "FastAPI REST Backend",
            "Modern React Interface",
            "Prediction History",
            "Responsive Design",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <FaCheckCircle className="text-green-400" />

              <span>{feature}</span>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}