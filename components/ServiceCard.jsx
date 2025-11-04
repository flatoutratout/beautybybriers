export default function ServiceCard({ title, desc, price }) {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-ink/80">{desc}</p>
      {price && <p className="mt-3 font-medium">From {price}</p>}
    </div>
  );
}