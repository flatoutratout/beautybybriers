import Image from "next/image";
import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section title="About Beauty by Briers" subtitle="A gentle, personal approach to looking and feeling lovely.">
      <div className="card p-8 grid md:grid-cols-3 gap-8">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft">
          <Image src="/gallery2.svg" alt="Stylist portrait" fill className="object-cover" />
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold">Hello, I'm Briers.</h3>
          <p className="mt-3 text-ink/80">For over 10 years I’ve provided caring salon services for residents in care and nursing homes. I take time to listen, work gently, and make every appointment calm and positive.</p>
          <p className="mt-3 text-ink/80">My kit is fully mobile and sanitised, and I use soft, skin-kind products. Whether it’s a fresh set, a tidy trim, or a weekly wash & set — I tailor everything to each person’s preferences and routine.</p>
          <p className="mt-3 text-ink/80">I’m fully insured, DBS checked, and happy to coordinate with staff and family. If you’d like to arrange regular visits for your home, please do get in touch.</p>
          <a href="#contact" className="btn mt-6">Contact me</a>
        </div>
      </div>
    </Section>
  );
}