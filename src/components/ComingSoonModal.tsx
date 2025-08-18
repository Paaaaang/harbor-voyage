"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar, Coffee } from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[51] p-4 pointer-events-none">
            <motion.div
              className="bg-light-bg dark:bg-dark-bg-secondary rounded-2xl shadow-2xl max-w-md w-full mx-auto relative overflow-hidden border border-light-primary/20 dark:border-dark-primary/20 pointer-events-auto"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary" />
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-light-bg/80 dark:bg-dark-bg/80 hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-colors duration-200 cursor-none z-10"
              >
                <X className="w-5 h-5 text-light-text dark:text-dark-text" />
              </button>

              {/* Content */}
              <div className="p-8 text-center relative">
                {/* Icon */}
                <motion.div
                  className="mb-6 flex justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full flex items-center justify-center shadow-lg">
                      <Coffee className="w-10 h-10 text-white" />
                    </div>
                    {/* Decorative rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-light-primary/30 dark:border-dark-primary/30 animate-ping" />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="font-serif text-2xl font-bold text-light-text dark:text-dark-text mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  오픈 준비중
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-light-text/80 dark:text-dark-text/80 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  SPARROW에서의 특별한 브런치 경험을 준비하고 있습니다.
                  <br />곧 만나뵙겠습니다!
                </motion.p>

                {/* Features */}
                <motion.div
                  className="grid grid-cols-2 gap-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 text-light-text/70 dark:text-dark-text/70">
                    <Clock className="w-4 h-4 text-light-primary dark:text-dark-primary" />
                    <span className="text-sm">예약 시스템</span>
                  </div>
                  <div className="flex items-center gap-2 text-light-text/70 dark:text-dark-text/70">
                    <Calendar className="w-4 h-4 text-light-primary dark:text-dark-primary" />
                    <span className="text-sm">특별 메뉴</span>
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.button
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 cursor-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  알림 받기
                </motion.button>

                {/* Small text */}
                <motion.p
                  className="text-xs text-light-text/60 dark:text-dark-text/60 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  오픈 소식을 가장 먼저 알려드릴게요
                </motion.p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;
