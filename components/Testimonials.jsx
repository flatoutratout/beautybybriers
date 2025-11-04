export default function Testimonials() {
  const items = [
    { quote: "Mum looks forward to her visits — gentle, patient and always so kind.", name: "Carla, Care Home Manager" },
    { quote: "Such a calm experience. Our residents feel truly cared for.", name: "Activities Lead" },
    { quote: "Professional and warm. The fresh sets always bring big smiles.", name: "Resident’s Daughter" },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Kind Words</h2>
          <p className="mt-2 text-ink/80">A few notes from families and care home staff.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="card p-6 border-2" style={{borderColor:'#F6D98B'}}>
              <blockquote className="italic">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-ink/80">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}