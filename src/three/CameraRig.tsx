import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollProgressRef } from './useScrollProgressRef'
import { useMouseParallax } from './useMouseParallax'

const START = new THREE.Vector3(0, 0.4, 7.2)
const END = new THREE.Vector3(-0.7, -0.15, 3.6)

/**
 * Scroll-driven camera dolly: the camera moves through the set as the page
 * scrolls, like a director walking the floor from wide shot to close-up.
 * Mouse position adds a small parallax offset on top, damped every frame.
 */
export function CameraRig() {
  const { camera } = useThree()
  const progress = useScrollProgressRef()
  const mouse = useMouseParallax()

  useFrame((_, delta) => {
    const p = progress.current
    const targetX = THREE.MathUtils.lerp(START.x, END.x, p) + mouse.current.x * 0.4
    const targetY = THREE.MathUtils.lerp(START.y, END.y, p) - mouse.current.y * 0.25
    const targetZ = THREE.MathUtils.lerp(START.z, END.z, p)

    const damp = 1 - Math.pow(0.001, delta)
    camera.position.x += (targetX - camera.position.x) * damp
    camera.position.y += (targetY - camera.position.y) * damp
    camera.position.z += (targetZ - camera.position.z) * damp
    camera.lookAt(0.3, 0.1, 0)
  })

  return null
}
