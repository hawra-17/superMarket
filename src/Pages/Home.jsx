import Card from "./Card";
import Card2 from "./Card2";
import SmallCard from "./SmallCard";
import veg from "../images/boo.png";
import orange from "../images/orange.png";
import meat from "../images/meat.png";
import Basket1 from "../images/Basket1.png";
import Slider from "./Slider";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full p-10 bg-white">
      <Card style={{ marginTop: "40px", marginBottom: "80px" }} />
      <p className="text-black text-2xl" style={{ marginTop: "40px" }}>
        Top catogoary
      </p>
      <div className="flex" style={{ marginTop: "40px", marginBottom: "80px" }}>
        <SmallCard title="Brows all " img={Basket1} />
        <SmallCard title="Vegetables" img={veg} />
        <SmallCard title="Meat" img={meat} />
        <SmallCard title="Fruits" img={orange} />
      </div>

      <Card2 style={{ marginTop: "40px", marginBottom: "80px" }} />
      <Slider />
    </div>
  );
}
