import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BookRoomForm from '../components/BookRoomForm';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const services = [[0, "free wifi", "vector.png"], [1, "swimming pool", "makiSwimming0.png"], [2, "breakfast", "Vector-1.png"], [3, "parking space", "Vector.png"]];

const RoomDetails = ({ room }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="min-h-[68.6vh] container mx-auto mt-4">
            <div>
                <div className="w-[80%] mx-auto h-[350px]">
                    <img src={room?.image || "https://res.cloudinary.com/dekmr7qlp/image/upload/v1702662380/hotelroom_t9k4d3.png"} className="w-full h-full" alt="" />
                </div>
            </div>
            <div>
                <div className="w-[80%] mx-auto mt-16">
                    <div className="flex  justify-between items-center">
                        <p className=" text-4xl">{room?.name || 'room34'} <span className="text-[#8E8E8E] text-3xl">({room?.capacity || '2persons'})</span></p>
                        <p className="text-[#6656E1] text-3xl"> {room?.price || '60000'}dzd <span className="text-black text-lg">per night</span></p>
                    </div>
                    <p className="mt-4 text-[#8E8E8E] text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolores accusamus dolore similique laudantium animi, nesciunt nam, provident, necessitatibus obcaecati deserunt deleniti! Fugit, eveniet atque praesentium nobis pariatur unde neque!
                    </p>
                </div>
                <div className="w-[80%] mx-auto my-8">
                    <h1 className=" text-2xl">Services</h1>

                    <div className="cardst container m-auto w-[90%]">
                        {services.map((service) => {
                            return <div className="card flex flex-col gap-10 items-center m-auto" key={service[0]}>
                                <img src={`/src/assets/${service[2]}`} className=" h-10 w-10" alt="" />
                                <p className=" text-gray-500 text-center">{service[1]}</p>
                            </div>;
                        })}
                    </div>
                </div>
                <div className="w-[80%] mx-auto my-8">
                    <h1 className=" text-2xl">Conditions</h1>
                    <div className="flex my-8 max-md:flex-col ">
                        <div>
                            <h1 className="text-lg my-4">Family and children</h1>
                            <p className="text-[#8E8E8E] text-base">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. eum sint in ipsam quo dicta odit vel doloribus minima?
                            </p>
                        </div>
                        <div>
                            <h1 className="text-lg my-4">Cancellation/prepayment</h1>
                            <p className="text-[#8E8E8E] text-base">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. eum sint in ipsam quo dicta odit vel doloribus minima?
                            </p>
                        </div>
                        <div>
                            <h1 className="text-lg my-4">Payment method</h1>
                            <p className="text-[#8E8E8E] text-base">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.eum sint in ipsam quo dicta odit vel doloribus minima?
                            </p>
                        </div>
                        <div>
                            <h1 className="text-lg my-4">Pets</h1>
                            <p className="text-[#8E8E8E] text-base">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. eum sint in ipsam quo dicta odit vel doloribus minima?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-[80%] mx-auto flex justify-end my-16 ">
                <button className=" px-12 py-2 rounded bg-primary text-white" onClick={handleOpen}> Book now</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>                 
                            <BookRoomForm />
                    </Box>
                </Modal>
            </div>

        </div>
    )
}

export default RoomDetails
