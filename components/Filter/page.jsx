import Image from "next/image"
import "./style.css"
import { useEffect, useState } from "react";


const Filter = ({filter, setFilter} ) => {
  
  
  // =========================
  // TOGGLES: FOR OPENING THE POPUPS 
  // =========================
  const [toggleStatus , setToggleStatus] = useState(false);
  const [toggleMinPrice, setToggleMinPrice] = useState(false);
  const [toggleMaxPrice, setToggleMaxPrice] = useState(false);
  const [toggleBedrooms, setToggleBedrooms] = useState(false);

  // =========================
  // CLOSING: FOR ADDING ANIMATION WHEN CLOSING 
  // =========================  
  const [startClosingAll , setStartClosingAll] = useState(false);
  const [startClosingMin , setStartClosingMin] = useState(false);
  const [startClosingMax , setStartClosingMax] = useState(false);
  const [startClosingBedrooms , setStartClosingBedrooms] = useState(false);
  

  // =========================
  // HANDLE FUNCTIONS: ADDS ANIMATION AND UPDATES THE FILTER STATE 
  // =========================

  const handleToggleAll = (status) =>{
    
    if(toggleStatus == true){
      setStartClosingAll(true);
      setTimeout(() =>
      {
        setToggleStatus(false);
        setStartClosingAll(false);
      }
      ,500)
    }else{
      setToggleStatus(true)
    }
    if(filter.status !== status ){
      setFilter ((prev) =>( {
        ...prev,
        status: status
      }))
    }
    
  }

  const handleToggleMinPrice = (minPrice) =>{
    if(toggleMinPrice== true){
      setStartClosingMin(true);
      setTimeout(() =>
      {
        setToggleMinPrice(false);
        setStartClosingMin(false);
      }
      ,500)
    }else{
      setToggleMinPrice(true)
    }

    if(filter.minPrice !== minPrice ){
      setFilter((prev) => ({
        ...prev,
        minPrice:isNaN(minPrice)?minPrice :parseInt(minPrice)
        //Since we may click None and put the value as string , then cannot parse

      }))
    }

    
  }  

  const handleToggleMaxPrice = (maxPrice)=>{

      if(toggleMaxPrice == true){
        setStartClosingMax(true);
        setTimeout(() =>
        {
          setToggleMaxPrice(false);
          setStartClosingMax(false);
        });
      }else{
        setToggleMaxPrice(true)
      }

      if(filter.maxPrice !== maxPrice){
        setFilter((prev) => ({
          ...prev,
          maxPrice: isNaN(maxPrice)?maxPrice:parseInt(maxPrice)
          //Since we may click None and put the value as string , then cannot parse
        }));
      }

     
  }
  
  const handleToggleBedrooms = (bedrooms) =>{
    if(toggleBedrooms == true){
      setStartClosingBedrooms(true);
      setTimeout(() =>
      {
        setToggleBedrooms(false);
        setStartClosingBedrooms(false);
      }
      ,500)
    }else{
      setToggleBedrooms(true);
    }

    if(filter.bedrooms !== bedrooms){
      setFilter((prev) => ({
        ...prev,
        bedrooms:isNaN(bedrooms) ?bedrooms:parseInt(bedrooms)
      }));
    }
    
  }

  const handleSearch = (search) =>{
    
    setFilter((prev) => ({
      ...prev,
      search: search
    }));
  }


  return (
    <div className="w-full pt-20">
      <div className="w-full flex  flex-wrap md:flex-row gap-3">
        
        {/* Filter STATUS */}
        <div className="relative flex-1 min-w-[200px] lg:flex-1 button text-center cursor-pointer ">
         <div className="w-full p-4 "
          onClick={()=>{
            handleToggleAll(filter.status); 
          }}
         >
         <div className="flex flex-row justify-between w-full gap-x-3"  >
          <h1>
            {filter.status === 'ALL' ? 'ALL' : filter.status === true ? 'FOR SALE' : filter.status === false ? 'SOLD' : ''}
          </h1>
            <Image
              src={'/Filter/plus.png'}
              alt='Filter'
              width={25}
              height={20}
              
            >

            </Image>
          </div>
         </div>
          
          
          {/* TYPE DROPDOWN  */}
          {toggleStatus && (
            <div className={`absolute w-full z-10 -left-0 dropdown-menu  transform -translate-x mt-2   bg-white ${startClosingAll? 'dropdown-menu-close':''}`}>
              <ul className="text-black">
                  <li 
                    onClick={() => {
                      handleToggleAll('ALL');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    ALL
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleAll(false);
                    }
                    } 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    SOLD
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleAll(true);
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    FOR SALE
                  </li>
              </ul>
            </div>
          )}
          
        </div>
        
        {/* Filter SEARCH */}
        <div className="lg:flex-1   ">
          <div className="h-full w-full p-1 border-input">
            <input type="text" className="h-full w-full" placeholder="Search..." 
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(e.target.value);
                }            
              }}
            />
          </div>
        </div>

        {/* Filter MIN PRICE */}
        <div className="relative lg:flex-1 button  text-center cursor-pointer"
        >
          <div className="w-full p-4"
            onClick={()=>{
              handleToggleMinPrice(filter.minPrice);
            }}
          >
            <div className="flex flex-row justify-between  gap-x-3"
              
            >
              <h1>{filter.minPrice}</h1>
              <Image
                src={'/Filter/plus.png'}
                alt='Filter'
                width={25}
                height={20}

              >

              </Image>
            </div>
          </div>
          

          {/* Dropdown */}
          {toggleMinPrice && (
            <div className={`absolute w-full z-10 -left-0 dropdown-menu  transform -translate-x mt-2   bg-white ${startClosingMin? 'dropdown-menu-close':''}`}>
              <ul className="text-black">
                  <li 
                    onClick={() => {
                      handleToggleMinPrice('MIN PRICE');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    None
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMinPrice('50000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    50,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMinPrice('100000');
                    }
                    } 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    100,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMinPrice('200000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    200,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMinPrice('300000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    300,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMinPrice('400000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    400,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMinPrice('500000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    500,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMinPrice('600000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    600,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMinPrice('700000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    700,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMinPrice('800000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    800,000
                  </li>
              </ul>
            </div>
          )}
        
        </div>

        {/* Filter MAX PRICE */}
        <div className="relative lg:flex-1 button  text-center cursor-pointer">
          <div className="w-full p-4"
            onClick={
              ()=>{
                handleToggleMaxPrice(filter.maxPrice);
              }
            }
          >
            <div className="flex flex-row justify-between  gap-x-3">
                  <h1>{filter.maxPrice}</h1>
                  <Image
                    src={'/Filter/plus.png'}
                    alt='Filter'
                    width={25}
                    height={20}
    
                  >
    
                  </Image>
            </div>
          </div>


          {toggleMaxPrice && (
            <div className={`absolute w-full z-10 -left-0 dropdown-menu  transform -translate-x mt-2   bg-white ${startClosingMax? 'dropdown-menu-close':''}`}>
              <ul className="text-black">
                  <li 
                    onClick={() => {
                      handleToggleMaxPrice('MAX PRICE');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    None
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMaxPrice('50000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    50,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMaxPrice('100000');
                    }
                    } 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    100,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMaxPrice('200000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    200,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMaxPrice('300000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    300,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMaxPrice('400000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    400,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMaxPrice('500000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    500,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMaxPrice('600000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    600,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMaxPrice('700000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    700,000
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleMaxPrice('800000');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    800,000
                  </li>
              </ul>
            </div>
          )}

        </div>
        
        {/* Filter BEDROOMS */}
        <div className="relative lg:flex-1 button  text-center cursor-pointer">
          <div className="w-full p-4"
            onClick={
              ()=>{
                handleToggleBedrooms(filter.bedrooms);
              }
            }
          >
            <div className="flex flex-row justify-between  gap-x-3">
                  <h1>{filter.bedrooms}</h1>
                  <Image
                    src={'/Filter/plus.png'}
                    alt='Filter'
                    width={25}
                    height={20}
    
                  >
    
                  </Image>
            </div>
          </div>

          {toggleBedrooms && (
            <div className={`absolute w-full z-10 -left-0 dropdown-menu  transform -translate-x mt-2   bg-white ${startClosingBedrooms? 'dropdown-menu-close':''}`}>
              <ul className="text-black">
                  <li 
                    onClick={() => {
                      handleToggleBedrooms('BED');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    None
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleBedrooms('1');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    1
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleBedrooms('2');
                    }
                    } 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    2
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleBedrooms('3');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    3
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleBedrooms('4');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    4
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleBedrooms('5');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    5
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleBedrooms('6');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    6
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleBedrooms('7');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    7
                  </li>
                  <li 
                    onClick={() => {
                      handleToggleBedrooms('8');
                    }} 
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    8
                  </li>
              </ul>
            </div>
          )}
         

        </div>

      </div>
    </div>
  )
}

export default Filter