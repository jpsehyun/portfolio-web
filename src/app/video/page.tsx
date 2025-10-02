// src/app/video/page.tsx
export default function Video() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Video</h1>
      <p className="mt-3 text-sm text-neutral-300">
        Trailer for my undergraduate thesis project, &quot;Halls of De La Salle&quot;, an AR
        experience recreating the events of 1945 at De La Salle University.
      </p>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
        <div className="aspect-[16/9] w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/3RRZha1kd5M?rel=0&modestbranding=1"
            title="Portfolio video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
