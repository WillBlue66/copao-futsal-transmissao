import { MessageCircle, Trophy } from 'lucide-react'
import { whatsapp } from '../data.js'

function FinalCTA() {
  return (
    <section className="reveal px-5 pb-32 pt-20 sm:px-6 md:pb-24 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-signal/25 bg-gradient-to-br from-signal/18 via-white/[0.07] to-live/12 p-8 text-center shadow-glow md:p-12">
        <Trophy className="mx-auto text-signal" size={40} />
        <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
          Pronto para escolher o melhor pacote?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
          Clique no botão abaixo e fale diretamente pelo WhatsApp para confirmar a melhor
          estrutura para o Copão de Futsal.
        </p>
        <a
          href={whatsapp.final}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-signal px-8 py-5 text-sm font-black uppercase text-pitch shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
        >
          <MessageCircle size={20} />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  )
}

export default FinalCTA
