import { Link, Outlet } from "react-router-dom";
import Logo from "../images/logo.png";

export default function NavBar() {
  const taps = [
    { label: "Home", path: "" },
    { label: "Cart", path: "cart" },
  ];

  return (
    <div className="min-w-screen bg-white flex flex-col h-screen container mx-auto p-4 ">
      {/* Navigation Bar */}
      <header
        className="  bg-zinc-500/25 p-4 flex justify-between sticky top-0 left-0 z-50"
        style={{ marginBottom: "40px" }}
      >
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="size-28" />
          <p className="text-black text-6xl">Lemona</p>
        </div>
        <nav className="flex items-center gap-3 text-4xl">
          {taps.map((tap) => (
            <Link
              to={`/${tap.path}`}
              key={tap.path}
              className="text-black hover:underline"
            >
              {tap.label}
            </Link>
          ))}
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-grow pt-8">
        {" "}
        {/* Adjusted padding-top */}
        <Outlet />
      </main>
    </div>
  );
}
