"use client";

import React from "react";
import { motion } from "framer-motion";
import { Anchor, Compass } from "lucide-react";

import { useTheme } from "@/components/ThemeProvider";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-bg via-light-bg-secondary to-light-secondary dark:from-dark-bg dark:via-dark-bg-secondary dark:to-dark-secondary transition-all duration-1000"></div>

      {/* Animated elements */}
      <div className="absolute inset-0">
        {/* Day mode - Harbor scene */}
        <motion.div
          className={`absolute inset-0 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
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

          {/* 라이트 모드 - 닻을 내리는 애니메이션 */}
          <motion.div
            className="absolute top-1/4 right-20 w-16 h-16 opacity-40"
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-full h-full text-light-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a1 1 0 0 1 1 1v1.17c1.83.44 3.29 1.89 3.73 3.73H18a1 1 0 1 1 0 2h-1.27c-.44 1.84-1.9 3.29-3.73 3.73V19h2a1 1 0 1 1 0 2h-2v1a1 1 0 1 1-2 0v-1H9a1 1 0 1 1 0-2h2v-5.37c-1.83-.44-3.29-1.89-3.73-3.73H6a1 1 0 1 1 0-2h1.27c.44-1.84 1.9-3.29 3.73-3.73V3a1 1 0 0 1 1-1zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
              <motion.path
                d="M12 13v6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Night mode - Sailing scene */}
        <motion.div
          className={`absolute inset-0 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
          transition={{ duration: 1.2 }}
        >
          {/* Night elements - 별들 */}
          <motion.div
            className="absolute top-20 left-1/4 w-4 h-4 bg-dark-primary rounded-full opacity-80"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute top-32 right-1/3 w-3 h-3 bg-dark-primary rounded-full opacity-60"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* 다크 모드 - 닻을 올리는 애니메이션 */}
          <motion.div
            className="absolute bottom-1/4 right-16 w-20 h-20 opacity-30"
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-full h-full text-dark-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a1 1 0 0 1 1 1v1.17c1.83.44 3.29 1.89 3.73 3.73H18a1 1 0 1 1 0 2h-1.27c-.44 1.84-1.9 3.29-3.73 3.73V19h2a1 1 0 1 1 0 2h-2v1a1 1 0 1 1-2 0v-1H9a1 1 0 1 1 0-2h2v-5.37c-1.83-.44-3.29-1.89-3.73-3.73H6a1 1 0 1 1 0-2h1.27c.44-1.84 1.9-3.29 3.73-3.73V3a1 1 0 0 1 1-1zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
              <motion.path
                d="M12 13v-6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 1 }}
                animate={{ pathLength: [1, 0, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* 체인 효과 */}
              <motion.g
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <circle cx="12" cy="8" r="1" opacity="0.7" />
                <circle cx="12" cy="6" r="1" opacity="0.5" />
                <circle cx="12" cy="4" r="1" opacity="0.3" />
              </motion.g>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-hero-mobile md:text-hero-desktop font-black mb-6 tracking-wider uppercase font-serif bg-gradient-to-r from-light-primary via-light-secondary to-orange-500 dark:from-dark-primary dark:via-yellow-400 dark:to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
            SPARROW
          </h1>

          <p className="text-lg md:text-xl text-light-text/80 dark:text-dark-text/80 mb-8 leading-relaxed font-light">
            바다를 향한 하루의 준비, 선원들이 모여 커피를 마시며 오늘의 항해를
            준비하는 항구 카페
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button className="px-8 py-4 bg-light-primary/75 dark:bg-dark-primary/75 text-white font-medium rounded-full hover:bg-light-primary dark:hover:bg-dark-primary transition-all duration-300 transform hover:scale-105 shadow-lg cursor-none">
              브런치 예약하기
            </button>

            <button className="px-8 py-4 border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary font-medium rounded-full hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-dark-bg transition-all duration-300 cursor-none">
              메뉴 보기
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - 독립적으로 배치 */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-light-primary dark:border-dark-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-light-primary dark:bg-dark-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
