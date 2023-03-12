import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Shoe } from "..";

const ProductDesign = () => (

    <div className='threeJsCanvas'>

        <Canvas>
            <Suspense fallback={null}>

                <OrbitControls enableZoom={false} autoRotate />

                <Stage environment="city" intensity={0.6}>
                    <Shoe />
                </Stage>

            </Suspense>
        </Canvas>

    </div>
)

export default ProductDesign