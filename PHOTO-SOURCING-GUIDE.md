# 📸 Photo Sourcing Guide for Murphy's Pub Demo

## Critical Photos Needed (Priority Order)

### 1. **Hero Background** (HIGHEST PRIORITY)
**What**: Wide shot of cozy Irish pub interior
**Specs**:
- Min 1920px wide
- Warm lighting (amber/golden tones)
- Shows wooden bar, bottles, or atmosphere
- NOT too busy - needs to work as background

**Search terms**:
- "irish pub interior warm"
- "traditional pub bar counter"
- "cozy pub atmosphere"
- "irish bar wooden counter"

**Unsplash direct searches**:
- https://unsplash.com/s/photos/irish-pub-interior
- https://unsplash.com/s/photos/pub-bar-counter
- https://unsplash.com/s/photos/traditional-irish-pub

---

### 2. **Guinness/Beer Close-up**
**What**: Perfect pint with condensation
**Specs**:
- Close-up, macro style
- Shows creamy head
- Wooden bar surface visible
- Warm pub lighting in background

**Search terms**:
- "pint guinness wooden bar"
- "beer close up pub"
- "stout pint glass"

---

### 3. **Food Hero Shot**
**What**: Irish pub food plated nicely
**Specs**:
- Irish stew, fish & chips, or shepherd's pie
- Rustic presentation
- Warm, inviting

**Search terms**:
- "irish stew rustic"
- "fish and chips pub food"
- "shepherd's pie ireland"

---

### 4. **Pub Exterior**
**What**: Traditional Irish pub storefront
**Specs**:
- Showing pub sign
- Street view
- Evening/golden hour lighting preferred
- Welcoming entrance

**Search terms**:
- "irish pub exterior"
- "traditional pub storefront ireland"
- "irish pub sign"

---

### 5. **Detail Shots** (3-4 images)
- Whiskey bottles on shelf
- Brass beer taps
- Fireplace/cozy corner
- Live music (guitar, fiddle)

---

## Quick Sourcing Steps

### Option A: Unsplash (10-15 minutes)

1. Go to https://unsplash.com
2. Search each term above
3. Download "Medium" size (smaller file, still good quality)
4. Save to `/public/images/stock/`
5. Rename clearly: `hero-pub-interior.jpg`, `guinness-pint.jpg`, etc.

### Option B: Pexels (Alternative)

1. Go to https://pexels.com
2. Same search terms
3. Download "Large" size
4. Save and rename same way

### Option C: AI Generation (15-20 minutes)

If you have access to Midjourney or DALL-E:

**Prompts**:
```
/imagine warm irish pub interior, wooden bar counter, brass beer taps,
cozy amber lighting, bottles on shelves, photorealistic,
atmospheric, 4K, professional photography --ar 16:9

/imagine perfect pint of guinness on aged wooden bar, condensation on glass,
creamy head, warm pub lights in background, macro photography,
shallow depth of field, photorealistic --ar 4:3

/imagine traditional irish pub exterior, hanging sign,
green painted storefront, cobblestone street, golden hour lighting,
welcoming entrance, photorealistic --ar 16:9
```

---

## Texture Files Needed

### 1. Wood Grain Texture
**What**: Seamless oak or mahogany wood texture
**Size**: 1000x1000px minimum
**Use**: Subtle overlay on backgrounds

**Sources**:
- https://www.transparenttextures.com/wood-pattern.html
- Search "seamless wood grain texture free"
- AI Generate: "seamless wood grain texture, oak, warm brown, tileable, 4K"

**Save as**: `/public/textures/wood-grain.png`

---

### 2. Old Paper Texture
**What**: Vintage parchment/paper texture
**Size**: 1000x1000px minimum
**Use**: Menu sections, about section overlays

**Sources**:
- https://www.transparenttextures.com/old-map.html
- Search "vintage paper texture free"
- AI Generate: "old paper texture, parchment, coffee stained, vintage, seamless, tileable"

**Save as**: `/public/textures/old-paper.png`

---

### 3. Chalkboard Texture
**What**: Black chalkboard with subtle texture
**Size**: 1000x1000px minimum
**Use**: Menu board sections

**Sources**:
- https://www.transparenttextures.com/black-thread.html
- Search "chalkboard texture seamless"
- AI Generate: "chalkboard texture, black, subtle chalk dust, realistic, seamless"

**Save as**: `/public/textures/chalkboard.png`

---

## Optimization Steps

### After downloading ANY image:

1. **Convert to WebP** (better compression):
   - Use https://squoosh.app
   - Upload image
   - Select "WebP" format
   - Quality: 85
   - Download

2. **Resize if needed**:
   - Hero images: Max 1920px wide
   - Detail shots: Max 1200px wide
   - Thumbnails: Max 600px wide

3. **Organize**:
```
/public/images/
├── hero-pub-interior.webp (main hero)
├── guinness-pint.webp
├── pub-food.webp
├── pub-exterior.webp
├── details/
│   ├── whiskey-shelf.webp
│   ├── brass-taps.webp
│   └── fireplace.webp
└── stock/ (keep originals here)
    ├── hero-pub-interior.jpg
    ├── guinness-pint.jpg
    etc.
```

---

## Current Placeholder Images

The site currently references these images that DON'T exist yet:
- `/images/hero-pub-night.jpg` → REPLACE with real pub interior
- `/images/heritage-photo.jpg` → REPLACE with vintage-looking pub photo

**Action**: Download photos and name them exactly as above, OR update component code to use new names.

---

## Time Estimate

- **Quick stock photos** (Unsplash): 15-20 minutes
- **AI generation**: 20-30 minutes
- **Optimization**: 10 minutes
- **Total**: 25-40 minutes

---

## Recommended: Download These Specific Images

### From Unsplash (Free, no attribution required):

1. **Hero Background**:
   - Search "irish pub interior"
   - Look for: Photos by @thatguycraig, @sonance, @elevantarts
   - Pick: Warm lighting, wooden bar visible, not too crowded

2. **Guinness Pint**:
   - Search "guinness pint"
   - Look for: Close-up, creamy head, wooden surface
   - Alternative: Search "stout beer glass"

3. **Pub Exterior**:
   - Search "irish pub exterior"
   - Look for: Traditional storefront, evening light
   - Cities: Dublin, Cork, Galway pubs photograph well

---

## Next Steps

1. **Download 5-7 core images** (30 mins)
2. **Optimize to WebP** (10 mins)
3. **Add to `/public/images/`** (2 mins)
4. **Update component code** to reference new images (5 mins)
5. **Test build** to ensure images load (2 mins)

**Total Time**: ~50 minutes to go from sterile to authentic with real photos!

---

## Fallback: Use These Temporarily

If you want to test the redesign before sourcing real photos:

**Hero background**: Use a solid color with texture overlay
```css
background: linear-gradient(135deg, #3a2e23 0%, #4a3a2d 100%);
```

**Other sections**: Use colored boxes with text "Your Photo Here" until real images are ready.

This lets you see the layout/design while photos are being sourced.
