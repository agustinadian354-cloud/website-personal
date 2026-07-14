import { Nav } from './components/Nav'
import { CustomCursor } from './components/CustomCursor'
import { Hero } from './sections/Hero'
import { Work } from './sections/Work'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { useSmoothScroll } from './lib/useSmoothScroll'

function App() {
  useSmoothScroll()

  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App
