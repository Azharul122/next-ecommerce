import Image from "next/image";
import NewProducts from "./Components/NewProducts/NewProducts";
import Slider from "./Components/Slider/Slider";
import CategoryBanner from "./Components/CategoryBanner";
import Services from "./Components/Services/Services";

export default function Home() {
  return (
    <main className="">
      <Slider></Slider>
      <CategoryBanner></CategoryBanner>
      <NewProducts></NewProducts>
      <Services></Services>
    </main>
  );
}
