# ⚡ Quick Setup Guide

## 🎯 3 Simple Steps to Complete Your Portfolio

### Step 1: Add Your Photo (2 minutes)

**Easiest Method - Using Imgur:**
1. Go to https://imgur.com
2. Upload your professional photo
3. Right-click → "Copy image address"
4. Open `src/components/Hero.jsx`
5. Find line 82: `src="https://i.imgur.com/placeholder.jpg"`
6. Replace with your Imgur link
7. Save file

**Example:**
```jsx
src="https://i.imgur.com/abc123.jpg"  // Your actual link
```

---

### Step 2: Add Your Resume (3 minutes)

**Upload to Google Drive:**
1. Go to https://drive.google.com
2. Upload your resume PDF
3. Right-click → "Get link" → "Anyone with link can view"
4. Copy the link

**Get File ID:**
From: `https://drive.google.com/file/d/1ABC123XYZ/view`
Copy: `1ABC123XYZ`

**Update 2 Files:**

**File 1:** `src/components/Navbar.jsx` (line 42)
```jsx
href="https://drive.google.com/file/d/1ABC123XYZ/view"
```

**File 2:** `src/components/Contact.jsx` (line 68)
```jsx
href="https://drive.google.com/file/d/1ABC123XYZ/view"
```

Replace `YOUR_RESUME_FILE_ID` with `1ABC123XYZ`

---

### Step 3: Test & Deploy (5 minutes)

**Test Locally:**
```bash
npm run dev
```
Visit http://localhost:5173

**Check:**
- ✅ Photo shows in hero section
- ✅ Resume button works in navbar
- ✅ Resume button works in contact section

**Push to GitHub:**
```bash
git add .
git commit -m "Add profile photo and resume"
git push
```

**Deploy to Netlify:**
1. Go to https://app.netlify.com
2. Connect GitHub repo
3. Deploy!

---

## ✨ What's New

### 1. Unique Logo
- Removed `<Abishek P/>`
- Added custom animated "A" logo
- Rotates 360° on hover
- Gradient colors (cyan to purple)

### 2. Photo Ready
- Professional circular frame
- Animated rotating rings
- Hover effects with glow
- Just add your image URL

### 3. Resume Links
- Two buttons (navbar + contact)
- Ready for your Google Drive link
- Professional download icon

---

## 🎨 Your New Logo Features

```
┌─────────────────┐
│  (A)  Abishek   │  ← Animated logo
└─────────────────┘
     ↓
  Rotates 360°
  on hover!
```

- Custom SVG icon
- Gradient effect
- Professional look
- Memorable branding

---

## 📝 File Locations

| What | File | Line |
|------|------|------|
| Photo | `src/components/Hero.jsx` | 82 |
| Resume (Nav) | `src/components/Navbar.jsx` | 42 |
| Resume (Contact) | `src/components/Contact.jsx` | 68 |
| Logo | `src/components/Navbar.jsx` | 28-40 |

---

## 🆘 Common Issues

### Photo not showing?
- Make sure URL ends with .jpg or .png
- Try opening URL in browser - should show only image
- Use Imgur for easiest hosting

### Resume not downloading?
- Check Google Drive sharing is "Anyone with link"
- Use file ID, not full URL
- Test in incognito mode

### Logo looks weird?
- Clear browser cache (Ctrl + Shift + R)
- Check if all files saved
- Restart dev server

---

## ✅ Checklist

Before deploying:
- [ ] Photo added and displays correctly
- [ ] Resume link works in navbar
- [ ] Resume link works in contact section
- [ ] Logo looks good (no `<Abishek P/>`)
- [ ] Tested on mobile view
- [ ] All links work
- [ ] Pushed to GitHub

---

## 🚀 You're Almost Done!

Just add your photo and resume link, then deploy!

**Total time:** ~10 minutes

**Need detailed help?** See `SETUP_INSTRUCTIONS.md`
