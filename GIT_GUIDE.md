# 🔧 Git Setup and Deployment Guide

This guide will help you push your code to GitHub and deploy it.

## Step 1: Initialize Git Repository (if not already done)

```bash
# Check if git is already initialized
git status

# If not initialized, run:
git init
```

## Step 2: Create .gitignore (Already included)

The project already has a `.gitignore` file that excludes:
- node_modules/
- build/
- .env files
- OS-specific files

## Step 3: Stage and Commit Your Code

```bash
# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Complete Pokemon browser with React + TypeScript"

# Or use detailed commits (recommended):
git add src/types src/services
git commit -m "Add API service layer and TypeScript types"

git add src/components
git commit -m "Create reusable UI components"

git add src/pages
git commit -m "Implement pagination and infinite scroll views"

git add README.md DEPLOYMENT.md
git commit -m "Add comprehensive documentation"
```

## Step 4: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right
3. Select "New repository"
4. Fill in:
   - **Repository name**: `pokemon-app` (or your preferred name)
   - **Description**: "A modern Pokemon browser built with React, TypeScript, and Tailwind CSS"
   - **Visibility**: Public (required for free deployment)
   - **DO NOT** initialize with README (we already have one)
5. Click "Create repository"

## Step 5: Connect Local Repository to GitHub

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/pokemon-app.git

# Verify remote was added
git remote -v

# Rename branch to main (if needed)
git branch -M main

# Push code to GitHub
git push -u origin main
```

## Step 6: Deploy to Vercel (Easiest Option)

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `pokemon-app` repository
5. Vercel will auto-detect Create React App settings:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. Click "Deploy"
7. Wait 2-3 minutes for deployment
8. Get your live URL: `https://pokemon-app-[random].vercel.app`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Step 7: Deploy to Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Click "Deploy site"
7. Get your live URL: `https://[random].netlify.app`

## Step 8: Update README with Live URLs

After deployment, update your README.md:

```markdown
## 🌐 Live Demo

- **Live Application**: [Your Vercel/Netlify URL]
- **GitHub Repository**: https://github.com/YOUR_USERNAME/pokemon-app
```

Then commit and push:

```bash
git add README.md
git commit -m "Add live demo URLs"
git push origin main
```

## Common Git Commands

### Daily Workflow
```bash
# Check status
git status

# Add files
git add .
git add specific-file.ts

# Commit changes
git commit -m "Descriptive message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

### Viewing History
```bash
# View commit history
git log

# View compact history
git log --oneline

# View changes
git diff
```

### Undoing Changes
```bash
# Discard changes in working directory
git checkout -- filename

# Unstage files
git reset HEAD filename

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) - BE CAREFUL!
git reset --hard HEAD~1
```

### Branching (For Future Development)
```bash
# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature

# Delete branch
git branch -d feature/new-feature
```

## Continuous Deployment

Once connected to Vercel/Netlify, every push to `main` will automatically trigger a new deployment:

```bash
# Make changes to your code
# ...

# Commit and push
git add .
git commit -m "Add new feature"
git push origin main

# Your site will automatically redeploy!
```

## Troubleshooting

### Push Rejected
```bash
# If push is rejected, pull first
git pull origin main --rebase
git push origin main
```

### Wrong Remote URL
```bash
# Remove wrong remote
git remote remove origin

# Add correct remote
git remote add origin https://github.com/YOUR_USERNAME/pokemon-app.git
```

### Forgot to Add .gitignore
```bash
# If you accidentally committed node_modules
git rm -r --cached node_modules
git commit -m "Remove node_modules from repository"
git push origin main
```

## Best Practices

1. **Commit Often** - Small, focused commits are better
2. **Write Clear Messages** - Describe what and why, not how
3. **Pull Before Push** - Avoid conflicts
4. **Use Branches** - For experimental features
5. **Review Before Commit** - Use `git status` and `git diff`

## Example Commit Messages

Good commit messages:
- ✅ "Add Pokemon detail page with stats display"
- ✅ "Fix pagination bug on mobile devices"
- ✅ "Improve loading state with skeleton cards"
- ✅ "Update README with deployment instructions"

Bad commit messages:
- ❌ "Update"
- ❌ "Fix bug"
- ❌ "Changes"
- ❌ "WIP"

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Deploy to Vercel or Netlify
3. ✅ Test the live application
4. ✅ Share your URLs
5. 🎉 Celebrate your deployed app!

---

Need help? Check:
- [GitHub Docs](https://docs.github.com)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

