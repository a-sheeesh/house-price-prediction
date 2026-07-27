import { useForm } from "react-hook-form";
import api from "../services/api";

export default function PredictionForm({ setPrice }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/predict", {
      OverallQual: Number(data.OverallQual),
      GrLivArea: Number(data.GrLivArea),
      GarageCars: Number(data.GarageCars),
      GarageArea: Number(data.GarageArea),
      TotalBsmtSF: Number(data.TotalBsmtSF),
      FullBath: Number(data.FullBath),
      YearBuilt: Number(data.YearBuilt),
      LotArea: Number(data.LotArea),
      TotRmsAbvGrd: Number(data.TotRmsAbvGrd),
      Neighborhood: data.Neighborhood,
      HouseStyle: data.HouseStyle,
      SaleCondition: data.SaleCondition,
    });
      setPrice(response.data.predicted_price);
    } catch (err) {
      console.error(err);
      alert("Prediction failed.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-14">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">

        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Property Details
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <input
            {...register("OverallQual")}
            placeholder="Overall Quality"
            className="bg-slate-800 text-white p-3 rounded-lg outline-none"
          />

          <input
            {...register("GrLivArea")}
            placeholder="Living Area"
            className="bg-slate-800 text-white p-3 rounded-lg outline-none"
          />

          <input
            {...register("GarageCars")}
            placeholder="Garage Cars"
            className="bg-slate-800 text-white p-3 rounded-lg outline-none"
          />

          <input
            {...register("GarageArea")}
            placeholder="Garage Area"
            className="bg-slate-800 text-white p-3 rounded-lg outline-none"
          />

          <input
            {...register("TotalBsmtSF")}
            placeholder="Basement Area"
            className="bg-slate-800 text-white p-3 rounded-lg outline-none"
          />

          <input
            {...register("FullBath")}
            placeholder="Full Bathrooms"
            className="bg-slate-800 text-white p-3 rounded-lg outline-none"
          />

          <input
            {...register("YearBuilt")}
            placeholder="Year Built"
            className="bg-slate-800 text-white p-3 rounded-lg outline-none"
          />

          <input
            {...register("LotArea")}
            placeholder="Lot Area"
            className="bg-slate-800 text-white p-3 rounded-lg outline-none"
          />

          <input
            {...register("TotRmsAbvGrd")}
            placeholder="Total Rooms"
            className="bg-slate-800 text-white p-3 rounded-lg outline-none"
          />

          <select
            {...register("Neighborhood")}
            className="bg-slate-800 text-white p-3 rounded-lg"
          >
            <option>NAmes</option>
            <option>CollgCr</option>
            <option>OldTown</option>
          </select>

          <select
            {...register("HouseStyle")}
            className="bg-slate-800 text-white p-3 rounded-lg"
          >
            <option>1Story</option>
            <option>2Story</option>
          </select>

          <select
            {...register("SaleCondition")}
            className="bg-slate-800 text-white p-3 rounded-lg"
          >
            <option>Normal</option>
            <option>Partial</option>
          </select>

          <button
            type="submit"
            className="lg:col-span-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition"
          >
            Predict Price
          </button>
        </form>

      </div>
    </div>
  );
}