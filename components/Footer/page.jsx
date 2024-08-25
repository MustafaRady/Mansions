import Image from "next/image"
import Link from "next/link"

const Footer
 = () => {
  return (
    <div className=' w-full flex justify-center mt-10   pb-8'>
        <div className='w-5/6 m-auto flex flex-row justify-between flex-wrap gap-y-10'>
         
            <div >
                <Image
                    src={'/logo.png'}
                    alt='logo'
                    width={200}
                    height={200}

                >

                </Image>
            </div>

            <div className='flex flex-col justify-end ' id='group'>
                <h1> (03) 5222-1922</h1>
                <h1>408 Latrobe Terrace,</h1>
                <h1>Newtown, Vic 3220.</h1>
            </div>
            
            <div className='flex flex-col justify-end  ' id='group'>
                <Link
                    href="/contact"
                >
                <h1  >CONTACT US</h1>
                </Link>

                <Link
                    href="/terms-of-use"
                >
                <h1  >TERMS OF USE</h1>
                </Link>

                <Link
                    href="/privacy-and-policy"
                >
                <h1  >PRIVACY POLICY</h1>
                </Link>
                
                

            </div>
            
            <div className='flex flex-col justify-end' id='group'>
                <h1>©2024 MANSIONS Real Estate </h1>
            </div>
        </div>
    </div>
  )
}

export default Footer
