'use client';

import { useState } from 'react';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    // Contact Information
    name: '',
    email: '',
    company: '',
    phone: '',
    
    // Product Requirements
    productType: '',
    customProduct: '',
    quantity: '',
    packagingSize: '',
    
    // Application Details
    application: '',
    shippingLocation: '',
    timeline: '',
    
    // Additional Information
    additionalRequirements: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const productTypes = [
    { value: 'ldpe-nylon', label: 'LDPE Nylon Packaging' },
    { value: 'lldpe-nylon', label: 'LLDPE Nylon Packaging' },
    { value: 'custom-nylon-bags', label: 'Custom Nylon Bags' },
    { value: 'nylon-sheets', label: 'Industrial Nylon Sheets' },
    { value: 'industrial-desiccant', label: 'Industrial Desiccant 25kg' },
    { value: 'custom', label: 'Custom Solution' }
  ];

  const applications = [
    'Food Packaging',
    'Retail & Shopping Bags',
    'Industrial Protection',
    'Construction Covers',
    'Agricultural Films',
    'Shipping Containers',
    'Warehouse Storage',
    'Electronics Protection',
    'Pharmaceutical Packaging',
    'Textile Industry',
    'Chemical Storage',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
    // Formspree will handle the form submission
    // After submission, Formspree will redirect back or show success
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Request a Quote
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Get a customized quote for your nylon packaging or desiccant requirements. Our team will provide 
            competitive pricing and expert recommendations for your specific needs.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">Receive your quote within 24 hours</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm">Best prices for bulk orders</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">Technical recommendations included</p>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">
              Quote Request Form
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-1">Quote Request Submitted!</h3>
                    <p className="text-green-700">
                      Thank you for your request. Our team will review your requirements and send you a detailed quote within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form action="https://formspree.io/f/xkgvlwbr" method="POST" className="space-y-8">
              {/* Hidden field to identify this as a quote request */}
              <input type="hidden" name="_subject" value="TOBOD Quote Request" />
              
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b border-gray-200 pb-2">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>
              </div>

              {/* Product Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b border-gray-200 pb-2">
                  Product Requirements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">
                      Product Type *
                    </label>
                    <select
                      id="productType"
                      name="productType"
                      required
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a product type</option>
                      {productTypes.map(product => (
                        <option key={product.value} value={product.value}>
                          {product.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.productType === 'custom' && (
                    <div>
                      <label htmlFor="customProduct" className="block text-sm font-medium text-gray-700 mb-2">
                        Custom Product Description *
                      </label>
                      <input
                        type="text"
                        id="customProduct"
                        name="customProduct"
                        required={formData.productType === 'custom'}
                        value={formData.customProduct}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Describe your custom requirements"
                      />
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity Required *
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="e.g., 1000 units, 50 tons, etc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="packagingSize" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Packaging Size
                    </label>
                    <select
                      id="packagingSize"
                      name="packagingSize"
                      value={formData.packagingSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select packaging size</option>
                      <option value="25kg">25kg bags</option>
                      <option value="50kg">50kg bags</option>
                      <option value="100kg">100kg bags</option>
                      <option value="bulk">Bulk packaging</option>
                      <option value="custom">Custom packaging</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Application Details */}
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b border-gray-200 pb-2">
                  Application Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="application" className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Application *
                    </label>
                    <select
                      id="application"
                      name="application"
                      required
                      value={formData.application}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select application</option>
                      {applications.map(app => (
                        <option key={app} value={app}>
                          {app}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="shippingLocation" className="block text-sm font-medium text-gray-700 mb-2">
                      Shipping Location *
                    </label>
                    <input
                      type="text"
                      id="shippingLocation"
                      name="shippingLocation"
                      required
                      value={formData.shippingLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="City, Country"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Required Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (within 1-2 weeks)</option>
                      <option value="standard">Standard (3-4 weeks)</option>
                      <option value="flexible">Flexible (1-2 months)</option>
                      <option value="planning">Planning phase (3+ months)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4 border-b border-gray-200 pb-2">
                  Additional Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="additionalRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requirements or Certifications
                    </label>
                    <input
                      type="text"
                      id="additionalRequirements"
                      name="additionalRequirements"
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Comments or Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Please provide any additional details about your requirements..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Request...
                    </>
                  ) : (
                    'Submit Quote Request'
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Go Back
                </button>
              </div>
            </form>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">What happens next?</p>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Our team will review your requirements within 24 hours</li>
                    <li>• You'll receive a detailed quote with pricing and specifications</li>
                    <li>• We'll include technical recommendations for optimal moisture protection</li>
                    <li>• Our sales team will contact you to discuss any questions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
