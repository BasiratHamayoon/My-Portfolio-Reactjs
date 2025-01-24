import React from 'react';
import image from "../assets/Home-Images/bg-image.jpg"

const Home = () => {
  return (
    <div>
        <div className='relative h-[80vh] w-full bg-cover bg-center' 
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url(${image})`}}>

        </div>
      
    </div>
  );
}

export default Home;
