# 📸 How to Add Your Photo & Resume

## 1️⃣ Add Your Photo

### Option A: Using Imgur (Easiest)
1. Go to https://imgur.com
2. Click "New post"
3. Upload your professional photo
4. Right-click on uploaded image → "Copy image address"
5. Open `src/components/Hero.jsx`
6. Find line with: `src="https://i.imgur.com/placeholder.jpg"`
7. Replace with your Imgur link

### Option B: Using GitHub
1. Create a folder `public/images` in your project
2. Add your photo as `public/images/profile.jpg`
3. Open `src/components/Hero.jsx`
4. Change: `src="https://i.imgur.com/placeholder.jpg"`
5. To: `src="/images/profile.jpg"`

### Option C: Using Direct URL
If you have your photo hosted somewhere:
1. Copy the direct image URL
2. Open `src/components/Hero.jsx`
3. Replace `src="https://i.imgur.com/placeholder.jpg"` with your URL

## 2️⃣ Add Your Resume

### Step 1: Upload to Google Drive
1. Go to https://drive.google.com
2. Upload your resume PDF
3. Right-click on file → "Get link"
4. Change to "Anyone with the link can view"
5. Copy the link

### Step 2: Get File ID
From the link: `https://drive.google.com/file/d/1ABC123XYZ456/view`
The file ID is: `1ABC123XYZ456`

### Step 3: Update Portfolio
Update in TWO places:

**File 1: `src/components/Navbar.jsx` (line ~42)**
```jsx
href="https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view"
```

**File 2: `src/components/Contact.jsx` (line ~68)**
```jsx
href="https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view"
```

Replace `YOUR_FILE_ID_HERE` with your actual file ID.

## 3️⃣ Test Locally

```bash
npm run dev
```

Visit http://localhost:5173 and check:
- ✅ Your photo displays in hero section
- ✅ Resume button in navbar works
- ✅ Resume button in contact section works

## 4️⃣ Push to GitHub

```bash
git add .
git commit -m "Add profile photo and resume link"
git push
```

## 🎨 Your New Logo

The portfolio now has a unique animated logo:
- Custom "A" icon with gradient
- Rotates 360° on hover
- Gradient text effect
- Professional and memorable

## 📝 Quick Reference

### Photo Locations
- Hero section: `src/components/Hero.jsx` (line ~82)

### Resume Locations
- Navbar: `src/components/Navbar.jsx` (line ~42)
- Contact: `src/components/Contact.jsx` (line ~68)

### Logo Location
- Navbar: `src/components/Navbar.jsx` (line ~28-40)

## 🆘 Troubleshooting

### Photo not showing?
- Check if URL is direct image link (ends with .jpg, .png)
- Try opening URL in browser - should show only image
- Check browser console for errors (F12)

### Resume not downloading?
- Make sure Google Drive link is set to "Anyone with link"
- Use the file ID, not the full sharing link
- Test the link in incognito mode

## ✨ What Changed

1. **Logo**: Removed `<Abishek P/>` → Added unique animated "A" logo
2. **Photo**: Ready to add your professional photo
3. **Resume**: Placeholder updated for your resume link
4. **Design**: More professional and unique

---

**Need help?** Check the code comments or README.md
