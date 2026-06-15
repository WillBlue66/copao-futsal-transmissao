import SectionHeading from './SectionHeading.jsx'
import { highlights } from '../data.js'

function TournamentContext() {
  return (
    <section className="reveal px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Operação do evento" title="Uma transmissão pensada para campeonato de alto fluxo">
          O evento terá programação durante o dia todo, com início previsto por volta das 8h,
          pausas para almoço e continuidade conforme a tabela da organização. Por isso, a
          estrutura proposta considera uma operação robusta para três dias de transmissão,
          com equipe técnica dedicada, operadores de câmera, GC, vMix, direção técnica e
          suporte para narração, comentários e reportagens.
        </SectionHeading>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
              <Icon className="text-signal" size={28} />
              <p className="mt-4 text-base font-extrabold text-white">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TournamentContext
