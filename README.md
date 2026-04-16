# Rebeljoka Portfolio

A modern, responsive portfolio website showcasing my journey as a Junior Front-End Developer. Built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, featuring interactive project modals, smooth animations, and mobile-first design.

## 🖼️ What the Project Does

This portfolio presents my technical skills, projects, and professional journey through:

- **Interactive project showcase** with modal overlays displaying detailed case studies
- **Responsive design** optimized for desktop, tablet, and mobile devices
- **Smooth animations** and micro-interactions for enhanced user experience
- **Accessibility-focused** implementation with semantic HTML and keyboard navigation
- **Performance optimized** with modern build tools and code splitting

**📁 Folder Structure:**

src/
├── components/        # Reusable React components (Header, ProjectCard, Modal, etc.)
├── pages/            # Page-level components (Home, About, Projects, Contact)
├── styles/           # Tailwind config + custom CSS utilities
├── data/             # JSON datasets for projects, skills, experience
├── hooks/            # Custom React hooks (useModal, useIntersectionObserver)
├── utils/            # Helper functions and constants
└── assets/           # Images, icons, and static media

## 🚀 Why the Project is Useful

Live Demonstration: Real-world React + TypeScript application recruiters can interact with
Modern Tech Stack: React 18, TypeScript 5.x, Tailwind CSS 3.x, Vite 5.x
Production Ready: Deployed on Vercel with custom domain via Cloudflare
Clean Architecture: Component-based structure following React best practices
Research Value: Complete source code showing junior developer thought process

For Researchers:
Study progressive enhancement from static JSON to dynamic data fetching
Analyze Tailwind CSS implementation patterns and responsive breakpoints
Review accessibility implementation in React + Tailwind environment
Examine Vite build configuration for modern React applications

## ⚡ Quick Start

Prerequisites

- Node.js 18+ 
- npm 9+ or yarn 1.22+

### Installation

#### Clone the repository
git clone https://github.com/yourusername/rebeljoka-portfolio.git
cd rebeljoka-portfolio

#### Install dependencies
npm install

#### Start development server
npm run dev

### Build for Production

npm run build
npm run preview

## Deployment

🚀 Deployed live at: https://rebeljoka.com
📦 Vercel deployment with custom domain
🌐 Cloudflare DNS configuration

## 📚 Project Datasets

src/data/ contains structured JSON files for research:

File	Purpose	Structure
projects.json	Project showcase data	{title, description, technologies[], liveUrl, githubUrl, featuredImage}
skills.json	Technical skills matrix	{category, skills[], proficiencyLevel, icons[]}
experience.json	Work history timeline	{position, company, duration, achievements[]}
contact.json	Contact information	{email, phone, location, socialLinks[]}

## 🤝 How to Contribute

Fork the repository
Create feature branch (git checkout -b feature/amazing-feature)
Commit changes (git commit -m 'Add amazing feature')
Push to branch (git push origin feature/amazing-feature)
Open Pull Request

We welcome contributions to:
Additional accessibility improvements
Performance optimizations
New project case studies
Documentation enhancements

## 🆘 Getting Help

### Support Channels:

💬 Discord: Future Coders Community (100+ web developers)
📧 Email: [your.email@example.com]
💼 LinkedIn: linkedin.com/in/your-next-jfssd-habib

#### Common Issues:

Issue	Solution
Modal not closing	Check useModal hook implementation
Tailwind styles missing	Run npm run build or restart dev server
TypeScript errors	Verify tsconfig.json and @types packages
👥 Maintainers & Contributors

Primary Maintainer:
Habib Ullah - Junior Front-End Developer
💻 Full-stack portfolio + community projects
🐛 Bug fixes and feature development
📖 Documentation and code quality
Community Contributors:

- Future Coders Discord (hackathon participants, code reviews)
- Open source collaborators (pull requests welcome!)

## 📄 License

MIT License. See LICENSE for details.

Built with ❤️ by Habib Ullah | Last updated April 2026

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
