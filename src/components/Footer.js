import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const groupCompanies = [
    { name: 'Alsancak Güvenlik', url: 'https://www.alsancakguvenlik.com/' },
    { name: 'ASDTC Mühendislik', url: 'https://asdtc.co.uk/' },
    { name: 'Locomotive Door', url: 'https://locomotivedoor.com/' }
  ];

  const quickLinks = [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'İletişim', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-100 relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo - Orijinal boyut */}
            <div className="mb-6">
              <img 
                src="/alsancaklogo.png" 
                alt="Alsancak Grup" 
                className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            
            <p className="text-light-400 leading-relaxed mb-6 max-w-md">
              Savunma, Güvenlik, Mühendislik ve Danışmanlık alanlarında 18 yılı aşkın deneyimimiz ile hizmetinizdeyiz.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-light-400 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Turan Güneş Bulvarı Cezayir Cad. No. 6/7<br />Çankaya / Ankara / Türkiye</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+90 850 840 0108 / +90 312 441 21 17</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@alsancakgrup.com.tr" className="hover:text-accent transition-colors">
                  info@alsancakgrup.com.tr
                </a>
              </div>
            </div>
          </div>

          {/* Grup Şirketleri */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-6">Grup Şirketleri</h4>
            <ul className="space-y-3">
              {groupCompanies.map((company, index) => (
                <li key={index}>
                  <a 
                    href={company.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-light-400 hover:text-accent transition-colors inline-flex items-center gap-2 group text-sm"
                  >
                    <svg className="w-3 h-3 text-accent/50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{company.name}</span>
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-6">Hızlı Erişim</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-light-400 hover:text-accent transition-colors text-sm gradient-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="mt-8">
              <h5 className="text-sm font-medium text-light mb-4">Sosyal Medya</h5>
              <div className="flex gap-2">
                {[
                  { name: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                  { name: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                  { name: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' }
                ].map((social, idx) => (
                  <motion.a 
                    key={idx}
                    href="#" 
                    className="w-9 h-9 glass-card rounded-lg flex items-center justify-center hover:bg-accent/20 transition-all duration-300 text-light-500 hover:text-accent"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-glass-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-light-500">
              © {new Date().getFullYear()} <span className="text-light font-medium">ALSANCAK GRUP</span>. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-light-500">
              <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Gizlilik</a>
              <a href="/kvkk.html" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">KVKK</a>
              <a href="/environment.html" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Çevre Politikası</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-light shadow-glow z-50"
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(139, 37, 37, 0.5)' }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </footer>
  );
};

export default Footer;
