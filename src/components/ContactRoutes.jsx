import { useState } from "react";
import { WHATSAPP, FORM_URL, FORM_FIELDS } from "../content";

/**
 * Two real ways to make contact, weighted for the Indonesian market:
 * WhatsApp first (the default business channel here), the ClickUp form second
 * for structured, procurement-style enquiries.
 *
 * The form sits behind a branded cover rather than loading straight away. That
 * keeps a white embed from punching a hole in the dark section, avoids a
 * third-party iframe on first paint, and lets the page state its own terms
 * before handing over to someone else's UI.
 */

function WhatsAppGlyph({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.24 8.24 0 0 1 8.24 8.24c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.21.89 2.39 1.01 2.55.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

function Route({ index, label, children }) {
  return (
    <div className="border-t border-[#10b981]/20 pt-7">
      <span className="mono text-[11px] text-[#a5e1d0]/70">
        {String(index).padStart(2, "0")} — {label}
      </span>
      {children}
    </div>
  );
}

export default function ContactRoutes() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="space-y-12">
      {/* ---------------- Route 01: WhatsApp ---------------- */}
      <Route index={1} label="Paling cepat">
        <h3 className="display mt-5 text-[1.7rem] text-[#f8faf7]">
          Chat via WhatsApp
        </h3>
        <p className="mt-4 max-w-[44ch] text-[17px] leading-relaxed text-[#a5e1d0]">
          Untuk pertanyaan cepat, jadwal, atau sekadar ingin bicara dengan tim
          kami langsung.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href={WHATSAPP.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-sm bg-[#10b981] px-7 py-4 text-[15px] font-semibold text-[#022018] transition hover:bg-[#8fd4c1]"
          >
            <WhatsAppGlyph className="h-5 w-5" />
            Chat Sekarang
          </a>
          <a
            href={WHATSAPP.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-[12px] text-[#a5e1d0] transition hover:text-[#f8faf7]"
          >
            {WHATSAPP.display}
          </a>
        </div>
      </Route>

      {/* ---------------- Route 02: the form, behind a cover ---------------- */}
      <Route index={2} label="Untuk permintaan terperinci">
        <h3 className="display mt-5 text-[1.7rem] text-[#f8faf7]">
          Kirim detail proyek
        </h3>
        <p className="mt-4 max-w-[44ch] text-[17px] leading-relaxed text-[#a5e1d0]">
          Isi formulir singkat agar tim kami bisa menyiapkan jawaban yang tepat
          sebelum menghubungi Anda.
        </p>

        {!formOpen ? (
          <div className="mt-7 overflow-hidden rounded-sm border border-[#10b981]/25 bg-[#04241c]/80">
            <ul className="divide-y divide-[#10b981]/10">
              {FORM_FIELDS.map((f) => (
                <li
                  key={f}
                  className="flex items-center justify-between gap-4 px-6 py-3.5"
                >
                  <span className="text-[15px] text-[#a5e1d0]">{f}</span>
                  <span className="h-px w-16 shrink-0 bg-[#10b981]/25" />
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#10b981]/20 px-6 py-5">
              <button
                type="button"
                onClick={() => setFormOpen(true)}
                className="rounded-sm bg-[#f8faf7] px-6 py-3 text-[15px] font-semibold text-[#04241c] transition hover:bg-[#c8f7e5]"
              >
                Buka Formulir
              </button>
              <span className="mono text-[11px] text-[#a5e1d0]/70">
                ± 2 menit
              </span>
            </div>
          </div>
        ) : (
          <div className="mt-7 overflow-hidden rounded-sm border border-[#10b981]/25 bg-white">
            <iframe
              src={FORM_URL}
              title="Formulir kontak Natural Capital Asia"
              className="block h-[860px] w-full border-0"
              loading="lazy"
            />
          </div>
        )}

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mono mt-4 inline-block border-b border-[#10b981]/40 pb-1 text-[11px] text-[#a5e1d0]/80 transition hover:border-[#10b981] hover:text-[#f8faf7]"
        >
          Buka formulir di tab baru
        </a>
      </Route>
    </div>
  );
}
