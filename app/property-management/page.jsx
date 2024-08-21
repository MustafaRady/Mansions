"use client"
import Image from "next/image"
import "./style.css"
import { useRouter } from "next/navigation"


const PropertyManagement = () => {
    const router = useRouter();
  return (
    <div className="w-full">
        <Image
            src={'/PropertyManagement/image.jpg'}
            alt="property management"
            width={1920}
            height={1080}

        >
        </Image>

        <div className="w-full mt-10">
            <div className="w-full p-4 xl:p-0 xl:w-4/5 mx-auto flex flex-col xl:flex-row gap-5">
                <div className="flex-1 " >
                    <div className="w-full flex flex-col  items-start justify-center gap-y-5">
                        <h1 className="flex flex-col text-5xl gap-y-2">
                            PROPERTY
                            <strong>
                            MANAGEMENT</strong>
                        </h1>

                        <p>
                            At Mansion, our approach is straightforward: secure the ideal tenant at the highest possible rental rate, paired with the most advantageous terms
                        </p>

                        <p>
                            We recognize that our residential and commercial landlords seek more than just promises; they demand top-tier service and exceptional results. What truly matters is not just what we say, but what we deliver.
                        </p>

                        <p>
                            Effective negotiation is the cornerstone of successful property management and leasing. Our sales team and property managers work together, honing their skills to negotiate with precision and expertise.
                        </p>
                        <p>
                            Robust processes, systems, and training form the bedrock of our operations, guiding us through even the most challenging situations. Our focus isn't on amassing the largest portfolio, but on being the best in the business.
                        </p>
                    </div>
                    
                </div>
                <div className="flex-1">
                    <Image
                        src={'/PropertyManagement/image2.jpg'}
                        alt="property management"
                        width={1920}
                        height={1080}
                    >
                    </Image>
                </div>
            </div>
        </div>

        <div className="w-full mt-20">
            <div className="w-1/2 mx-auto flex flex-col gap-y-5">
                <h1 className="text-center text-3xl">
                    OUR DIFFERENCE
                </h1>
                <p className="text-center text-4xl tracking-wider font-thin">
                    We are all a part of a team at Wilsons, working together with the common goal of having 'clients for life'.
                </p>
            </div>
        </div>


        {/* SECTION 4 */}
        <div className='w-full mt-20 '>
            <div className='w-4/5 mx-auto flex flex-col-reverse xl:flex-row gap-10 '>
                <div className='flex-1 flex flex-col gap-5'>
                    <div className=' flex flex-col gap-5'>
                        <h1 className='text-4xl w-full font-thin flex flex-col gap-2'>
                            REQUEST
                            <strong className='font-bold'>
                            AN APPRAISAL    
                            </strong>
                            
                        </h1>

                        <p className='font-thin text-xl'>
                            Connect with MANSIONS for a no-obligation appraisal from one of our Sales Consultants, or to simply receive a current digital report on your area and recent sales nearby.
                        </p>

                    </div>

                    <div className='w-2/3 button text-center p-4 cursor-pointer '
                        onClick={()=>{router.push('/request-an-appraisal')}}
                    >
                        REQUEST AN APPRAISAL
                    </div>
                    
                </div>

                <div className='flex-1 w-2/3 '>
                    <Image
                        src={'/logo.png'}
                        alt='Why Mansions'
                        width={520}
                        height={1080}

                    >
                        
                    </Image>
                </div>
            </div>

        </div>

        
    </div>
  )
}

export default PropertyManagement