import { journey } from "../utils/journey"

const WhyChooseUs = () => {
    return (
      <>
        <div className=" bg bg-no-repeat bg-[url('https://i.guim.co.uk/img/media/783bfcf256d8ec8d2eb5fa3ce6b0642a76a5cecb/0_104_3500_2101/master/3500.jpg?width=465&dpr=1&s=none')] bg-center  bg-cover">
          <div className='bg-[#061426]  w-full h-full bg-opacity-60   p-8'>
            <div className='text-center z-10'>
              <h1 className='text-[40px] text-primary-color font-semibold'>
                One-Stop Solution for Queue Management
              </h1>
              <h3 className='text-white font-semibold text-2xl mt-4'>
                Your Queueing Journey
              </h3>

              <div className='flex justify-center items-center mt-8 relative '>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 journey-card-container'>
                  {/* items here */}
                  {journey.map((item) => (
                    <div
                      className='flex flex-col justify-center items-center p-4  w-[250px] child-card'
                      key={item.id}
                    >
                      <div className='h-14 flex justify-center items-center '>
                        <div className='bg-primary-color w-14 h-14 rounded-full flex justify-center items-center  svg-card '>
                          {item.icon}
                          {/* {index} */}
                        </div>
                      </div>
                      <p className='text-white font-semibold text-md mt-4 leading-5 h-10'>
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default WhyChooseUs
