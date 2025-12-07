import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: 'Alsancak Grup\'un güvenlik hizmetleri neden öne çıkıyor?',
      answer: 'Entegre güvenlik mimarisi (insanlı + fiziksel güvenlik + CCTV/Alarm + olay yönetimi), TSK/Jandarma/Emniyet kökenli sahaya özel eğitimli ekipler, gerçek zamanlı raporlama (risk skorları, MTTR, devriye uygunluk) ve enerji, baraj, köprü, yol inşaatı, fabrika/kampüs gibi yüksek riskli sahalarda kanıtlanmış tecrübe nedeniyle öne çıkıyoruz.'
    },
    {
      question: 'Alsancak Grup mühendislik ve savunma sanayinde hangi projeleri yürütüyor?',
      answer: 'Raylı sistemlerde EN 15085-2 CL1 standartlarında lokomotif/metro kapıları; tasarım, kaynak, yüzey işlemleri, test ve sertifikasyon. Ayrıca elektronik komponent, kablo, kimyasal ve soğuk zincir tedariki ile proje bazlı sistem entegrasyonu; prototipleme, kalifikasyon, seri üretime hazırlık ve izlenebilirlik yönetimi.'
    },
    {
      question: 'Uluslararası projelerde hangi bölgelerde hizmet veriyorsunuz?',
      answer: 'Afganistan, Irak, Libya, Uganda, Somali, Etiyopya ve Aden Körfezi ülkelerinde saha deneyimimiz bulunuyor. Amerika, İsrail, Hindistan ve İtalya\'da ofislerimiz mevcut; Avrupa ve MENA\'da proje bazlı çözüm ortaklıklarıyla çalışıyoruz.'
    },
    {
      question: 'Alsancak Grup\'un kalite ve güvenlik standartları nelerdir?',
      answer: 'Kalite/üretim: EN 15085-2 CL1, CE/IEC uygunluk, tedarikçi yeterlilik denetimleri. Yönetim sistemleri: ISO 9001, ISO 27001, ISO 45001. Veri koruma: KVKK/GDPR uyumu, erişim yetkilendirme ve loglama. Operasyon güvenliği: risk temelli İSG planları, tatbikatlar, acil durum prosedürleri ve izlenebilir olay kayıtları.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="section-padding bg-dark-100 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">SSS</span>
          <h2 className="section-title text-light mb-6">
            Sıkça Sorulan <span className="gradient-text">Sorular</span>
          </h2>
          <p className="text-light-400 text-lg max-w-3xl mx-auto">
            Hakkımızda merak edilenler
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-5 md:p-6 flex items-center justify-between text-left hover:bg-glass-hover transition-colors"
              >
                <h3 className="text-base md:text-lg font-medium text-light pr-6">
                  {faq.question}
                </h3>
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
              >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-light-400 leading-relaxed text-sm">
                  {faq.answer}
                </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-light-400 mb-6">
            Başka sorularınız mı var?
          </p>
          <motion.a 
            href="#contact" 
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Bize Ulaşın</span>
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
