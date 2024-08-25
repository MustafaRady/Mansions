import Subscribe from "@components/Subscribe/page"
import "./style.css"
import Image from "next/image"
import Link from "next/link"


const Heritage = () => {
  return (
    <div className="w-full">
        <Image
            src={'/OurHeritage/image1.jpg'}
            width={1920}
            height={1080}
            alt="Our Heritage"
        />

        <div className="w-full">
            <div className="w-4/5 mx-auto mt-20 flex flex-col xl:flex-row gap-10">
                <div className="w-full xl:w-1/2 flex-1 flex flex-col gap-10">
                    <div>
                        <h2 className="text-4xl font-thin">
                            OUR
                        </h2>
                        <strong className="text-5xl">HERITAGE</strong>
                    </div>

                    <div>
                        <p className="text-xl">
                        It all began when Alex Mansion partnered with Roger Bodey early in 1972, forming Bodey Mansion.
                        </p>
                    </div>

                    <div className="font-thin">
                        <p>
                        In 1977, Bill McKewan joined the team to form Bodey Mansion & McKewan, whereupon they purchased and refurbished their 77 Gheringhap St office—their home for the next 30 years.
                        </p>
                    </div>

                    <div className="font-thin">
                        <p>
                        The firm, together with a large team of valuers, completed varied and unique sales throughout this time, always with a strong presence in residential and commercial property.
                        </p>
                    </div>
                </div>

                <div className="flex-1">
                    <Image
                        src={'/OurHeritage/image2.jpg'}
                        width={1920}
                        height={1080}
                        alt="Our Heritage 2"
                    />
                </div>
            </div>
        </div>

        <div className="w-full mt-20">
            <div className="w-full px-6 mx-auto mt-20 flex flex-col-reverse xl:flex-row gap-10">
                <div className="flex-1">
                    <Image
                        src={'/OurHeritage/image3.jpg'}
                        width={1920}
                        height={1080}
                        alt="Our Heritage 3"
                    />
                </div>

                <div className="w-full flex-1 flex flex-col items-center gap-10">
                    <div className="w-4/5 xl:w-2/3 flex flex-col gap-10 ">
                        <div>
                            <h1 className="text-4xl font-thin">
                                CURRENT
                            </h1>
                            <strong className="text-5xl ">
                                DAY
                            </strong>
                        </div>

                        <div>
                            <p className="font-thin text-xl">
                            Today, Alex Mansion operates from a new Mansion headquarters at 408 Latrobe Terrace, Newtown. Exuding a stylish vibrancy that permeates from within the group, the newly-renovated building combines the confident appeal of the Mansion heritage with a sleek, modern ambience.
                            </p>
                        </div>

                        <div className="text-xl font-thin">
                            <p>
                            Alex and his team have never forsaken the solid Mansion foundation of trust, loyalty, innovation, and old-fashioned hard work. Every day we live these core values and will continue to do so for the next 50 years and beyond.
                            </p>
                        </div>
                        
                        <Link
                            href={'/team'}
                        >
                            <div className="button p-4 w-full xl:w-1/2 text-center cursor-pointer">
                                MEET THE TEAM
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full mt-10">
            <Subscribe/>
        </div>
    </div>
  )
}

export default Heritage
