import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library

const ReservationDetails = () => {
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    duration: null,
    debut_date: null,
    bedroom: null,
    end_date: null,
  });

  const { roomId } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;

  const convertDurationToDaysAndHours = (debutDate, endDate) => {
    const durationInMillis = endDate - debutDate;
    const durationInSeconds = durationInMillis / 1000;
    const days = Math.floor(durationInSeconds / (24 * 60 * 60));
    const hours = Math.floor((durationInSeconds % (24 * 60 * 60)) / (60 * 60));
    return { days, hours };
  };

  const bookRoom = async () => {
    const id = uuidv4();
    const { days, hours } = convertDurationToDaysAndHours(
      formData.debut_date,
      formData.end_date
    );

    const res = await fetch(`https://hotel-managment.onrender.com/api/rooms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        room_id: roomId,
        debut_date: formData.debut_date,
        end_date: formData.end_date,
        bedroom: formData.bedroom,
        duration: { days, hours },
      }),
    });

    const data = await res.json();

    if (res.status === 201) {
      document.write("success");
    } else {
      document.write(data.error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bookRoom();
  };

  useEffect(() => {
    const getRoom = async () => {
      try {
        const res = await fetch(`https://hotel-managment.onrender.com/api/rooms/${roomId}`);
        const data = await res.json();
        setRoom(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getRoom();
  }, [roomId, apiUrl]);

  return (
    <section>
      {/* {room && <div>{room.price}DA</div>} */}

      <div>
        <form className="flex max-md:flex-col gap-4 rounded w-fit mx-auto bg-primary p-6 justify-center mb-20" onSubmit={handleSubmit}>
          <label className="mt-2">debut</label>
          <input
            type="date"
            className="w-[150px] rounded"
            onChange={(e) =>
              setFormData({ ...formData, debut_date: new Date(e.target.value) })
            }
          />
          <label  className="mt-2">end</label>
          <input
            type="date"
            className="w-[150px] rounded"
            onChange={(e) =>
              setFormData({ ...formData, end_date: new Date(e.target.value) })
            }
          />
          <label  className="mt-2 ">persons number</label>
          <input
            type="number"
            className="w-[150px] rounded"
            onChange={(e) =>
              setFormData({ ...formData, bedroom: e.target.value })
            }
          />
          <button type="submit" className="bg-white text-primary py-2 px-6 rounded">search</button>
        </form>
      </div>        
    </section>
  );
};

export default ReservationDetails;