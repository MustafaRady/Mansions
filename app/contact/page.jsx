
"use client"
import Image from "next/image"
import { useEffect } from "react";
const Contact = () => {


    useEffect(() => {
        // Initialize the Google Map
        if (typeof window !== 'undefined') {
          const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          });
    
          new google.maps.Marker({
            position: { lat: -34.397, lng: 150.644 },
            map,
            title: 'Our Location',
          });
        }
      }, []);

  return (
    <div className='w-full '>
        <div className='w-full'>
            <Image
                
                src={"/contact.jpg"}
                width={1500}
                height={400}
                alt="Contact Us"
            >
            </Image>
        </div>
        
        <div className="w-full">
            <div className="w-full lg:pl-0 lg:w-5/6 mx-auto mt-10 flex flex-col lg:flex-row flex-wrap gap-x-16 gap-y-7">
                <div className="flex-1 w-5/6 m-auto lg:m-0">
                    <h1 className="text-3xl md:text-5xl flex flex-col lg:pr-6">
                        <span className="font-thin">OUR</span> 
                        <span className="font-semibold">LOCATION</span>
                    </h1>
                </div>
                <div className="flex-1 w-5/6 m-auto flex items-start justify-start ">
                    <p className="text-xl md:text-2xl font-thin leading-8 "> 
                        MASNIONS is positioned in a great Newtown location opposite Kardinia Park, the home of the Geelong Cats, and adjacent to the thriving Pakington Street retail strip
                    </p>
                </div>
            </div>


            <div className="w-5/6 mx-auto mt-16 flex flex-col lg:flex-row flex-wrap gap-x-10 gap-y-7">
                <div className="flex-1 flex font-thin  ">
                    <div className="w-full md:w-3/6 flex flex-col flex-wrap gap-y-5 ">
                        <p className="pl-2">
                        408 Latrobe Tce,
                        <br />
                        Newtown Geelong 3220
                        </p>

                        <div className="flex flex-col gap-x-10 ">
                            <div className="flex flex-row gap-x-4">
                                <Image 
                                    width={30}
                                    height={30}
                                    src={"/phone.png"}
                                    alt="Phone"
                                >

                                </Image>
                                <span>
                                +613 5222-1922
                                </span>
                            </div>

                            <div className="flex flex-row gap-x-4">
                                <Image 
                                    width={30}
                                    height={30}
                                    src={"/letter.png"}
                                    alt="Email"
                                >

                                </Image>
                                <span>
                                    info@example.com
                                </span>
                            </div>

                            <div className="w-full mt-10 ">
                                <div className="button p-4 text-center cursor-pointer" >
                                    GET DIRECTIONS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div id="map" style={{ height: '400px', width: '100%' }}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact