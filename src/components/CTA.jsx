import React from 'react'

const CTA = () => {
  return (
    <section className="bg-dark-lighter relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent-purple/5 to-primary/5"></div>
      
      <div className="container relative py-12 lg:py-16 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="block heading-gradient">Ready to dive in?</span>
          <span className="block text-primary/80">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
          <button className="btn-primary">
            Get started
          </button>
          <button className="btn-secondary">
            Learn more
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA