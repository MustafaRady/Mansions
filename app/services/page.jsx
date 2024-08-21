import Subscribe from "@components/Subscribe/page"
import Image from "next/image"


const Services = () => {
  return (
    <div className='w-full tracking-wider'>
        <Image
            src={'/Services/image.jpg'}
            alt="services"
            width={1920}
            height={1080}

        >
        </Image>        

        <div className=" w-full mt-10">
            <div className="w-full mx-auto p-10 xl:p-0 xl:w-4/5 flex flex-col xl:flex-row gap-10">
                <div className="flex-1 flex flex-col gap-y-5">
                    <h1 className="text-4xl font-bold">
                        SERVICES
                    </h1>

                    <p>
                        At Mansion, our Property Management team is committed to providing transparency, ease of collaboration, and exceptional communication. We focus on delivering high-quality service rather than just managing a large number of properties. We recognize that your property is a significant investment, and we approach leasing and management as more than just a simple transaction.
                    </p>

                    <p>
                        Our experienced team stays current with the latest market trends and is well-versed in all relevant regulations and legislation applicable to your property. Our senior property manager is skilled at securing the highest rental prices and selecting the most qualified tenants, ensuring you maximize your return on investment. Throughout the management process, we handle all inspections, oversee property maintenance, negotiate lease renewals and reviews, and ensure efficient payments and statement management.
                    </p>
                </div>

                <div className="flex-1 flex flex-col gap-y-5">
                    <h1 className="text-2xl"> 
                        When leasing your property, we offer the following:
                    </h1>
                    <ul className="flex flex-col gap-y-4 ">
                        <li>No upfront costs</li>
                        <li>No lease—absolutely nothing to pay</li>
                        <li>Website exposure via realestate.com.au, domain.com.au, and mansionre.com.au</li>
                        <li>Professional photography</li>
                        <li>Lease board installation</li>
                        <li>Rigorous tenant selection</li>
                        <li>Zero tolerance policy towards rent arrears</li>
                        <li>Thorough and compliant condition reports, including internal and external photos prepared before tenant occupation</li>
                        <li>Detailed reporting on inspections and maintenance, including two internal inspections per year</li>
                        <li>Mansion property alert and tenant database</li>
                        <li>Compliance service</li>
                        <li>Should you wish to have your property valued at any stage, one of our experienced sales team members, best suited to the area, can assist you</li>
                    </ul>

                </div>
            </div>
        </div>

        <div className="w-full mt-10">
            <Subscribe/>
        </div>
    </div>
  )
}

export default Services