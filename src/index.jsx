import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { StrictMode } from 'react'
import { Suspense } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [- 9, 1, 12]
}
root.render(
    <StrictMode>
        <Canvas
            shadows={true}
            camera={cameraSettings}
        >
            <Suspense>
                <Experience />
            </Suspense>
        </Canvas>

    </StrictMode>
)