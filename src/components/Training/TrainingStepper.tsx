import Navbar from "../Navbar";
import UserStepper from './UserStepper';

const TrainingStepper = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070B12] pt-28 text-white">
        <UserStepper />
      </main>
    </>
  );
};

export default TrainingStepper;
