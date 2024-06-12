import { useState, useEffect } from "react";
import RoomCard from "../../components/user/rooms/RoomCard";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredRooms, setFilteredRooms] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getRooms = async () => {
      try {
        const res = await fetch(`${apiUrl}/rooms`);
        const data = await res.json();
        setRooms(data);
        setFilteredRooms(data); // Set filteredRooms to all rooms by default
      } catch (error) {
        setError(error.message);
      }
    };
    getRooms();
  }, [apiUrl]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(`${apiUrl}/categories`);
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getCategories();
  }, [apiUrl]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const filter = rooms.filter(
      (room) => room.category.toLowerCase() == category.toLowerCase()
    );
    setFilteredRooms(filter);
  };

  return (
    <section className="container mx-auto ">
      {error && <h2>{error}</h2>}
      <div className="flex flex-col gap-5">
        {rooms && (
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center gap-7 flex-wrap">
              {categories.map((cat) => (
                <button key={cat.id} onClick={() => handleCategoryClick(cat)}>
                  {cat.name}
                </button>
              ))}
              {/* <button onClick={() => setFilteredRooms(rooms)}>all</button> */}
            </div>
            {/* <div className="flex flex-wrap"> */}
            {/* {filteredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))} */}

            <div className="slider flex row overflow-hidden h-fit">
              <Carousel autoPlay
                infiniteLoop
                useKeyboardArrows
                dynamicHeight={false}
                centerMode
                centerSlidePercentage={33}
                showStatus={false} // This will hide the number of cards
                heightMode="max" // This will make the carousel take up the full height of its container
                showArrows={true} // This will show arrows on the screen for scrolling
              >
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
              </Carousel>
            </div>
            {/* </div> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Rooms;
