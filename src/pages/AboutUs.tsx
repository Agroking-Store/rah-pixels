import React from 'react'

const AboutUs = () => {
  return (
    <div className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Intro Section */}
      <div className="text-center mb-16">
        <span className="text-accent-purple font-sans font-semibold tracking-wider uppercase text-sm mb-2 block">
          Creative Design Studio
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">
          About Our Studio
        </h1>
        <p className="text-lg md:text-xl font-sans text-body-text max-w-3xl mx-auto leading-relaxed">
          Rah Pixels is an award-winning branding and design studio with over 10 years of experience helping businesses build memorable brands.
        </p>
      </div>
      
      {/* Founders Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-2 bg-accent-gold rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-secondary">
            Meet the Founders
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Sudeepa */}
          <div className="group border-l-2 border-accent-purple/20 pl-6 hover:border-accent-purple transition-colors">
            <h3 className="text-xl font-heading font-bold text-primary mb-1">
              Sudeepa Chaudhari
            </h3>
            <p className="text-accent-purple font-sans font-medium text-sm mb-4">
              Founder | Global Brand Designer & Strategist
            </p>
            <p className="text-body-text font-sans text-base leading-relaxed">
              A software engineer by education and a brand designer by passion, Sudeepa has spent the last decade helping more than 1,400 businesses build brands with purpose.
            </p>
          </div>

          {/* Anil */}
          <div className="group border-l-2 border-accent-gold/20 pl-6 hover:border-accent-gold transition-colors">
            <h3 className="text-xl font-heading font-bold text-primary mb-1">
              Anil Chaudhari
            </h3>
            <p className="text-accent-gold font-sans font-medium text-sm mb-4">
              Co-Founder | Business Strategy & Growth
            </p>
            <p className="text-body-text font-sans text-base leading-relaxed">
              With extensive experience in hospitality, sales, and business development, Anil brings strategic thinking and customer-centric insight to Rah Pixels.
            </p>
          </div>
        </div>
      </div>

      {/* Example CTA to show Button styles */}
      <div className="mt-16 text-center">
        <button className="bg-primary text-white font-sans font-semibold text-base px-8 py-3 rounded-md hover:bg-secondary transition-colors shadow-lg shadow-primary/20">
          Work With Us
        </button>
      </div>
    </div>
  )
}

export default AboutUs
