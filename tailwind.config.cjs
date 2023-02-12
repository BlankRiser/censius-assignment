/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // media or class
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      borderRadius: {
        '2.5xl': '0.75rem', // 12px
      },
      spacing: {
        16.5: '4.5rem', // 72px
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-headline': { fontSize: '1.75rem', fontWeight: '600', lineHeight: '120%' },
        '.text-title': { fontSize: '1.375rem', fontWeight: '600', lineHeight: '120%' },
        '.text-subtitle': { fontSize: '1.125rem', fontWeight: '500', lineHeight: '120%' },
        '.text-label': { fontSize: '1.125rem', fontWeight: '600', lineHeight: '120%' },
        '.text-description': { fontSize: '0.875rem', fontWeight: '500', lineHeight: '120%' },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
