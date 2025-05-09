import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://source.unsplash.com/random/800x600/?tech,design',
    'https://source.unsplash.com/random/800x600/?creative,art',
    'https://source.unsplash.com/random/800x600/?digital,innovation',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const features = [
    {
      icon: '🚀',
      title: 'Gyors Megoldások',
      description: 'Rekord idő alatt elkészítjük projektjeit a legmodernebb technológiákkal.'
    },
    {
      icon: '🎯',
      title: 'Pontos Eredmények',
      description: 'Pixel-perfekter design és kiváló minőség minden részletben.'
    },
    {
      icon: '💎',
      title: 'Prémium Minőség',
      description: 'Kivételes minőségű anyagok és komponensek használata.'
    },
    {
      icon: '🧠',
      title: 'Innovatív Megközelítés',
      description: 'Kreatív megoldások egyedi problémákra, testreszabottan.'
    }
  ];

  return (
    <div className="min-h-screen from-purple-50 to-pink-50 overflow-hidden">
      {/* Hero Section - Extra design elemekkel */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Háttér animált elemek */}
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        
        <motion.div 
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />

        <div className="max-w-full mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Szöveg rész - extra animációkkal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                  Webes Megoldások
                </span>
                <span className="block text-gray-900">A Jövő Színpadán</span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-6 text-xl text-gray-600 max-w-3xl"
              >
                Innovatív digitális élmények tervezése és fejlesztése, amelyek kiemelik vállalkozását a tömegből.
              </motion.p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Projekt indítása
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white text-purple-600 font-bold text-lg shadow-lg hover:shadow-xl border-2 border-purple-200 transition-all duration-300"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                    További információ
                  </span>
                </motion.button>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-16 flex items-center space-x-6"
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((item) => (
                    <img
                      key={item}
                      className="w-12 h-12 rounded-full border-2 border-white"
                      src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}.jpg`}
                      alt=""
                    />
                  ))}
                </div>
                <div className="text-gray-600">
                  <span className="block font-medium">100+ elégedett ügyfél</span>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-500">5.0 csillag</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Kép rész - extra effektekkel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                {images.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt="Design"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-pink-700/20" />
              </div>
              
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-amber-400 to-pink-500 rounded-2xl shadow-xl flex items-center justify-center text-white text-4xl"
              >
                🏆
              </motion.div>
              
              <motion.div
                animate={{
                  rotate: [0, -5, 5, 0],
                  y: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl shadow-xl flex items-center justify-center text-white text-4xl"
              >
                ✨
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Funkciók szekció - kreatív kártyákkal */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-medium mb-4">
              Miért minket válasszanak?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                Kivételes Minőség
              </span>
              <br />
              Kiemelkedő Eredmények
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-300 -rotate-1 group-hover:rotate-0" />
                <div className="relative bg-white rounded-2xl p-8 h-full shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center text-3xl mb-6 transform group-hover:rotate-12 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA szekció - látványos hover effektekkel */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-pink-800 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 w-64 h-64 -mt-32 -ml-32 bg-purple-700 rounded-full opacity-10"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Készen állsz a <span className="text-amber-300">átalakulásra</span>?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-12">
              Vállalkozása számára egyedi digitális megoldást készítünk, amely valódi eredményeket hoz.
            </p>
            
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="inline-block relative"
            >
              <button className="px-10 py-5 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 text-white font-bold text-xl shadow-2xl relative overflow-hidden z-10">
                <span className="relative z-10">Ingyenes konzultáció</span>
                <motion.span
                  animate={{
                    scale: isHovered ? 20 : 1,
                    opacity: isHovered ? 0 : 1
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 to-pink-600 rounded-full z-0"
                />
              </button>
              
              <motion.div
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 1 : 0.7
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 rounded-full bg-white/10 blur-xl -z-10"
              />
            </motion.div>
            
            <div className="mt-8 flex justify-center space-x-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <motion.div
                  key={item}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4 + item,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-2xl"
                >
                  {['🚀', '💡', '🎯', '✨', '💎'][item - 1]}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lábléc - egyszerű, de elegáns */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                ⚡
              </div>
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-400">
                DesignMágia
              </span>
            </div>
            
            <div className="flex space-x-6">
              {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} DesignMágia. Minden jog fenntartva.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;