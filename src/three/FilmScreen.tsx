import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useVideoTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useMouseParallax } from './useMouseParallax'

const SCREEN_WIDTH = 3.32
const SCREEN_HEIGHT = 1.87

/** Isolated in its own Suspense boundary so a slow-loading video never hides the bezel/frame around it. */
function VideoPlane() {
  const texture = useVideoTexture('/media/reel.mp4')
  return (
    <mesh>
      <planeGeometry args={[SCREEN_WIDTH, SCREEN_HEIGHT]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  )
}

/**
 * The reel, playing on a floating director's monitor tilted in 3D space —
 * the literal centerpiece of the "cinematic AI ads director" angle, in
 * place of noth.in's abstract geometry.
 */
export function FilmScreen() {
  const mouse = useMouseParallax()
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    const targetRotY = -0.35 + mouse.current.x * 0.15
    const targetRotX = 0.05 - mouse.current.y * 0.08
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.04)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.04)
    group.current.position.y = Math.sin(t * 0.4) * 0.08
  })

  return (
    <group ref={group} position={[0.7, 0, 0]} rotation={[0, -0.35, 0]}>
      <mesh position={[0, 0, -0.04]}>
        <planeGeometry args={[3.6, 2.06]} />
        <meshStandardMaterial color="#0a0a0b" roughness={0.6} metalness={0.3} />
      </mesh>
      <mesh position={[0, 0, -0.03]}>
        <planeGeometry args={[3.68, 2.14]} />
        <meshBasicMaterial color="#d7ff3f" transparent opacity={0.1} />
      </mesh>
      <Suspense
        fallback={
          <mesh>
            <planeGeometry args={[SCREEN_WIDTH, SCREEN_HEIGHT]} />
            <meshBasicMaterial color="#111113" />
          </mesh>
        }
      >
        <VideoPlane />
      </Suspense>
    </group>
  )
}
