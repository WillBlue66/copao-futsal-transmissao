import { ClipboardList } from 'lucide-react'
import { responsibilities, ShieldIcon } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

function Responsibilities() {
  return (
    <section className="reveal px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading kicker="Contratante" title="Responsabilidades do contratante" align="left">
          Para viabilizar a operação durante os três dias de evento, alguns itens ficam sob
          responsabilidade do contratante.
        </SectionHeading>

        <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-live/15 text-live">
              <ClipboardList size={25} />
            </div>
            <p className="text-lg font-black">Checklist para operação no local</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {responsibilities.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl bg-black/18 p-4 text-sm leading-6 text-slate-200">
                <ShieldIcon className="mt-0.5 shrink-0 text-signal" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Responsibilities
