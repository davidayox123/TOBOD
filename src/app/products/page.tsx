import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products - TOBOD Nylon Packaging & Desiccant Solutions',
  description: 'Browse our range of premium nylon packaging products (LDPE & LLDPE) and industrial desiccant solutions manufactured in Lagos, Nigeria.',
};

const products = [
  {
    id: 1,
    name: 'LDPE Nylon Packaging',
    image: '/images/ldpe-nylon.jpg',
    description: 'High-quality Low-Density Polyethylene (LDPE) nylon packaging manufactured in our Lagos facility. Excellent flexibility and moisture resistance for various applications.',
    specifications: [
      'Material: Premium LDPE',
      'Thickness: 50-200 microns available',
      'Width: Customizable from 100mm to 2000mm',
      'Color: white, off-white, and other colors available',
      'Applications: Food packaging, industrial wrapping'
    ],
    applications: [
      'Food packaging',
      'Industrial protection',
      'Agricultural covers',
      'Construction barriers'
    ]
  },
  {
    id: 2,
    name: 'LLDPE Nylon Packaging',
    image: '/images/lldpe-nylon.jpg',
    description: 'Superior Linear Low-Density Polyethylene (LLDPE) nylon packaging offering enhanced strength and puncture resistance for demanding applications.',
    specifications: [
      'Material: Premium LLDPE',
      'Thickness: 30-150 microns available',
      'Enhanced puncture resistance',
      'Superior strength properties',
      'Custom sizes and specifications'
    ],
    applications: [
      'Heavy-duty packaging',
      'Stretch wrapping',
      'Industrial liners',
      'Agricultural films'
    ]
  },
  {
    id: 3,
    name: 'Custom Nylon Bags',
    image: '/images/custom-nylon-bags.jpg',
    description: 'Customized nylon bags manufactured to your exact specifications. Available in various sizes, colors, and thicknesses for diverse packaging needs.',
    specifications: [
      'Material: LDPE or LLDPE options',
      'Sizes: From small pouches to large industrial bags',
      'Printing: Up to 6 colors available',
      'Handle options: Die-cut, soft loop, or drawstring',
      'Minimum order: 10,000 pieces'
    ],
    applications: [
      'Retail packaging',
      'Shopping bags',
      'Product protection',
      'Brand promotion'
    ]
  },
  {
    id: 4,
    name: 'Industrial Nylon Sheets',
    image: '/images/nylon-sheets.jpg',
    description: 'Heavy-duty nylon sheets for industrial applications. Manufactured with superior strength and durability for demanding environments.',
    specifications: [
      'Material: High-grade LLDPE',
      'Thickness: 100-500 microns',
      'Width: Up to 6 meters',
      'Length: Custom lengths available',
      'UV stabilized options available'
    ],
    applications: [
      'Construction covers',
      'Waterproof barriers',
      'Equipment protection',
      'Temporary roofing'
    ]
  },
  {
    id: 5,
    name: 'Industrial Desiccant 25kg',
    image: '/images/desiccant-25kg.jpg',
    description: 'High-capacity moisture absorption for large industrial applications. Perfect for shipping containers, warehouse storage, and heavy-duty moisture protection.',
    specifications: [
      'Weight: 25kg per unit',
      'Absorption capacity: Up to 300% of weight',
      'Suitable for temperatures: -40°C to +80°C',
      'Packaging: Moisture-resistant bags',
      'Shelf life: 2 years when properly stored'
    ],
    applications: [
      'Shipping containers',
      'Warehouse storage',
      'Industrial equipment protection',
      'Large-scale moisture control'
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="container-max">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Product Range
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium nylon packaging solutions manufactured in our Lagos facility, plus industrial 
            desiccant products for complete moisture protection. All products meet international quality standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-64 bg-gray-300 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundColor: '#d1d5db'
                }}
              >
                <div className="h-full bg-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-sm">Product Image Placeholder</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                
                {/* Specifications */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Specifications</h4>
                  <ul className="space-y-2">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700 text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link href="/quote" className="btn-primary w-full text-center block">
                  Request Quote for This Product
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Why Choose TOBOD Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm">
                All products undergo rigorous testing and meet international quality standards
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600 text-sm">
                We can customize products and packaging to meet your specific requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Global Shipping</h3>
              <p className="text-gray-600 text-sm">
                Worldwide delivery with secure packaging and tracking for all orders
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-900 text-white rounded-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Contact our technical team to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary bg-white text-blue-900 hover:bg-blue-50">
              Request Custom Quote
            </Link>
            <Link href="/contact" className="btn-primary bg-white text-blue-900 hover:bg-blue-50">
              Speak with Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
