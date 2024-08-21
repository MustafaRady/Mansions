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
                <h2 className="cursor-pointer hover:text-gray-500" ><Link href="/buy/residential">RESIDENTIAL</Link></h2>
                <h2 className="cursor-pointer hover:text-gray-500"><a href="/buy/commercial">COMMERCIAL</a></h2>
              </div>

            )}
            
          </div>
          
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-mono font-black cursor-pointer" onClick={()=>{openSellPopUp()}}>SELL</h1>
            
            {toggleSellPopUP &&(
              <div className={` ${sellAnimation} text-center text-gray-300 flex flex-row gap-x-7`}>
                <h2 className="cursor-pointer hover:text-gray-500" > <a href="/why-mansions">WHY MANSIONS</a></h2>
                <h2 className="cursor-pointer hover:text-gray-500" > <a href="/request-an-appraisal">REQUEST AN APPRAISAL</a></h2>
              </div>

            )}
            
            
          </div>

          <div className="flex flex-col items-center">
            <h1 h1 className="text-3xl font-mono font-black cursor-pointer" onClick={()=>{openLeasePopUp()}}>LEASE</h1>
            
            {toggleLeasePopUp &&(
              <div className={` ${leaseAnimation} text-center text-gray-300 flex flex-col lg:flex-row gap-x-7`}>
                <h2 className="cursor-pointer hover:text-gray-500" ><a href="/buy/residential">RESIDENTIAL</a></h2>
                <h2 className="cursor-pointer hover:text-gray-500"> <a href="/buy/commercial">COMMERCIAL</a></h2>
                <h2 className="cursor-pointer hover:text-gray-500"><a href="/property-management">PROPERTY MANAGEMENT</a></h2>
                <h2 className="cursor-pointer hover:text-gray-500"><a href="/services">SERVICES</a></h2>
              </div>
            )}
            
          </div>

          <h1 className="text-3xl font-mono font-black cursor-pointer"><a href="/team">TEAM</a></h1>

          <div className="flex flex-col items-center">
          <h1 className="text-3xl font-mono font-black cursor-pointer" onClick={()=>openOurStoryPopUp()}>OUR STORY</h1>
            
            {toggleOurStoryPopUp &&(
              <div className={` ${leaseAnimation} text-center text-gray-300 flex flex-row gap-x-7` }>
                <h2 className="cursor-pointer hover:text-gray-500"><a href="/heritage">OUR HERITAGE</a></h2>
                <h2 className="cursor-pointer hover:text-gray-500"><a href="/location">LOCATION</a></h2>
              </div>
            )}
            
          </div>

          <h1 className="text-3xl font-mono font-black cursor-pointer"> <a href="/projects">PROJECTS</a></h1>
          <h1 className="text-3xl font-mono font-black cursor-pointer"><a href="insights">INSIGHTS</a></h1>

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