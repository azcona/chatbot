/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'chat-bubble',
    'bot-bubble',
    'user-bubble',
    'input-style',
    'btn-send',
    'timestamp',
    'timestamp-user',
    'timestamp-bot'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Press Start 2P"', 'cursive'],
        body: ['"Chakra Petch"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}