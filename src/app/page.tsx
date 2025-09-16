import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: 'url(/images/factory-hero.jpg)',
            backgroundColor: '#1f2937' // Fallback color
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white container-max px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            TOBOD – Premium Nylon Packaging & Desiccant Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Manufacturing quality nylon packaging (LDPE & LLDPE) and providing reliable moisture protection solutions for industries worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary inline-block text-center">
              Request a Quote
            </Link>
            <Link href="/contact" className="btn-secondary inline-block text-center bg-white border-white text-blue-900 hover:bg-blue-100">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose TOBOD Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Why Choose TOBOD?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Premium Quality</h3>
              <p className="text-gray-600">
                Advanced manufacturing processes ensure consistent, high-quality nylon packaging and desiccant products
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Manufacturing Excellence</h3>
              <p className="text-gray-600">
                State-of-the-art facility producing LDPE & LLDPE nylon packaging with comprehensive quality control
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Fast Delivery</h3>
              <p className="text-gray-600">
                Located in Lagos with efficient logistics for timely delivery across Nigeria and beyond
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Complete Solutions</h3>
              <p className="text-gray-600">
                From nylon packaging manufacturing to moisture protection - your one-stop packaging partner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Our Product Range
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-64 bg-gray-300 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/nylon-packaging.jpg)',
                  backgroundColor: '#d1d5db'
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Nylon Packaging Solutions</h3>
                <p className="text-gray-600 mb-4">
                  High-quality LDPE and LLDPE nylon packaging manufactured in our Lagos facility. Perfect for industrial and commercial applications.
                </p>
                <Link href="/products" className="text-blue-900 font-medium hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-64 bg-gray-300 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/desiccant-products.jpg)',
                  backgroundColor: '#d1d5db'
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Industrial Desiccant Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Premium moisture protection solutions for shipping, storage, and industrial applications. Available in various sizes.
                </p>
                <Link href="/products" className="text-blue-900 font-medium hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Factory Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                State-of-the-Art Manufacturing Facility
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our modern factory located in Alagbado, Lagos specializes in manufacturing high-quality 
                nylon packaging products using LDPE and LLDPE materials. We also provide premium 
                desiccant solutions to complement our packaging offerings, ensuring complete moisture 
                protection for your products.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Advanced nylon manufacturing equipment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">LDPE & LLDPE production capabilities</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Located in Lagos for easy access</span>
                </div>
              </div>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            
            <div className="relative">
              <video
                className="w-full rounded-lg shadow-lg"
                poster="/images/factory-tour.jpg"
                controls
                preload="none"
              >
                <source src="/videos/factory-tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                  <p>Factory Tour Video</p>
                  <p className="text-sm">(Placeholder)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Products?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Get in touch with our team to discuss your moisture protection needs. 
            We provide customized solutions for businesses of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary bg-white text-blue-900 hover:bg-blue-50">
              Get a Quote
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
