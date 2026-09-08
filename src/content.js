// All page copy in Bahasa Indonesia, kept in one place so it is easy to revise.
//
// PROJECT PHOTOS: drop a file in src/assets/, import it here, and set it as the
// project's `photo`. Leave `photo: null` and the card renders a designed
// placeholder instead.
//
//   import maluku from "./assets/maluku-01.jpg";
//   ...  { name: "Maluku", photo: maluku, ... }

import svcEngineering from "./assets/svc-engineering.jpg";
import svcProcurement from "./assets/svc-procurement.jpg";
import svcConstruction from "./assets/svc-construction.jpg";
import projTobelo from "./assets/proj-tobelo.jpg";
import projPik2 from "./assets/proj-pik2.jpg";

export const NAV = [
  { label: "Layanan", href: "#layanan" },
  { label: "ClickUp", href: "#clickup" },
  { label: "Proyek", href: "#proyek" },
  { label: "Hubungi Kami", href: "#hubungi" },
];

export const SERVICES = [
  {
    code: "E",
    title: "Rekayasa",
    en: "Engineering",
    body: "Desain teknis, studi kelayakan, dan perencanaan lokasi yang siap dibangun.",
    photo: svcEngineering,
    items: ["Studi kelayakan", "Desain teknis & DED", "Survei & perencanaan lokasi"],
  },
  {
    code: "P",
    title: "Pengadaan",
    en: "Procurement",
    body: "Sumber material, seleksi vendor, dan logistik lintas pulau tanpa kejutan biaya.",
    photo: svcProcurement,
    items: ["Sumber material", "Manajemen vendor", "Logistik & bea"],
  },
  {
    code: "C",
    title: "Konstruksi",
    en: "Construction",
    body: "Pelaksanaan di lapangan dengan pengawasan mutu, K3, dan serah terima yang bersih.",
    photo: svcConstruction,
    items: ["Manajemen proyek", "Pengawasan mutu & K3", "Commissioning & serah terima"],
  },
];

export const CLICKUP_VALUE = [
  {
    title: "Jadwal yang bisa dipercaya",
    body: "Gantt, dependensi, dan jalur kritis dalam satu tampilan. Perubahan di lapangan langsung terlihat di jadwal.",
  },
  {
    title: "Pengadaan terkendali",
    body: "Permintaan material lewat formulir, persetujuan berjenjang, dan status vendor yang selalu terbarui.",
  },
  {
    title: "Laporan lapangan dari ponsel",
    body: "Update harian, foto progres, dan checklist mutu dikirim langsung dari lokasi proyek.",
  },
  {
    title: "Biaya & sumber daya",
    body: "Beban kerja tim, jam kerja, dan anggaran proyek di satu tempat, bukan di lima spreadsheet.",
  },
];

export const CLICKUP_OFFER = [
  { label: "Lisensi", body: "Pembelian & perpanjangan lisensi ClickUp untuk tim Anda." },
  { label: "Implementasi", body: "Struktur ruang kerja, template proyek, dan otomasi disiapkan untuk alur kerja konstruksi." },
  { label: "Pelatihan", body: "Onboarding tim kantor dan tim lapangan, dalam Bahasa Indonesia." },
  { label: "Dukungan", body: "Pendampingan lokal di zona waktu Anda, bukan tiket yang dijawab besok pagi." },
];

export const PROJECTS = [
  {
    name: "Ruko Tobelo",
    kind: "Rumah toko — Halmahera Utara",
    coord: "1°44′N 127°59′E",
    note: "Deretan ruko dua lantai di Tobelo: struktur, fasad, dan penyelesaian eksterior, dengan seluruh material didatangkan lintas laut.",
    photo: projTobelo,
  },
  {
    name: "PIK 2",
    kind: "Pengembangan kawasan — Jakarta",
    coord: "6°05′S 106°40′E",
    note: "Pekerjaan hunian dan infrastruktur kawasan di PIK 2, dengan koordinasi multi-kontraktor dan target serah terima yang ketat.",
    photo: projPik2,
  },
];

// --- Contact routes -------------------------------------------------------
// WhatsApp: digits only in the href (country code, no +, no spaces).
const WHATSAPP_NUMBER = "6285691719181"; // digits only: no +, no spaces
const WHATSAPP_GREETING =
  "Halo Natural Capital Asia, saya ingin berkonsultasi mengenai proyek kami.";

export const WHATSAPP = {
  display: "+62 856-9171-9181",
  href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_GREETING
  )}`,
};

// Public ClickUp Form. Anyone with the link can submit; each submission
// creates a task in the form's List.
export const FORM_URL =
  "https://forms.clickup.com/36063498/f/12cj8a-9514/OCDM6WZU1JMPLUNMDO";

// Shown on the form cover so visitors know what they are committing to
// before the embed loads. Mirrors the live ClickUp Form ("Let's connect!"):
// company name, first/last name, phone, email, job title, company size.
// Keep in sync whenever the ClickUp Form changes.
export const FORM_FIELDS = [
  "Nama perusahaan",
  "Nama lengkap",
  "Email & nomor telepon",
  "Jabatan & ukuran perusahaan",
];

export const NEEDS = [
  "Rekayasa & desain",
  "Pengadaan material",
  "Pelaksanaan konstruksi",
  "Lisensi ClickUp",
  "Implementasi & pelatihan ClickUp",
  "Lainnya",
];
