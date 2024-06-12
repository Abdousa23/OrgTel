import React, { useState, useEffect } from 'react';

const images = [
  "/src/assets/Property 1=Default.png",
  "/src/assets/Property 1=Variant2.png",
  "/src/assets/Property 1=Variant3.png",
  "/src/assets/Property 1=Variant4.png"
];

function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(timer); 
  }, []);

  return (
    <div className="relative overflow-hidden h-[400px] w-9/12 container mx-auto">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Property ${i + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
       s   />
      ))}
    </div>
  );
}

export default Slideshow;