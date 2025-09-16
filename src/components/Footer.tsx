import Link from 'next/link';

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Request Quote', href: '/quote' },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TOBOD</h3>
            <p className="text-blue-100 mb-4">
              Premium Nylon Packaging & Desiccant Solutions provider offering reliable moisture protection and quality packaging for industries across Nigeria.
            </p>
            <div className="space-y-2 text-blue-100">
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:ayodelem900@gmail.com" className="hover:text-white transition-colors">
                  ayodelem900@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">Website:</span>{' '}
                <a href="https://www.tobod.org" className="hover:text-white transition-colors">
                  www.tobod.org
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Manufacturing Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Manufacturing</h3>
            <div className="text-blue-100 space-y-2">
              <p>🏭 Made in Lagos, Nigeria</p>
              <p>✓ Quality Assured</p>
              <p>✓ Local & Regional Shipping</p>
              <p>✓ Trusted Packaging Partner</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 TOBOD. All rights reserved. | Made in Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
