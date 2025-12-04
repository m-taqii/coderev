# CodeRev - AI Code Reviewer

CodeRev is a modern, AI-powered code review assistant designed to help developers improve their code quality instantly. It features a sleek, split-screen interface where users can paste their code and receive detailed, constructive feedback from an AI senior code reviewer.

## 🚀 Features

*   **Instant Code Analysis**: Get immediate feedback on code quality, performance, and security.
*   **Premium UI**: A dark-themed, glassmorphism-inspired interface built for developer comfort.
*   **Syntax Highlighting**: Real-time syntax highlighting for code input.
*   **Markdown Support**: AI responses are rendered in rich Markdown with code block highlighting.
*   **Split-Screen View**: Compare your code and the AI's suggestions side-by-side.

## 🛠️ Tech Stack

### Frontend
*   **React** (Vite)
*   **Tailwind CSS v4**
*   **PrismJS** (Syntax Highlighting)
*   **React Markdown**

### Backend
*   **Node.js** & **Express**
*   **OpenAI SDK** (configured for LongCat/Custom AI endpoints)
*   **CORS** enabled

## ⚙️ Installation & Setup

### Prerequisites
*   Node.js installed on your machine.
*   An API key for the AI service.

### 1. Clone the Repository
```bash
git clone https://github.com/m-taqii/coderev.git
cd coderev
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` directory:
```env
LONGCAT_API_KEY=your_api_key_here
```

Start the backend server:
```bash
node server.js
# or if using nodemon
nodemon server.js
```
The server will run on `http://localhost:3000`.

### 3. Frontend Setup
Navigate to the frontend directory and install dependencies:
```bash
cd ../Frontend
npm install
```

Create a `.env` file in the `Frontend` directory:
```env
VITE_BASE_URL=http://localhost:3000
```

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 📝 Usage
1.  Open the application in your browser.
2.  Paste your code snippet into the left-hand editor.
3.  Click the **"Review Code"** button.
4.  Read the AI's detailed feedback on the right panel.

---
*Built with ❤️ by M.Taqi*
