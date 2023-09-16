
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false)
    
    const menuLinks = [
      {
      name:'Home',link:'#home'} ,    
          {
            name:'Futeared',link:'#skills'},
          {
              name:'Categories',link:'#categories'},
              {
                name:'About',link:'/#about'},
              {
              name:'Contacts',link:'#contacts'},
          
                 
                      
  ]

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
        
            const nav = document.querySelector("nav");
            window.scrollY > 100? setSticky(true): setSticky(false);

        } ); 
       
      }, []);




  return (
   <nav 
   className={`fixed w-full left-0 top-0 z-[999] ${sticky ? 'bg-white/60 text-gray-900':'text-white'
   
   }`} >
    <div className='flex ittems center justify-between'>
      <div className='flex mx-7  items-center'>
     
    <h4 className='text-4xl uppercase font-bold'>
    Ev <span className='text-orange-600'> Music </span>
    </h4>

      </div>
      <div  className={`${sticky ? 'md:bg-white/0 bg-white':'bg-white'} text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full`}>
        <ul className='flex items-center gap-1 py-2 text-lg'>
         
               {menuLinks?.map((menu,i)=>(
                 <li key={i} className='px-2 hover:text-cyan-600 text-3xl'> 
                  <a href={menu?.link} className='hover:border-t-2 hover:border-orange-600 hover:text-orange-600 text-gray-900 transition duration-500'>{menu?.name}</a>    
                 </li>
               ))
               }
                
     <li>
                <a href="https://www.facebook.com/gana.sagara.3/?viewas=100000686899395" style={{boxShadow: 'black 0px 0px 4px 0px'}} className='ok bg-orange-500 hover:bg-orange-700 text-white  py-2 px-2 rounded-full'>
                <ion-icon name={'logo-instagram'}></ion-icon>

                </a>
                </li>
                <li>
                <a href='https://www.facebook.com/gana.sagara.3/?viewas=100000686899395' className='ok bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded'>
                <ion-icon name={'logo-facebook'}></ion-icon>
 
                </a>

               </li>
     
        </ul>


      </div>
      <div onClick={()=> setOpen(!open)} className={` z-[999]  ${open? "text-rose-900":"text-gray-100"}  text-4xl md:hidden m-5`}>
      <ion-icon name={open?'close':'menu'}></ion-icon>

      </div>
      <div  className={`shadow-2xl md:hidden text-gray-900 absolute w-2/3   px-10 py-16 font-medium bg-white top-0 duration-300  ${open ? 'right-[-10px]': 'right-[-100%]'}`}>
        <ul className='flex flex-col justify-center gap-10  text-lg h-full py-2' >
     
        {menuLinks?.map((menu,i)=>(
                 <li key={i} className='px-2 hover:text-cyan-600 text-3xl'> 
                  <a href={menu?.link} className='hover:border-t-2 hover:border-orange-600 hover:text-orange-600 text-gray-900 transition duration-500'>{menu?.name}</a>    
                 </li>
               ))
               }
     
     <li>
                <a href="#login" style={{boxShadow: 'black 0px 0px 4px 0px'}} className='bg-orange-500 hover:bg-orange-700 text-white  py-2 px-2 rounded-full'>
                <ion-icon name={'logo-instagram'}></ion-icon>

                </a>
                </li>
                <li>
                <a href='#signin' className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded'>
                <ion-icon name={'logo-facebook'}></ion-icon>
 
                </a>

               </li>
     


        </ul>
      </div>




    </div>
   </nav>
  )
}

