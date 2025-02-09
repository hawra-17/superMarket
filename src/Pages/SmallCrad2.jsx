export default function SmallCrad2({ title, img }) {
  return (
    <div
      className="rounded-4xl shadow-2xl bg-zinc-500/25 flex items-center justify-items-start "
      style={{ marginTop: "20px ", marginBottom: "10px" }}
    >
      <img src={img} className="size-15" />
      <p> {title} </p>
    </div>
  );
}
