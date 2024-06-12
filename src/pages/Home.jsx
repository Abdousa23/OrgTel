
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slideshow from "../components/Slides";
import { useAuth } from "../context/AuthContext";
// import Footer from "../components/Footer";
const services = [[0, "free wifi", "vector.png"], [1, "swimming pool", "makiSwimming0.png"], [2, "breakfast", "Vector-1.png"], [3, "24/7 light", "Vector-2.png"], [4, "parking space", "Vector.png"], [5, "private beach", "TreePalm.png"], [6, "Business center", "Buildings.png"], [7, "laundry", "Vector-3.png"]];

const Home = () => {
  const {auth} = useAuth();
  return (
    <div className="">

      <div className="landing container text-center mx-auto my-16 ">
        <p className=" font-medium text-base"><i></i> BP,33,tichi,bejaia</p>
        <h1 className="text-6xl font-bold m-8 max-sm:text-1xl max-sm:font-medium"><span className="text-primary font-semibold">Effortless</span> booking,<br /> Unforgettable <span className="text-primary font-semibold">comfort</span></h1>
        <p className=" text-gray-500 text-base w-1/2  m-auto">Discover unparalleled comfort and seamless bookings with our HotelHub Pro – where every stay
          becomes a memorable experience</p>
        <button className="px-12 py-2 my-12 rounded bg-primary text-white"><Link to="/auth/login" className="w-full">Start Booking</Link></button>
      </div>
      <Slideshow />
      <div className="services mb-16">
        <h1 className=" text-2xl mb-16 font-semibold text-center ">Our Services</h1>
        <div className="cards container m-auto">
          {services.map((service) => {
            return <div className="card flex flex-col justify-around items-center m-auto" key={service[0]}>
              <img src={`/src/assets/${service[2]}`} className=" h-10w-10" alt="" />
              <p className=" text-gray-500 text-center">{service[1]}</p>
            </div>;
          })}
        </div>
      </div>
      <div className="rooms mb-16">
        <h1 className=" text-2xl mb-16 font-semibold text-center ">Rooms</h1>
        <div className="container room bg-primary w-3/4 m-auto flex justify-start text-left items-start overflow-hidden">
          <div className="  my-8  flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl font-medium w-1/2">Take Your Room Now</h1>
            <p className=" text-white w-1/2 m-8 ">Experience luxury at Syphax Hotel – where modern elegance
              meets comfort in amazing rooms, your perfect sanctuary await</p>
            <button className=" bg-white text-primary p-4 rounded w-fit font-medium  "><Link to="reservations"> Show Rooms</Link></button>
            {/* conditional rendering if user redirect to reservations else go to login */}
          </div>
          <div className="flex">
            <img src="/src/assets/Room Card.png" className="w-72 relative top-16 right-16 max-lg:hidden" alt="" />
            <img src="/src/assets/Room Card (1).png" className="w-72 relative top-32 right-32 max-lg:hidden" alt="" />
          </div>
        </div>
      </div>

      <h1 className=" text-2xl font-semibold mb-8 text-center ">Events</h1>
      <div className="events lg:flex-col m-auto container mb-16">
        <div className="event m-auto h-96 flex flex-col lg:flex-col justify-center items-stretch overflow-hidden flex-wrap">
          <div className="rounded-2xl imgcontainer ml-auto  relative overflow-hidden">
            <img src="/src/assets/Event Card.png" className=" hover:scale-150 transition" alt="" />
            <p className="absolute left-0 bottom-0 pl-2 pb-2  text-white  font-semibold text-4xl max-sm:text-base">Reveillon with singers and djs</p>
          </div>

          <div className="w-fit flex flex-col mx-2 gap-1 ">
            <div className="imgcontainer rounded-2xl relative overflow-hidden"> <img src="/src/assets/Event Card-2.png" className=" hover:scale-150 transition  " alt="" />
              <p className="absolute left-0 bottom-0 pl-2 pb-2  text-white  font-semibold text-4xl max-sm:text-base">soire musical</p>
            </div>
            <div className=" rounded-2xl imgcontainer relative overflow-hidden"> <img src="/src/assets/Event Card-1.png" className=" hover:scale-150 transition" alt="" />
              <p className="absolute left-0 bottom-0 pl-2 pb-2  text-white  font-semibold text-4xl max-sm:text-base">winter party</p>
            </div>
          </div>
        </div>
      </div>
    </div>)
};

export default Home;
