import noise, { perlin3 } from '../noise'
import MeshAnim from './MeshAnim'

const Anim = () => {
    const seed = Math.floor(Math.random() * (2 ** 16))
    noise.seed(seed)

    const sampleNoise = (x, y, z) => {
        let scale = 1 / 8
        let octaves = 20
        let persistence = 0.6
        let lacunarity = 2

        let amp = 1
        let freq = 1

        let value = 0

        for (let i = 0; i < octaves; i++) {
            value += amp * perlin3(x * freq * scale, y * freq * scale, z)
            amp *= persistence
            freq *= lacunarity
        }
        return value
    }

    const zOfXYT = (x, y, t) => {
        return sampleNoise(x, y, t)
    }

    const colorOfXYZT = (x, y, z, t) => {
        return {
            r: z,
            g: z/5,
            b: Math.sqrt(x ** 2 + y ** 2) / 75,
        }
    }

    return (
        <>
            <MeshAnim
                position={[0, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                grid={{
                    width: 100,
                    height: 100,
                    sep: 0.2
                }}
                zOfXYT={zOfXYT}
                colorOfXYZT={colorOfXYZT}
                anim={{
                    init: 0,
                    update: (t) => t + 0.002
                }}
            />
        </>
    )
}

export default Anim
