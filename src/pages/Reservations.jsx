
import ReservationDetails from "./ReservationDetails";
import Rooms from "./user/Rooms";
const Reservations = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl text-black text-center mt-10">Choose Your <span className="text-primary">Suitable</span> Room</h1>
    <ReservationDetails />
      <h2 className="font-semibold text-center mb-4 ">Rooms</h2>
    <Rooms />
    </div>
  );
};

export default Reservations;
