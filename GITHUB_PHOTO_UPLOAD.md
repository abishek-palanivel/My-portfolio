# 🎯 Upload Photo Using GitHub - Detailed Steps

## Why GitHub?
- ✅ You already have an account
- ✅ Free and reliable
- ✅ Fast loading
- ✅ No extra services needed

---

## 📸 Step-by-Step Guide

### Step 1: Prepare Your Photo

1. Find your professional photo on your computer
2. Make sure it's:
   - Good quality
   - Professional looking
   - JPG or PNG format
   - Preferably square (1:1 ratio)

---

### Step 2: Go to Your GitHub Repository

1. Open browser
2. Go to: https://github.com/abishek-palanivel/My-portfolio
3. Make sure you're logged in

---

### Step 3: Create Images Folder

**Option A: Through GitHub Website**

1. Click "Add file" button (top right)
2. Select "Create new file"
3. In the name field, type: `public/images/.gitkeep`
4. Scroll down
5. Click "Commit new file"

**Option B: Upload Directly**

1. Click "Add file" button
2. Select "Upload files"
3. You'll see upload area

---

### Step 4: Upload Your Photo

1. Click "Add file" → "Upload files"
2. Drag your photo OR click "choose your files"
3. Select your professional photo
4. Wait for upload (green checkmark appears)
5. In commit message, type: "Add profile photo"
6. Click "Commit changes"

---

### Step 5: Get the Photo URL

**Method 1: Direct Link**

1. Navigate to your photo in GitHub
2. Click on the photo file
3. Click "Download" button (or right-click the image)
4. Right-click on the image → "Copy image address"

**Method 2: Construct URL**

If you uploaded to `public/images/profile.jpg`, the URL is:
```
https://raw.githubusercontent.com/abishek-palanivel/My-portfolio/main/public/images/profile.jpg
```

**URL Format:**
```
https://raw.githubusercontent.com/[username]/[repo-name]/main/[path-to-file]
```

Your URL:
```
https://raw.githubusercontent.com/abishek-palanivel/My-portfolio/main/public/images/profile.jpg
```

---

### Step 6: Update Your Portfolio Code

1. **Open your project in VS Code**

2. **Open file:** `src/components/Hero.jsx`

3. **Find line 82** (Press Ctrl+G, type 82, Enter)

4. **You'll see:**
   ```jsx
   src="https://i.imgur.com/placeholder.jpg"
   ```

5. **Replace with your GitHub URL:**
   ```jsx
   src="https://raw.githubusercontent.com/abishek-palanivel/My-portfolio/main/public/images/profile.jpg"
   ```

6. **Save the file** (Ctrl+S)

---

### Step 7: Test Locally

1. **Open terminal in VS Code**

2. **Run:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   - Go to: http://localhost:5173

4. **Check:**
   - Your photo should appear in hero section
   - In a circular frame
   - With animated rings
   - Hover should show glow

---

### Step 8: Push Changes to GitHub

1. **In terminal, run:**
   ```bash
   git add .
   git commit -m "Update profile photo"
   git push
   ```

2. **Wait for push to complete**

3. **Your portfolio is updated!**

---

## 🎨 Visual Guide

### Before:
```
┌─────────────────┐
│   👤 Icon       │  ← Placeholder
└─────────────────┘
```

### After:
```
┌─────────────────┐
│  Your Photo     │  ← Your actual photo
│  with rings     │     with effects
└─────────────────┘
```

---

## ✅ Checklist

- [ ] Photo uploaded to GitHub
- [ ] Got the raw.githubusercontent.com URL
- [ ] Updated Hero.jsx line 82
- [ ] Saved the file
- [ ] Tested with `npm run dev`
- [ ] Photo shows correctly
- [ ] Pushed changes to GitHub

---

## 🆘 Common Issues

### Issue 1: Photo not showing

**Solution:**
- Make sure URL starts with `https://raw.githubusercontent.com`
- NOT `https://github.com`
- The word "raw" is important!

**Wrong:**
```
https://github.com/abishek-palanivel/My-portfolio/blob/main/public/images/profile.jpg
```

**Correct:**
```
https://raw.githubusercontent.com/abishek-palanivel/My-portfolio/main/public/images/profile.jpg
```

---

### Issue 2: 404 Error

**Solution:**
- Check file path is correct
- Make sure photo is in `public/images/` folder
- Check filename matches exactly (case-sensitive)
- Wait a few minutes for GitHub to process

---

### Issue 3: Photo uploaded but URL not working

**Solution:**
1. Go to your GitHub repo
2. Navigate to the photo
3. Click on it
4. Click "Raw" button (top right)
5. Copy URL from browser address bar
6. Use that URL

---

## 💡 Pro Tips

### Tip 1: File Naming
- Use simple names: `profile.jpg`
- No spaces: ❌ `my photo.jpg` ✅ `my-photo.jpg`
- Lowercase is better

### Tip 2: Photo Quality
- Size: 500x500 pixels minimum
- Format: JPG (smaller file) or PNG (better quality)
- File size: Under 500KB for fast loading

### Tip 3: Testing
- Always test locally first
- Check in different browsers
- Test on mobile view (resize browser)

---

## 🎯 Quick Reference

**Your GitHub Repo:**
```
https://github.com/abishek-palanivel/My-portfolio
```

**Photo URL Format:**
```
https://raw.githubusercontent.com/abishek-palanivel/My-portfolio/main/public/images/profile.jpg
```

**File to Edit:**
```
src/components/Hero.jsx (line 82)
```

**Test Command:**
```bash
npm run dev
```

**Push Command:**
```bash
git add .
git commit -m "Update profile photo"
git push
```

---

## 🚀 You're Done!

Once you see your photo in the hero section with the animated rings, you're all set!

Next step: Add your resume link (see SETUP_INSTRUCTIONS.md)

---

**Need help?** Check PHOTO_UPLOAD_GUIDE.md for alternative methods.
