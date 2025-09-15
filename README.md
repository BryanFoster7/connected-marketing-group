# Landing Page - React + Vite + Tailwind CSS

A modern, responsive landing page built with React, Vite, and Tailwind CSS.

## Features

- ⚡️ Fast development with Vite
- ⚛️ React 18 with modern hooks
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🎯 Modern UI/UX with gradients and animations
- 🧩 Modular component structure

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine (version 14 or higher).

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd Cursor_Test
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── Features.jsx    # Features grid
│   ├── About.jsx       # About section
│   ├── CTA.jsx         # Call-to-action
│   └── Footer.jsx      # Footer
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Tailwind imports
```

## Customization

- Update the brand name in `Header.jsx` and `Footer.jsx`
- Modify colors by editing the Tailwind classes
- Add new sections by creating components and importing them in `App.jsx`
- Update content in each component to match your needs

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Heroicons](https://heroicons.com/) - SVG icons (inline)

## License

This project is open source and available under the [MIT License](LICENSE).
