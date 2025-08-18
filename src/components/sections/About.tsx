"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-6 tracking-wide">
            Our Story
          </h2>
          <p className="text-lg text-light-text/80 dark:text-dark-text/80 max-w-3xl mx-auto">
            이곳에선 하루의 시작과 끝이 모두 바다 위의 이야기로 이어집니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none">
              <h3 className="font-serif text-2xl font-semibold text-light-text dark:text-dark-text mb-4">
                {theme === "light" ? "낮 - 항구의 시작" : "밤 - 모험의 끝"}
              </h3>
              <p className="text-light-text/80 dark:text-dark-text/80 mb-6 leading-relaxed">
                {theme === "light"
                  ? "새벽 안개가 걷히고 첫 햇살이 부두를 비출 때, 선원들은 하나둘 모여들기 시작합니다. 갓 내린 커피 한 잔과 함께 오늘의 항해를 준비하며, 바다가 들려주는 이야기에 귀를 기울입니다."
                  : "긴 하루의 항해를 마치고 돌아온 선원들이 모여앉습니다. 달빛이 바다를 은빛으로 물들이는 이 시간, 각자의 모험담을 나누며 내일의 새로운 여행을 꿈꿉니다."}
              </p>
              <p className="text-light-text/80 dark:text-dark-text/80 leading-relaxed">
                SPARROW는 단순한 카페나 펍이 아닙니다. 시간의 흐름과 함께
                변화하는 공간, 당신의 하루에 특별한 순간을 선사하는 곳입니다.
              </p>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              {theme === "light" ? (
                <img
                  src="/images/(About)SPARROW_낮.png"
                  alt="SPARROW 낮 분위기"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src="/images/(About)SPARROW_밤.png"
                  alt="SPARROW 밤 분위기"
                  className="w-full h-full object-cover"
                />
              )}

              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end rounded-xl">
                <div className="p-6 text-white">
                  <h4 className="font-serif text-xl font-semibold mb-2">
                    {theme === "light" ? "Day Experience" : "Night Experience"}
                  </h4>
                  <p className="text-white/90 text-sm">
                    {theme === "light"
                      ? "06:00 - 18:00\n브런치 & 커피"
                      : "18:00 - 02:00\n칵테일 & 디너"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-light-primary/20 dark:bg-dark-primary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚓</span>
            </div>
            <h4 className="font-serif text-xl font-semibold text-light-text dark:text-dark-text mb-2">
              정통 항구 분위기
            </h4>
            <p className="text-light-text/70 dark:text-dark-text/70">
              바다와 항구의 정취를 담은 인테리어와 음악
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-light-primary/20 dark:bg-dark-primary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧭</span>
            </div>
            <h4 className="font-serif text-xl font-semibold text-light-text dark:text-dark-text mb-2">
              시간대별 전환
            </h4>
            <p className="text-light-text/70 dark:text-dark-text/70">
              낮과 밤, 완전히 다른 두 가지 경험
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-light-primary/20 dark:bg-dark-primary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌊</span>
            </div>
            <h4 className="font-serif text-xl font-semibold text-light-text dark:text-dark-text mb-2">
              바다의 이야기
            </h4>
            <p className="text-light-text/70 dark:text-dark-text/70">
              매일 새로운 모험과 만남이 기다리는 공간
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
