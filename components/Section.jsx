export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {title && (<div className="mb-10"><h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>{subtitle && <p className="mt-2 text-ink/80">{subtitle}</p>}</div>)}
        <div className="grid gap-6">{children}</div>
      </div>
    </section>
  );
}