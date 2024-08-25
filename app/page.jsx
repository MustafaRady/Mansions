import Featured from '@components/FeaturedProp/page'
import './home.css'
import Image from 'next/image'
import Subscribe from '@components/Subscribe/page'
import Link from 'next/link'

const Home = () => {

  return (
    <div>
        {/* Video  */}
        <div className="w-full relative">
            <video 
                autoPlay
                loop
                muted
                width={'100%'} src="https://www.wilsonsre.com.au/wp-content/uploads/2024/07/wilsons-promotional-video.mp4">
            
            </video>
            <h1 className="title  text-white tracking-widest font-semibold flex flex-wrap">
                <span className='w-full text-2xl md:text-5xl lg:text-7xl'>MANSIONS</span>
            </h1>
        </div>

        {/* About */}
        <div className='w-full flex flex-col  xl:flex-row gap-3 mt-9'>
            <div className='flex flex-col flex-1 px-10 items-center ' id='title'>
                <div className='w-full xl:w-3/4  '>
                    <h1 className='text-5xl font-light flex flex-col gap-4'>
                        A LONG AND PROUD HISTORY <span className='font-semibold'>SINCE 1972.</span>
                    </h1>

                    <div className='flex flex-col gap-10 mt-3 tracking-widest pt-4' id='paragraphs' >
                        <p>
                        Established in 1972, MANSIONS has cemented itself as a foundation of Geelong real estate.
                        </p>
                        <p>
                        Our reputation is built on results, quality service and thoughtful advice. Throughout the years MANSIONS have sold many of Geelong’s landmark properties, we’ve applied our renowned selling and marketing methods to every transaction in order to achieve stunning outcomes for clients.
                        </p>
                        <p>
                        Since the beginning, MANSIONS has understood that all people and properties are different—there is no ‘one size fits all’ solution to selling or leasing. Today’s real estate agents need to be agile, innovative and focused on what’s best not for them, but for the customer; as has always been the MANSIONS way.
                        </p>
                        <p>
                        These pillars of success mean that MANSIONS continues to flourish today, as in the past
                        </p>
                    </div>

                    <Link href={'/heritage'}>
                        <div className='button flex w-full md:w-1/2 mx-auto  xl:w-3/4 items-start mt-20 justify-center px-10 py-3'>
                            OUR HERITAGE
                        </div>
                    </Link>
                    
                </div>
            </div>

            <div className='flex-1  '>
                <div className='w-full'>
                    <Image
                        src="/home/image.jpg"
                        width={1200}
                        height={150}
                        className="flex-1 "
                    >

                    </Image>
                </div>
                
            </div>
        </div>


        {/* Featured */}
            <Featured />
            

        {/* About No.2 */}
        <div className='w-full flex xl:flex-row flex-col gap-y-5 '>
            {/* Image section */}
            <div className='flex-1  flex justify-center'>
                <Image
                    src={"/home/image2.jpg"}
                    width={800}
                    height={750}
                    alt='image2'
                    
                />
            </div>

            <div className='flex-1 flex items-center justify-center'>
                <div className='w-full px-10 xl:w-3/4 flex flex-col  gap-y-7 tracking-widest'>
                    <h1 className='sm:text-2xl lg:text-6xl font-thin w-full'>
                        Any Property <br />
                        <span className='font-bold'>Every Advantage</span>
                    </h1>
                    <p>
                        The selling of homes is what we’re renowned for, and lies at the heart of who we are
                    </p>
                    <p>
                        Our team of sales people has been carefully selected, each person highly trained to be the best they can be, providing to consumers meaningful advice on property marketing, superior selling methods, and negotiation, all conducted professionally and ethically.
                    </p>

                    <div className='w-full xl:w-1/2'>
                        <div className='button text-center p-3 cursor-pointer'>
                            WHY MANSIONS'S
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SUBSCRIBE */}
        <div className='w-full mt-20'>
            <Subscribe/>
        </div>
        

    </div>
  )
}

export default Home