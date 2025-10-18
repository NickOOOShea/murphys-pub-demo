# 🚀 Murphy's Pub - Deployment Instructions

The code is ready and committed to Git. Follow these steps to deploy to GitHub and Cloudflare Pages.

---

## ✅ Step 1: Create GitHub Repository

**Option A: Via GitHub Website (Easiest)**

1. Go to https://github.com/new
2. Fill in:
   - **Repository name**: `murphys-pub-demo`
   - **Description**: `Murphy's Pub - Demo site for Connecteire`
   - **Visibility**: Public
   - **DO NOT** initialize with README, .gitignore, or license
3. Click "Create repository"
4. **Copy the remote URL** shown (it will look like: `https://github.com/YOUR_USERNAME/murphys-pub-demo.git`)

**Option B: Via Command Line (if you have gh CLI)**

```bash
gh repo create YOUR_USERNAME/murphys-pub-demo --public --source=. --description "Murphy's Pub demo for Connecteire" --push
```

---

## ✅ Step 2: Push Code to GitHub

Once you have the repository URL from Step 1:

```bash
cd N:\Connecteire\demos\murphys-pub

# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/murphys-pub-demo.git

# Push the code
git branch -M main
git push -u origin main
```

**Verify**: Go to your GitHub repository URL - you should see all the files.

---

## ✅ Step 3: Deploy to Cloudflare Pages

### 3a. Connect Repository

1. Go to https://dash.cloudflare.com
2. Click **Workers & Pages** in the left sidebar
3. Click **Create application**
4. Select **Pages** tab
5. Click **Connect to Git**
6. Click **Connect GitHub** (authorize if needed)
7. Select your repository: `murphys-pub-demo`
8. Click **Begin setup**

### 3b. Configure Build Settings

Fill in the deployment settings:

- **Project name**: `murphys-pub-demo` (or your preferred name)
- **Production branch**: `main`
- **Framework preset**: `Next.js`
- **Build command**: `npm run build`
- **Build output directory**: `.next`

### 3c. Environment Variables (if needed)

For Next.js with static export, no environment variables are needed.

Click **Save and Deploy**

---

## ✅ Step 4: Wait for Deployment

Cloudflare will:
1. Clone your repository
2. Install dependencies (`npm install`)
3. Build the site (`npm run build`)
4. Deploy to their CDN

This takes **2-5 minutes**.

---

## ✅ Step 5: Get Your Live URL

Once deployment completes:

1. You'll see: ✅ **Success! Your site is live**
2. Your URL will be: `https://murphys-pub-demo.pages.dev`
3. Click the URL to view your live site

---

## 🎯 Quick Command Reference

If you haven't created the GitHub repo yet:

```bash
# From murphys-pub directory
cd N:\Connecteire\demos\murphys-pub

# Check git status
git status

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/murphys-pub-demo.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🔧 Troubleshooting

### Issue: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/murphys-pub-demo.git
git push -u origin main
```

### Issue: Build fails on Cloudflare

**Check build logs** for specific errors. Common fixes:

1. **Node version**: Cloudflare uses Node 18 by default
   - Add environment variable: `NODE_VERSION = 18`

2. **Build command issues**: Ensure it's exactly:
   - Build command: `npm run build`
   - Build output: `.next`

3. **Missing dependencies**: Check `package.json` includes all dependencies

### Issue: Site loads but images missing

Placeholder images are currently used. To add real images:

1. Replace files in `public/images/` with real photos
2. Commit and push: `git add . && git commit -m "Add real images" && git push`
3. Cloudflare auto-deploys (30 seconds)

---

## 📊 Expected Results

**Build output should show**:
```
✓ Compiled successfully
✓ Generating static pages (8/8)
✓ Finalizing page optimization

Route (app)                Size      First Load JS
┌ ○ /                      6.35 kB   145 kB
├ ○ /contact               1.74 kB   127 kB
├ ○ /events                1.47 kB   132 kB
├ ○ /gallery               1.12 kB   131 kB
└ ○ /menu                  1.76 kB   127 kB
```

**Live site will have**:
- Home page with hero parallax
- Menu with food/drink tabs
- Events with recurring/upcoming
- Gallery with lightbox
- Contact with form and map
- Mobile menu working
- All animations smooth

---

## ✅ After Deployment

**Test these features**:
- [ ] Home page loads
- [ ] Mobile menu works (resize to <768px)
- [ ] Menu tabs switch (Food/Drinks)
- [ ] Gallery lightbox opens on image click
- [ ] Contact form validates
- [ ] "Now Open" badge shows if pub is open
- [ ] All pages responsive

**Share the URL** with me so I can review!

---

## 🎨 Next Steps After Review

1. **Add real images** (replace placeholders)
2. **Customize domain** (optional: murphyspub.ie)
3. **Build Village Cafe** (reuse components, 2-3 hours)
4. **Build Brennan's B&B** (reuse components, 2-3 hours)
5. **Integrate demos into marketing site**

---

**Ready? Create the GitHub repo and let me know the URL!**
