import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-24 border-t border-white/10 bg-slate-950/80"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <h2 className="text-3xl font-bold text-white">
              EstateAI
            </h2>

            <p className="mt-4 max-w-md text-slate-400 leading-7">
              AI-powered property valuation platform built with React,
              FastAPI and XGBoost to estimate residential house prices
              instantly through machine learning.
            </p>
          </div>

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="https://github.com/YOUR_GITHUB"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-400"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-400"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://YOUR_PORTFOLIO"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-400"
              >
                <FaGlobe />
                Portfolio
              </a>

              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-400"
              >
                <FaEnvelope />
                Email
              </a>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">

          Built with <FaHeart className="inline text-red-500" /> using React,
          FastAPI & XGBoost.

        </div>

      </div>
    </footer>
  );
}