

import React, {useState, useEffect} from 'react'
import install from 'axios'
import Mong from '../images/mongodb-ar21.svg'
import Sq from '../images/sql-database-generic.svg'
import teenSort from '../images/tensorflow-seeklogo.com.svg'
import brain from '../images/brain-svgrepo-com.svg'
import axios from 'axios'
export default function Categories() {
const [apiData, setData] = useState([])

useEffect(() => {




  const fetchData = async () => {
    try {
      const response = await fetch('../src/assets/api/categories.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data.categories.items[0].icons[0].url)
      setData(data.categories.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);



  return (
   <section id='categories' className='py-2 bg-gray-800 relative' >
    <div className='mt-8 text-gray-100 text-center w-full'>
     <h3 className='text-4xl font-semibold  h2'> <span className='text-cyan-600'>Categories</span> </h3> 
       <hr style={{marginTop:'15px',background:'red', width:'150px', margin: '50px auto'}} />
     <p className='text-gray-400 mt-3 text-lg'></p>
  
     <div className='categorie futeared flex flex-wrap gap-5 text-4xl items-center justify-center'>
  {apiData.map((playlist) => (
    <div key={playlist.id} className='futeared-img my-5 mx-5'>
      {playlist.icons && playlist.icons.length > 0 && (
        <div className='img'>  
          <p className='categorieP'>{playlist.name}</p>
        
                  <img src={playlist.icons[0].url} alt={playlist.name} />
              
                  <div class="categorie--modal cate-fut">
        <div className='fut'>

              <a href="#" class="futeared-button categorie-button">
                 Discover
              </a>
          
      
      
        </div>
      
      </div>
      </div>

      )}
 
    </div>
  ))}
</div>

   
      </div>
    

   </section>
  )
}


