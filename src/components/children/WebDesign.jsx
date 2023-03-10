import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Mac } from "..";


const WebDesign = () => (

  <div className='relative'>

    <div className="threeJsCanvas">
      <Canvas>
        <Suspense fallback={null}>

          <OrbitControls enableZoom={false} autoRotate />

          <Stage environment="city" intensity={0.6}>
            <Mac />
          </Stage>

        </Suspense>
      </Canvas>
    </div>

    <p className="w-[280px] p-2 text-center rounded-md bg-white/70 absolute bottom-0 md:bottom-[50px] right-0 md:right-[100px] text-black">
      We design products with a strong focus on both world class design and
      ensuring your product is a market success.
    </p>
  </div>

)

export default WebDesign