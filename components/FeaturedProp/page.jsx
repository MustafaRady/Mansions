"use client"

import { getProperties } from '@services/database';
import './style.css';
import {useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';


const Featured
 = (properties) => {
  const [propertiesFetched, setPropertiesFetched] = useState([])
  const router = useRouter();

  


  useEffect(() =>{
    getProperties().then(
      (properties) => {
        setPropertiesFetched(properties.slice(0,5))
        
      }
    ).catch((error) => {
      console.log(error);
    })
  },[]);



  return (
    <div className='w-full mt-20 mb-20'>
        <div>
          <h1 className='text-center text-4xl font-semibold'>FEATURED PROPERTIES</h1>
        
          <div className='w-full flex flex-row flex-wrap gap-x-10 gap-y-10 justify-center mt-5'>
              {propertiesFetched.map((property)=>{
                let homeImage = property.imageUrls.find((url) => url.includes("home"));
                if (homeImage === undefined) homeImage = "/no-photos.png"; 
                return(
                  <div
                    key={property.id} // Ensure each div has a unique key
                    className='w-96 h-72 rounded-lg bg-cover bg-center hover:opacity-60 cursor-pointer'
                    style={{ backgroundImage: `url(${homeImage})` }}
                    alt={property.name}
                    onClick={()=>router.push(`/projects/${property.id}`)}
                  >
                    <div className='w-full h-full rounded-lg bg-black bg-opacity-20 flex flex-col justify-center items-center'>
                      <h1 className='text-white text-lg font-semibold'>{property.address}</h1>
                      <p className='text-white text-sm'>{property.price}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
    </div>
  )
}



export default Featured
