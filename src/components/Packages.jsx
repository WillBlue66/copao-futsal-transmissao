import { MessageCircle } from 'lucide-react'
import { CheckIcon, packages } from '../data.js'
import SectionHeading from './SectionHeading.jsx'

function PackageCard({ item }) {
  const Icon = item.icon

  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border p-6 transition hover:-translate-y-1 ${
        item.recommended
          ? 'border-signal bg-signal/10 shadow-glow lg:-mt-5 lg:mb-5'
          : 'border-white/10 bg-white/[0.07]'
      }`}
    >
      {item.badge && (
        <div className="absolute -top-4 left-6 rounded-full bg-signal px-4 py-2 text-xs font-black uppercase text-pitch shadow-glow">
          {item.badge}
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-signal">
          <Icon size={28} />
        </div>
        <p className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-black uppercase text-slate-300">
          3 dias
        </p>
      </div>

      <h3 className="mt-6 text-2xl font-black leading-tight text-white">{item.name}</h3>
      <p className="mt-4 text-4xl font-black text-white">{item.price}</p>
      <p className="mt-4 min-h-28 text-sm leading-7 text-slate-300">{item.description}</p>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {item.items.map((included) => (
          <li key={included} className="flex gap-3 text-sm leading-6 text-slate-200">
            <CheckIcon className="mt-0.5 shrink-0 text-signal" size={18} />
            <span>{included}</span>
          </li>
        ))}
      </ul>

      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-black uppercase transition hover:-translate-y-0.5 ${
          item.recommended
            ? 'bg-signal text-pitch shadow-glow hover:bg-white'
            : 'border border-white/15 bg-white/10 text-white hover:border-signal hover:text-signal'
        }`}
      >
        <MessageCircle size={18} />
        {item.cta}
      </a>
    </article>
  )
}

function Packages() {
  return (
    <section id="pacotes" className="reveal px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Pacotes comerciais" title="Escolha a estrutura ideal para o Copão">
          Três opções prontas para operação profissional, com equipe técnica, placar,
          transmissão ao vivo e suporte para uma cobertura comercial de alto valor.
        </SectionHeading>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <PackageCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
