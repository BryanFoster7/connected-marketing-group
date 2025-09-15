import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Information = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    phoneNumber: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-dark-lighter p-8 rounded-lg shadow-glow border border-dark-lightest">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold heading-gradient">Thank You!</h2>
            <p className="mt-2 text-light/80">
              Thank you for registering {formData.businessName}! You've been successfully signed up for our email updates.
              {formData.phoneNumber && " We'll use your provided phone number if we need to reach you directly."}
              {formData.message ? " We've received your message and we'll be in touch soon!" : " We'll be in touch soon!"}
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="btn-primary inline-flex items-center justify-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-dark-lighter p-8 rounded-lg shadow-glow border border-dark-lightest">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold heading-gradient">
            Get Started
          </h2>
          <p className="mt-2 text-center text-sm text-light/80">
            Sign up to receive updates and exclusive offers
          </p>
        </div>
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-md">
            {error}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light/90">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 bg-dark-lightest border border-dark-lightest placeholder-light/50 text-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-light/90">
                Business Name
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 bg-dark-lightest border border-dark-lightest placeholder-light/50 text-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors"
                placeholder="Your Business LLC"
                value={formData.businessName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light/90">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 bg-dark-lightest border border-dark-lightest placeholder-light/50 text-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-light/90">
                Phone Number <span className="text-light/50">(optional)</span>
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                className="mt-1 appearance-none relative block w-full px-3 py-2 bg-dark-lightest border border-dark-lightest placeholder-light/50 text-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors"
                placeholder="(123) 456-7890"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-light/90">
                Message(s)
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 appearance-none relative block w-full px-3 py-2 bg-dark-lightest border border-dark-lightest placeholder-light/50 text-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors"
                placeholder="Enter any additional messages or questions here..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary w-full flex justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>
            <div className="text-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-light/80 hover:text-primary transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Information;