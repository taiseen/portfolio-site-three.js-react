import { Navbar } from '..'
import images from '../../assets'

const Hero = () => {

  return (
    <section className='h-screen snap-center flex flex-col items-center justify-between'>

      <Navbar />

      <div className='h-screen snap-center w-[1400px] flex justify-between items-center'>

        {/* Left Side */}
        <div className='flex-2 flex flex-col justify-center gap-5'>
          <h1 className='text-[76px]'>Think. Make. Solve.</h1>

          <div className='flex items-center gap-3'>
            <img src={images.line} alt="line" className='h-3' />
            <h2 className='text-pink-500 text-3xl'>What we do...</h2>
          </div>

          <p className='text-2xl text-gray-300'>
            we enjoy create delightful, human-centered digital experiences.
          </p>

          <button className='btn'>Learn More</button>
        </div>

        {/* Right Side */}
        <div className='flex-3 relative w-[600px] h-[600px]'>
          <div></div>
          <img
            alt=""
            src={images.moon}
            className='object-contain absolute top-0 bottom-0 left-0 right-0 m-auto animate-customAni'
          />
        </div>

      </div>
    </section>
  )
}

export default Hero