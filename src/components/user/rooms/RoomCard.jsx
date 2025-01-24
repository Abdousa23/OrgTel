import { Link } from "react-router-dom";
import HotelIcon from '@mui/icons-material/Hotel';

const Default ={
  image:"https://res.cloudinary.com/dekmr7qlp/image/upload/v1702662380/hotelroom_t9k4d3.png",
  capacity:'3 ',
  price:20,
  door:2,
  id:Math.random()*100
}

const RoomCard = ({ room = Default  }) => {
  return (

    <div className=" w-[95%]  h-fit my-4  bg-white rounded overflow-x-hidden shadow-lg">
      <div className="overflow-x-hidden ">
        <img src={room.image} className="w-[80%]" alt="" />
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
RoomCard.defaultProps = {
  room: Default
};

export default RoomCard;
