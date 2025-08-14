"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, MapPin } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Events = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: null as Date | null,
    guests: "",
  });

  const events = [
    {
      id: "sunset-hour",
      title: "Sunset Happy Hour",
      time: "17:00 - 19:00",
      description: "일몰과 함께 즐기는 특별한 칵테일 할인 시간",
      image: "🌅",
      color: "from-orange-400 to-pink-500",
    },
    {
      id: "jazz-night",
      title: "Weekend Jazz Night",
      time: "20:00 - 23:00",
      description: "매주 토요일, 라이브 재즈와 함께하는 특별한 밤",
      image: "🎷",
      color: "from-indigo-400 to-purple-500",
    },
    {
      id: "rum-tasting",
      title: "Captain's Rum Tasting",
      time: "19:00 - 21:00",
      description: "월 1회, 세계 각국의 프리미엄 럼 테이스팅",
      image: "🥃",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("예약 요청이 전송되었습니다!");
  };

  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-6">
            Events & Reservation
          </h2>
          <p className="text-lg text-light-text/80 dark:text-dark-text/80 max-w-3xl mx-auto">
            특별한 순간을 만들어드리는 SPARROW의 이벤트와 예약
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Events */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl font-semibold text-light-text dark:text-dark-text mb-8">
              정기 이벤트
            </h3>

            <div className="space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-light-primary/10 dark:border-dark-primary/10"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {event.image}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-serif text-xl font-semibold text-light-text dark:text-dark-text mb-2">
                        {event.title}
                      </h4>

                      <div className="flex items-center text-light-primary dark:text-dark-primary mb-3">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">
                          {event.time}
                        </span>
                      </div>

                      <p className="text-light-text/70 dark:text-dark-text/70">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl font-semibold text-light-text dark:text-dark-text mb-8">
              예약하기
            </h3>

            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-light-bg-secondary/30 to-light-bg/80 dark:from-dark-bg-secondary/30 dark:to-dark-bg/80 rounded-2xl p-8 shadow-xl border border-light-primary/20 dark:border-dark-primary/20 backdrop-blur-sm"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text dark:text-dark-text rounded-lg border border-light-secondary/30 dark:border-dark-secondary/30 focus:border-light-primary dark:focus:border-dark-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text dark:text-dark-text rounded-lg border border-light-secondary/30 dark:border-dark-secondary/30 focus:border-light-primary dark:focus:border-dark-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                    연락처
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text dark:text-dark-text rounded-lg border border-light-secondary/30 dark:border-dark-secondary/30 focus:border-light-primary dark:focus:border-dark-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                    예약 종류
                  </label>
                  <select
                    name="event"
                    value={formData.event}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text dark:text-dark-text rounded-lg border border-light-secondary/30 dark:border-dark-secondary/30 focus:border-light-primary dark:focus:border-dark-primary focus:outline-none transition-colors"
                    required
                  >
                    <option value="">선택해주세요</option>
                    <option value="brunch">브런치 예약</option>
                    <option value="dinner">디너 예약</option>
                    <option value="event">이벤트 참가</option>
                    <option value="private">프라이빗 이벤트</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                      날짜
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={formData.date}
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                        minDate={new Date()}
                        placeholderText="날짜를 선택하세요"
                        className="w-full px-4 py-3 bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text dark:text-dark-text rounded-lg border border-light-secondary/30 dark:border-dark-secondary/30 focus:border-light-primary dark:focus:border-dark-primary focus:outline-none transition-colors"
                        wrapperClassName="w-full"
                        calendarClassName="bg-white dark:bg-gray-800 border border-light-secondary/30 dark:border-dark-secondary/30 rounded-lg shadow-lg"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-light-text dark:text-dark-text font-medium mb-2">
                      인원
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text dark:text-dark-text rounded-lg border border-light-secondary/30 dark:border-dark-secondary/30 focus:border-light-primary dark:focus:border-dark-primary focus:outline-none transition-colors"
                      required
                    >
                      <option value="">선택</option>
                      <option value="1">1명</option>
                      <option value="2">2명</option>
                      <option value="3-4">3-4명</option>
                      <option value="5-8">5-8명</option>
                      <option value="9+">9명 이상</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  예약 요청하기
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Events;
