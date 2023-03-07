import data from '../../constants/data'

const Works = () => {
  return (
    <section className='snap-center h-screen flex justify-center'>

      <div className="container w-[1400px] mx-auto flex justify-between">

        {/* Left Side */}
        <div className="flex-1 flex items-center">
          <ul className='flex flex-col gap-5 text-[85px]'>
            {
              data.map(item =>
                <li
                  key={item}
                  className={`cursor-pointer font-bold text-transparent relative textOutline
                  after:content-['{item}']
                  after:absolute
                  after:top-0
                  after:left-0
                after:text-red-300
                  after:w-0
                  after:whitespace-nowrap
                  after:overflow-hidden
                  hover:after:animate-textHover
                  `}
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