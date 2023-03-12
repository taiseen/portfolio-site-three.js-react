import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Circle = () => (

    <Canvas>

        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />

        <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial speed={2} distort={.5} attach='material' color='#4d1c56' />
        </Sphere>

    </Canvas>
)


export default Circle