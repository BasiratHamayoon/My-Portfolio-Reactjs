import React from 'react';
import profileImage from '../assets/Home-Images/profile-picture.png'

const Home = () => {
  return (
    <div className='flex justify-center items-center w-full lg:px-10'>
        <div className='h-[90vh] w-full bg-cover bg-center grid lg:w-[63%] lg:grid-cols-[70%_30%] 
        gap-4 pt-[100px]'>
          <div className='flex flex-col justify-center items-start'>
              <h1 className='font-handwriting text-[18px]'>Hello, I am</h1>
              <h1 className='text-[30px] font-bold font-bubbler'>BASIRAT HAMAYOON</h1>
              <h1 className='font-bold text-[30px] '>A FRONTEND DEVELOPER</h1>
              <p className='text-[12px] font-bubbler font-semibold'>I am a student of Bacholer in Information Technology and Advance web Application & Mobile Application Development. I consider my self a responsible and orderly person. I am looking forward for my first work experience.</p>
              <button
              className='border-2 font-bold font-bubbler border-black text-black px-[10px] py-[5px] my-[10px] rounded-md text-[14px] hover:bg-black hover:text-white'
              ><a href="https://github.com/BasiratHamayoon?tab=overview&from=2024-01-01&to=2024-01-21" target='_blank'>Veiw My Projects</a>
              </button>
          </div>
          <div className='w-[280px] h-[280px] flex justify-center items-center m-auto'>
            <img src={profileImage} alt="Profile Image" />
          </div>

        </div>
       
    </div>
  );
}

export default Home;
