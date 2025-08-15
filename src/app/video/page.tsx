export default function Video() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Video</h1>
      <p className="mt-3 text-sm text-neutral-300">
        Embed a demo, a talk, or a reel.
      </p>
      <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
        <video src="/demo.mp4" className="h-full w-full" controls preload="metadata" />
      </div>
    </section>
  );
}
