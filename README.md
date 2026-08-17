# PPTK 2026 — Pengenalan Prodi Teknik Komputer UMN

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

Website resmi orientasi Program Studi Teknik Komputer Universitas Multimedia Nusantara (UMN) angkatan 2026. Berisi panduan kegiatan, timeline, informasi kelompok, profil panitia, serta profil himpunan **ACES** (Association of Computer Engineering Students).

## Fitur

- **Panduan & Tata Tertib** — Informasi dresscode, barang bawaan, dan peraturan peserta
- **Timeline Kegiatan** — Roadmap acara dengan countdown timer dan interactive checklist
- **Cari Kelompok** — Pencarian nama mahasiswa baru dan daftar anggota per kelompok
- **Panitia PPTK** — Struktur dan daftar panitia PPTK 2026
- **Profil ACES** — Pengenalan himpunan ACES Gen XVI, divisi, pengurus, dan ACES Muda dengan lightbox gallery foto

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | React 19 + Vite 6 |
| Styling | TailwindCSS v4 |
| Icons | Lucide React, Material Symbols |
| Typography | Syne, JetBrains Mono, Libre Franklin |
| Deployment | Vercel |

## Getting Started

```bash
# Clone
git clone https://github.com/raffiabyann/pptk.git
cd pptk

# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
```

## Struktur Project

```
src/
├── components/
│   ├── Navbar.jsx              # Navigasi utama + mobile drawer
│   ├── Hero.jsx                # Hero section & photo slider
│   ├── WhatIsPPTK.jsx          # Deskripsi singkat PPTK
│   ├── RulesSection.jsx        # Tata tertib peserta
│   ├── PreparationSection.jsx  # Dresscode & barang bawaan
│   ├── ReelsSection.jsx        # Instagram reels highlights
│   ├── TimelineSection.jsx     # Timeline, countdown & checklist
│   ├── DivisionsSection.jsx    # Pencarian kelompok & anggota
│   ├── CommitteeSection.jsx    # Panitia PPTK 2026
│   ├── AcesSection.jsx         # Profil himpunan ACES Gen XVI
│   ├── ScrollReveal.jsx        # Scroll-based fade-in animation
│   ├── Footer.jsx              # Footer & social links
│   └── Toast.jsx               # Toast notification provider
├── App.jsx
├── index.css
└── main.jsx

public/
├── images/aces/                # Foto divisi & roster ACES Gen XVI
├── assets/                     # Aset gambar dresscode, reels, slider
├── LogoACES.png
└── logopptk.png
```

## Tim

Dibuat oleh mahasiswa Teknik Komputer, Universitas Multimedia Nusantara.
