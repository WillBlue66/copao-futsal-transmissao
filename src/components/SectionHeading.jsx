function SectionHeading({ kicker, title, children, align = 'center' }) {
  const isCenter = align === 'center'

  return (
    <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-signal">
        {kicker}
      </p>
      <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">{title}</h2>
      {children && (
        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{children}</p>
      )}
    </div>
  )
}

export default SectionHeading
