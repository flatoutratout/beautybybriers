import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return (
    <>
      <section className="pt-12 md:pt-20">
        <div className="container">
          <div className="card overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <p className="text-sm uppercase tracking-widest text-ink/70">Beauty by Briers</p>
                <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
                  Graceful hair &amp; nail care — brought with warmth and kindness.
                </h1>
                <p className="mt-4 text-ink/80">
                  Thoughtful, mobile salon visits for residents in care and nursing homes. Time, patience,
                  and gentle products — so every appointment feels calm and uplifting.
                </p>
                <div className="mt-6 flex gap-3">
                  <a href="#contact" className="btn">Book a visit</a>
                  <Link href="/services" className="btn">See services</Link>
                </div>
              </div>
              <div className="relative min-h-64">
                <Image src="/gallery1.svg" alt="Caring hair service" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="Why families choose Beauty by Briers" subtitle="Professional standards with a gentle, patient approach tailored to each resident.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6"><h3 className="font-semibold">Kind, unhurried care</h3><p className="mt-2 text-ink/80">Appointments paced to suit each resident — including those living with dementia.</p></div>
          <div className="card p-6"><h3 className="font-semibold">Mobile &amp; convenient</h3><p className="mt-2 text-ink/80">Everything provided on the day — we visit your care or nursing home directly.</p></div>
          <div className="card p-6"><h3 className="font-semibold">Hygiene first</h3><p className="mt-2 text-ink/80">Sanitised tools and gentle, skin-kind products throughout.</p></div>
        </div>
      </Section>

      <Section title="A peek at our work"><GalleryGrid /></Section>
      <Testimonials />
      <Contact />
    </>
  );
}