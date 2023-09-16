
import React from 'react'


export default function Hero() {
 
  const social_media = [
  
    'logo-linkedin',
    'logo-twitter',
    'paper-plane'
  ]



  return (
   <section id='home' className='min-h-screen flex py-10 md:flex-row flex-col items-center'>
   

    <div className='flex-1 hometext'>
      <div className='md:text-left text-center mx-5 my-10'>
        <h2 className='md:text-3xl text-2xl md:leading-normal leading-10 text-white font-bold'>
          <span className='text-orange-600 md:text-4xl text-4xl'>
          
          Bienvenue !! <br />
          </span>
          Sur<span> Le site Favorite du gospel en  streamings  </span> Savourez les meilleurs
          de tous genres 
          </h2>
          <div className='flex flex items-center justify-center m-10'>

                <button className='decouvrir'>Découvrir</button> 
               
                <button className='commencer'>Commencer</button>
          </div>
      </div>

    </div>
    <div className='flex-1 flex items-center justify-center h-full'>
 

 </div>

   </section>
  )
}

