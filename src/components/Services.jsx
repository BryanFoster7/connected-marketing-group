import React from 'react'
import SnakeGame from './SnakeGame'

const Services = () => {
  return (
    <div className="pt-20 bg-dark">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 heading-gradient">
          Our Web Design Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Responsive Web Design Service */}
          <div className="bg-dark-lighter rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Responsive Web Design"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-3 text-primary">Responsive Web Design</h3>
            <p className="text-light/80">
              Create beautiful, responsive websites that work seamlessly across all devices.
              Our designs adapt to any screen size while maintaining functionality and aesthetics.
            </p>
          </div>

          {/* Interactive Games Development */}
          <div className="bg-dark-lighter rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-primary">Interactive Games</h3>
            <p className="text-light/80 mb-4">
              Engage your users with fun and interactive browser games.
              Try our classic Snake game below!
            </p>
            <div className="w-full">
              <SnakeGame />
            </div>
          </div>

          {/* UI/UX Design Service */}
          <div className="bg-dark-lighter rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="UI/UX Design"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-3 text-primary">UI/UX Design</h3>
            <p className="text-light/80">
              Create intuitive and engaging user experiences with our professional UI/UX design services.
              We focus on user-centered design principles to maximize engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
