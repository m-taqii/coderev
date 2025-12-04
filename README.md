# CodeRev - AI Code Review Assistant

CodeRev is a modern, AI-powered code review and developer assistant. It provides a chat interface where developers can get instant feedback on their code, debug issues, learn best practices, and receive mentorship from an AI senior engineer.

## Features

- **AI Code Review**: Get detailed feedback on code quality, bugs, and improvements
- **Markdown Rendering**: AI responses support rich markdown with syntax highlighting
- **Responsive Design**: Works on desktop and mobile devices
- **Landing Page**: Modern homepage with feature highlights

## Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI Library |
| Vite | 7.2.4 | Build Tool |
| Tailwind CSS | 4.1.17 | Styling |
| React Router DOM | 7.10.0 | Routing |
| React Markdown | 10.1.0 | Markdown Rendering |
| Rehype Highlight | 7.0.2 | Code Syntax Highlighting |
| PrismJS | 1.30.0 | Additional Syntax Highlighting |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | - | Runtime |
| Express | 5.1.0 | Web Framework |
| OpenAI SDK | 6.9.1 | AI API Integration |
| CORS | 2.8.5 | Cross-Origin Requests |
| dotenv | 17.2.3 | Environment Variables |

### AI Service
- **Provider**: LongCat AI (OpenAI-compatible API)
- **Model**: longcat-flash-thinking
- **Temperature**: 0.2 (optimized for code review accuracy)

## Project Structure

```
coderev/
├── Backend/
│   ├── src/
│   │   ├── app.js              # Express app setup
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   ├── routes/
│   │   │   └── ai.route.js
│   │   └── services/
│   │       └── ai.service.js   # AI integration logic
│   ├── server.js               # Server entry point
│   ├── package.json
│   └── .env                    # API keys (not committed)
│
├── Frontend/
│   ├── public/
│   │   ├── robot.png           # Hero background image
│   │   └── fonts/              # Custom fonts (ScienceGothic)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Landing page
│   │   │   └── ChatInterface.jsx # Chat UI
│   │   ├── App.jsx             # Routes setup
│   │   ├── App.css
│   │   ├── index.css           # Global styles & fonts
│   │   └── main.jsx            # React entry point
│   ├── package.json
│   └── .env                    # API URL config
│
├── README.md
├── LICENSE
└── .gitignore
```

## Pages

### Home (`/`)
Landing page featuring:
- Hero section with background image
- "Why Our AI Developer" feature cards
- "What It Can Do" capabilities grid
- Footer with links

### Chat (`/chat`)
ChatGPT-style interface with:
- Sidebar for chat history (desktop)
- Message area with user/AI bubbles
- Fixed input area at bottom
- Auto-scroll on new messages

## Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- LongCat API key

### 1. Clone the Repository
```bash
git clone https://github.com/m-taqii/coderev.git
cd coderev
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create `.env` file:
```env
LONGCAT_API_KEY=your_api_key_here
```

Start the server:
```bash
nodemon server.js
# or
node server.js
```
Server runs on `http://localhost:3000`

### 3. Frontend Setup
```bash
cd Frontend
npm install
```

Create `.env` file:
```env
VITE_BASE_URL=http://localhost:3000
```

Start development server:
```bash
npm run dev
```
App runs on `http://localhost:5173`

## API Endpoints

### POST `/ai/get-response`
Send a prompt to the AI and receive a response.

**Request Body:**
```json
{
  "prompt": "Your code or question here"
}
```

**Response:**
Returns the AI's response as text/markdown.

## AI Capabilities

The AI is configured to act as a senior software engineer with expertise in:

- **Code Review & Debugging**: Identify bugs, anti-patterns, security issues
- **Optimization**: Performance, readability, architecture improvements
- **Mentoring**: Career advice, learning paths, skill development
- **System Design**: Architecture patterns, API design, scalability

## Scripts

### Frontend
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Backend
| Command | Description |
|---------|-------------|
| `node server.js` | Start server |
| `nodemon server.js` | Start with auto-reload |

## Environment Variables

### Backend (`.env`)
| Variable | Description |
|----------|-------------|
| `LONGCAT_API_KEY` | API key for LongCat AI service |

### Frontend (`.env`)
| Variable | Description |
|----------|-------------|
| `VITE_BASE_URL` | Backend API URL (e.g., `http://localhost:3000`) |

## License

MIT License - See [LICENSE](LICENSE) file for details.

---

Built by **M.Taqi**
