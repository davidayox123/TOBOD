import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About TOBOD - Nylon Packaging & Desiccant Solutions',
  description: 'Learn about TOBOD, a leading nylon packaging manufacturer in Lagos, Nigeria. Our history, mission, and modern manufacturing facilities.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About TOBOD
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            A leading manufacturer of premium nylon packaging solutions and provider of quality 
            desiccant products, serving industries across Nigeria and beyond from our Lagos facility.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Our History
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  TOBOD was founded with a vision to provide the highest quality nylon packaging 
                  solutions and complementary moisture protection products for industries across 
                  Nigeria and West Africa. Starting as a focused manufacturing operation in Lagos, 
                  we have grown into a trusted name in packaging solutions.
                </p>
                <p>
                  Our core expertise lies in manufacturing premium LDPE and LLDPE nylon packaging 
                  products using advanced production equipment. We have also expanded our product 
                  line to include reliable desiccant solutions, making us a comprehensive packaging 
                  partner for our clients.
                </p>
                <p>
                  Today, TOBOD operates from our modern facility located at 13 Peak Thomas Street, 
                  off AIT Road, Alagbado, Lagos, strategically positioned to serve the Nigerian 
                  market and beyond with quality packaging solutions.
                </p>
              </div>
            </div>
            
            <div 
              className="h-96 bg-gray-300 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/factory-inside.jpg)',
                backgroundColor: '#d1d5db'
              }}
            >
              <div className="h-full bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                  </svg>
                  <p>Factory Interior Image</p>
                  <p className="text-sm">(Placeholder)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Mission & Vision
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-4">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To provide superior nylon packaging solutions and reliable moisture protection 
                products that safeguard our clients&apos; goods during storage and transportation. 
                We are committed to delivering exceptional quality, reliability, and service 
                that exceeds expectations and builds lasting partnerships with businesses across Nigeria.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 text-center mb-4">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To be the leading packaging solutions provider in West Africa, recognized for 
                innovation in nylon manufacturing, quality products, and environmental responsibility. 
                We envision a future where businesses across Nigeria rely on TOBOD for their 
                complete packaging needs, from manufacturing to moisture protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Manufacturing Excellence
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Production Capacity</h3>
              <p className="text-gray-600">
                Our Lagos facility can produce thousands of meters of nylon packaging daily, 
                with flexible capacity for both LDPE and LLDPE production lines.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Quality Control</h3>
              <p className="text-gray-600">
                24/7 monitoring systems and rigorous testing protocols ensure every product 
                meets international quality standards before shipment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Strategic Location</h3>
              <p className="text-gray-600">
                Located in Alagbado, Lagos with excellent access to major transportation networks, 
                enabling efficient distribution across Nigeria and West Africa.
              </p>
            </div>
          </div>
          
          {/* Factory Stats */}
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-900">1000+</div>
                <div className="text-gray-600">Meters Daily Capacity</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">15+</div>
                <div className="text-gray-600">States Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">99%</div>
                <div className="text-gray-600">Quality Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">Lagos</div>
                <div className="text-gray-600">Based in Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Factory Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { src: '/images/factory-inside.jpg', title: 'Production Floor' },
              { src: '/images/factory-workers.jpg', title: 'Quality Control Team' },
              { src: '/images/factory-machines.jpg', title: 'Manufacturing Equipment' },
            ].map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="h-64 bg-gray-300 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image.src})`,
                    backgroundColor: '#d1d5db'
                  }}
                >
                  <div className="h-full bg-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                      </svg>
                      <p className="text-sm">Image Placeholder</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-900">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Partner With TOBOD
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to protect your products with premium desiccant solutions? 
            Contact us today to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary">
              Request a Quote
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
