import { Canvas } from '@react-three/fiber'
import Anim from './Anim'

const AnimationCanvas = () => {
    return (
        <>
            <Canvas
                camera={{position: [0, 2, 10], fov: 75}}
            >
                <ambientLight />
                <Anim />
            </Canvas>
        </>
    )
}

export default AnimationCanvas
