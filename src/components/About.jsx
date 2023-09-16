
import React from 'react'
import hero from '../images/about.png.webp'
export default function About() {


  const info = [
    {text:'année d"experiences', count:'03'},
    {text:'Des Projets effectués', count:'04+'},
    {text:'Entreprise', count:'01'},
  ]
  return (
    <>
  

  <section id='about' className='py-10 text-white  bg-gray-800 '>
 
     <div className='text-center mt-8'>
     <h3 className='text-4xl font-semibold  h2'> <span className='text-cyan-600'>A propos  de nous</span> </h3> 
       <hr style={{marginTop:'15px',background:'red', width:'150px', margin: '50px auto'}} />
       <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 px-1'>  
    
       <div className='text-gray-300 my-3 p-2 lg: w-[100%] md:w-[60%]'>
           <p className='text-justify leading-7'>
   Decouvrir en streamings les meilleurs du gospel music malien Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ab facere laboriosam. Reprehenderit cumque veniam ipsa facilis explicabo tenetur dicta! 
   Beatae molestias deserunt totam necessitatibus perspiciatis natus, sint reiciendis provident.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis neque officia possimus quo non cumque quisquam animi modi vero e
xercitationem, corrupti architecto quia voluptatibus alias provident ex inventore. Aut, ea.
           </p>
  
           <br/>
           <br/>

        </div>
  
        <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center aboutimage1'>
          <div  className='lg:w-48 md:w-[40%] h-full relative sm:w-10/12 w-10/12 max-w-sm  aboutImg'>
                      
           <img src={hero}   alt="" className='aboutimage'/>
           
          </div>


        </div>
      
       </div>



     </div>

     <h3 style={{marginTop:'65px'}} className='text-4xl font-semibold  h2 text-center'> <span className='text-cyan-600'>Contacter nous</span> </h3> 
     <hr style={{marginTop:'15px',background:'red', width:'150px', margin: '50px auto'}} />

    </section>
 
    </>
   
  )
}

