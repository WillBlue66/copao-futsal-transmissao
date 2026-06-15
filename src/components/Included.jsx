import { operationItems } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

function Included() {
  return (
    <section className="reveal bg-black/18 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Estrutura técnica" title="O que está incluso na operação" />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {operationItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.065] p-5 transition hover:border-signal/50 hover:bg-signal/10"
            >
              <Icon className="text-replay" size={28} />
              <p className="mt-4 text-sm font-extrabold leading-6 text-white">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Included
