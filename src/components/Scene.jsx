import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"
import { Overlay } from "./Overlay"

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    <Canvas camera={{fov: 74,position:[1.9 , 0.4, 3.3]}} gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-full">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.3} pages={3}>
          <Overlay />
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}