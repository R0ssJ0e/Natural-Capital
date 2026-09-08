/**
 * SUBJECT — Natural Capital Asia: an Indonesian EPC firm (engineering,
 * procurement, construction) that is also becoming an official ClickUp partner,
 * reselling licences plus implementation and training. Audience: Indonesian
 * construction companies from SMB to major multinationals. Language: Bahasa
 * Indonesia. The artifact's single job: capture qualified leads via "Hubungi Kami".
 *
 * DESIGN PLAN
 * Stolen logic: the site survey drawing. A subak rice terrace photographed from
 * above and an engineering contour survey are the same picture — stacked contour
 * lines. That equivalence is the spine: the land's contour becomes the page's
 * structure, and the whole document is annotated like a surveyor's sheet
 * (elevation marks, coordinates, dashed datum lines, letter codes E / P / C).
 *
 * Type — Plus Jakarta Sans 800 for display (Jakarta's own commissioned city
 * typeface: provenance straight from the subject's world), IBM Plex Sans for
 * reading, IBM Plex Mono for the technical register.
 * Color — flooded terraces at dawn and Sudirman tower glass: ink #052e23,
 * terrace #10b981, glass #8fd4c1, batik gold #d97706, paper #f8faf7. ClickUp
 * purple #6647f0 is quarantined to its own section so it never fights the green.
 * Layout — dark earth at the top and bottom, a single sheet of pale paper in the
 * middle; sections meet along terrace lips, not hairline rules.
 * Signature — the living terrace field: contour bands that double as a survey,
 * with the Jakarta skyline rising out of the top contour and sunlight travelling
 * slowly across the flooded paddies.
 */

import "./theme.css";
import mark from "./assets/nca-mark.png";
import TerraceField from "./components/TerraceField";
import PhotoSlot from "./components/PhotoSlot";
import siteConstruction from "./assets/site-construction.jpg";
import siteFieldReport from "./assets/site-field-report.jpg";
// Official ClickUp UI imagery from the ClickUp Brand Guidelines (2025),
// "Tangible Closeup". Product-real screenshot: never recreate or imitate the UI.
import clickupUi from "./assets/clickup-ui.jpg";
import ContactRoutes from "./components/ContactRoutes";
import {
  NAV,
  SERVICES,
  CLICKUP_VALUE,
  CLICKUP_OFFER,
  PROJECTS,
} from "./content";

