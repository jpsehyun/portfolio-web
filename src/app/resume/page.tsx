export default function Resume() {
  return (
    <section>
      <h1 className="text-3xl font-semibold">Resume</h1>
      <p className="mt-3 text-sm text-neutral-300">
        The PDF is embedded below. You can also{" "}
        <a href="/resume.pdf" className="underline">download it</a>.
      </p>
      <div className="mt-4 aspect-[8.5/11] w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-800">
        <object data="/resume.pdf" type="application/pdf" className="h-full w-full">
          <p className="p-4 text-sm text-neutral-300">
            PDF preview not supported. <a className="underline" href="/resume.pdf">Download instead</a>.
          </p>
        </object>
      </div>
    </section>
  );
}
