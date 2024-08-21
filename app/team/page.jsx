import Subscribe from "@components/Subscribe/page"
import Image from "next/image"

const Team = () => {
  return (
    <div className='w-full pt-36'>
        <div className='w-4/5 xl:w-2/3 mx-auto flex flex-col xl:flex-row gap-10'>
            <div className='flex-1 flex flex-row gap-4'>
                <h1 className='text-4xl font-thin'>OUR</h1>
                <strong className='text-4xl'>TEAM</strong>
            </div>

            <div className='flex-2 flex flex-col gap-10'>
                <div>
                    <p className='text-lg'>
                        A real estate experience is much more than a transaction between a buyer and seller, and the seller’s agent. It requires a team approach from the ground up, all working together to achieve the very best outcome.
                    </p>
                </div>

                <div>
                    <p className='font-thin'>
                        In order to have continued success, we have carefully chosen our administrative, property management, and sales teams. We see the quality of our people as being paramount to the prosperity of the agency, and the very thing that defines us.
                    </p>
                </div>
            </div>
        </div>

        <div className='mt-20 py-28 w-full bg-black text-white'>
            <div className='w-4/5 mx-auto p-4 flex flex-wrap flex-col gap-10 '>
                <div className='w-full'>
                    <h1 className='font-bold text-4xl'>OUR TEAM</h1>
                </div>
                
                <div className='w-full flex flex-col lg:flex-row gap-y-10 '>
                    
                    <div className='flex-1 font-thin tracking-wider flex flex-col'>
                        <h1 className='font-bold'>ALEX MANSION</h1>
                        <h2>DIRECTOR/SALES</h2>
                        <span className="flex flex-row gap-2">
                            <Image
                                src={'/phone.png'}
                                width={30}
                                height={30}
                                alt="Phone"
                            />
                            0412 555 123
                        </span>
                        <span className="flex flex-row flex-wrap gap-2">
                            <Image
                                src={'/letter.png'}
                                width={30}
                                height={30}
                                alt="Email"
                            />
                            E:ALEX@MANSIONSRE.COM.AU
                        </span>
                    </div>
                    
                    <div className='flex-1 font-thin tracking-wider flex flex-col'>
                        <h1 className='font-bold'>EMILY GREEN</h1>
                        <h2>SALES CONSULTANT</h2>
                        <span className="flex flex-row gap-2">
                            <Image
                                src={'/phone.png'}
                                width={30}
                                height={30}
                                alt="Phone"
                            />
                            0412 555 456
                        </span>
                        <span className="flex flex-row flex-wrap gap-2">
                            <Image
                                src={'/letter.png'}
                                width={30}
                                height={30}
                                alt="Email"
                            />
                            E:EMILY@MANSIONSRE.COM.AU
                        </span>
                    </div>
                </div>  

                <div className='w-full flex flex-col lg:flex-row gap-y-10'>
                    
                    <div className='flex-1 font-thin tracking-wider flex flex-col'>
                        <h1 className='font-bold'>MICHAEL BROWN</h1>
                        <h2>PROPERTY MANAGER</h2>
                        <span className="flex flex-row gap-2">
                            <Image
                                src={'/phone.png'}
                                width={30}
                                height={30}
                                alt="Phone"
                            />
                            0412 555 789
                        </span>
                        <span className="flex flex-row flex-wrap gap-2">
                            <Image
                                src={'/letter.png'}
                                width={30}
                                height={30}
                                alt="Email"
                            />
                            E:MICHAEL@MANSIONSRE.COM.AU
                        </span>
                    </div>

                    <div className='flex-1 font-thin tracking-wider flex flex-col'>
                        <h1 className='font-bold'>SARAH JOHNSON</h1>
                        <h2>ADMINISTRATIVE ASSISTANT</h2>
                        <span className="flex flex-row gap-2">
                            <Image
                                src={'/phone.png'}
                                width={30}
                                height={30}
                                alt="Phone"
                            />
                            0412 555 321
                        </span>
                        <span className="flex flex-row flex-wrap gap-2">
                            <Image
                                src={'/letter.png'}
                                width={30}
                                height={30}
                                alt="Email"
                            />
                            E:SARAH@MANSIONSRE.COM.AU
                        </span>
                    </div>
                </div>  
            </div>
        </div>

        <Subscribe/>
    </div>
  )
}

export default Team
