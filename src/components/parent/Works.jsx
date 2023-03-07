import data from '../../constants/data'

const Works = () => {
  return (
    <section className='snap-center h-screen flex justify-center'>

      <div className="w-[1400px] flex justify-between">

        {/* Left Side */}
        <div className="flex-1 flex items-center">
          <ul className='flex flex-col gap-5 text-[85px]'>
            {
              data.map(item =>
                <li
                  key={item}
                  after={item}
                  className={`cursor-pointer font-bold text-transparent relative textOutline w-fit
                  after:content-[attr(after)]
                  after:absolute
                  after:w-0
                  after:top-0
                  after:left-0
                after:text-red-300
                  after:overflow-hidden
                  after:whitespace-nowrap
                  hover:after:animate-textHover
                  hover:after:noTextOutline `}
                >

                  {item}

                </li>
              )
            }
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex-1"></div>
      </div>

    </section>
  )
}

export default Works