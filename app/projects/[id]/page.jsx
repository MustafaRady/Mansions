"use client"
import Image from "next/image"
import "./style.css"
import { useEffect , useState } from "react"
import Loader from "@components/Loader/page"
import { notFound } from "next/navigation"

const SingleProperty = ({params}) => {
  const [property, setProperty] = useState(null);
  const [homeImage, setHomeImage] = useState(null);
  const [toggleLocation, setToggleLocation] = useState(false);
  const [togglePropertyDetails, setTogglePropertyDetails] = useState(false);
  const [toggleFeatures, setToggleFeatures] = useState(false);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const initializeMap = () => {
      if (typeof window !== 'undefined' && document.getElementById('map')) {
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
    };

    if(!loading){
      setTimeout(initializeMap, 1000);
    }
    
  }, [loading])

  const handleToggleLocation = ()=>{
    setToggleLocation((prev)=>!prev);
  }

  const handleTogglePropertyDetails = ()=>{
    setTogglePropertyDetails((prev)=>!prev);
  }

  const handleToggleFeatures = ()=>{
    setToggleFeatures((prev)=>!prev);
  }

  
  useEffect( () => {
    setLoading(true);
    const getPropertyById = async()=>{
      const res = await fetch(`/api/property/${params.id}`);
      const data = await res.json();
      setProperty(data.data);
      setLoading(false);
    }
    getPropertyById()
    
  }, [])
  
  useEffect(() => {
    if(property){
      var homeImage = property?.imageUrls?.find((url) => url.includes("home"));
      setHomeImage(homeImage)
    }
  }, [property])
  
  return (
    <div className="w-full">
      {loading && <Loader />}
      {!loading &&(<div className='w-full'>
            <Image
              src={homeImage?homeImage:"/no-photos.png"}
              width={1500}
              height={300}
              alt="home"
              priority={true}
              unoptimized 
            >
            </Image>

            <div className="w-full mt-20 ">
              <div className="w-4/5 mx-auto flex flex-col lg:flex-row gap-10">
                <div className="flex-1 flex flex-col gap-5">
                  <h1 className="text-4xl font-semibold text-green-700">{property?.subAddress}</h1>
                  <h1 className="text-4xl font-semibold text-green-700">{property?.address}</h1>
                  <div className="flex flex-row gap-10 mt-6 ">
                    <div className="flex flex-row gap-x-2 items-end ">
                      <Image
                        src={'/SingleProperty/bathroom.png'}
                        width={30}
                        height={30}
                        alt="bathroom"
                        className=""
                        priority={true}
                        
                      >

                      </Image>
                      <h1>
                        {property?.bathrooms}
                      </h1>
                    </div>

                    <div className="flex flex-row gap-x-2 items-end">
                      <Image
                        src={'/SingleProperty/bed.png'}
                        width={30}
                        height={30}
                        alt="bedRoom"
                        priority={true}
                      >

                      </Image>
                      <h1>
                        {property?.bedrooms}
                      </h1>
                    </div>

                    <div className="flex flex-row gap-x-2 items-end">
                      <Image
                        src={'/SingleProperty/vehicle.png'}
                        width={30}
                        height={30}
                        alt="carRoom"
                        priority={true}
                      >

                      </Image>
                      <h1>
                        {property?.carSpaces}
                      </h1>
                    </div>
                  </div>
                  <p className="text-md text-green-700 font-medium">{property?.minPrice}$ ~ {property?.maxPrice}$</p>
                </div>


                <div className="flex-1 flex flex-col gap-10">
                  <h1>
                    {property?.description}
                  </h1>
                </div>
              </div>
            </div>

            {/* GALLERY */}
            <div className="w-full mt-10 flex flex-col ">

                <h1 className="pl-4 w-full text-center text-2xl pb-8 ">GALLERY</h1>
                <div className="flex flex-col items-center  lg:flex-row lg:overflow-x-scroll gap-y-4 gap-x-5 scrollbar-hide px-4">
                  {property?.imageUrls.map(
                    (url) => {
                      return (
                        <Image
                        className="max-h-96"
                          key={url}
                          src={url}
                          alt={url}
                          width={500}
                          height={500}
                          priority={true}
                          unoptimized 
                        >
                        </Image>
                      )}
                  )}
                </div>
                
            </div>


            <div className="w-full mt-10"> 
              <div className="w-4/5 mx-auto flex flex-col lg:flex-row gap-10">
                  <div className="flex-1 flex-col px-10">
                    <div className="flex flex-col gap-y-4">
                      <div className="flex flex-row justify-between">
                        <h1 className="text-xl font-medium">LOCATION</h1>
                        
                        <Image
                          src={'/SingleProperty/plus.png'}
                          width={35}
                          height={20}
                          alt="plus"
                          id="location"
                          className={`cursor-pointer transition-transform duration-300 ${toggleLocation ? 'rotate-90' : ''} `}
                          onClick={()=>handleToggleLocation()}
                        >
                        </Image>
                      </div>


                      {toggleLocation && (
                        <div className={`${toggleLocation ? 'appear' : ''}`}>
                        {property?.address} , {property?.subAddress}
                      </div>
                      )}
                      
                      <hr className="mt-6" />
                    </div>

                    <div className="flex flex-col mt-5 gap-y-4">
                      <div className="flex flex-row justify-between">
                        <h1 className="text-xl font-medium">PROPERTY DETAILS</h1>
                        <Image
                          src={'/SingleProperty/plus.png'}
                          width={35}
                          height={20}
                          alt="plus"
                          className={`cursor-pointer max-h-8 transition-transform duration-300 ${togglePropertyDetails ? 'rotate-90' : ''} `}
                          onClick={()=>handleTogglePropertyDetails()}
                        >
                        </Image>
                      </div>
                      
                      {togglePropertyDetails && (
                      
                        <div className={`${togglePropertyDetails ? 'appear' : ''}`}>
                          <ul className="flex flex-col ">
                            <li><strong>ID :</strong> {property?.id}</li>
                            <li><strong>APPROX SIZE :</strong> {property?.area}</li>
                            <li><strong>CAR :</strong> {property?.carSpaces}</li>
                            <li><strong>BED :</strong> {property?.bedrooms}</li>
                            <li><strong>BATH:</strong> {property?.bathrooms}</li>
                          </ul>

                        </div>
                      )}
                      <hr className="mt-6" />
                    </div>


                    <div className="flex flex-col mt-5 gap-y-4">
                      <div className="flex flex-row justify-between">
                        <h1 className="text-xl font-medium">FEATURES</h1>
                        <Image
                          src={'/SingleProperty/plus.png'}
                          width={35}
                          height={20}
                          alt="plus"
                          className={`cursor-pointer transition-transform duration-300 ${toggleFeatures ? 'rotate-90' : ''} `}
                          onClick={()=>handleToggleFeatures()}
                        >
                        </Image>
                      </div>
                      {toggleFeatures &&(
                        <div className={`${toggleFeatures ? 'appear' : ''} pl-4`}>
                          <ul className="flex flex-col gap-2">
                            {property?.features.map(
                              (feature,index) => {
                                return (
                                  <li key={index}>{feature}</li>
                                )
                              }
                            )}
                          </ul>
                        </div>
                      )}
                      <hr className="mt-6" />
                    </div>

                    {/* <div className="flex flex-col mt-5">
                      <div className="flex flex-row justify-between">
                        <h1>FLOORPLAN</h1>
                        <Image
                          src={'/SingleProperty/plus.png'}
                          width={24}
                          height={25}
                          alt="plus"
                        >
                        </Image>
                      </div>
                      <div>

                      </div>
                      <hr className="mt-6" />
                    </div>


                    <div className="flex flex-col mt-5">
                      <div className="flex flex-row justify-between">
                        <h1>STATEMENT OF INFORMATION</h1>
                        <Image
                          src={'/SingleProperty/plus.png'}
                          width={24}
                          height={25}
                          alt="plus"
                        >
                        </Image>
                      </div>
                      <div>

                      </div>
                      <hr className="mt-6" />
                    </div> */}
                  </div>

                  <div className="flex-1"> 
                    <div id="map" style={{ height: '400px', width: '100%' }}></div>
                  </div>
              </div>
            </div>

      </div>)}
    </div>
    
  )
}

export const getServerSideProps=async (context)=>{
  const {id} = context.params;
  try{
    const res = await fetch(`/api/property/${id}`);
    const data = await res.json();
    return {
      props:{
        property:data.data
      }
    }
  }catch(e){
    console.log(e);
    return{
      notFound:true,
    }
    
  }
}

export default SingleProperty 