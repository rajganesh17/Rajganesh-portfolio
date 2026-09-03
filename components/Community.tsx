const SHEEN =
  "linear-gradient(131deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 55%)";

// Deep charcoal panel (built from the site's ink tones) so the photos read like
// a premium gallery wall. Brand sage/blue glows tie it back to the theme.
const PANEL = "linear-gradient(160deg,#232631 0%,#191B22 55%,#131419 100%)";

// Gradient scrim so the caption stays legible over any photo.
const SCRIM =
  "linear-gradient(to top, rgba(16,24,40,0.78) 0%, rgba(16,24,40,0.28) 38%, rgba(16,24,40,0) 68%)";

type EventPhoto = {
  src: string;
  caption: string;
  meta: string;
};

// Real photos live in /public/images/events. To swap one, just overwrite the
// matching .jpg with the same file name — the layout stays intact.
const PHOTOS: EventPhoto[] = [
  {
    src: "/images/events/event-1.jpg",
    caption: "Design community",
    meta: "Design meetup",
  },
  {
    src: "/images/events/event-2.jpg",
    caption: "Product community",
    meta: "Product meetup",
  },
  {
    src: "/images/events/event-3.jpg",
    caption: "In the room",
    meta: "Hands-on session",
  },
];

// The wide panorama gets its own full-width feature row.
const PANORAMA: EventPhoto = {
  src: "/images/events/event-4.jpg",
  caption: "The whole community",
  meta: "Everyone in one frame",
};

/* A photo tile with a modern gradient scrim + caption overlaid at the bottom. */
function PhotoTile({
  photo,
  aspect,
  className = "",
}: {
  photo: EventPhoto;
  aspect: string;
  className?: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-[18px] shadow-[0_30px_60px_-26px_rgba(16,24,40,0.5)] ${className}`}
    >
      <img
        src={photo.src}
        alt={photo.caption}
        className={`${aspect} w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
      />
      {/* Scrim */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: SCRIM }}
      />
      {/* Caption */}
      <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="font-display text-[16px] font-semibold leading-tight text-white sm:text-[18px]">
          {photo.caption}
        </div>
        <div className="mt-0.5 text-[11px] font-medium text-white/75 sm:text-[12px]">
          {photo.meta}
        </div>
      </figcaption>
    </figure>
  );
}

export default function Community() {
  return (
    <section id="community" className="pt-2 pb-16">
      {/* Section heading */}
      <div className="mb-8 max-w-[720px]">
        <h2 className="m-0 font-display text-[clamp(32px,4.5vw,56px)] font-medium leading-[1.03] tracking-[-0.02em] text-ink">
          Beyond the screen, <span className="text-blue">into the community</span>
        </h2>
        <p className="mt-5 max-w-[520px] text-[clamp(16px,1.9vw,19px)] leading-[1.55] text-body">
          Some of my best thinking happens away from the desk. At meetups,
          jams, and talks, I swap ideas with people who genuinely care about the
          craft.
        </p>
      </div>

      {/* Premium gallery panel */}
      <div
        className="relative overflow-hidden rounded-[32px] p-5 shadow-[0_50px_90px_-40px_rgba(16,24,40,0.55)] ring-1 ring-white/10 sm:p-8"
        style={{ background: PANEL }}
      >
        {/* Sheen */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: SHEEN }}
        />
        {/* Dotted texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.05) 1.3px, transparent 1.3px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Brand glow blobs — sage + blue, tying the panel to the theme */}
        <div
          className="pointer-events-none absolute -left-16 -top-10 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "rgba(34,181,115,0.35)" }}
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full opacity-30 blur-3xl"
          style={{ background: "rgba(62,111,168,0.4)" }}
        />

        {/* Header row: chips */}
        <div className="relative z-[4] mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[12px] font-semibold text-white ring-1 ring-white/15 backdrop-blur">
            <span className="text-sage">◆</span> Communities
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-ink shadow-[0_12px_26px_-12px_rgba(0,0,0,0.6)]">
            Meetups · Jams · Talks
          </span>
        </div>

        {/* Top row — three landscape tiles */}
        <div className="relative z-[4] grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PHOTOS.map((photo) => (
            <PhotoTile
              key={photo.src}
              photo={photo}
              aspect="aspect-[4/3]"
            />
          ))}
        </div>

        {/* Feature row — full-width panorama */}
        <div className="relative z-[4] mt-4">
          <PhotoTile
            photo={PANORAMA}
            aspect="aspect-[16/9] sm:aspect-[23/8]"
          />
        </div>
      </div>
    </section>
  );
}
