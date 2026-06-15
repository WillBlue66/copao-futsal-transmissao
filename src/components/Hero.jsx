import { ArrowDown, MessageCircle, Play, RadioTower, Satellite, Trophy } from 'lucide-react'
import { whatsapp } from '../data.js'

function Hero() {
  return (
    <header className="field-lines relative min-h-[92vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-pitch/40 to-pitch" />
      <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-center px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr]">
          <section className="max-w-4xl">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-live/40 bg-live/10 px-4 py-2 text-xs font-black uppercase text-white shadow-live">
              <span className="h-2.5 w-2.5 rounded-full bg-live" />
              Copão de Futsal • 11, 12 e 13 de dezembro
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-[1.03] text-white sm:text-5xl lg:text-7xl">
              Transmissão ao Vivo Profissional para o Copão de Futsal
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              Cobertura completa em Cachoeira do Piriá/PA, nos dias 11, 12 e 13 de
              dezembro, com estrutura profissional de câmeras, GC, direção técnica e
              backup de internet.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-slate-100">
              {['3 dias de evento', 'Transmissão ao vivo', 'Equipe completa', 'Starlink backup'].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pacotes"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-7 py-4 text-sm font-black uppercase text-pitch shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
              >
                Ver pacotes
                <ArrowDown size={18} />
              </a>
              <a
                href={whatsapp.general}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-7 py-4 text-sm font-black uppercase text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-signal hover:text-signal"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </section>

          <aside className="reveal relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/8 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[24px] border border-white/12 bg-gradient-to-br from-flood via-pitch to-black p-5">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-live">
                      Ao vivo
                    </p>
                    <p className="mt-1 text-2xl font-black">CP Futsal TV</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-live text-white shadow-live">
                    <Play fill="currentColor" size={22} />
                  </div>
                </div>

                <div className="my-6 grid aspect-video place-items-center overflow-hidden rounded-2xl border border-signal/30 bg-pitch">
                  <div className="relative h-40 w-64 rounded-[40%] border-2 border-signal/50">
                    <div className="absolute inset-y-0 left-1/2 w-px bg-signal/50" />
                    <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-signal/50" />
                    <div className="absolute -left-6 top-1/2 h-16 w-10 -translate-y-1/2 rounded-r-full border-2 border-l-0 border-signal/50" />
                    <div className="absolute -right-6 top-1/2 h-16 w-10 -translate-y-1/2 rounded-l-full border-2 border-r-0 border-signal/50" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Trophy, label: 'Placar' },
                    { icon: RadioTower, label: 'Link' },
                    { icon: Satellite, label: 'Backup' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/8 p-3 text-center">
                      <Icon className="mx-auto text-signal" size={22} />
                      <p className="mt-2 text-xs font-extrabold uppercase text-slate-200">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </header>
  )
}

export default Hero
