# PLC Architecture Generator

This project is a React-based frontend application for generating PLC architectures, styled using Tailwind CSS, with a Python Flask backend API.

---

## Prerequisites

Make sure you have the following installed:

- [Node.js (v16 or newer)](https://nodejs.org/)
- npm (comes with Node.js)
- [Python 3.8+](https://www.python.org/downloads/)
- pip (Python package installer)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/tomwebb644/PLC-Architecture-Generator.git
cd PLC-Architecture-Generator
```

---

### 2. Install root dependencies (if any)

```bash
npm install
```

---

### 3. Setup Frontend

Navigate to the frontend folder:

```bash
cd frontend
```

Install the required packages including React scripts and Tailwind CSS dependencies:

```bash
npm install
npm install -D tailwindcss@3.4.17 postcss autoprefixer
```

Initialize Tailwind CSS config files:

```bash
npx tailwindcss init -p
```

Make sure your main CSS file (usually `src/index.css`) includes the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import this CSS file in your React entry file (e.g., `src/index.js`):

```js
import './index.css';
```

---

### 4. Setup Backend

Navigate to the backend folder (create it if not present):

```bash
cd ../backend
```

Create a `requirements.txt` file with the following contents:

```txt
Flask
flask-cors
openai
```

Install the Python dependencies using pip:

```bash
pip install Flask flask-cors openai
```

Alternatively, install from the requirements file:

```bash
pip install -r requirements.txt
```

---

## Running the Project

### Frontend

From the `frontend` folder, start the React development server:

```bash
npm start
```

Open `http://localhost:3000` in your browser to view the app.

---

### Backend

From the `backend` folder, start the Flask server:

On macOS/Linux:

```bash
export FLASK_APP=app.py
flask run
```

On Windows (CMD):

```bash
set FLASK_APP=app.py
flask run
```

The backend will run by default on `http://localhost:5000`.

---

Happy coding! 🚀
