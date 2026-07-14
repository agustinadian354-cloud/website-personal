import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function useLabelTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const ctx = canvas.getContext('2d')
    if (!ctx) return new THREE.CanvasTexture(canvas)

    ctx.fillStyle = '#111113'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = '#d7ff3f'
    ctx.lineWidth = 6
    ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24)

    ctx.fillStyle = '#f2f0ea'
    ctx.font = '600 40px Inter, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('ADS BY DIAN', canvas.width / 2, 220)

    ctx.fillStyle = '#d7ff3f'
    ctx.font = '500 24px monospace'
    ctx.fillText('CINEMATIC AI ADS — TAKE 01', canvas.width / 2, 280)

    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  }, [])
}

/** A prop on the set — establishes the "director's floor" reading without pulling in a 3D asset loader. */
export function Clapperboard() {
  const label = useLabelTexture()
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = 0.6 + Math.sin(t * 0.15) * 0.25
    group.current.position.y = -1.4 + Math.sin(t * 0.3) * 0.06
  })

  return (
    <group ref={group} position={[-3.4, -1.4, -1.5]} rotation={[0.1, 0.6, -0.08]}>
      <mesh>
        <boxGeometry args={[1.4, 1.4, 0.08]} />
        <meshBasicMaterial map={label} toneMapped={false} />
      </mesh>
      <mesh position={[-0.6, 0.78, 0]} rotation={[0, 0, 0.25]}>
        <boxGeometry args={[1.4, 0.22, 0.1]} />
        <meshStandardMaterial color="#17171a" roughness={0.5} />
      </mesh>
    </group>
  )
}
