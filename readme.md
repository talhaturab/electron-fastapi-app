# 🧠 Electron + FastAPI NLP App

This is a desktop application built using **Electron** (for the UI) and **FastAPI** (for NLP backend logic). It uses the **OpenAI API** to generate responses to user queries in real-time.

---

## ⚙️ Features

- ✅ Cross-platform desktop app
- 🎯 Electron-based UI
- 🚀 FastAPI backend using OpenAI
- 🧩 Fully local and offline-capable backend with PyInstaller
- 💡 Beautiful, responsive UI with zero external CSS libraries

---

## 🚀 Getting Started (Development)

### 1. Clone the repository

```bash
git clone https://github.com/talhaturab/electron-fastapi-app
cd electron-fastapi-app
```

### 2. Install frontend (Electron)

```bash
npm install
```

### 3. Set up backend (FastAPI + Python)

```bash
python -m venv env
source env/bin/activate   # Windows: env\Scripts\activate
pip install -r requirements.txt
```

### 4. Add OpenAI API Key

```
export OPENAI_API_KEY=your-api-key-here
```

## 🛠 Building the Backend Executable

To bundle the FastAPI backend into a distributable binary:

```bash
cd backend
pyinstaller --onedir main.py
```

This will generate a `dist/main/` folder containing your executable.

---

### 5. Start the app

From the root directory:

```bash
npm start
```

---

## 🧠 Project Structure

```
electron-fastapi-app/
├── backend/            # FastAPI backend
│   ├── main.py
│   ├── requirements.txt
│   └── dist/           # Built backend executable (after PyInstaller)
├── frontend/           # Electron frontend
│   ├── main.js
│   └── index.html
├── package.json        # Electron config
└── README.md
```

---

## ✅ Requirements

- Node.js ≥ 18
- Python ≥ 3.8
- OpenAI API key

---