# ⚡ PPTK 2026 — Pengenalan Prodi Teknik Komputer UMN

[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite 6](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)]()

Digital archive, roadmap interaktif, dan panduan visual perkenalan prodi untuk mahasiswa baru **Teknik Komputer Universitas Multimedia Nusantara (UMN) 2026**.

Website ini mengusung bahasa desain **Neo-Brutalist Industrial / Tech Dossier** yang tajam, modern, responsif penuh di perangkat seluler (*mobile-first*), dan minim clutter.

---

## 🌟 Fitur Utama

- 🏠 **Hero Showcase & Live Countdown**  
  Headline utama *"FACE THE UNKNOWN. UNLOCK YOUR POTENTIAL."* dilengkapi slideshow otomatis dokumentasi kegiatan PPTK.
- 📖 **What is PPTK & Guidelines**  
  Penjelasan singkat seputar orientasi prodi dan tata tertib lengkap peserta.
- 👔 **Dresscode & Preparation Guide**  
  Panduan visual 3 atribut utama (**Atasan Polo**, **Celana Bahan**, dan **Sepatu Kets Bertali**) serta daftar barang yang wajib dibawa.
- 🎬 **Instagram Reels Highlights**  
  Frame media vertikal yang terhubung langsung ke video resmi Instagram [@ppteknikkomputer.umn](https://www.instagram.com/ppteknikkomputer.umn).
- 📍 **Critical Timelines & Interactive Hari-H Ready Check**  
  - Status **Briefing Day** (`COMPLETED ✓`).
  - Alur kegiatan **Main Event (18 Agustus 2026 - After OMB)** dengan fitur interaktif *Countdown Timer* & *Hari-H Ready Checklist*.
- 👥 **Searchable Groups & Division Dossier**  
  Fitur pencarian nama mahasiswa baru, PIC, dan daftar anggota kelompok (TIMER, PWM, UART, GPIO) beserta modal detail & tombol salin daftar nama.
- 🛡️ **Committee Showcase**  
  Perkenalan panitia PPTK 2026.

---

## 🛠️ Teknologi & Stack

- **Core Framework:** [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling:** [TailwindCSS v4](https://tailwindcss.com/)
- **Icons & Visuals:** Material Symbols Outlined & Custom Brutalist Assets
- **Typography:**
  - `Syne` — Display & Headers
  - `JetBrains Mono` — Monospace Technical Badges & Data
  - `Libre_Franklin` — Body Text

---

## 🚀 Panduan Memulai (Local Development)

### 1. Clone Repository
```bash
git clone https://github.com/raffiabyann/pptk.git
cd pptk
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Server Development
```bash
npm run dev
```
Buka browser di `http://localhost:5173`.

### 4. Build untuk Production
```bash
npm run build
```
Hasil build production akan tersimpan di direktori `/dist`.

---

## 📁 Struktur Direktori Project

```text
project-web-pptk/
├── public/
│   ├── assets/              # Aset gambar dresscode, reels thumbnail, & foto slider
│   └── logopptk.png         # Logo resmi PPTK 2026
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigasi utama + Mobile Drawer Menu
│   │   ├── Hero.jsx         # Section Hero & Photo Slider
│   │   ├── WhatIsPPTK.jsx   # Deskripsi Singkat PPTK
│   │   ├── RulesSection.jsx # Tata Tertib & Guidelines
│   │   ├── PreparationSection.jsx # Dresscode & Barang Bawaan
│   │   ├── ReelsSection.jsx # Instagram Reels Highlights
│   │   ├── TimelineSection.jsx  # Roadmap, Main Event & Interactive Checklist
│   │   ├── DivisionsSection.jsx # Fitur Cari Kelompok & Modal Anggota
│   │   ├── CommitteeSection.jsx # Panitia PPTK 2026
│   │   ├── Footer.jsx       # Footer & Media Sosial
│   │   └── Toast.jsx        # Provider Toast Notification
│   ├── App.jsx              # Main App Container
│   ├── index.css            # Tailwind & Custom CSS Utilities
│   └── main.jsx             # React Entry Point
├── package.json
└── vite.config.js
```

---

## 👨‍💻 Kontribusi & Lisensi

Dibuat oleh Tim **Teknik Komputer Universitas Multimedia Nusantara 2026**.  
*All rights reserved.*
