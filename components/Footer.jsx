export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/40 bg-white/60">
      <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Beauty by Briers. All rights reserved.</p>
        <p className="opacity-80">Gentle, mobile hair &amp; nail care for care and nursing homes.</p>
      </div>
    </footer>
  );
}