/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10161A',
        'ink-soft': '#161E23',
        parchment: '#F2EEE3',
        'parchment-soft': '#E9E3D3',
        bone: '#ECE7DA',
        graphite: '#1B2024',
        copper: '#D98B4A',
        slate: '#5C84A6',
        moss: '#6B8F71',
        clay: '#B5602F',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        riseIn: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        coreDrop: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        riseIn: 'riseIn 0.7s cubic-bezier(0.16,1,0.3,1) both',
        coreDrop: 'coreDrop 0.9s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [],
}
