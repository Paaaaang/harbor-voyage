"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import ComingSoonModal from "@/components/ComingSoonModal";

const Gallery = () => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 낮과 밤 공통으로 보이는 갤러리 이미지
  const commonGalleryImages = [
    {
      id: 1,
      dayImage: "/images/SPARROW_낮_메인홀.png",
      nightImage: "/images/SPARROW_밤_메인홀.png",
      alt: "메인홀",
      dayDescription: "따뜻한 햇살이 비치는 카페 메인홀",
      nightDescription: "은은한 조명이 아름다운 펍 메인홀",
    },
    {
      id: 2,
      dayImage: "/images/SPARROW_낮_바카운터.png",
      nightImage: "/images/SPARROW_밤_바카운터.png",
      alt: "바카운터",
      dayDescription: "항구의 선원들이 모이는 바 카운터",
      nightDescription: "칵테일과 함께하는 낭만적인 바 카운터",
    },
    {
      id: 3,
      dayImage: "/images/SPARROW_낮_야외 테라스.png",
      nightImage: "/images/SPARROW_밤_야외 테라스.png",
      alt: "야외 테라스",
      dayDescription: "바다를 바라보며 즐기는 브런치 시간",
      nightDescription: "별빛 아래 특별한 디너 경험",
    },
  ];

  // 프라이빗룸 (밤에만 운영)
  const privateRoomImage = {
    id: 4,
    image: "/images/SPARROW_밤_프라이빗룸.png",
    alt: "프라이빗룸",
    description: "특별한 모임을 위한 프라이빗 공간 (밤에만 운영)",
  };

  return (
    <section
      id="gallery"
      className="py-20 px-4 bg-light-bg-secondary/30 dark:bg-dark-bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-6 tracking-wide">
            Our Spaces
          </h2>
          <p className="text-lg text-light-text/80 dark:text-dark-text/80 max-w-3xl mx-auto">
            낮과 밤, 두 개의 서로 다른 분위기를 가진 SPARROW의 모습들
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 공통 갤러리 이미지들 */}
          {commonGalleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Day Image (기본) */}
                <img
                  src={image.dayImage}
                  alt={`${image.alt} - 낮`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* Night Image (호버시) */}
                <img
                  src={image.nightImage}
                  alt={`${image.alt} - 밤`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-xl">
                  <h3 className="font-serif text-lg font-semibold text-white mb-1">
                    {image.alt}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    <span className="block group-hover:hidden">
                      {image.dayDescription}
                    </span>
                    <span className="hidden group-hover:block">
                      {image.nightDescription}
                    </span>
                  </p>
                </div>

                {/* Mode Indicator */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium transition-all duration-300">
                  <span className="group-hover:hidden">☀️ Day</span>
                  <span className="hidden group-hover:block">🌙 Night</span>
                </div>

                {/* Hover Instruction */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Night Mode
                </div>
              </div>
            </motion.div>
          ))}

          {/* 프라이빗룸 (밤에만 표시) */}
          {theme === "dark" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={privateRoomImage.image}
                  alt={privateRoomImage.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-xl">
                  <h3 className="font-serif text-lg font-semibold text-white mb-1">
                    {privateRoomImage.alt}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {privateRoomImage.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 bg-purple-600/80 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
                  🌙 Night Only
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* 갤러리 콘셉트 구간 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-light-bg dark:bg-dark-bg rounded-xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* 갤러리 이미지 */}
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/갤러리 공간.webp"
                  alt="SPARROW 갤러리 공간"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium bg-light-primary/80 dark:bg-dark-primary/80 px-3 py-1 rounded-full">
                      Gallery Space
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 설명 */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-light-text dark:text-dark-text mb-4">
                Art & Culture Gallery
              </h3>
              <p className="text-light-text/80 dark:text-dark-text/80 mb-6 leading-relaxed">
                SPARROW는 단순한 카페와 펍을 넘어 문화 공간으로서의 역할도
                합니다. 지역 아티스트들의 작품을 전시하며, 방문객들에게 예술과
                함께하는 특별한 경험을 선사합니다.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-light-text/70 dark:text-dark-text/70">
                  <div className="w-2 h-2 bg-light-primary dark:bg-dark-primary rounded-full"></div>
                  <span>매월 새로운 작가 작품 전시</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-light-text/70 dark:text-dark-text/70">
                  <div className="w-2 h-2 bg-light-primary dark:bg-dark-primary rounded-full"></div>
                  <span>아티스트 토크 & 문화 이벤트</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-light-text/70 dark:text-dark-text/70">
                  <div className="w-2 h-2 bg-light-primary dark:bg-dark-primary rounded-full"></div>
                  <span>예술 작품 구매 및 컬렉션</span>
                </div>
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
          <div className="inline-flex items-center gap-4 text-sm text-light-text/60 dark:text-dark-text/60 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-light-primary rounded-full"></span>
              <span>06:00-18:00 카페</span>
            </div>
            <div className="w-px h-4 bg-light-text/20 dark:bg-dark-text/20"></div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
              <span>18:00-02:00 펍 + 프라이빗룸</span>
            </div>
          </div>

          <p className="text-light-text/80 dark:text-dark-text/80 mb-6">
            직접 경험해보고 싶으신가요?
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-light-primary dark:bg-dark-primary text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-none"
          >
            방문 예약하기
          </button>
        </motion.div>

        {/* Coming Soon Modal */}
        <ComingSoonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default Gallery;
