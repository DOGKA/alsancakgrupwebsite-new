import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Blog = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      category: 'İş Ortaklığı',
      title: 'IEETek Artık Türkiye\'de - Enerji Depolamada Yenilik',
      excerpt: 'ASDTC, IEETEK\'in Türkiye\'deki tek yetkili distribütörü oldu. Güneş enerjisi depolama, taşınabilir güç istasyonları ve hibrit sistemlerde dünya standartlarında çözümler sunacağız.',
      date: '2024',
      readTime: '6 dk',
      image: '/images/ieetekoffice.png'
    },
    {
      category: 'Fuar',
      title: 'Rail Systems Congress and Exhibition in Eskişehir \'23',
      excerpt: 'Eskişehir\'de 2-4 Kasım 2023 tarihlerinde gerçekleştirilen Raylı Sistemler Kongresi ve Sergisi\'nde destekleyici kuruluşlardan biri olarak yer aldık.',
      date: 'Kasım 2023',
      readTime: '8 dk',
      image: '/images/locomotivesnews1.webp'
    },
    {
      category: 'Güvenlik',
      title: 'Türk Özel Güvenlikçiler Sıcak Bölgelerde',
      excerpt: 'Afganistan\'da Kabil-Kandahar arasındaki yolun güvenliğini Alsancak Güvenlik sağladı. Zorlu coğrafi ve güvenlik koşullarında başarılı operasyonlarımız.',
      date: '2024',
      readTime: '6 dk'
    },
    {
      category: 'Sosyal Sorumluluk',
      title: 'Alsancak Güvenlik WCK ile birlikte Deprem Bölgelerinde',
      excerpt: 'World Central Kitchen ile birlikte afet bölgelerindeki insanlara yardım eli uzattık. Haiti depremi sonrası başlayan işbirliğimiz devam ediyor.',
      date: '2024',
      readTime: '5 dk'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="blog" 
      ref={sectionRef}
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-cyber/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">BLOG</span>
          <h2 className="section-title text-light mb-6">
            Haberler ve <span className="gradient-text">Güncellemeler</span>
          </h2>
          <p className="text-light-400 text-lg max-w-3xl mx-auto">
            Sektördeki gelişmeler, projelerimiz ve uzman görüşleri
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              {/* Featured Image */}
              {post.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                  </div>
                )}

              {/* Content */}
              <div className="p-6">
                {/* Category & Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-light-500 text-xs">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-light mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
                
                {/* Excerpt */}
                <p className="text-light-400 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

                {/* Read More */}
                <div className="mt-4 flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                  <span>Devamını Oku</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
