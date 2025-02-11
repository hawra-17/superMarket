export default function SmallCard({ title, img, price }) {
  return (
    <div
      className="rounded-3xl shadow-2xl w-40 h-40 bg- bg-zinc-500/25  flex flex-col items-center justify-items-center  "
      style={{ marginRight: "20px" }}
    >
      <img src={img} className="size-30" />
      <p className="text-black">{title}</p>
      <p className="text-black">{price}</p>
    </div>
  );
}
