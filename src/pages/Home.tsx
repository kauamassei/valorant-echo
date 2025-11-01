import sageBackground from "../assets/sageBackground.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative full">
        <div className="bg-[#1c1c1c]">
          <img
            src={sageBackground}
            alt="Sage Background Image"
            className="w-full h-screen object-cover object-[80%] md:h-auto md:object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-4">
              <button className="bg-[#FF7272] p-2 pl-6 pr-6 text-white border border-b-gray-200">
                Tracker
              </button>
              <button className="bg-[#FF7272] p-2 pl-6 pr-6 text-white border border-b-gray-200">
                Echo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
