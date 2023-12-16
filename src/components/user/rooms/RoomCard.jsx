import { Link } from "react-router-dom";
import HotelIcon from '@mui/icons-material/Hotel';

const RoomCard = ({ room }) => {
  return (

    <div className="max-w-md w-1/5 my-4 mx-6 bg-white rounded overflow-hidden shadow-lg">
      <div className="overflow-hidden ">
        <img src={room.image} className="w-full" alt="" />
        </div>
        <div className="py-4 px-8 relative">
        <h2><HotelIcon color="primary" fontSize="large" /> {room.category}</h2>
        <p>({room.capacity} persons)</p>
        <p>{room.price} DA</p>
        <p>doors :{room.door}</p>
        <div className="flex justify-end mt-4"><button className="bg-primary text-white py-2 px-6  rounded">
          <Link to={`./${room._id}`} className="w-full h-full"> details</Link></button></div>
        </div>
    </div>
  );
};

export default RoomCard;
