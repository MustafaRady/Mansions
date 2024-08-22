"use client"
import Filter from "@components/Filter/page";
import { useEffect, useState } from "react";
import Loader from "@components/Loader/page";
import Link from "next/link";

// Helper function to debounce API calls
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const Properties = ({type}) => {
  const [filter, setFilter] = useState({
    type: type,
    status: 'ALL',
    minPrice: 'MIN PRICE',
    maxPrice: 'MAX PRICE',
    bedrooms: 'BED',
    search: '',
  });
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Debounce the getProperties function
  const debouncedGetProperties = debounce(() => getProperties(), 500);


  useEffect(() => {
    // Fetch properties whenever filter changes
    debouncedGetProperties();
  }, [filter]);


  const getProperties = async () => {
    const queryParams = new URLSearchParams({
      type: filter.type,
      status: filter.status,
      minPrice: filter.minPrice,
      maxPrice: filter.maxPrice,
      bedrooms: filter.bedrooms,
      search: filter.search,
    }).toString();

    try {
      setLoading(true);
      setProperties([]);
      const response = await fetch(`/api/property?${queryParams}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProperties(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Filter setFilter={setFilter} filter={filter} />

      {loading && (<Loader />)}

      <div className='w-full mt-20 mb-20'>
        <div className='w-full flex flex-row flex-wrap gap-x-10 gap-y-10 justify-center mt-5'>
          {properties.length>0 && properties.map((property) => {
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

          {properties.length === 0 && !loading && (
            <div className='w-full flex justify-center'>
              <h1 className='text-2xl font-semibold'>No properties found</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
