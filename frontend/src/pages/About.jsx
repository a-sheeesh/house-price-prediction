import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import {
  FaBrain,
  FaDatabase,
  FaReact,
  FaServer,
  FaExclamationTriangle,
  FaLightbulb,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function About() {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-center"
          >

            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
              About EstateAI
            </span>

            <h1 className="mt-8 bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-6xl font-black text-transparent">
              AI Powered
              <br />
              House Price Prediction
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              EstateAI is an end-to-end machine learning application that
              predicts residential property prices using an XGBoost
              regression model. Built with React and FastAPI, it delivers
              accurate property valuations through a clean and modern user
              interface.
            </p>

          </motion.div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <h2 className="mb-12 text-center text-4xl font-bold">
            Technology Stack
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <FaReact className="mb-6 text-5xl text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Frontend
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                React, Tailwind CSS, Framer Motion, React Hook Form
              </p>

            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <FaServer className="mb-6 text-5xl text-green-400" />

              <h3 className="text-2xl font-bold">
                Backend
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                FastAPI, Pydantic, REST API, Uvicorn
              </p>

            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <FaBrain className="mb-6 text-5xl text-violet-400" />

              <h3 className="text-2xl font-bold">
                Machine Learning
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Scikit-learn, XGBoost, Pandas, NumPy
              </p>

            </motion.div>

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <FaDatabase className="mb-6 text-5xl text-yellow-400" />

              <h3 className="text-2xl font-bold">
                Dataset
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Ames Housing Dataset containing 1,460 residential properties
              </p>

            </motion.div>

          </div>

        </motion.div>

      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <h2 className="mb-12 text-center text-4xl font-bold">
            Model Performance
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                value: "0.91",
                label: "R² Score",
                color: "text-cyan-400",
              },
              {
                value: "XGBoost",
                label: "Regression Model",
                color: "text-green-400",
              },
              {
                value: "1460",
                label: "Training Samples",
                color: "text-yellow-400",
              },
              {
                value: "<1s",
                label: "Prediction Time",
                color: "text-violet-400",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
              >
                <h3 className={`text-5xl font-black ${item.color}`}>
                  {item.value}
                </h3>

                <p className="mt-4 text-slate-400">
                  {item.label}
                </p>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <h2 className="mb-12 text-center text-4xl font-bold">
            Prediction Workflow
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {[
              {
                emoji: "🏠",
                title: "Property Details",
                desc: "User enters property information.",
              },
              {
                emoji: "🤖",
                title: "AI Processing",
                desc: "FastAPI sends data to the trained XGBoost model.",
              },
              {
                emoji: "💰",
                title: "Prediction",
                desc: "Estimated property value is displayed instantly.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
              >
                <div className="mb-5 text-6xl">
                  {step.emoji}
                </div>

                <h3 className="text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <h2 className="mb-12 text-center text-4xl font-bold">
            Key Features
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "AI Powered Price Prediction",
              "XGBoost Regression Model",
              "FastAPI REST Backend",
              "Responsive React Interface",
              "Prediction History",
              "Modern Glassmorphism UI",
            ].map((feature) => (
              <motion.div
                key={feature}
                whileHover={{
                  scale: 1.03,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="mb-4 text-3xl">
                  ✅
                </div>

                <p className="font-medium">
                  {feature}
                </p>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </section>

      <Footer />
      <BackToTop />
    </>
  );
}