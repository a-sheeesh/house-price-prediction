# 🏠 EstateAI

An AI-powered web application that predicts residential property prices using Machine Learning. EstateAI leverages an XGBoost regression model trained on the Ames Housing Dataset and provides real-time predictions through a modern React frontend and FastAPI backend.

---

## ✨ Features

- 🤖 AI-powered house price prediction
- 📊 XGBoost regression model
- ⚡ FastAPI REST API
- 🎨 Modern React + Tailwind CSS interface
- 📱 Responsive design
- 📈 Prediction history
- 🎯 Real-time property valuation
- ✨ Smooth animations using Framer Motion

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Framer Motion

### Backend
- Python
- FastAPI

### Machine Learning
- XGBoost
- Scikit-learn
- Pandas
- NumPy
- Joblib

---

## 🧠 Machine Learning Model

The application uses an **XGBoost Regressor** trained on the **Ames Housing Dataset**.

### Input Features

- Overall Quality
- Living Area
- Garage Capacity
- Garage Area
- Basement Area
- Full Bathrooms
- Year Built
- Lot Area
- Total Rooms
- Neighborhood
- House Style
- Sale Condition

### Output

Estimated house price.

---

## 📊 Model Performance

| Metric | Value |
|---------|------:|
| Model | XGBoost Regressor |
| R² Score | 0.91 |
| Dataset | Ames Housing Dataset |

---

## 📂 Project Structure

```
EstateAI
│
├── frontend
│   ├── src
│   └── package.json
│
├── backend
│   ├── app
│   ├── models
│   ├── data
│   └── requirements.txt
│
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/estate-ai.git
cd estate-ai
```

---

### Backend

```bash
cd backend

python -m venv venv

source venv/bin/activate
```

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the server

```bash
uvicorn app.main:app --reload
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---


## 👨‍💻 Author

**Ashish Kumar**

GitHub: https://github.com/a-sheeesh

