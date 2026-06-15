import FinalCTA from './components/FinalCTA.jsx'
import Hero from './components/Hero.jsx'
import Included from './components/Included.jsx'
import Observations from './components/Observations.jsx'
import Packages from './components/Packages.jsx'
import Responsibilities from './components/Responsibilities.jsx'
import TournamentContext from './components/TournamentContext.jsx'
import { whatsapp } from './data.js'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-pitch text-white">
      <Hero />
      <main>
        <TournamentContext />
        <Packages />
        <Included />
        <Responsibilities />
        <Observations />
        <FinalCTA />
      </main>

      <a
        href={whatsapp.final}
        target="_blank"
        rel="noreferrer"
        className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-center rounded-full bg-signal px-5 py-4 text-sm font-black uppercase text-pitch shadow-glow transition hover:-translate-y-0.5 hover:bg-white md:hidden"
      >
        Chamar no WhatsApp
      </a>
    </div>
  )
}

export default App
