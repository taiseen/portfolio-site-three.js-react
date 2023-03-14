import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { FbLogo } from "..";

const SocialMedia = () => (

    <div className="relative">
        <div className='threeJsCanvas'>
            <Canvas>
                <Suspense fallback={null}>

                    <OrbitControls enableZoom={false} autoRotate />

                    <Stage environment="city" intensity={0.6}>
                        <FbLogo />
                    </Stage>

                </Suspense>
            </Canvas>
        </div>

        <p className="w-[280px] p-2 text-center rounded-md bg-white/70 absolute bottom-0 md:bottom-[-20px] right-0 md:right-[-20px] text-black">
            this is a facebook social media logo 3D version and this kind of interaction is possible by threeJs library implementation with reactJs.
        </p>
    </div>
)

export default SocialMedia