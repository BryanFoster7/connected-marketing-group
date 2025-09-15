import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold heading-gradient sm:text-4xl">
              About Our Platform
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-light/80">
              We're on a mission to empower creators and businesses with the tools they need to 
              succeed in the digital world. Our platform combines cutting-edge technology with 
              intuitive design to deliver an exceptional user experience.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-md bg-primary/20 text-primary">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-light">Built for Scale</h3>
                  <p className="mt-1 text-light/70">
                    Our infrastructure can handle millions of users and requests without breaking a sweat.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-md bg-primary/20 text-primary">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-light">Developer Friendly</h3>
                  <p className="mt-1 text-light/70">
                    Comprehensive APIs and documentation make integration simple and straightforward.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-md bg-primary/20 text-primary">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-light">Community Driven</h3>
                  <p className="mt-1 text-light/70">
                    Join a vibrant community of creators who are building amazing things together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="card bg-gradient-to-br from-primary/10 to-accent-purple/10 border-dark-lightest">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 heading-gradient">Join 10,000+ Users</h3>
                <p className="text-light/80 mb-6">
                  Trusted by startups and enterprises worldwide
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">10K+</div>
                    <div className="text-light/70">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">99.9%</div>
                    <div className="text-light/70">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-light/70">Integrations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-light/70">Support</div>
                  </div>
                </div>

                <button 
                  onClick={() => window.location.href = '/information'} 
                  className="btn-primary"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About