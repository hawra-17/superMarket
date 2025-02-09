export default function SmallCard({ title, img }) {
  return (
    <div className="rounded-3xl shadow-2xl w-40 h-40 bg- bg-zinc-500/25  flex flex-col items-center justify-items-center ">
      <img src={img} className="size-30" />
      <p className="text-black">{title}</p>
    </div>
  );
}
