import { AlertTriangle, Satellite, Scissors } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const notes = [
  {
    icon: Scissors,
    title: 'Entrega da transmissão',
    text:
      'Os valores contemplam exclusivamente a transmissão ao vivo do evento, sem edição posterior, produção de reels, cortes, melhores momentos ou entrega de vídeos editados. Caso o contratante deseje materiais adicionais para redes sociais, esses serviços poderão ser orçados separadamente.',
  },
  {
    icon: AlertTriangle,
    title: 'Operação com drone',
    text:
      'A operação do drone fica condicionada às condições climáticas, segurança da área, autorização da organização e possibilidade técnica de voo no local.',
  },
  {
    icon: Satellite,
    title: 'Backup Starlink',
    text:
      'A Starlink será levada como backup de internet, aumentando a segurança da transmissão caso a conexão principal apresente instabilidade.',
  },
]

function Observations() {
  return (
    <section className="reveal bg-black/18 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Alinhamentos" title="Observações importantes" />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {notes.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.07] p-6">
              <Icon className="text-live" size={30} />
              <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Observations
