import Subscribe from "@components/Subscribe/page"
import "./style.css"
import Image from "next/image"


const RequestAppraisal = () => {
  return (
    <div className="w-full">
        <Image
            src={'/RequestAppraisal/requestAppraisal.jpg'}
            width={1920}
            height={1080}
            alt="Request an Appraisal"
        >

        </Image>

        <div className="w-full ">
            <div className="w-2/3 mx-auto mt-20 flex flex-row gap-10">
                <div className="w-full flex flex-col gap-4">
                    <div>
                        <h1 className="text-4xl font-thin">REQUEST AN</h1>
                        <strong className="text-5xl">APPRAISAL</strong>
                    </div>
                
                    <div className="w-1/2" >
                        <p className="font-thin tracking-wider">
                        Connect with MANSIONS for a no-obligation appraisal from one of our Sales Consultants, or to simply receive a current digital report on your area and recent sales nearby.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 w-full">
                <Subscribe/>
            </div>
        </div>
    </div>
  )
}

export default RequestAppraisal