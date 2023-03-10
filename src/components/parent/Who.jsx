import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { CubeBox } from '..';
import images from '../../assets';


const Who = () => {

  return (
    <section className='h-screen snap-center flex justify-center' id='studio'>

      <div className='h-screen snap-center w-[1400px] flex justify-between items-center'>

        {/* Left Side | 3D model */}
        <div className='flex-1 h-[700px]'>
          <Canvas camera={{ fov: 20, position: [5, 5, 5] }}>
            {/* autoRotate */}
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <CubeBox />
          </Canvas>
        </div>


        {/* Right Side */}
        <div className='flex-1 flex flex-col justify-center gap-5'>
          <h1 className='text-[76px]'>Think outside the square space</h1>

          <div className='flex items-center gap-3'>
            <img src={images.line} alt="line" className='h-3' />
            <h2 className='text-pink-500 text-3xl'>Who we are...</h2>
          </div>

          <p className='text-2xl text-gray-300'>
            a creative group of designers and developers with a passion for the arts.
          </p>

          <button className='btn w-36'>See our works</button>
        </div>

      </div>

    </section>
  )
}

export default Who