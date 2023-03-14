import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Atom } from "..";

const Development = () => (

  <div className="relative">

    <div className='threeJsCanvas'>
      <Canvas>
        <Suspense fallback={null}>

          <OrbitControls enableZoom={false} autoRotate />

          <Stage environment="city" intensity={0.6}>
            <Atom />
          </Stage>

        </Suspense>
      </Canvas>
    </div>

    <p className="w-[300px] p-2 text-center rounded-md bg-white/70 absolute top-0 md:top-[10px] left-0 md:left-[20px] text-black">
      this is a react logo of 3D model and this kind of interaction is possible by threeJs library implementation with reactJs.
    </p>
  </div>
)

export default Development