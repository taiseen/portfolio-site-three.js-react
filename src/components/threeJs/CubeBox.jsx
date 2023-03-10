import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const CubeBox = () => {

    const speed = 2;
    const textRef = useRef();
    useFrame(state => textRef.current.position.x = Math.sin(state.clock.elapsedTime) * speed);

    return (
        <mesh>
            <boxGeometry />

            <meshStandardMaterial>
                <RenderTexture attach='map'>

                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />

                    <color attach='background' args={['tomato']} />

                    <Text font={3} color='#4f3a52' ref={textRef}>
                        Hello
                    </Text>

                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default CubeBox