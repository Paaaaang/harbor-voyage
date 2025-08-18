"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
} from "lucide-react";
import dynamic from "next/dynamic";

// 카카오 맵을 동적으로 import (SSR 방지)
const KakaoMap = dynamic(() => import("@/components/KakaoMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 rounded-xl bg-gradient-to-br from-light-secondary to-light-primary dark:from-dark-secondary dark:to-dark-primary flex items-center justify-center">
      <div className="text-center text-white">
        <div className="text-4xl mb-2">🗺️</div>
        <p>지도를 불러오는 중...</p>
      </div>
    </div>
  ),
});

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-6 tracking-wide">
            Visit Us
          </h2>
          <p className="text-lg text-light-text/80 dark:text-dark-text/80 max-w-3xl mx-auto">
            SPARROW로 오시는 길과 연락처 정보
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl font-semibold text-light-text dark:text-dark-text mb-6">
                찾아오시는 길
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-light-primary/20 dark:bg-dark-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-light-primary dark:text-dark-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-text dark:text-dark-text mb-2">
                      주소
                    </h4>
                    <p className="text-light-text/80 dark:text-dark-text/80">
                      서울특별시 중구 을지로 100번지
                      <br />
                      SPARROW Building 1F
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-light-primary/20 dark:bg-dark-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-light-primary dark:text-dark-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-text dark:text-dark-text mb-2">
                      운영시간
                    </h4>
                    <div className="space-y-1 text-light-text/80 dark:text-dark-text/80">
                      <p>
                        <span className="font-medium">카페 (Day Mode)</span> :
                        06:00 - 18:00
                      </p>
                      <p>
                        <span className="font-medium">펍 (Night Mode)</span> :
                        18:00 - 02:00
                      </p>
                      <p className="text-sm text-light-primary dark:text-dark-primary">
                        연중무휴
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-light-primary/20 dark:bg-dark-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-light-primary dark:text-dark-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-text dark:text-dark-text mb-2">
                      연락처
                    </h4>
                    <p className="text-light-text/80 dark:text-dark-text/80">
                      02-1234-5678
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-light-primary/20 dark:bg-dark-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-light-primary dark:text-dark-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-text dark:text-dark-text mb-2">
                      이메일
                    </h4>
                    <p className="text-light-text/80 dark:text-dark-text/80">
                      hello@wavetocafe.kr
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-light-text dark:text-dark-text mb-6">
                소셜 미디어
              </h3>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-light-primary dark:bg-dark-primary rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-light-primary dark:bg-dark-primary rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity duration-300"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-light-bg dark:bg-dark-bg rounded-2xl p-8 shadow-lg"
          >
            <h3 className="font-serif text-2xl font-semibold text-light-text dark:text-dark-text mb-6 text-center">
              위치
            </h3>

            {/* Kakao Map */}
            <div className="mb-6">
              <KakaoMap />
            </div>

            {/* Transportation */}
            <div className="space-y-3">
              <h4 className="font-semibold text-light-text dark:text-dark-text">
                교통편
              </h4>
              <div className="space-y-2 text-sm text-light-text/80 dark:text-dark-text/80">
                <p>
                  <span className="font-medium text-light-primary dark:text-dark-primary">
                    지하철
                  </span>{" "}
                  : 2호선 을지로입구역 3번 출구 (도보 5분)
                </p>
                <p>
                  <span className="font-medium text-light-primary dark:text-dark-primary">
                    버스
                  </span>{" "}
                  : 100, 150, 201, 202번 (을지로 정류장)
                </p>
                <p>
                  <span className="font-medium text-light-primary dark:text-dark-primary">
                    주차
                  </span>{" "}
                  : 건물 지하 주차장 이용 가능 (2시간 무료)
                </p>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Contact;
