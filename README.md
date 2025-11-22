# ⚡ Pokédex - React + TypeScript

A modern, responsive Pokémon browser built with React, TypeScript, and Tailwind CSS. This application demonstrates clean architecture, proper state management, and real-world usability patterns.

## 🎯 Features

### Core Features
- **Two View Modes:**
  - **Pagination View**: Browse Pokémon with traditional page controls (Previous/Next + page numbers)
  - **Infinite Scroll View**: Load more Pokémon dynamically with a "Load More" button
- **Detailed Pokémon Pages**: Dedicated route for each Pokémon showing:
  - Name, ID, and official artwork
  - Height and weight
  - Types with color-coded badges
  - Abilities (including hidden abilities)
  - Base experience
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Loading States**: Skeleton loaders and spinners for better UX
- **Error Handling**: Graceful error messages with retry functionality

### Bonus Features ✨
- **React Query**: Advanced data fetching, caching, and state management
- **Error Boundaries**: Graceful runtime error handling
- **Clean Architecture**: Modular, testable component structure
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **React Query (@tanstack/react-query)** - Server state management
- **PokéAPI** - Pokémon data source

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd pokemon-app

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ErrorBoundary.tsx
│   ├── ErrorMessage.tsx
│   ├── Layout.tsx
│   ├── LoadingSpinner.tsx
│   ├── Pagination.tsx
│   ├── PokemonCard.tsx
│   └── SkeletonCard.tsx
├── pages/              # Route pages
│   ├── InfiniteScrollView.tsx
│   ├── PaginationView.tsx
│   └── PokemonDetail.tsx
├── services/           # API layer
│   └── pokemonApi.ts
├── types/              # TypeScript definitions
│   └── pokemon.ts
├── App.tsx             # Main app component
└── index.tsx           # Entry point
```

## 🎨 Design Highlights

- **Modern Gradient UI**: Beautiful gradient backgrounds and smooth transitions
- **Type-Based Colors**: Each Pokémon type has its own color scheme
- **Skeleton Loading**: Non-intrusive loading states
- **Smooth Animations**: Hover effects and transitions throughout
- **Accessible**: Semantic HTML and proper ARIA labels

## 🔗 API Reference

This app uses the [PokéAPI](https://pokeapi.co/):
- `GET /pokemon?limit={limit}&offset={offset}` - List Pokémon
- `GET /pokemon/{id}` - Get Pokémon details

## 🌐 Deployment

This app is ready to deploy on:
- **Vercel** (recommended)
- **Netlify**
- **Cloudflare Pages**

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 License

MIT License - feel free to use this project for learning and development.

## 🙏 Acknowledgments

- Pokémon data provided by [PokéAPI](https://pokeapi.co/)
- Pokémon sprites and artwork © Nintendo/Game Freak