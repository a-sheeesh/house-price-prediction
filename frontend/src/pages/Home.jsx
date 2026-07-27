import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PredictionForm from "../components/PredictionForm";
import ResultCard from "../components/ResultCard";

export default function Home() {
  const [price, setPrice] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <PredictionForm setPrice={setPrice} />
      <ResultCard price={price} />
    </div>
  );
}