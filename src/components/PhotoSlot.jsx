/**
 * PhotoSlot — a framed image slot for project photography.
 *
 * Pass a `src` and it renders the photo. Leave `src` empty and it renders a
 * designed placeholder in the survey language of the rest of the page, so a
 * project with no photo yet still looks intentional rather than broken.
 *
 * To add a real photo:
 *   1. Drop the file in src/assets/ (e.g. maluku-01.jpg)
 *   2. Import it in content.js:  import maluku from "./assets/maluku-01.jpg";
 *   3. Set it on the project:    photo: maluku,
 */

export default function PhotoSlot({ src, alt = "", label, className = "" }) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-[#052e23] ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
        />
      </div>
    );
  }

  return (
    <div
      className={`survey-grid relative overflow-hidden bg-[#052e23] ${className}`}
      aria-hidden="true"
    >
      {/* survey crosshair: the mark a surveyor leaves where the shot belongs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-14 w-14">
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#8fd4c1]/30" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#8fd4c1]/30" />
          <span className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8fd4c1]/45" />
        </div>
      </div>
      {label && (
        <span className="mono absolute bottom-4 left-8 text-[11px] text-[#8fd4c1]/55">
          {label}
        </span>
      )}
      {/* corner ticks */}
      {[
        "left-3 top-3 border-l border-t",
        "right-3 top-3 border-r border-t",
        "left-3 bottom-3 border-b border-l",
        "right-3 bottom-3 border-b border-r",
      ].map((pos) => (
        <span
          key={pos}
          className={`absolute h-3 w-3 border-[#8fd4c1]/35 ${pos}`}
        />
      ))}
    </div>
  );
}