/* A terrace lip: the boundary between two sections is a step in the land. */
function TerraceLip({ from, to, flip = false }) {
  return (
    <div className="relative h-[64px] w-full sm:h-[96px]" aria-hidden="true">
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <rect width="1440" height="96" fill={from} />
        <path
          d={
            flip
              ? "M0 96 C 320 96, 420 8, 720 8 C 1020 8, 1130 96, 1440 96 L 1440 96 L 0 96 Z"
              : "M0 0 C 320 0, 420 88, 720 88 C 1020 88, 1130 0, 1440 0 L 1440 96 L 0 96 Z"
          }
          fill={to}
        />
        <path
          d={
            flip
              ? "M0 96 C 320 96, 420 8, 720 8 C 1020 8, 1130 96, 1440 96"
              : "M0 0 C 320 0, 420 88, 720 88 C 1020 88, 1130 0, 1440 0"
          }
          fill="none"
          stroke="#10b981"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function Wordmark() {
  return (
    <a href="#atas" className="flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[7px] bg-[#f8faf7]">
        <img src={mark} alt="" className="h-8 w-8 object-contain" />
      </span>
      <span
        className="display text-[15px] leading-[1.05] tracking-[-0.02em] text-[#f8faf7]"
      >
        Natural
        <br />
        Capital Asia
      </span>
    </a>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#10b981]/15 bg-[#04231b]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 sm:px-10">
        <Wordmark />
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.slice(0, 3).map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="mono text-[12px] text-[#a5e1d0] transition hover:text-[#f8faf7]"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#hubungi"
            className="rounded-sm bg-[#10b981] px-5 py-2.5 text-[13px] font-semibold text-[#022018] transition hover:bg-[#8fd4c1]"
          >
            Hubungi Kami
          </a>
        </nav>
        <a
          href="#hubungi"
          className="rounded-sm bg-[#10b981] px-4 py-2 text-[13px] font-semibold text-[#022018] md:hidden"
        >
          Hubungi
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="atas"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#04231b]"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-center px-6 pb-10 pt-24 sm:px-10">
        <p className="mono rise text-[12px] text-[#a5e1d0]">
          Rekayasa · Pengadaan · Konstruksi — Indonesia
        </p>
        <h1
          className="display rise mt-6 max-w-[19ch] text-[clamp(2.5rem,6vw,4.7rem)] text-[#f8faf7]"
          style={{ animationDelay: "0.08s" }}
        >
          Dari kontur tanah hingga puncak gedung
        </h1>
        <p
          className="rise mt-7 max-w-[56ch] text-[19px] leading-relaxed text-[#a5e1d0]"
          style={{ animationDelay: "0.16s" }}
        >
          Kami merancang, mengadakan, dan membangun di seluruh Indonesia — lalu
          memasang ClickUp agar proyek Anda tetap terkendali.
        </p>
        <div
          className="rise mt-10 flex flex-wrap items-center gap-5"
          style={{ animationDelay: "0.24s" }}
        >
          <a
            href="#hubungi"
            className="rounded-sm bg-[#10b981] px-8 py-4 text-[15px] font-semibold text-[#022018] transition hover:bg-[#8fd4c1]"
          >
            Hubungi Kami
          </a>
          <a
            href="#layanan"
            className="mono border-b border-[#10b981]/40 pb-1 text-[12px] text-[#a5e1d0] transition hover:border-[#10b981] hover:text-[#f8faf7]"
          >
            Lihat layanan
          </a>
        </div>
      </div>

      {/* The field sits in the flow, so it is never clipped by the fold. */}
      <div className="relative h-[44svh] min-h-[290px] w-full shrink-0">
        <TerraceField className="absolute inset-0 h-full w-full" />

        {/* Survey annotation as HTML, so the type stays crisp. */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {[
            { top: "46%", label: "EL. +12.40" },
            { top: "66%", label: "EL. +8.10" },
            { top: "86%", label: "EL. +3.60" },
          ].map((row) => (
            <div
              key={row.label}
              className="absolute left-0 flex w-full items-center gap-4 px-6 sm:px-10"
              style={{ top: row.top }}
            >
              <span className="mono shrink-0 text-[12px] text-[#eafff8]/75">
                {row.label}
              </span>
              <span className="h-px flex-1 border-t border-dashed border-[#eafff8]/25" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FACTS = [
  { k: "Cakupan klien", v: "UKM → Multinasional" },
  { k: "Lokasi proyek", v: "Tobelo · PIK 2 Jakarta" },
  { k: "Perangkat lunak", v: "ClickUp" },
  { k: "Basis operasi", v: "Indonesia" },
];

function Facts() {
  return (
    <section className="border-y border-[#10b981]/20 bg-[#052e23]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-y-8 px-6 py-12 sm:px-10 lg:grid-cols-4">
        {FACTS.map((f) => (
          <div key={f.k} className="pr-6">
            <p className="mono text-[11px] text-[#a5e1d0]/80">{f.k}</p>
            <p className="display mt-3 text-[19px] leading-tight text-[#f8faf7] sm:text-[22px]">
              {f.v}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="layanan" className="scroll-mt-20 survey-grid-dark bg-[#f8faf7]">
      <div className="mx-auto max-w-[1240px] px-6 py-24 sm:px-10 sm:py-32">
        <p className="mono text-[12px] text-[#065f46]">Layanan</p>
        <h2 className="display mt-6 max-w-[22ch] text-[clamp(2.1rem,5vw,3.6rem)] text-[#052e23]">
          Tiga disiplin, satu kontrak.
        </h2>
        <p className="mt-6 max-w-[52ch] text-[18px] leading-relaxed text-[#1e293b]/75">
          Anda tidak perlu menyatukan tiga vendor yang saling menunggu. Kami
          pegang rantainya dari desain sampai serah terima.
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-[#052e23]/10 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden bg-[#f8faf7] transition-colors duration-300 hover:bg-white"
            >
              <PhotoSlot
                src={s.photo}
                alt={`${s.title} — Natural Capital Asia`}
                label="Foto"
                className="aspect-[16/10] w-full"
              />
              {/* the terrace lip: each discipline sits one step lower */}
              <span className="block h-[3px] w-full bg-[#10b981]" />

              <div
                className="px-8 pb-10 sm:px-10"
                style={{ paddingTop: `${2.25 + i * 1.5}rem` }}
              >
              <div className="flex items-baseline gap-4">
                <span className="display text-[2.6rem] leading-none text-[#10b981]">
                  {s.code}
                </span>
                <span className="mono text-[12px] text-[#065f46]/50">{s.en}</span>
              </div>
              <h3 className="display mt-6 text-[1.75rem] text-[#052e23]">
                {s.title}
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed text-[#1e293b]/75">
                {s.body}
              </p>
              <ul className="mt-7 space-y-2.5 border-t border-[#052e23]/10 pt-6">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-[15px] text-[#1e293b]/80"
                  >
                    <span className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-[#d97706]" />
                    {it}
                  </li>
                ))}
              </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteBand() {
  return (
    <section className="relative h-[52vh] min-h-[340px] w-full overflow-hidden bg-[#052e23]">
      <img
        src={siteConstruction}
        alt="Lokasi konstruksi Natural Capital Asia di Indonesia"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04231b] via-[#04231b]/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1240px] px-6 pb-10 sm:px-10 sm:pb-14">
        <p className="display max-w-[24ch] text-[clamp(1.5rem,3.2vw,2.4rem)] text-[#f8faf7]">
          Pekerjaan kami berakhir di lapangan, bukan di presentasi.
        </p>
      </div>
    </section>
  );
}

function ClickUpSection() {
  return (
    <section id="clickup" className="scroll-mt-20 relative overflow-hidden bg-[#150c3d]">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 78% 18%, #6647f0 0%, transparent 52%), radial-gradient(circle at 12% 88%, #0091ff 0%, transparent 46%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-6 py-24 sm:px-10 sm:py-32">
        <div
          className="h-[3px] w-28 rounded-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FF02F0 0%, #FC6D2D 34%, #6647F0 68%, #0091FF 100%)",
          }}
        />
        <p className="mono mt-7 text-[12px] text-[#c3b8fb]">
          ClickUp untuk Konstruksi
        </p>
        <h2 className="display mt-6 max-w-[26ch] text-[clamp(2.1rem,5vw,3.6rem)] text-white">
          Proyek konstruksi tidak gagal di lapangan. Mereka gagal di spreadsheet.
        </h2>
        <p className="mt-7 max-w-[54ch] text-[18px] leading-relaxed text-[#d5cdfc]">
          Jadwal di satu file, permintaan material di WhatsApp, laporan progres di
          email. Kami memindahkan semuanya ke ClickUp — lalu menyiapkannya untuk
          cara kerja tim konstruksi.
        </p>

        {/* Official ClickUp UI imagery, set in a light window so the white
            product background reads as a screen rather than a bright gap. */}
        <figure className="mt-14 overflow-hidden rounded-md bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/15">
          <img
            src={clickupUi}
            alt="Antarmuka ClickUp: ruang kerja, daftar tugas, dan status proyek"
            loading="lazy"
            className="w-full"
          />
        </figure>

        <div className="mt-16 grid items-start gap-x-14 gap-y-12 lg:grid-cols-[1fr_0.72fr]">
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {CLICKUP_VALUE.map((v, i) => (
            <div key={v.title} className="border-t border-white/15 pt-6">
              <span className="mono text-[12px] text-[#9d86f7]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-4 text-[1.35rem] text-white">{v.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-[#d5cdfc]/85">
                {v.body}
              </p>
            </div>
          ))}
          </div>

          <figure className="relative overflow-hidden rounded-sm">
            <img
              src={siteFieldReport}
              alt="Insinyur lapangan mengirim laporan progres dari ponsel"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#150c3d] via-transparent to-transparent" />
            <figcaption className="mono absolute bottom-4 left-5 text-[11px] text-white/80">
              Laporan dari lokasi, bukan dari meja
            </figcaption>
          </figure>
        </div>

        <div className="mt-20 rounded-sm border border-[#6647f0]/50 bg-[#0d0729]/70 p-8 backdrop-blur sm:p-12">
          <h3 className="display max-w-[30ch] text-[1.6rem] text-white sm:text-[2rem]">
            Kami tidak berhenti di penjualan lisensi.
          </h3>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {CLICKUP_OFFER.map((o) => (
              <div key={o.label}>
                <p className="mono text-[12px] text-[#c3b8fb]">{o.label}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#hubungi"
            className="mono mt-11 inline-block border-b border-[#9d86f7]/50 pb-1 text-[12px] text-[#c3b8fb] transition hover:border-white hover:text-white"
          >
            Diskusikan kebutuhan lisensi Anda
          </a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="proyek" className="scroll-mt-20 bg-[#eef4ef]">
      <div className="mx-auto max-w-[1240px] px-6 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-32">
        <p className="mono text-[12px] text-[#065f46]">Proyek</p>
        <h2 className="display mt-6 max-w-[20ch] text-[clamp(2.1rem,5vw,3.6rem)] text-[#052e23]">
          Dari Halmahera sampai Jakarta
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-sm border border-[#052e23]/10 bg-[#f8faf7] transition hover:border-[#10b981]/60"
            >
              <PhotoSlot
                src={p.photo}
                alt={`Proyek ${p.name}`}
                label="Foto proyek"
                className="aspect-[16/9] w-full"
              />
              <div className="p-8 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="display text-[2rem] text-[#052e23] sm:text-[2.4rem]">
                    {p.name}
                  </h3>
                  <p className="mono mt-3 text-[11px] text-[#356a5c]">
                    {p.kind}
                  </p>
                </div>
                <p className="mono shrink-0 text-[11px] text-[#9a5300]">
                  {p.coord}
                </p>
              </div>
              <p className="mt-7 max-w-[42ch] text-[17px] leading-relaxed text-[#1e293b]/75">
                {p.note}
              </p>
              <div className="relative mt-9 h-[2px] w-full bg-[#052e23]/10">
                <div className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-[#10b981] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="hubungi" className="scroll-mt-20 survey-grid relative bg-[#052e23]">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <div>
          <p className="mono text-[12px] text-[#a5e1d0]">Hubungi Kami</p>
          <h2 className="display mt-6 text-[clamp(2.1rem,5vw,3.4rem)] text-[#f8faf7]">
            Ceritakan proyek Anda
          </h2>
          <p className="mt-7 max-w-[38ch] text-[18px] leading-relaxed text-[#8fd4c1]">
            Dua cara menghubungi kami. Pilih yang paling sesuai — kami balas
            dalam 1×24 jam kerja.
          </p>

          <dl className="mt-14 space-y-7 border-t border-[#10b981]/20 pt-9">
            <div>
              <dt className="mono text-[11px] text-[#a5e1d0]/80">Email</dt>
              <dd className="mt-2 text-[17px] text-[#f8faf7]">
                halo@naturalcapital.asia
              </dd>
            </div>
            <div>
              <dt className="mono text-[11px] text-[#a5e1d0]/80">Kantor</dt>
              <dd className="mt-2 text-[17px] text-[#f8faf7]">
                Jakarta, Indonesia
              </dd>
            </div>
            <div>
              <dt className="mono text-[11px] text-[#a5e1d0]/80">Jam kerja</dt>
              <dd className="mt-2 text-[17px] text-[#f8faf7]">
                Senin – Jumat, 09.00 – 18.00 WIB
              </dd>
            </div>
          </dl>
        </div>

        <ContactRoutes />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#10b981]/20 bg-[#04231b]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-12 sm:px-10 md:flex-row md:items-center md:justify-between">
        <Wordmark />
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="mono text-[11px] text-[#8fd4c1] transition hover:text-[#f8faf7]"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-col gap-3 border-t border-[#10b981]/10 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="mono text-[11px] text-[#8fd4c1]/70">
          © {new Date().getFullYear()} Natural Capital Asia
        </p>
        <p className="mono text-[11px] text-[#8fd4c1]/70">
          Rekayasa · Pengadaan · Konstruksi
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="bg-[#04231b]">
      <Nav />
      <Hero />
      <Facts />
      <TerraceLip from="#052e23" to="#f8faf7" />
      <Services />
      <SiteBand />
      <ClickUpSection />
      <Projects />
      <TerraceLip from="#eef4ef" to="#052e23" />
      <Contact />
      <Footer />
    </main>
  );
}
