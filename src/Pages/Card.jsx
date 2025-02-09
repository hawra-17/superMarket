import Pshop from "../images/Pshop.png";
import Delivery from "../images/Delivery guy.png";

export default function Card() {
  return (
    // card container
    <div className=" bg-green-100 rounded-2xl shadow-lg flex flex-row items-center justify-between max-w-7xl mx-auto">
      <div className="flex flex-col justify-items-center p-16">
        {/* small card */}
        <div
          className="rounded-4xl shadow-2xl  bg-zinc-500/25 flex items-center justify-items-start  "
          style={{ marginLeft: "50px" }}
        >
          <img src={Delivery} alt="Delivery" className="size-12" />
          <p className="text-white font-bold text-lg text-center">
            Free Delivery
          </p>
        </div>
        <div
          className="text-red-500 text-6xl text-center p-4 "
          style={{ marginLeft: "50px" }}
        >
          <p> Make a healthy</p>
          <p>choice today</p>
          <p> with Lemona</p>
        </div>
      </div>
      {/* Right Side: Pshop Image */}
      <img src={Pshop} alt="Pshop" className="size-96" />
    </div>
  );
}
