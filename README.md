# Manaahel Theme — Premium Salla Twilight Theme

**Custom theme for جمعية مناهل العلم — Islamic Charity & Education**

---

## 🎨 Features

### Custom Components
| Component | Description |
|-----------|-------------|
| **Hero Section** | Full-width hero with title, subtitle, CTAs, and image |
| **Impact Stats** | Animated counter section with icons (8,633+ beneficiaries, 112 countries, etc.) |
| **Content Section** | **Image + Text layout** (the feature you requested!) — choose image-left or image-right |
| **Programs Grid** | Course/donation product cards with pricing |
| **Donation Tiers** | Tiered donation cards with highlighted "most popular" option |
| **Testimonials** | Quote cards with author info and avatars |
| **Trust Section** | ZATCA, secure payment, charity license, transparency badges |
| **CTA Banner** | Call-to-action with gradient background |

### Built-in Features
- ✅ RTL (Right-to-Left) Arabic support
- ✅ Mobile responsive
- ✅ Animated counters on scroll
- ✅ Back-to-top button
- ✅ Trust bar in footer
- ✅ Payment method icons
- ✅ Social media links
- ✅ Custom scroll animations
- ✅ Lazy loading images

---

## 🚀 Installation

### Prerequisites
- Node.js (v18+)
- Salla CLI: `npm install -g @salla.sa/cli`
- Salla Partners Portal account (connected to GitHub)

### Step 1: Create Theme in Partners Portal
1. Go to [Salla Partners Portal](https://salla.partners)
2. Click **My Themes** → **Create Theme**
3. Connect your GitHub account
4. Name it: `manaahel-theme`
5. A GitHub repo will be auto-created

### Step 2: Clone the Repo
```bash
git clone https://github.com/YOUR_USERNAME/manaahel-theme.git
cd manaahel-theme
```

### Step 3: Replace Files
Delete all existing files in the cloned repo, then copy these files:
```
manahel-theme/
├── twilight.json
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── views/
│   │   ├── main.twig
│   │   ├── home.twig
│   │   ├── partials/
│   │   │   ├── header.twig
│   │   │   └── footer.twig
│   │   └── components/
│   │       ├── hero.twig
│   │       ├── stats.twig
│   │       ├── content-section.twig
│   │       ├── programs.twig
│   │       ├── donation-tiers.twig
│   │       ├── testimonials.twig
│   │       ├── trust.twig
│   │       └── cta.twig
│   └── assets/
│       ├── css/
│       │   └── app.css
│       └── js/
│           └── app.js
```

### Step 4: Install & Preview
```bash
npm install
salla theme preview
```

### Step 5: Push to GitHub
```bash
git add .
git commit -m "Initial Manaahel theme"
git push origin main
```

### Step 6: Publish
1. Go back to Salla Partners Portal
2. Click **Preview Theme** on your demo store
3. Test everything
4. Click **Publish** → Submit for review
5. Once approved, install on `store.manaahel.sa`

---

## 🛠️ Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  manahel: {
    primary: '#0d7377',      // Teal
    accent: '#c9a227',       // Gold
    // ...
  }
}
```

### Change Fonts
The theme includes:
- **Noto Sans Arabic** (default)
- **Cairo**
- **Tajawal**

Edit in `tailwind.config.js` under `fontFamily`.

### Add More Sections
Edit `twilight.json` → `components` array to add new custom sections.

---

## 📱 Key Feature: Content Section (Image + Text)

This is the **main requested feature** — instead of just banner images, you can now add sections with:
- ✅ Title + subtitle
- ✅ Rich text content
- ✅ Image (left or right)
- ✅ Call-to-action button
- ✅ Multiple background styles (white, light, teal gradient)

**How to use in Salla Editor:**
1. Go to Store Design
2. Add component: **"Content Section (Image + Text)"**
3. Choose layout: Image Left or Image Right
4. Fill in title, content, upload image
5. Add button if needed

---

## 🔧 Development Commands

```bash
# Preview locally
salla theme preview

# Preview specific store
salla theme preview --store=your-store-name

# Build for production
salla theme build

# Watch files
salla theme preview --watch
```

---

## 📞 Support

Built by **Abo Zyad** for **Manaahel Management**

---

## 📄 License

MIT License — Feel free to use and modify.
