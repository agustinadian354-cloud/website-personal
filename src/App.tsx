import { lazy, Suspense } from 'react'
import { Nav } from './components/Nav'
import { CustomCursor } from './components/CustomCursor'
import { Hero } from './sections/Hero'
import { Work } from './sections/Work'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { useSmoothScroll } from './lib/useSmoothScroll'
import { useWebGLSupport } from './hooks/useWebGLSupport'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'

// Three.js/R3F is a heavy dependency — split into its own chunk and only
// fetched for visitors who'll actually render the 3D scene.
const Scene3D = lazy(() => import('./three/Scene3D').then((m) => ({ default: m.Scene3D })))

function App() {
  useSmoothScroll()
  const webglSupported = useWebGLSupport()
  const reducedMotion = usePrefersReducedMotion()
  const show3D = webglSupported && !reducedMotion

  return (
    <>
      {show3D && (
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      )}
      <CustomCursor />
      <Nav />
      <main>
        <Hero use3D={show3D} />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App
