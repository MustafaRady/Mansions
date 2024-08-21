
import '@styles/global.css'
import Image from 'next/image'
import Footer from '@components/Footer/page'
import Navbar from '@components/Navbar/page'


export const metadata = ()=>{
    return {
        title: "Wilson Real Estate",
        description: "Wilson Real Estate is a real estate company that offers a wide range of services including buying, selling, leasing, and more. We are a team of professionals that are dedicated to providing the best service to our clients.",
        keywords: "Real Estate, Wilson Real Estate, Wilson Real Estate Company, Real Estate Company, Real Estate Services, Buying, Selling, Leasing, Real Estate Team, Real Estate Projects, Real Estate Insights"
    }
}

const RootLayout = ({children}) => {

    

  return (
    <html lang="en">
        <head>
            <link rel="icon" href="/favicon.png" />
        </head>   
        <body>
            <script src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDZ0va-T3CsDc-zUcKwnwZKwIunVHtjVb4`}></script>
            <main>
            <Navbar/>
            {children}
            
            {/* Mail */}
            {/* <div 
                className='fixed right-4 bottom-4'
            >
                <Image
                    src={'./home/email.svg'}
                    alt="mail"
                    width={60}
                    height={60}
                    className='filter fill-current text-blue-500'
                >

                </Image>
            </div> */}
            <Footer/>

            </main>
        </body>
        
    </html>
  )
}

export default RootLayout