# 📺 Kapittx TV Scheduler

A premium, modern web application designed to track and view TV schedules in real-time. Built with **React** and **Vite**, this application features a sleek "Cyberpunk-lite" dark aesthetic and integrates with the **TVMaze API** to provide up-to-date show information.

## ✨ Features

- **📅 Live Schedule:** View a list of currently airing TV shows in the US.
- **🔍 Show Details:** Click on any show to view detailed information including:
  - High-quality posters
  - Plot summaries
  - Ratings & Genres
  - Network & Status information
- **🎨 Premium UI:**
  - Custom Dark Mode with deep purple gradients.
  - Glassmorphism effects on cards.
  - Smooth hover animations and transitions.
  - Responsive Grid Layout.
- **⚡ Fast Performance:** Powered by Vite for lightning-fast development and build times.

## 🛠️ Tech Stack

- **Frontend:** React.js (v19)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (Custom Variables, Flexbox/Grid, Glassmorphism)
- **API:** [TVMaze API](https://www.tvmaze.com/api)
- **Routing:** React Router DOM

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- Yarn or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/tv-schedule-app.git
   cd tv-schedule-app
   ```

2. **Install Dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Run the Development Server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:5173` to view the app.

## 📂 Project Structure

```
src/
├── api/            # API call functions (TVMaze integration)
├── components/     # Reusable UI components (ShowCard, etc.)
├── pages/          # Page views (SchedulePage, ShowDetailPage)
├── App.jsx         # Main App Component & Routing
├── index.css       # Global Styles & Design System
└── main.jsx        # Entry point
```
