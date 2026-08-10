import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PredictionForm from "../components/PredictionForm";
import ResultCard from "../components/ResultCard";
import PredictionHistory from "../components/PredictionHistory";


export default function Home() {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  return (
  <div className="min-h-screen bg-slate-950 text-white">

    <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

    <div className="absolute right-0 top-32 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

    <Navbar />

    <Hero />

    <PredictionForm
      setPrice={setPrice}
      setHistory={setHistory}
      loading={loading}
      setLoading={setLoading}
    />

    <ResultCard
      price={price}
      loading={loading}
    />

    <PredictionHistory
      history={history}
    />

    <Footer />

  </div>
);
}