"use client"
import React, { useEffect, useState } from 'react'
import "./style.css"
import Image from 'next/image'
import Subscribe from '@components/Subscribe/page'
import Link from 'next/link'


const Contact = ()=>{
  return(
    <div className='w-full flex justify-center'>
      <div className='w-full lg:w-4/5 flex flex-col lg:flex-row gap-7 lg:p-16'>
        
        <div className='flex-1 w-full  lg:w-1/2 flex justify-center lg:justify-start items-start flex-col'>
          <h1 className='text-4xl font-thin'>LET'S GET</h1>
          <h1 className='text-4xl'><strong>STARTED</strong></h1>
        </div>

        <div className='flex-1 '>
          <form className="mx-auto p-4 bg-white  flex flex-col gap-5">
            <div className="mb-4 flex flex-col ">
              <label id='label-1' htmlFor="fullName" className="mb-2">Full Name</label>
              <input type="text" id="fullName" name="fullName" className="input"/>
            </div>

            <div className="mb-4 flex flex-col">
              <label id='label-2' htmlFor="phoneNumber" >Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" className='input' />
            </div>

            <div className="mb-4 flex flex-col">
              <label id='label-3' htmlFor="email" >Email</label>
              <input type="email" id="email" name="email" className='input' />
            </div>

            <div className="mb-4 flex flex-col">
              <label id='label-4' htmlFor="message" >Message</label>
              <textarea id="message" name="message" rows="4" className='input' ></textarea>
            </div>

            <div className="w-2/3 p-2 button text-center"  >
                Submit
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

const Properties = () => {

  const[properties, setProperties] = useState([]);
  
  useEffect(()=>{
      const getProjects =async()=>{
          const res = await fetch('/api/projects',{
              method: 'GET',
          });
          const data = await res.json();
          
          setProperties(data);
      }

      getProjects();


  },[]);

  return (
    <div className='w-full pt-16'>
        <Image
            src={'/Projects/projects.jpg'}
            width={2000}
            height={300}
            className='w-full'
            alt='projects'
        >
        </Image>

        <div className='w-4/5 mx-auto flex flex-col lg:flex-row gap-3 mt-16'>
          <div className='flex justify-start flex-col text-4xl flex-1 lg:pl-28'>
            <h1 className='font-thin'>PROJECTS BY</h1>
            <strong>MASNIONS</strong>
          </div>

          <div className='flex flex-col gap-3 flex-1 '>
            <h1 className='text-xl font-semibold'>THE MASNIONS NAME</h1>
            <p>Putting the established MASNIONS brand to your upcoming project adds a unique layer of credibility. The most successful developments occur when the purchasing public trust the people behind, and in front of, the project. Working with MASNIONS projects means the opportunity to buy into MASNIONS's strong local associations, broad client database, and their intimate knowledge of how to negotiate for the best possible outcome.</p>
          </div>
        </div>

        <div className=' w-full flex flex-col lg:flex-row gap-4 mx-auto mt-20 '>
          <div className='flex flex-1 flex-col justify-start items-center'>
            <div className='w-4/5 lg:w-2/3 lg:p-6'>
              <h1 className='text-2xl lg:text-4xl tracking-wider'>UNIQUE </h1>
              <strong  className='text-2xl lg:text-4xl tracking-wider'>EXPERTISE</strong>
            
              <div className='flex flex-col gap-10 w-full mt-12'>
                <p>MASNIONS entered the project marketing landscape some 50 years ago, selling ground breaking commercial and residential properties that today form the backbone of the city and surrounds as we know them.</p>
                <p>Major projects and notable property sales in Geelong and the Bellarine , Cunningham Pier, Steampacket House, Suma Park, Leura Park, Waverly Farm, St Albans Stud, Corio Villa, Soho, Raith and Spray Farm</p>
              </div>
              <div className='button md:w-2/3 mx-auto lg:mx-0 xl:w-1/2 text-center p-3 mt-16'>
                MEET THE TEAM
              </div>
            </div>
            
          </div>
          <div className='w-full flex flex-1 justify-center'>
            <Image
              src={'/Projects/projects-1.jpg'}
              width={2000}
              height={300}
              className='w-full md:pr-4'
              alt='projects'
              >
              </Image>
          </div>
        </div>


        <div className='w-full mt-20 mb-20'>
        <div className='w-full flex flex-row flex-wrap gap-x-10 gap-y-10 justify-center mt-5'>
          { properties.map((property) => {
            let homeImage = property.imageUrls.find((url) => url.includes("home"));
            if (homeImage === undefined) homeImage = "/no-photos.png";
            return (
              <Link
              href={`/projects/${property.id}`}
              key={property.id}
              >
                <div               
                className='relative w-56 h-56 rounded-lg bg-cover bg-center hover:opacity-60 cursor-pointer'
                style={{ backgroundImage: `url(${homeImage})` }}               
              >
                {property.status === false && (
                  
                <div className="absolute top-0 left-0 w-auto rounded-tl-lg p-2 px-3 bg-red-500 text-black">
                  SOLD
                </div>
                )}
                <div className='w-full h-full rounded-lg bg-black bg-opacity-20 flex flex-col justify-center items-center'>
                  <h1 className='text-white text-lg font-semibold'>{property.address}</h1>
                  <p className='text-white text-sm'>{property.minPrice}$ ~ {property.maxPrice}$</p>
                </div>
              </div>
              </Link>
              
            );
          })}

          
        </div>
      </div>

        <div className='w-full '>
          <div className='w-full py-8 flex xl:flex-row flex-col gap-4 p-4'>
            <div className='flex-1'>
                <Image
                  src={'/Projects/projects-3.jpg'}
                  width={2000}
                  height={300}
                  alt='projects'
                >
                </Image>
            </div>

            <div className='flex-1 flex justify-center'>
              <div className='w-full xl:w-2/3 flex flex-col gap-10'>
                <div className='flex flex-col'>
                  <h1 className='lg:text-4xl tracking-wider font-thin'  >OUR</h1>
                  <strong className='lg:text-4xl tracking-wider'>DIFFERENCE</strong>
                </div>
                <p>To get the best outcome you need to start from the ground up. You need to know how to accurately assess value as well as be able to identify the project’s likely buyer market.</p>
                <p>James MASNIONS, Director of MASNIONS Real Estate, is a leader in Geelong real estate and will offer his 20-plus years of experience to every project undertaken. He’ll work closely with valuers, engineers, builders and other development consultants to ensure the project is taken from infancy to completion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full bg-gray-200'>
          <div className='w-full py-8 flex xl:flex-row flex-col-reverse gap-4 p-4'>
            <div className='flex-1 flex justify-center'>
              <div className='w-full xl:w-2/3 flex flex-col gap-10'>
                <p>He understands that a precise execution is everything, and that before the project is taken to market, a clear plan and strategy, together with a specialised marketing campaign, will drive the very best result.</p>
                <p>MASNIONS will take a thoughtful and considered approach, targeting the project to local and extended networks, utilising a database of qualified buyers.</p>
                <p>On completion, we will provide a summary of post-sales debriefs and coordinate any leasing and property management, if required.</p>
              </div>
            </div>

            <div className='flex-1'>
              <Image
                src={'/Projects/projects-2.jpg'}
                width={2000}
                height={300}
                alt='projects'
              >

              </Image>
            </div>
          </div>
        </div>

        
       <Contact/>
       <Subscribe/>
    </div>
  )
}

export default Properties