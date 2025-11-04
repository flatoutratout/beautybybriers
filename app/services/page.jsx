import ServiceCard from "@/components/ServiceCard";
import Section from "@/components/Section";

const hair = [
  { title: "Ladies' Cut & Blow Dry", desc: "Soft shaping and a polished, comfortable finish.", price: "£28" },
  { title: "Wash & Set", desc: "Classic sets that hold beautifully with a caring touch.", price: "£22" },
  { title: "Blow Dry", desc: "Smooth, bouncy styling to your preference.", price: "£18" },
  { title: "Gentlemen's Cut", desc: "Neat, tidy trims with care and precision.", price: "£15" },
  { title: "Fringe/Neck Trim", desc: "A quick refresh between appointments.", price: "£8" }
];

const nails = [
  { title: "Manicure", desc: "Nail shaping, cuticle care, a soothing hand massage and a neat polish.", price: "£20" },
  { title: "Pedicure", desc: "Soak, tidy, nail care and polish — all in seated comfort.", price: "£24" },
  { title: "File & Polish", desc: "A pretty refresh when you just want a little lift.", price: "£12" },
  { title: "Gel Polish (Hands)", desc: "Long-lasting gel colour, with gentle removal included.", price: "£26" },
  { title: "Gel Polish (Feet)", desc: "Durable gel colour for toes.", price: "£26" }
];

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-semibold">Services</h1>
          <p className="mt-3 text-ink/80">Kind, patient appointments tailored to each resident in care and nursing homes.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div><h2 className="text-2xl font-semibold mb-4">Hair</h2><div className="grid gap-4">{hair.map((s, i) => <ServiceCard key={i} {...s} />)}</div></div>
          <div><h2 className="text-2xl font-semibold mb-4">Nails</h2><div className="grid gap-4">{nails.map((s, i) => <ServiceCard key={i} {...s} />)}</div></div>
        </div>
        <div className="mt-10 text-center">
          <a href="#contact" className="btn">Arrange a visit</a>
          <p className="text-sm text-ink/70 mt-3">Prices are a guide and may vary slightly by location and needs.</p>
        </div>
      </div>
    </section>
  );
}