# Natural Capital Asia — Landing Page

Halaman arahan (landing page) satu halaman dalam Bahasa Indonesia untuk Natural
Capital Asia: rekayasa, pengadaan, dan konstruksi, serta lisensi dan
implementasi ClickUp.

Stack: React 18 + Vite 5 + Tailwind CSS 3.

---

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Build untuk produksi

```bash
npm run build      # output ke dist/
npm run preview    # cek hasil build secara lokal
```

---

## Deploy: GitHub + Cloudflare Pages

### 1. Push ke GitHub

```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin git@github.com:<akun>/natural-capital-asia.git
git push -u origin main
```

### 2. Hubungkan ke Cloudflare Pages

Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** →
**Connect to Git** → pilih repo ini.

Isi pengaturan build:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20 (set env var `NODE_VERSION=20`) |

Klik **Save and Deploy**. Setiap `git push` ke `main` akan otomatis
men-deploy ulang.

### 3. Domain kustom

Di project Pages → **Custom domains** → **Set up a domain** →
masukkan `naturalcapital.asia` (dan `www`).

- Jika domain sudah di Cloudflare: record DNS dibuat otomatis.
- Jika domain di registrar lain: arahkan nameserver ke Cloudflare terlebih
  dahulu, atau tambahkan record `CNAME` ke `<project>.pages.dev`.

TLS/SSL aktif otomatis.

### 4. SPA routing (opsional)

Halaman ini satu halaman dengan anchor link, jadi tidak wajib. Jika nanti
ditambahkan routing, buat `public/_redirects`:

```
/*  /index.html  200
```

---

## Struktur

```
index.html               # shell + meta/SEO/OG (Bahasa Indonesia)
public/favicon.png       # favicon dari logo
src/main.jsx             # entry point
src/App.jsx              # seluruh halaman + catatan desain
src/theme.css            # design token, font, animasi
src/content.js           # SEMUA teks halaman — edit di sini
src/components/
  TerraceField.jsx       # grafik sawah terasering + skyline (SVG)
  ContactRoutes.jsx      # WhatsApp + embed ClickUp Form (dengan cover)
  PhotoSlot.jsx          # slot foto proyek + placeholder
src/assets/
  nca-logo.png           # logo lengkap (mark + wordmark)
  nca-mark.png           # hanya mark, dipakai di navbar
  site-construction.jpg  # band lokasi konstruksi
  site-field-report.jpg  # foto laporan lapangan (bagian ClickUp)
  svc-engineering.jpg    # kartu layanan: Rekayasa
  svc-procurement.jpg    # kartu layanan: Pengadaan
  svc-construction.jpg   # kartu layanan: Konstruksi
  clickup-ui.jpg         # UI ClickUp resmi (Brand Guidelines 2025)
  proj-tobelo.jpg        # Proyek: Ruko Tobelo
  proj-pik2.jpg          # Proyek: PIK 2
```

Semua teks ada di `src/content.js` dan `src/App.jsx`. Warna dan font ada di
`src/theme.css`.

---

## Kontak: WhatsApp & ClickUp Form

Keduanya diatur di `src/content.js`:

```js
const WHATSAPP_NUMBER = "6285691719181";   // hanya angka, tanpa + atau spasi
const WHATSAPP_GREETING = "Halo Natural Capital Asia, ...";  // pesan otomatis
export const FORM_URL = "https://forms.clickup.com/...";     // ClickUp Form
export const FORM_FIELDS = [ ... ];  // daftar isian di cover formulir
```

Formulir ClickUp tidak dimuat langsung. Pengunjung melihat **cover** bermerek
lebih dulu, lalu embed muncul setelah tombol "Buka Formulir" diklik. Ini
menjaga tampilan halaman dan menghindari memuat iframe pihak ketiga sejak awal.

Jika isian formulir di ClickUp diubah, perbarui juga `FORM_FIELDS` agar cover
tetap sesuai.

Setiap submission otomatis menjadi task di List ClickUp yang terhubung ke
formulir tersebut.

## Menambahkan foto proyek

Kartu proyek Ruko Tobelo & PIK 2 sudah memakai foto asli. Untuk menambah
proyek baru (atau mengganti foto):

1. Simpan file di `src/assets/`, contoh `maluku-01.jpg`
2. Di `src/content.js`, tambahkan import di paling atas:
   ```js
   import maluku from "./assets/maluku-01.jpg";
   ```
3. Set pada proyek yang sesuai:
   ```js
   { name: "Maluku", photo: maluku, ... }
   ```

Ukuran ideal: rasio 16:9, lebar minimal 1200px, JPEG kualitas ~82.

## Catatan foto

Semua file `site-*.jpg` dan `svc-*.jpg` adalah **foto ilustrasi industri**,
bukan dokumentasi proyek Natural Capital Asia. Ganti dengan foto asli begitu
tersedia.

`clickup-ui.jpg` adalah **citra UI resmi ClickUp** ("Tangible Closeup",
ClickUp Brand Guidelines 2025). Jangan pernah membuat ulang, mengedit, atau
meniru antarmuka ClickUp — selalu gunakan aset resmi dari
https://clickup.com/brand.

## Catatan merek ClickUp

Penggunaan logo dan nama ClickUp harus mengikuti https://clickup.com/brand
dan https://clickup.com/brand/trademark-guidelines. Klaim status kemitraan
hanya boleh dicantumkan setelah resmi disetujui, dan badge partner wajib
menaut ke https://clickup.com/partners.

## Yang masih placeholder

- Email: `halo@naturalcapital.asia`
- Alamat: "Jakarta, Indonesia"
- Koordinat proyek di `src/content.js` masih perkiraan — mohon dikonfirmasi
- Deskripsi lingkup kerja Ruko Tobelo & PIK 2 perlu diperiksa klien
