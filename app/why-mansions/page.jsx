"use client"
import Subscribe from '@components/Subscribe/page';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const WhyMansions = () => {
    const router = useRouter();

  return (
    <div className='w-full'>
        <Image
            src={'/WhyMansions/image1.jpg'}
            alt='Why Mansions'
            width={1920}
            height={1080}
        >
        </Image>

        {/* SECTION 1  */}
        <div className='w-full mt-10'>
            <div className='w-4/5 mx-auto flex flex-col xl:flex-row gap-x-10'>
                <div className='flex-1 '>
                    <h1 className='text-5xl flex flex-row gap-x-6'>
                        WHY 
                    <strong>
                        MANSIONS
                    </strong>
                    </h1>
                </div>

                <div className='flex-1 '>
                    <p className='text-xl tracking-wider'>
                    Why choose Mansions as your real estate partner?
                    The Mansion name has been a trusted name in the real estate industry for decades.
                    </p>
                </div>
            </div>
        </div>

        {/* SECTION 2 */}
        <div className='w-full mt-20'>
            <div className='w-4/5 mx-auto flex flex-col-reverse xl:flex-row gap-10'>
                <div className='flex-1 flex justify-center'>
                    <div className='w-full xl:w-3/4 flex flex-col gap-10'>
                        <h1 className='flex flex-col gap-2 text-5xl font-thin'>
                            EXCLUSIVE
                            <strong className='font-bold'>
                            EXPERTISE
                            </strong>
                        </h1>
                        
                        <p>
                            We’re known for our expertise in selling homes, a core aspect of what we do. Choosing the right selling method for your property is crucial, and our advice is backed by years of proven success. At Mansions, you'll find the guidance you need to make the best choice.
                        </p>

                        <p>
                            Our team excels in every property selling method. While each method has its place, the real skill lies in determining which approach is best suited to your property, the current market, and your personal needs.
                        </p>
                        
                        <p>
                            A good agent offers options before making recommendations. Each selling method has its own nuances, and it’s essential to navigate these correctly to ensure a successful sale at the best possible price.
                        </p>
                        
                        <p>
                            Our sales team is carefully chosen for their expertise and friendliness. They are highly trained to provide insightful advice on property marketing, advanced selling methods, and expert negotiation—all conducted ethically, the Mansions way.
                        </p>


                        <div className='button w-1/2  p-4 text-center cursor-pointer' onClick={()=>{
                            router.push('/heritage')
                        }}>
                            OUR HERITAGE
                        </div>
                    </div>
                </div>

                <div className='flex-1'>
                    <Image
                        src={'/WhyMansions/image2.jpg'}
                        alt='Why Mansions'
                        width={1920}
                        height={1080}
                    >
                    </Image>
                </div>
            </div>
        </div>

        {/* SECTION 3 */}
        <div className='w-full mt-10'>
            <div className='w-1/2 mx-auto flex flex-col items-center justify-center text-center gap-10'>
                <h1 className='text-2xl font-bold'>
                    OUR DIFFERENCE
                </h1>

                <p className='text-xl font-thin tracking-wider'>
                    "When you sell with MANSIONS, you leverage our highly respected name and unmatched local expertise. With an in-depth understanding of the real estate market and decades of experience, Mansions knows the local property landscape like no other."
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

        <div className='w-full mt-10'>
            <Subscribe/>
        </div>
    </div>
  )
}

export default WhyMansions
