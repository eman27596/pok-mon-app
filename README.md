# ⚡ Pokédex - React + TypeScript

A modern, feature-rich Pokémon browser application built with React 19, TypeScript, and Tailwind CSS. This project showcases professional development practices including clean architecture, advanced state management, custom design systems, and comprehensive API integration.

![Pokemon App](https://img.shields.io/badge/React-19.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Live Demo

- **Live Application**: https://pokmon-taupe.vercel.app/
- **GitHub Repository**: https://github.com/eman27596/pok-mon-app

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Styling Architecture](#-styling-architecture)
- [API Integration](#-api-integration)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Components Overview](#-components-overview)
- [Deployment](#-deployment)

## 🎯 Features

### Core Features
✅ **Two View Modes**
- **Pagination View** (`/`)
  - Browse Pokémon with traditional page controls
  - Previous/Next navigation buttons
  - Smart page number display with ellipsis (1 ... 4 5 6 ... 66)
  - 20 Pokémon per page
  - Smooth page transitions with scroll-to-top
  
- **Infinite Scroll View** (`/infinite-scroll`)
  - Load more Pokémon dynamically with "Load More" button
  - Prevents duplicate entries
  - Shows loading state while fetching
  - Displays end-of-list message
  - 20 Pokémon loaded per batch

✅ **Detailed Pokémon Pages** (`/pokemon/:id`)
- Separate dedicated route (not modal or drawer)
- **Visual Display:**
  - Large official Pokémon artwork
  - Gradient header with name and ID
  - Authentic game-accurate type badges
- **Stats Display:**
  - Complete base stats (HP, Attack, Defense, Sp. Attack, Sp. Defense, Speed)
  - Visual progress bars for each stat
  - Real data from PokéAPI
- **Information:**
  - Height (in meters) with icon
  - Weight (in kilograms) with icon
  - All abilities (normal and hidden)
  - Base experience points
  - Type badges with authentic Pokémon colors

✅ **Responsive Design**
- **Desktop** (1920px+): 4-column grid
- **Laptop** (1024px+): 3-column grid
- **Tablet** (768px+): 2-column grid
- **Mobile** (320px+): 1-column grid
- Touch-friendly UI elements
- Responsive navigation
- Adaptive typography

✅ **Loading States**
- **Skeleton Loaders**: 
  - Animated shimmer effect
  - Pokéball placeholder icon
  - Gradient backgrounds
  - Non-intrusive design
- **Spinners**: For detail page loading
- **Progressive Loading**: Images load lazily

✅ **Error Handling**
- User-friendly error messages
- Retry buttons on all error states
- Network failure handling
- React Error Boundaries for runtime errors

### Bonus Features ✨
✅ **React Query Integration**
- Advanced data fetching and caching
- Automatic retry on failure (2 retries)
- 5-minute cache for list views
- 10-minute cache for detail pages
- Background refetching disabled
- Optimistic UI updates

✅ **Error Boundaries**
- Catches and handles runtime errors gracefully
- Provides error UI with retry option
- Prevents app crashes
- Logs errors to console

✅ **Performance Optimizations**
- Code splitting via React Router
- Lazy loading images
- Memoized components
- Optimized re-renders
- Small bundle size (~83KB gzipped)

✅ **Type Safety**
- Full TypeScript implementation
- Custom type definitions for all API responses
- Strict type checking
- No `any` types used

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 4.9.5** - Static type checking
- **React Router DOM 6.30.2** - Client-side routing

### Styling
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS transformations
- **Autoprefixer 10.4.22** - Automatic vendor prefixes

### State Management & Data Fetching
- **TanStack React Query 5.90.10** - Server state management
  - Data fetching and caching
  - Background synchronization
  - Optimistic updates
  - Query invalidation

### Build & Development Tools
- **Create React App 5.0.1** - Zero-config build setup
- **React Scripts** - Webpack configuration
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking

### API
- **PokéAPI v2** - RESTful Pokémon API
  - Free, open-source
  - Comprehensive Pokémon data
  - 1000+ Pokémon
  - Types, abilities, stats, and more

## 🎨 Styling Architecture

### Custom Tailwind Configuration

This project uses an extensively customized Tailwind CSS setup with a comprehensive design system:

#### **Custom Color Palette**
```javascript
// Primary Colors (Purple theme)
primary: {
  50: '#f5f3ff',   100: '#ede9fe',   200: '#ddd6fe',
  300: '#c4b5fd',  400: '#a78bfa',   500: '#8b5cf6',
  600: '#7c3aed',  700: '#6d28d9',   800: '#5b21b6',
  900: '#4c1d95'
}

// Secondary Colors (Pink/Magenta theme)
secondary: {
  50: '#fdf4ff',   100: '#fae8ff',   200: '#f5d0fe',
  300: '#f0abfc',  400: '#e879f9',   500: '#d946ef',
  600: '#c026d3',  700: '#a21caf',   800: '#86198f',
  900: '#701a75'
}

// Authentic Pokémon Type Colors (18 types)
pokemon: {
  normal: '#A8A878',    fire: '#F08030',      water: '#6890F0',
  electric: '#F8D030',  grass: '#78C850',     ice: '#98D8D8',
  fighting: '#C03028',  poison: '#A040A0',    ground: '#E0C068',
  flying: '#A890F0',    psychic: '#F85888',   bug: '#A8B820',
  rock: '#B8A038',      ghost: '#705898',     dragon: '#7038F8',
  dark: '#705848',      steel: '#B8B8D0',     fairy: '#EE99AC'
}
```

#### **Custom Typography**
- Font sizes from `xs` to `6xl` with optimized line heights
- Custom font stacks for sans-serif and display text
- Responsive text sizing

#### **Custom Animations**
```javascript
- animate-shimmer       // Skeleton loader effect (2s)
- animate-bounce-slow   // Slower bounce (3s)
- animate-pulse-slow    // Slower pulse (3s)
- animate-spin-slow     // Slower spin (3s)
```

#### **Custom Shadows**
- `shadow-card` - Soft card elevation
- `shadow-card-hover` - Enhanced hover state
- `shadow-inner-lg` - Inner depth effect

#### **Gradient Backgrounds**
- `bg-gradient-pokemon` - Purple gradient theme
- `bg-gradient-fire` - Fire type gradient
- `bg-gradient-water` - Water type gradient
- `bg-gradient-grass` - Grass type gradient
- `bg-gradient-radial` - Radial gradient support

### Styling Approach

**1. Utility-First with Tailwind**
- Rapid UI development
- Consistent spacing and colors
- Built-in responsive design
- Tree-shaking for optimal bundle size

**2. Component-Level Styling**
- Styled directly in JSX with Tailwind classes
- Conditional styling based on state
- Dynamic styles with template literals
- Inline styles for API-driven colors (type badges)

**3. Custom CSS**
- Shimmer animation keyframes
- Global styles in `index.css`
- Custom animations in Tailwind config

**4. Responsive Design Strategy**
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Flexible grid layouts
- Adaptive typography

## 🔌 API Integration

### PokéAPI Implementation

#### **Base API Service** (`src/services/pokemonApi.ts`)

The application uses a centralized API service for all PokéAPI interactions:

```typescript
const BASE_URL = 'https://pokeapi.co/api/v2';

export const pokemonApi = {
  // Fetch paginated Pokémon list
  getPokemonList(limit: number, offset: number): Promise<PokemonListResponse>
  
  // Fetch detailed Pokémon data
  getPokemonById(id: string | number): Promise<Pokemon>
  
  // Extract ID from API URL
  extractIdFromUrl(url: string): number
}
```

#### **API Endpoints Used**

**1. List Pokémon** (Pagination & Infinite Scroll)
```
GET https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
```
- **Parameters:**
  - `limit`: Number of Pokémon per page (20)
  - `offset`: Starting position (pagination)
- **Returns:** 
  - `count`: Total number of Pokémon
  - `next`: URL for next page
  - `previous`: URL for previous page
  - `results`: Array of Pokémon (name, url)

**2. Get Pokémon Details**
```
GET https://pokeapi.co/api/v2/pokemon/{id}
```
- **Parameters:**
  - `id`: Pokémon ID (1-1025)
- **Returns:**
  - Basic info (name, id, height, weight)
  - Stats (HP, Attack, Defense, etc.)
  - Types (fire, water, etc.)
  - Abilities (normal and hidden)
  - Sprites and artwork
  - Base experience

#### **React Query Integration**

**Query Configuration:**
```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,                      // Retry failed requests twice
      refetchOnWindowFocus: false,   // Don't refetch on window focus
    },
  },
});
```

**List View Caching:**
```typescript
useQuery({
  queryKey: ['pokemon-list', currentPage],
  queryFn: () => pokemonApi.getPokemonList(20, offset),
  staleTime: 5 * 60 * 1000,  // Cache for 5 minutes
});
```

**Detail View Caching:**
```typescript
useQuery({
  queryKey: ['pokemon-detail', id],
  queryFn: () => pokemonApi.getPokemonById(id),
  staleTime: 10 * 60 * 1000,  // Cache for 10 minutes
  enabled: !!id,               // Only run if ID exists
});
```

#### **Data Flow**

1. **User Action** → Navigate to page
2. **React Query** → Check cache
3. **Cache Hit?** → Return cached data instantly
4. **Cache Miss?** → Fetch from PokéAPI
5. **Loading State** → Show skeleton/spinner
6. **Success** → Display data + cache
7. **Error** → Show error message with retry

#### **Image Sources**

- **Card Images**: Official artwork from GitHub
  ```
  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png
  ```
- **Detail Page**: High-quality artwork from API response
  ```javascript
  pokemon.sprites.other['official-artwork'].front_default
  ```

#### **Error Handling**

**Network Errors:**
- Automatic retry (2 attempts)
- User-friendly error messages
- Manual retry button
- Graceful degradation

**Type Safety:**
- All API responses typed with TypeScript
- Runtime validation via TypeScript
- Null/undefined checks

## 📦 Installation

### Prerequisites
- **Node.js**: 16.x or higher
- **npm**: 8.x or higher (or yarn)
- **Git**: For cloning the repository

### Step-by-Step Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/pokemon-app.git
cd pokemon-app

# 2. Install dependencies
npm install

# 3. Start development server
npm start

# 4. Open browser (automatic)
# The app will open at http://localhost:3000
```

### Alternative Package Managers

```bash
# Using Yarn
yarn install
yarn start

# Using pnpm
pnpm install
pnpm start
```

## 🚀 Available Scripts

### Development
```bash
npm start        # Start development server on http://localhost:3000
npm run build    # Create production build in /build folder
npm test         # Run test suite in watch mode
npm run eject    # Eject from Create React App (⚠️ one-way operation)
```

### Production Build
```bash
# Build for production
npm run build

# Serve production build locally
npx serve -s build
```

### Build Output
- **Bundle Size**: ~83KB (gzipped)
- **CSS Size**: ~4KB (gzipped)
- **Assets**: Optimized images and fonts
- **Code Splitting**: Automatic via React Router

## 📁 Project Structure

```
pokemon-app/
├── public/                      # Static assets
│   ├── index.html              # HTML template
│   ├── favicon.ico             # App icon
│   ├── _redirects              # Netlify routing config
│   └── manifest.json           # PWA manifest
│
├── src/
│   ├── components/             # Reusable UI components (7 files)
│   │   ├── ErrorBoundary.tsx   # Runtime error handler
│   │   ├── ErrorMessage.tsx    # Error display with retry
│   │   ├── Layout.tsx          # Main layout with nav & footer
│   │   ├── LoadingSpinner.tsx  # Loading indicator
│   │   ├── Pagination.tsx      # Page controls component
│   │   ├── PokemonCard.tsx     # Pokemon card component
│   │   └── SkeletonCard.tsx    # Loading skeleton with shimmer
│   │
│   ├── pages/                  # Route-level components (3 files)
│   │   ├── PaginationView.tsx  # Main page with pagination
│   │   ├── InfiniteScrollView.tsx # Load more view
│   │   └── PokemonDetail.tsx   # Detail page with stats
│   │
│   ├── services/               # API integration layer
│   │   └── pokemonApi.ts       # PokéAPI service functions
│   │
│   ├── types/                  # TypeScript type definitions
│   │   └── pokemon.ts          # Pokemon-related interfaces
│   │
│   ├── App.tsx                 # Main app with routing setup
│   ├── App.css                 # App-specific styles
│   ├── index.tsx               # React entry point
│   ├── index.css               # Global styles & Tailwind
│   ├── react-app-env.d.ts      # React types
│   ├── setupTests.ts           # Test configuration
│   └── reportWebVitals.ts      # Performance monitoring
│
├── Configuration Files
│   ├── package.json            # Dependencies & scripts
│   ├── tsconfig.json           # TypeScript configuration
│   ├── tailwind.config.js      # Custom Tailwind setup
│   ├── postcss.config.js       # PostCSS configuration
│   ├── vercel.json             # Vercel deployment config
│   └── .gitignore              # Git ignore rules
│
└── Documentation
    ├── README.md               # This file
    ├── DEPLOYMENT.md           # Deployment guide
    ├── GIT_GUIDE.md           # Git workflow guide
    ├── PROJECT_SUMMARY.md      # Technical overview
    ├── CHECKLIST.md           # Requirements checklist
    └── QUICKSTART.md          # Quick start guide
```

### Directory Explanation

**`components/`** - Reusable, presentational components
- Self-contained UI elements
- No direct API calls
- Receive data via props
- Reusable across multiple pages

**`pages/`** - Route-level container components
- Connected to React Router
- Handle data fetching with React Query
- Manage page-level state
- Compose smaller components

**`services/`** - API integration & business logic
- Centralized API calls
- Data transformation
- Error handling
- Utility functions

**`types/`** - TypeScript type definitions
- Interface declarations
- Type aliases
- API response types
- Ensures type safety

## 🧩 Components Overview

### Layout Components

#### **Layout.tsx**
- **Purpose**: Main application layout wrapper
- **Features**:
  - Sticky navigation header
  - Active route highlighting
  - Gradient background
  - Footer with credits
- **Props**: `children: ReactNode`
- **Used by**: All pages

#### **PokemonCard.tsx**
- **Purpose**: Display individual Pokémon in grid
- **Features**:
  - Official artwork image
  - Pokémon name and ID
  - Hover effects (scale, shadow)
  - Links to detail page
- **Props**: `name: string, url: string`
- **Used by**: PaginationView, InfiniteScrollView

#### **Pagination.tsx**
- **Purpose**: Page navigation controls
- **Features**:
  - Previous/Next buttons
  - Smart page number display with ellipsis
  - Active page highlighting
  - Disabled state handling
- **Props**: `currentPage, totalPages, onPageChange`
- **Used by**: PaginationView

### Loading States

#### **LoadingSpinner.tsx**
- **Purpose**: Full-page loading indicator
- **Features**:
  - Spinning animation
  - Centered layout
  - Purple gradient colors
- **Used by**: PokemonDetail (initial load)

#### **SkeletonCard.tsx**
- **Purpose**: Loading placeholder for cards
- **Features**:
  - Shimmer animation effect
  - Pokéball placeholder icon
  - Gradient backgrounds
  - Matches card dimensions
- **Used by**: PaginationView, InfiniteScrollView

### Error Handling

#### **ErrorBoundary.tsx** (Class Component)
- **Purpose**: Catch and handle React errors
- **Features**:
  - Prevents app crashes
  - Display error UI
  - Reset functionality
  - Error logging
- **Usage**: Wraps entire app in App.tsx

#### **ErrorMessage.tsx**
- **Purpose**: Display API/network errors
- **Features**:
  - User-friendly error message
  - Retry button
  - Emoji icon
- **Props**: `message: string, onRetry?: () => void`
- **Used by**: All pages with data fetching

### Page Components

#### **PaginationView.tsx**
- **Route**: `/`
- **Features**:
  - Displays 20 Pokémon per page
  - React Query data fetching
  - Page controls
  - Skeleton loading
  - Error handling with retry
- **State**: `currentPage` (local)
- **API**: `getPokemonList(limit, offset)`

#### **InfiniteScrollView.tsx**
- **Route**: `/infinite-scroll`
- **Features**:
  - Load more functionality
  - Prevents duplicates
  - Cumulative Pokémon list
  - "Load More" button
  - End-of-list indicator
- **State**: `offset`, `allPokemon` (local)
- **API**: `getPokemonList(limit, offset)`

#### **PokemonDetail.tsx**
- **Route**: `/pokemon/:id`
- **Features**:
  - Large Pokémon artwork
  - Complete base stats with progress bars
  - Type badges (authentic colors)
  - Height & weight with icons
  - Abilities (normal & hidden)
  - Base experience
  - Back to list navigation
- **State**: None (React Query managed)
- **API**: `getPokemonById(id)`

## 🎨 Design Highlights

### Visual Design
- **Modern Gradient UI**: Purple-to-pink gradient theme throughout
- **Type-Based Colors**: 18 authentic Pokémon type colors from the games
- **Skeleton Loading**: Animated shimmer effect with Pokéball icon
- **Smooth Animations**: Hover effects, transitions, and transforms
- **Card Design**: Rounded corners, shadows, and gradient overlays
- **Responsive Grid**: Adapts from 1-4 columns based on screen size

### User Experience
- **Fast Navigation**: Client-side routing with instant transitions
- **Instant Feedback**: Loading indicators and hover states
- **Error Recovery**: Retry buttons on all error states
- **Accessibility**: Semantic HTML and ARIA labels
- **Progressive Loading**: Lazy loading images
- **Smooth Scrolling**: Scroll-to-top on page change

### Performance
- **Small Bundle**: ~83KB gzipped JavaScript
- **Efficient CSS**: ~4KB gzipped Tailwind CSS
- **Code Splitting**: Automatic via React Router
- **Image Optimization**: Lazy loading with loading="lazy"
- **Smart Caching**: React Query caches API responses
- **Fast Rendering**: Optimized React components

## 🌐 Deployment

### Deployment Platforms

This application is production-ready and can be deployed to multiple platforms:

#### **1. Vercel** (Recommended)

**Why Vercel?**
- Zero-configuration deployment
- Automatic HTTPS and CDN
- Instant deployments (<2 minutes)
- Git integration for continuous deployment
- Free tier available

**Deploy via Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import `pokemon-app` repository
5. Click "Deploy" (auto-detected settings)
6. Get live URL instantly

**Deploy via CLI:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

**Configuration:** `vercel.json` included
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### **2. Netlify**

**Deploy via Dashboard:**
1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select repository
5. Build settings (auto-detected):
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Click "Deploy site"

**Deploy via CLI:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=build
```

**Configuration:** `public/_redirects` included
```
/*    /index.html   200
```

#### **3. Cloudflare Pages**

**Deploy via Dashboard:**
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign in and click "Create a project"
3. Connect GitHub account
4. Select repository
5. Build settings:
   - **Framework preset**: Create React App
   - **Build command**: `npm run build`
   - **Build output directory**: `build`
6. Click "Save and Deploy"

### Build Configuration

All platforms auto-detect these settings:

| Setting | Value |
|---------|-------|
| **Framework** | Create React App |
| **Build Command** | `npm run build` |
| **Output Directory** | `build` |
| **Node Version** | 16.x or higher |
| **Install Command** | `npm install` |

### Environment Variables

This app doesn't require environment variables (uses public PokéAPI). If needed in the future:

**Vercel:** Project Settings → Environment Variables  
**Netlify:** Site Settings → Build & Deploy → Environment  
**Cloudflare:** Pages → Settings → Environment Variables

### Post-Deployment Checklist

- ✅ App loads without errors
- ✅ All routes work (/, /infinite-scroll, /pokemon/:id)
- ✅ Images load correctly
- ✅ API calls succeed
- ✅ Pagination works
- ✅ Load more button works
- ✅ Detail pages display properly
- ✅ Responsive on mobile
- ✅ No console errors

### Continuous Deployment

Once connected to Git, deployments are automatic:

```bash
# Make changes
git add .
git commit -m "Add new feature"
git push origin main

# Automatic deployment triggered!
# Live in 1-2 minutes
```

## 🧪 Testing

### Manual Testing Checklist

**Pagination View:**
- [ ] Loads 20 Pokémon initially
- [ ] Previous button disabled on page 1
- [ ] Next button works
- [ ] Page numbers display correctly
- [ ] Can click specific page numbers
- [ ] Scrolls to top on page change

**Infinite Scroll View:**
- [ ] Loads initial 20 Pokémon
- [ ] "Load More" button visible
- [ ] Loads additional Pokémon on click
- [ ] No duplicate Pokémon
- [ ] Shows "end" message when complete
- [ ] Loading state displays correctly

**Detail Page:**
- [ ] Displays Pokémon name and ID
- [ ] Shows official artwork
- [ ] Displays all base stats
- [ ] Progress bars render correctly
- [ ] Type badges show correct colors
- [ ] Height and weight display
- [ ] Abilities listed
- [ ] Base experience shown
- [ ] Back button works

**Responsive Design:**
- [ ] Desktop (4 columns)
- [ ] Tablet (2 columns)
- [ ] Mobile (1 column)
- [ ] Navigation adapts
- [ ] Images scale properly

**Error Handling:**
- [ ] Network error shows message
- [ ] Retry button works
- [ ] Error boundary catches errors
- [ ] Loading states display

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
# Find and kill the process
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

**Build fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Tailwind styles not working:**
```bash
# Verify Tailwind version
npm list tailwindcss
# Should show 3.x

# Rebuild
npm run build
```

**API errors (CORS/Network):**
- Check internet connection
- Verify PokéAPI is accessible: https://pokeapi.co/api/v2/pokemon
- Clear browser cache
- Disable browser extensions

**Images not loading:**
- Check CDN availability
- Verify image URLs in Network tab
- Check for ad blockers

## 📊 Performance Metrics

### Bundle Analysis
- **Main JS**: 83.2 KB (gzipped)
- **CSS**: 4.22 KB (gzipped)
- **Total Initial Load**: ~87 KB
- **Additional Chunks**: Code-split by route

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

### Optimization Techniques Used
1. Code splitting via React Router
2. Lazy loading images
3. React Query caching (reduces API calls)
4. Tree-shaking with Tailwind
5. Minification in production build
6. Gzip compression

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Use TypeScript for all new code
- Follow existing code style
- Add comments for complex logic
- Test on multiple browsers
- Ensure responsive design

## 📝 License

MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 🙏 Acknowledgments

- **Pokémon Data**: [PokéAPI](https://pokeapi.co/) - Free Pokémon API
- **Pokémon Assets**: © Nintendo / Game Freak / The Pokémon Company
- **Official Artwork**: PokéAPI GitHub sprites repository
- **Icons**: SVG icons from Heroicons
- **Inspiration**: Pokémon games and official Pokédex apps

## 🔗 Useful Links

- **PokéAPI Documentation**: https://pokeapi.co/docs/v2
- **React Documentation**: https://react.dev
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **React Query Docs**: https://tanstack.com/query/latest
- **React Router Docs**: https://reactrouter.com

## 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/your-username/pokemon-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/pokemon-app/discussions)
- **Email**: your.email@example.com

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

⭐ Star this repo if you found it helpful!