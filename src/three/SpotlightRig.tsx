import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface BeamProps {
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
  swaySpeed: number
  swayAmount: number
}

/** One stage light: a soft additive cone standing in for a volumetric beam, plus a real point light. */
function Beam({ position, rotation, color, swaySpeed, swayAmount }: BeamProps) {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.z = rotation[2] + Math.sin(t * swaySpeed) * swayAmount
  })

  return (
    <group ref={group} position={position} rotation={rotation}>
      <mesh position={[0, -1.6, 0]}>
        <coneGeometry args={[1.3, 3.2, 32, 1, true]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.06}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <pointLight color={color} intensity={3} distance={7} decay={2} />
    </group>
  )
}

/** Two stage lights flanking the screen, tinted lime and violet to match the site's accent palette. */
export function SpotlightRig() {
  return (
    <>
      <Beam
        position={[-2.4, 2.8, 1.2]}
        rotation={[0.32, 0, 0.2]}
        color="#d7ff3f"
        swaySpeed={0.25}
        swayAmount={0.05}
      />
      <Beam
        position={[3.2, 2.6, -0.6]}
        rotation={[0.28, 0, -0.25]}
        color="#6f5bff"
        swaySpeed={0.2}
        swayAmount={0.06}
      />
    </>
  )
}
