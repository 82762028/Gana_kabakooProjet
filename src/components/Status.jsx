


import hero from '../images/back1.jpg'

import projet1 from '../images/projet1.jpg'
import projet2 from '../images/projet2.jpg'
import projet3 from '../images/projet3.jpg'
import projet4 from '../images/projet4.jpg'
import projet5 from '../images/projet5.jpg'
import projet6 from '../images/projet6.jpg'
import projet7 from '../images/projet7.jpg'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination,Autoplay} from 'swiper';
import React, { useEffect, useState } from 'react'

export default function Status() {

  const [apiData, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../src/assets/api/featured.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.playlists.items[3].images[0].url)
        setData(data.playlists.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  



  return (
   <section id="projects" className='py-10' text-white>
    <div className='text-center'>
    <h3 className='text-4xl font-semibold  h2'> <span className='text-cyan-600'>Music Actus</span> </h3> 
     <hr style={{marginTop:'15px',background:'red', width:'150px', margin: '50px auto'}} />

    </div> <br />
    <div className='items-center md:gap-6 gap-12 px-10 px-10 max-w-6xl mx-auto'>
      <div className='lg:w-3/3 w-full'>
        <Swiper  slidesPerView={1.5} spaceBetween={20}
          breakpoints={{
            768:{
              slidesPerView: 2,
            }
        }}
        loop={true} autoplay={{
          delay:3000,
        }}
        pagination={{
          clickable:true,
        }}
        modules={[Pagination,Autoplay]}
        >
     
           

          {apiData.map((playlist) => (
   <SwiperSlide  key={playlist.id}>
      {playlist.images && playlist.images.length > 0 && (
      <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
      <img src={playlist.images[0].url}  alt='' className='rounded-lg'/>
      <h3 className='text-xl my-4' style={{color:'white'}}>{playlist.description} </h3>
      <div className='flex gap-3'>
        <a  href={playlist.external_urls.spotify} className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Watch</a>

      </div>

    </div>


      )}
 
 </SwiperSlide>
  ))}
    </Swiper>

      </div>

    </div>

   </section>
  )
}


