# BrainWave

A modern AI chat application landing page built with React and Vite, showcasing generative AI features for creators and teams.

## Overview

BrainWave is a polished marketing site for an AI-powered chatbot platform. It highlights capabilities like photo generation, photo editing, video generation, voice recognition, and seamless team collaboration — all wrapped in a sleek dark-themed UI with smooth animations and parallax effects.

## Features

- **Hero Section** — Animated robot showcase with parallax background circles and floating collaboration badges
- **Features Grid** — 6 feature cards: Ask Anything, Improve Everyday, Connect Everywhere, Smart Suggestions, Seamless Integration, Instant Insights
- **Collaborations** — Central logo surrounded by rotating integration icons (Slack, Figma, Notion, Discord, Photoshop, and more)
- **Generative AI Showcase** — Photo editing, photo enhancement, and video generation demos
- **Pricing** — 3-tier plans: Basic (free), Premium ($9.99), Enterprise (custom)
- **Roadmap** — Timeline of upcoming features with status indicators (Done / In Progress)

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 + Vite 7 | UI framework & build tool |
| React Router v7 | Client-side routing (HashRouter) |
| Tailwind CSS 4 | Styling |
| Motion | Animations |
| react-just-parallax | Parallax scroll effects |
| Ant Design | Loading spinner component |

## Project Structure

```
src/
├── components/        # Reusable UI (Navbar, Button, Hero, Footer, etc.)
├── pages/             # Lazy-loaded page sections (Hero, Features, Collabs, GenAI, Pricing, Roadmap)
├── styleComponents/   # Decorative SVG/gradient elements
├── constants/
│   └── data.js        # All static data (features, pricing, icons, collab apps)
├── assets/            # Images and SVGs organized by section
├── App.jsx            # Root component with routing
└── HomePage.jsx       # Composes all sections with React.lazy + Suspense
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The project includes config for both **Netlify** (`netlify.toml`) and **Firebase** (`firebase-tools`).

**Netlify (recommended):**
Push to your connected repo — Netlify auto-deploys on every commit.

**Firebase Hosting:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```
