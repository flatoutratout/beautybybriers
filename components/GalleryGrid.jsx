import Image from "next/image";

const items = ["/gallery1.svg","/gallery2.svg","/gallery3.svg","/gallery4.svg","/gallery5.svg","/gallery6.svg"];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((src, i) => (
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft" key={i}>
          <Image src={src} alt="Gallery item" fill className="object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      ))}
    </div>
  );
}