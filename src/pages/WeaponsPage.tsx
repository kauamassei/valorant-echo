import Navbar from "../components/Navbar";
import Weapons from "../components/Weapons";
import lotusValorant from "../assets/lotusValorant.jpg";

const WeaponsPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src={lotusValorant} alt="" className="w-full h-screen object-cover md:h-auto md:object-contain" />
      </div>
      <div className="">

        <Weapons />
      </div>
    </>
  );
};

export default WeaponsPage;
