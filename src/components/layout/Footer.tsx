'use client'

import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-light-bg-secondary dark:bg-dark-bg-secondary py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-light-primary dark:bg-dark-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">H&V</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-light-text dark:text-dark-text">
                  Harbor & Voyage
                </h3>
              </div>
            </div>
            <p className="text-light-text/70 dark:text-dark-text/70 mb-4">
              하루가 두 번 시작되는 곳<br />
              바다의 이야기와 함께하는 특별한 경험
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-light-text dark:text-dark-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-light-text/70 dark:text-dark-text/70 hover:text-light-primary dark:hover:text-dark-primary transition-colors">About</a></li>
              <li><a href="#menu" className="text-light-text/70 dark:text-dark-text/70 hover:text-light-primary dark:hover:text-dark-primary transition-colors">Menu</a></li>
              <li><a href="#events" className="text-light-text/70 dark:text-dark-text/70 hover:text-light-primary dark:hover:text-dark-primary transition-colors">Events</a></li>
              <li><a href="#gallery" className="text-light-text/70 dark:text-dark-text/70 hover:text-light-primary dark:hover:text-dark-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-light-text/70 dark:text-dark-text/70 hover:text-light-primary dark:hover:text-dark-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-light-text dark:text-dark-text mb-4">Contact</h4>
            <div className="space-y-2 text-light-text/70 dark:text-dark-text/70">
              <p>서울특별시 중구 을지로 100</p>
              <p>02-1234-5678</p>
              <p>hello@harborvoyage.kr</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-light-secondary/30 dark:border-dark-secondary/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-text/60 dark:text-dark-text/60 text-sm mb-4 md:mb-0">
            © 2024 Harbor & Voyage. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 text-light-text/60 dark:text-dark-text/60 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            <span>by Harbor & Voyage Team</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
