import Delivery from "../images/delivery2.png";
import SmallCrad2 from "./SmallCrad2";
import DeliveryGuu from "../images/Delivery guy.png";
import Money from "../images/Money.png";
import FastD from "../images/FastD.png";
export default function Card2() {
  return (
    <div
      className="bg-green-100 rounded-2xl shadow-lg flex flex-row mx-w-7xl mx-auto "
      style={{ marginBottom: "50px" }}
    >
      <div
        className="flex flex-col  "
        style={{ marginTop: "30px", marginLeft: "30px" }}
      >
        <p className="text-red-500 text-5xl text-start">Why should you use</p>
        <p
          className="text-red-500 text-5xl text-start"
          style={{ marginBottom: "10px" }}
        >
          our Service?
        </p>
        <p className="text-zinc-500/50 font-bold text-start">
          we always provide the best and fastest
        </p>
        <p className="text-zinc-500/50 font-bold text-start">
          service for all our customers
        </p>
        <SmallCrad2 title="We provide the fastest delivery" img={DeliveryGuu} />
        <SmallCrad2 title="We provide the fastest delivery" img={Money} />
        <SmallCrad2 title="We provide the fastest delivery" img={FastD} />
      </div>
      <img src={Delivery} className="size-96" />
    </div>
  );
}
