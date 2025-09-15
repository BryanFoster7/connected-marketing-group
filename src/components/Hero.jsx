import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark opacity-50"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        </div>
      </div>

      <div className="container relative py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block heading-gradient">Build Something</span>
            <span className="block text-primary-light">Amazing Today</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-light/80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform your ideas into reality with our powerful platform. Join thousands of creators 
            who are already building the future.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button className="btn-primary">
                Get Started Free
              </button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-light">Easy Setup</h3>
                <p className="text-sm text-light/70">Get started in minutes with our simple setup process</p>
              </div>
              
              <div className="card group">
                <div className="w-12 h-12 bg-accent-teal/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-accent-teal/20 transition-colors">
                  <svg className="w-6 h-6 text-accent-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-light">Reliable</h3>
                <p className="text-sm text-light/70">99.9% uptime guarantee with enterprise-grade security</p>
              </div>
              
              <div className="card group">
                <div className="w-12 h-12 bg-accent-amber/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-accent-amber/20 transition-colors">
                  <svg className="w-6 h-6 text-accent-amber" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-light">Fast</h3>
                <p className="text-sm text-light/70">Lightning-fast performance that scales with your needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero