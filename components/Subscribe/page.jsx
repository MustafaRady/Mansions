import "./style.css"
const Subscribe
 = () => {
  return (
    <div className='w-full flex bg-gray-300 p-8' >
        <div className='m-auto w-full xl:w-4/5 flex flex-row flex-wrap justify-between items-center gap-y-5'>
            <h1 className='text-2xl lg:text-5xl font-thin'>
                SUBSCRIBE TO <br />
                <span className='font-semibold'>PROPERTY ALERT</span>
            </h1>

            <form className='flex flex-col gap-3 w-64'>
                <label className='tracking-widest'>
                    EMAIL
                </label>

                <input type="email" className='input'/>
            </form>

            <div className='button w-72 p-4 cursor-pointer text-center font-medium'>
                SUBSCRIBE
            </div>

        </div>

    </div>
  )
}

export default Subscribe
