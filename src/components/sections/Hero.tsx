'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Anchor, Compass } from 'lucide-react'

const Hero = () => {
  // 임시로 하드코딩 (아까 정상 작동했던 방식)
  const theme = 'light'

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-bg via-light-bg-secondary to-light-secondary dark:from-dark-bg dark:via-dark-bg-secondary dark:to-dark-secondary transition-all duration-1000"></div>
      
      {/* Animated elements */}
      <div className="absolute inset-0">
        {/* Day mode - Harbor scene */}
        <motion.div
          className={`absolute inset-0 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
          transition={{ duration: 1.2 }}
        >
          {/* Harbor elements */}
          <motion.div
            className="absolute bottom-20 left-10 w-20 h-20 opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Compass className="w-full h-full text-light-primary" />
          </motion.div>
          
          <motion.div
            className="absolute top-1/4 right-20 w-16 h-16 opacity-30"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Anchor className="w-full h-full text-light-primary" />
          </motion.div>
        </motion.div>

        {/* Night mode - Sailing scene */}
        <motion.div
          className={`absolute inset-0 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
          transition={{ duration: 1.2 }}
        >
          {/* Night elements */}
          <motion.div
            className="absolute top-20 left-1/4 w-4 h-4 bg-dark-primary rounded-full opacity-80"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-serif text-hero-mobile md:text-hero-desktop font-bold text-light-text dark:text-dark-text mb-6">
            바다를 향한 하루의 준비
          </h1>
          
          <p className="text-lg md:text-xl text-light-text/80 dark:text-dark-text/80 mb-8 leading-relaxed">
            선원들이 모여 커피를 마시며 오늘의 항해를 준비하는 항구 카페
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="px-8 py-4 bg-light-primary dark:bg-dark-primary text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              브런치 예약하기
            </button>
            
            <button className="px-8 py-4 border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary font-semibold rounded-full hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-dark-bg transition-all duration-300">
              메뉴 보기
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-light-primary dark:border-dark-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-light-primary dark:bg-dark-primary rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
