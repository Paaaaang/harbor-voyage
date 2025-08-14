"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { useTheme } from "@/components/ThemeProvider";

const Menu = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<"day" | "night">("day");

  const dayMenu = [
    {
      category: "브런치",
      items: [
        {
          name: "항구 풀브렉퍼스트",
          description: "바다의 풍미를 담은 완벽한 아침",
          price: "18,000",
        },
        {
          name: "선원의 팬케이크",
          description: "메이플 시럽과 베리가 올라간 푸짐한 팬케이크",
          price: "14,000",
        },
        {
          name: "부두 샌드위치",
          description: "신선한 야채와 훈제연어를 올린 건강한 샌드위치",
          price: "16,000",
        },
      ],
    },
    {
      category: "커피 & 음료",
      items: [
        {
          name: "하버 라떼",
          description: "부드럽고 깊은 맛의 시그니처 라떼",
          price: "6,500",
        },
        {
          name: "컴퍼스 드립",
          description: "매일 로스팅하는 원두로 내린 핸드드립",
          price: "5,500",
        },
        {
          name: "바다 브리즈 에이드",
          description: "상큼한 레몬과 민트의 만남",
          price: "7,000",
        },
      ],
    },
  ];

  const nightMenu = [
    {
      category: "칵테일",
      items: [
        {
          name: "캡틴스 럼",
          description: "카리브해의 정통 럼에 라임과 민트를 더한 시그니처",
          price: "14,000",
        },
        {
          name: "문라이트 진토닉",
          description: "달빛처럼 청량한 프리미엄 진토닉",
          price: "12,000",
        },
        {
          name: "항해자의 위스키",
          description: "숙성된 위스키에 허브와 스파이스의 조화",
          price: "16,000",
        },
      ],
    },
    {
      category: "안주 & 디너",
      items: [
        {
          name: "바다의 플래터",
          description: "신선한 해산물과 치즈의 조합",
          price: "28,000",
        },
        {
          name: "선원의 스테이크",
          description: "부드러운 등심에 특제 소스",
          price: "32,000",
        },
        {
          name: "항구 파스타",
          description: "해산물이 듬뿍 들어간 토마토 파스타",
          price: "18,000",
        },
      ],
    },
  ];

  const currentMenu = activeTab === "day" ? dayMenu : nightMenu;

  return (
    <section
      id="menu"
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-6">
            Menu
          </h2>
          <p className="text-lg text-light-text/80 dark:text-dark-text/80 max-w-3xl mx-auto">
            시간에 따라 변화하는 특별한 메뉴를 경험해보세요
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-light-bg dark:bg-dark-bg rounded-full p-2 flex">
            <button
              onClick={() => setActiveTab("day")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "day" || theme === "light"
                  ? "bg-light-primary text-white shadow-lg"
                  : "text-light-text dark:text-dark-text hover:bg-light-secondary/20 dark:hover:bg-dark-secondary/20"
              }`}
            >
              낮 메뉴 (Day)
            </button>
            <button
              onClick={() => setActiveTab("night")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "night" || theme === "dark"
                  ? "bg-dark-primary text-dark-bg shadow-lg"
                  : "text-light-text dark:text-dark-text hover:bg-light-secondary/20 dark:hover:bg-dark-secondary/20"
              }`}
            >
              밤 메뉴 (Night)
            </button>
          </div>
        </div>

        {/* Menu Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {currentMenu.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-light-bg dark:bg-dark-bg rounded-2xl p-8 shadow-lg"
            >
              <h3 className="font-serif text-2xl font-semibold text-light-text dark:text-dark-text mb-6 text-center">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + itemIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="border-b border-light-secondary/30 dark:border-dark-secondary/30 pb-4 last:border-b-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-light-text dark:text-dark-text text-lg">
                        {item.name}
                      </h4>
                      <span className="font-bold text-light-primary dark:text-dark-primary">
                        ₩{item.price}
                      </span>
                    </div>
                    <p className="text-light-text/70 dark:text-dark-text/70">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-light-primary dark:bg-dark-primary text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {theme === "light" ? "브런치 예약하기" : "테이블 예약하기"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
