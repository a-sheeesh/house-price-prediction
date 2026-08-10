import { useForm, useWatch } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import {
  FaStar,
  FaRulerCombined,
  FaCar,
  FaWarehouse,
  FaBath,
  FaCalendarAlt,
  FaTree,
  FaDoorOpen,
  FaMapMarkedAlt,
  FaHome,
  FaTag,
  FaMagic,
  FaUndo,
} from "react-icons/fa";

import api from "../services/api";

import FormSection from "./form/FormSection";
import FormSlider from "./form/FormSlider";
import NumberInput from "./form/NumberInput";
import SelectInput from "./form/SelectInput";

export default function PredictionForm({
  setPrice,
  setHistory,
  loading,
  setLoading,
}) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      OverallQual: 5,
      Neighborhood: "NAmes",
      HouseStyle: "1Story",
      SaleCondition: "Normal",
    },
  });

  const quality = useWatch({
    control,
    name: "OverallQual",
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1500));

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

      setPrice(response.data);

      setHistory((prev) =>
        [
          {
            id: Date.now(),
            neighborhood: data.Neighborhood,
            area: data.GrLivArea,
            price: response.data.formatted_price,
          },
          ...prev,
        ].slice(0, 6)
      );
    } catch (err) {
      console.error(err);
      alert("Prediction failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    reset({
      OverallQual: 5,
      Neighborhood: "NAmes",
      HouseStyle: "1Story",
      SaleCondition: "Normal",
    });

    setPrice(null);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-white">
          Property Information
        </h2>

        <p className="mt-3 text-slate-400">
          Fill in the property details to predict its value.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormSection
          title="Property Quality"
          icon={<FaStar />}
        >
          <FormSlider
            label="Overall Quality"
            value={quality}
            name="OverallQual"
            register={register}
            errors={errors}
          />
        </FormSection>

        <FormSection
          title="Property Size"
          icon={<FaRulerCombined />}
        >
          <NumberInput
            icon={<FaRulerCombined />}
            label="Living Area (sq ft)"
            placeholder="e.g. 1700"
            name="GrLivArea"
            register={register}
            errors={errors}
            validation={{ required: "Required" }}
          />

          <NumberInput
            icon={<FaTree />}
            label="Lot Area (sq ft)"
            placeholder="e.g. 8000"
            name="LotArea"
            register={register}
            errors={errors}
            validation={{ required: "Required" }}
          />

          <NumberInput
            icon={<FaHome />}
            label="Basement Area (sq ft)"
            placeholder="e.g. 900"
            name="TotalBsmtSF"
            register={register}
            errors={errors}
            validation={{ required: "Required" }}
          />
        </FormSection>

        <FormSection
          title="Garage"
          icon={<FaCar />}
        >
          <NumberInput
            icon={<FaCar />}
            label="Garage Capacity"
            placeholder="e.g. 2"
            name="GarageCars"
            register={register}
            errors={errors}
            validation={{ required: "Required" }}
          />

          <NumberInput
            icon={<FaWarehouse />}
            label="Garage Area (sq ft)"
            placeholder="e.g. 500"
            name="GarageArea"
            register={register}
            errors={errors}
            validation={{ required: "Required" }}
          />
        </FormSection>

        <FormSection
          title="Property Details"
          icon={<FaHome />}
        >
          <NumberInput
            icon={<FaBath />}
            label="Bathrooms"
            placeholder="e.g. 2"
            name="FullBath"
            register={register}
            errors={errors}
            validation={{ required: "Required" }}
          />

          <NumberInput
            icon={<FaCalendarAlt />}
            label="Year Built"
            placeholder="e.g. 2005"
            name="YearBuilt"
            register={register}
            errors={errors}
            validation={{ required: "Required" }}
          />

          <NumberInput
            icon={<FaDoorOpen />}
            label="Total Rooms"
            placeholder="e.g. 7"
            name="TotRmsAbvGrd"
            register={register}
            errors={errors}
            validation={{ required: "Required" }}
          />
        </FormSection>

        <FormSection
          title="Location"
          icon={<FaMapMarkedAlt />}
        >
          <SelectInput
            icon={<FaMapMarkedAlt />}
            label="Neighborhood"
            name="Neighborhood"
            register={register}
            options={[
              "NAmes",
              "CollgCr",
              "OldTown",
            ]}
          />

          <SelectInput
            icon={<FaHome />}
            label="House Style"
            name="HouseStyle"
            register={register}
            options={[
              "1Story",
              "2Story",
            ]}
          />

          <SelectInput
            icon={<FaTag />}
            label="Sale Condition"
            name="SaleCondition"
            register={register}
            options={[
              "Normal",
              "Partial",
            ]}
          />
        </FormSection>

        <div className="flex flex-col gap-4 md:flex-row">
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 rounded-xl border border-white/10 bg-slate-800 py-4 font-semibold text-white transition hover:bg-slate-700"
          >
            <span className="flex items-center justify-center gap-2">
              <FaUndo />
              Reset Form
            </span>
          </button>

          <button
            type="submit"
            disabled={loading}
            className={`flex-1 rounded-xl py-4 font-semibold text-white transition-all duration-300 ${
              loading
                ? "cursor-not-allowed bg-slate-700"
                : "bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/30"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <ClipLoader
                  size={18}
                  color="#fff"
                />
                Predicting...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                <FaMagic />
                Predict Price
              </span>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}