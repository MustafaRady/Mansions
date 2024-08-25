"use client"
import "./style.css"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
const Menu = ({ setToggleDropdown}) => {
    const [close, setClose] = useState(false);
    const [animationClass , setAnimationClass] = useState('animation')
    
    const [toggleBuyPopUp, setToggleBuyPopUp] = useState(false);
    const [toggleSellPopUP, setToggleSellPopUP] = useState(false);
    const [toggleLeasePopUp, setToggleLeasePopUp] = useState(false);
    const [toggleOurStoryPopUp, setToggleOurStoryPopUp] = useState(false);


    const [buyAnimation, setBuyAnimation] = useState('appear');
    const [sellAnimation, setSellAnimation] = useState('appear');
    const [leaseAnimation, setLeaseAnimation] = useState('appear');
    const [ourStoryAnimation, setOurStoryAnimation] = useState('appear');

    const openBuyPopUp = () => {
      setSellAnimation('disappear');
      setLeaseAnimation('disappear');
      setOurStoryAnimation('disappear');

      setTimeout(() => {
        setToggleLeasePopUp(false);
        setToggleSellPopUP(false);
        setToggleLeasePopUp(false);
      },200);

      setTimeout(() => {
        setBuyAnimation('appear');
        setToggleBuyPopUp((prev)=>!prev);  
      },200)
      
    }

    const openSellPopUp = () => {
      setBuyAnimation('disappear');
      setLeaseAnimation('disappear');
      setOurStoryAnimation('disappear');

      setTimeout(() => {
        setToggleLeasePopUp(false);
        setToggleBuyPopUp(false);
        setToggleOurStoryPopUp(false);
      },200);

      setTimeout(() => {
        setSellAnimation('appear');
        setToggleSellPopUP((prev)=>!prev);  
      },200)
    }

    const openLeasePopUp = () => {
      setSellAnimation('disappear');
      setBuyAnimation('disappear');
      setOurStoryAnimation('disappear');

      setTimeout(() => {
        setToggleBuyPopUp(false);
        setToggleSellPopUP(false);
        setToggleOurStoryPopUp(false);
      },200);

      setTimeout(() => {
        setLeaseAnimation('appear');
        setToggleLeasePopUp((prev)=>!prev);  
      },200)
    }

    const openOurStoryPopUp = () => {
      setSellAnimation('disappear');
      setBuyAnimation('disappear');
      setLeaseAnimation('disappear');

      setTimeout(() => {
        setToggleBuyPopUp(false);
        setToggleSellPopUP(false);
        setToggleLeasePopUp(false);
      },200);

      setTimeout(() => {
        setOurStoryAnimation('appear');
        setToggleOurStoryPopUp((prev)=>!prev);  
      },200)
    }

    
    
    //Closing the Menu 
    const handleClick =() => {
      setClose(true);
    }

    //Giving animation to the menu
    useEffect(()=>{
      if(close){
        setAnimationClass('animation_2');
        setTimeout(()=>{
          setToggleDropdown((prev)=>!prev);
        },500);
      }
    },[close]);

  

    return (
      <div className={`${animationClass} fixed top-0 left-0 w-full h-screen bg-white z-20 flex flex-col pt-2 items-center`}>
        <div className="w-full flex justify-end">
            <div className="h-20 pr-6 pt-6">
                <Image 
                    src="/Nav/close.png"
                    alt="close"
                    width={30}
                    height={30}
                    onClick={()=>handleClick()}
                >
                </Image>
            </div>
            
        </div>

        <div className="flex flex-col gap-y-4 items-center ">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-mono font-black cursor-pointer" onClick={()=>{openBuyPopUp()}}>BUY</h1>
            
            {/* POPUP */}
            {toggleBuyPopUp && (
              <div className={` ${buyAnimation} text-center text-gray-300 flex flex-row gap-x-7`}>
                <h2 className="cursor-pointer hover:text-gray-500" >
                  <Link href="/buy/residential" 
                    onClick={()=>
                    setTimeout(()=>{
                      setClose((prev)=>!prev)
                    },700)
                    }
                  >RESIDENTIAL
                  </Link>
                </h2>
                <h2 className="cursor-pointer hover:text-gray-500"><Link href="/buy/commercial" 
                    onClick={()=>
                    setTimeout(()=>{
                      setClose((prev)=>!prev)
                    },700)
                    }>COMMERCIAL</Link></h2>
              </div>

            )}
            
          </div>
          
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-mono font-black cursor-pointer" 
              onClick={()=>
               openSellPopUp()
              }
            >SELL</h1>
            
            {toggleSellPopUP &&(
              <div className={` ${sellAnimation} text-center text-gray-300 flex flex-row gap-x-7`}>
                <h2 className="cursor-pointer hover:text-gray-500" > <Link href="/why-mansions" 
                  onClick={()=>
                  setTimeout(()=>{
                    setClose((prev)=>!prev)
                  },700)
                  }
                >WHY MANSIONS</Link></h2>
                <h2 className="cursor-pointer hover:text-gray-500" > <Link href="/request-an-appraisal" 
                    onClick={()=>
                    setTimeout(()=>{
                      setClose((prev)=>!prev)
                    },700)
                    }>REQUEST AN APPRAISAL</Link></h2>
              </div>

            )}
            
            
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-mono font-black cursor-pointer" 
              onClick={()=>
                openLeasePopUp()
              }>LEASE</h1>
            
            {toggleLeasePopUp &&(
              <div className={` ${leaseAnimation} text-center text-gray-300 flex flex-col lg:flex-row gap-x-7`}>
                <h2 className="cursor-pointer hover:text-gray-500" ><Link href="/buy/residential" onClick={()=>
                    setTimeout(()=>{
                      setClose((prev)=>!prev)
                    },700)
                    }>RESIDENTIAL</Link></h2>
                <h2 className="cursor-pointer hover:text-gray-500"> <Link href="/buy/commercial" onClick={()=>
                    setTimeout(()=>{
                      setClose((prev)=>!prev)
                    },700)
                    }>COMMERCIAL</Link></h2>
                <h2 className="cursor-pointer hover:text-gray-500"><Link href="/property-management" onClick={()=>
                    setTimeout(()=>{
                      setClose((prev)=>!prev)
                    },700)
                    }>PROPERTY MANAGEMENT</Link></h2>
                <h2 className="cursor-pointer hover:text-gray-500"><Link href="/services" onClick={()=>
                    setTimeout(()=>{
                      setClose((prev)=>!prev)
                    },700)
                    }>SERVICES</Link></h2>
              </div>
            )}
            
          </div>

          <h1 className="text-3xl font-mono font-black cursor-pointer"><Link href="/team" onClick={()=>
                    setTimeout(()=>{
                      setClose((prev)=>!prev)
                    },700)
                    }>TEAM</Link></h1>

          <div className="flex flex-col items-center">
          <h1 className="text-3xl font-mono font-black cursor-pointer" onClick={()=>openOurStoryPopUp()}>OUR STORY</h1>
            
            {toggleOurStoryPopUp &&(
              <div className={` ${ourStoryAnimation} text-center text-gray-300 flex flex-row gap-x-7` }>
                <h2 className="cursor-pointer hover:text-gray-500"><Link href="/heritage" onClick={()=>
                    setTimeout(()=>{
                      setClose((prev)=>!prev)
                    },700)
                    }>OUR HERITAGE</Link></h2>
                <h2 className="cursor-pointer hover:text-gray-500"><Link href="/location" onClick={()=>
                    setTimeout(()=>{
                      setClose((prev)=>!prev)
                    },700)
                    }>LOCATION</Link></h2>
              </div>
            )}
            
          </div>

          <h1 className="text-3xl font-mono font-black cursor-pointer"> <Link href="/projects" onClick={()=>
                    setTimeout(()=>{
                      setClose((prev)=>!prev)
                    },700)
                    }>PROJECTS</Link></h1>

          <div className="flex items-center justify-center gap-x-4">
                <Image
                  src={"/SocialMedia/facebook.png"}
                  width={30}
                  height={30}
                  alt="facebook"
                  >
                </Image>
                <Image
                  src={"/SocialMedia/whatsapp.png"}
                  width={30}
                  height={30}
                  alt="whatsapp"
                  >
                </Image>  
                <Image
                  src={"/SocialMedia/instagram.png"}
                  width={30}
                  height={30}
                  alt="instagram"
                  >
                </Image>          
          </div>
        </div>
      </div>
    )
  }
  

export default Menu