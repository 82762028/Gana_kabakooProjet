

import React, {useState, useEffect} from 'react'

export default function Skills() {
const [apiData, setData] = useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('../src/assets/api/featured.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data.playlists.items[0].images[0].url)
      setData(data.playlists.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

 // Utilisez une boucle for pour éliminer le dernier élément du tableau
 const apiDataCopy = [...apiData]; // Créez une copie du tableau




  return (
   <section id='skills' className='py-2 bg-gray-800 relative' >
    <div className='mt-8 text-gray-100 text-center w-full'>
     <h3 className='text-4xl font-semibold  h2'> <span className='text-cyan-600'>Featured</span> </h3> 
     <hr style={{marginTop:'15px',background:'red', width:'150px', margin: '50px auto'}} />

     <p className='text-gray-400 mt-3 text-lg'></p>
  
     <div className='futeared flex flex-wrap gap-5 text-4xl items-center justify-center'>
  {apiData.map((playlist) => (
    <div key={playlist.id} className='futeared-img my-5 mx-5'>
      {playlist.images && playlist.images.length > 0 && (
        <div>  
                  <img src={playlist.images[0].url} alt={playlist.name} />
   
          <div class="futeared--modal">
        <div className='fut'>
      <span class="futeared-title">{playlist.description} </span>
          <h5 class="futeared-subtitle">publié le 12/12/2022</h5>
              <a href={playlist.external_urls.spotify} class="futeared-button">
                 voir
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


