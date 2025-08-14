'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      dayImage: '/gallery/day-1.jpg',
      nightImage: '/gallery/night-1.jpg',
      alt: 'SPARROW 메인 홀',
      description: '낮에는 따뜻한 햇살이 비치는 카페, 밤에는 은은한 조명이 아름다운 펍'
    },
    {
      id: 2,
      dayImage: '/gallery/day-2.jpg',
      nightImage: '/gallery/night-2.jpg',
      alt: '바 카운터',
      description: '항구의 선원들이 모이는 바 카운터'
    },
    {
      id: 3,
      dayImage: '/gallery/day-3.jpg',
      nightImage: '/gallery/night-3.jpg',
      alt: '테라스 좌석',
      description: '바다를 바라보며 즐기는 특별한 시간'
    },
    {
      id: 4,
      dayImage: '/gallery/day-4.jpg',
      nightImage: '/gallery/night-4.jpg',
      alt: '프라이빗 룸',
      description: '특별한 모임을 위한 프라이빗 공간'
    }
  ]

  return (
    <section id="gallery" className="py-20 px-4 bg-light-bg-secondary/30 dark:bg-dark-bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-6">
            Gallery
          </h2>
          <p className="text-lg text-light-text/80 dark:text-dark-text/80 max-w-3xl mx-auto">
            낮과 밤, 두 개의 서로 다른 분위기를 가진 SPARROW의 모습들
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Day Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-light-secondary to-light-primary opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">☀️</div>
                      <h4 className="font-serif text-xl font-semibold mb-2">Day Mode</h4>
                      <p className="text-sm opacity-90">06:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                {/* Night Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-secondary to-dark-primary opacity-0 group-hover:opacity-90 transition-opacity duration-500">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">🌙</div>
                      <h4 className="font-serif text-xl font-semibold mb-2">Night Mode</h4>
                      <p className="text-sm opacity-90">18:00 - 02:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="font-serif text-xl font-semibold text-white mb-2">
                  {image.alt}
                </h3>
                <p className="text-white/90 text-sm">
                  {image.description}
                </p>
              </div>

              {/* Hover Effect Indicator */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Hover to see night mode
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Slider Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-light-bg dark:bg-dark-bg rounded-2xl p-8 shadow-lg"
        >
          <h3 className="font-serif text-2xl font-semibold text-light-text dark:text-dark-text text-center mb-8">
            Day & Night Transformation
          </h3>
          
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-r from-light-secondary via-light-primary to-light-secondary dark:from-dark-secondary dark:via-dark-primary dark:to-dark-secondary">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-8xl mb-6">🏛️</div>
                <h4 className="font-serif text-3xl font-bold mb-4">SPARROW</h4>
                <p className="text-lg opacity-90">Interactive gallery coming soon...</p>
                <p className="text-sm opacity-75 mt-2">Experience the magical transformation from day to night</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-light-text/80 dark:text-dark-text/80 mb-6">
            직접 경험해보고 싶으신가요?
          </p>
          <button className="px-8 py-4 bg-light-primary dark:bg-dark-primary text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            방문 예약하기
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
