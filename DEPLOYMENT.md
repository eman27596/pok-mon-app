# 🚀 Deployment Guide

This guide will help you deploy the Pokédex application to various hosting platforms.

## Prerequisites

- Git repository initialized and pushed to GitHub
- Node.js and npm installed locally
- Account on your chosen deployment platform

## Option 1: Deploy to Vercel (Recommended)

Vercel offers the easiest deployment experience with automatic builds and deployments.

### Method A: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Method B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Click "Deploy"

Your app will be live in minutes! Vercel will provide you with a URL like `https://your-app.vercel.app`

## Option 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect to your Git provider (GitHub)
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Click "Deploy site"

## Option 3: Deploy to Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign in and click "Create a project"
3. Connect your GitHub account
4. Select your repository
5. Configure build settings:
   - **Framework preset**: Create React App
   - **Build command**: `npm run build`
   - **Build output directory**: `build`
6. Click "Save and Deploy"

## Build the App Locally

To test the production build locally:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

To serve it locally:

```bash
npx serve -s build
```

## Environment Variables

This app doesn't require any environment variables as it uses the public PokéAPI. If you need to add any in the future:

### Vercel
Add them in the Vercel dashboard under Project Settings → Environment Variables

### Netlify
Add them in Site Settings → Build & Deploy → Environment

### Cloudflare Pages
Add them in Pages → Settings → Environment Variables

## Post-Deployment Checklist

- ✅ App loads without errors
- ✅ Pagination view works correctly
- ✅ Infinite scroll view loads more Pokémon
- ✅ Clicking a Pokémon opens detail page
- ✅ Navigation between pages works
- ✅ Responsive design works on mobile
- ✅ Error states display properly
- ✅ Loading states show correctly

## Troubleshooting

### Blank page after deployment
- Check that the build command is `npm run build`
- Verify the output directory is `build`
- Check browser console for errors

### Routing doesn't work (404 on refresh)
- Make sure `vercel.json` is included in your repository
- For Netlify, create a `_redirects` file in the `public` folder:
  ```
  /*    /index.html   200
  ```

### Build fails
- Ensure all dependencies are in `package.json`
- Check that TypeScript has no errors: `npm run build` locally
- Review build logs for specific errors

## Custom Domain

All three platforms support custom domains:

1. Purchase a domain from a registrar
2. Go to your project settings
3. Add custom domain
4. Update DNS records as instructed

## Continuous Deployment

Once connected to Git, all three platforms automatically deploy when you push to your main branch:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

Your site will automatically rebuild and redeploy!

## Performance Optimization

The app is already optimized with:
- Code splitting via React Router
- Image lazy loading
- React Query caching
- Minified production build

For further optimization, consider:
- Adding a service worker for offline support
- Implementing image optimization
- Adding CDN for static assets

---

Need help? Check the documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)

