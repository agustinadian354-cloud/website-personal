import { Canvas } from '@react-three/fiber'
import { CameraRig } from './CameraRig'
import { FilmScreen } from './FilmScreen'
import { SpotlightRig } from './SpotlightRig'
import { FilmGrainParticles } from './FilmGrainParticles'
import { Clapperboard } from './Clapperboard'

/**
 * Fixed, full-viewport WebGL background shared by the whole page — the
 * scroll-driven "director's set" that stands in for noth.in's abstract 3D
 * scene, re-angled to the cinematic-ads-director niche. Mounted only when
 * WebGL is available and the user hasn't asked for reduced motion.
 */
export function Scene3D() {
  return (
    // z-0, not a negative z-index: a negative value paints this fixed layer
    // behind the page's own root background instead of merely behind <main>,
    // so it never becomes visible. z-0 plus DOM order (this mounts before
    // <main>) keeps it behind normal content while staying paintable.
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0.4, 7.2], fov: 42 }}
      >
        <color attach="background" args={['#0a0a0b']} />
        <fog attach="fog" args={['#0a0a0b', 4, 12]} />
        <ambientLight intensity={0.35} />
        <hemisphereLight intensity={0.25} color="#f2f0ea" groundColor="#0a0a0b" />
        <SpotlightRig />
        <FilmScreen />
        <FilmGrainParticles />
        <Clapperboard />
        <CameraRig />
      </Canvas>
    </div>
  )
}
