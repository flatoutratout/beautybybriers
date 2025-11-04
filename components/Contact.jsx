export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold">Book a Visit</h2>
              <p className="mt-2 text-ink/80">I bring calm, salon-quality hair and nail care directly to residents. Let’s make your residents feel comfortable, cared for, and a little bit special.</p>
              <div className="mt-6 space-y-2">
                <p><strong>Phone:</strong> <a className="underline" href="tel:+447000000000">+44 7000 000000</a></p>
                <p><strong>Email:</strong> <a className="underline" href="mailto:hello@beautybybriers.co.uk">hello@beautybybriers.co.uk</a></p>
              </div>
            </div>
            <form className="grid gap-4">
              <input className="card p-3" type="text" name="name" placeholder="Your name" required />
              <input className="card p-3" type="email" name="email" placeholder="Your email" required />
              <input className="card p-3" type="text" name="home" placeholder="Care/Nursing Home" />
              <textarea className="card p-3 min-h-32" name="message" placeholder="How can I help?" />
              <button type="submit" className="btn w-full" formAction="mailto:hello@beautybybriers.co.uk">Send</button>
              <p className="text-xs text-ink/70">Submitting opens your email client to send the message.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}