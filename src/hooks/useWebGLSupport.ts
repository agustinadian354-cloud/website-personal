import { useEffect, useState } from 'react'

/** Detects real WebGL2 availability so the 3D scene can fall back gracefully instead of crashing. */
export function useWebGLSupport() {
  const [supported, setSupported] = useState(false)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
      setSupported(Boolean(gl))
    } catch {
      setSupported(false)
    }
  }, [])

  return supported
}
