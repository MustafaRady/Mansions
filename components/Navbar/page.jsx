"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import "./style.css"
import Image from "next/image"
import Menu from "@components/Menu/page"
import Link from "next/link"


const Navbar = () => {
const [toggleDropdown,setToggleDropdown] = useState(false);
const [animationClass , setAnimationClass] = useState("animated_1");
const [scrollY, setScrollY] = useState(0);
const [hidden, setHidden] = useState(false);
const pathname = usePathname();
    useEffect(()=>{
        
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
            
                if(pathname ==="/" || pathname === ""){
                    if (currentScrollY > scrollY || currentScrollY == 0) {
                        setAnimationClass('animated_2');
                        setHidden(true)
                    }
                    else{
                        setAnimationClass('animated_1');
                        setHidden(false)
                    }
                }
                else{
                    if(currentScrollY > scrollY){
                        setAnimationClass('animated_2');
                        setHidden(true)
                    }
                    else {
                        setAnimationClass('animated_1');
                        setHidden(false)
                    }
                }
                setScrollY(currentScrollY);
            }
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        },[scrollY])


  return (
    <nav>
        {!toggleDropdown  && (
                <div className={`${animationClass} w-full bg-white fixed block z-10 h-20`}>
                <div className="w-full mx-auto h-full flex flex-row justify-between items-center">
                    <Link href="/">

                    <div 
                        className="text-5xl font-extrabold pl-6 flex flex-row gap-x-2 cursor-pointer"
                        
                    >
                       
                        
                        <Image
                            src={'/logo.png'}
                            alt="logo"
                            height={40}
                            width={70}
                        >

                        </Image>

                        <h1 className="text-sm md:text-5xl flex items-center ">
                            MANSIONS
                        </h1>
                        
                    </div>
                    </Link>
                    
                    <div className="pr-6">
                        <Image
                            src="/Nav/menu.png"
                            alt="menu"
                            height={30}
                            width={30}
                            className="cursor-pointer"
                            onClick={()=>setToggleDropdown((prev)=>!prev)}
                        >
        
                        </Image>
                    </div>
                   
    
                </div>
            </div>
    
        )}
        
        {toggleDropdown && (
            <Menu
                setToggleDropdown={setToggleDropdown}
            />
        )}
    </nav>
  )
}

export default Navbar