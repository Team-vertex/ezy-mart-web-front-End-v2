# EzyMart Web Frontend

A modern, responsive web application for EzyMart built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern React Stack**: React 18 + TypeScript + Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Email Integration**: Contact form with EmailJS (no backend required)
- **Internationalization**: Multi-language support with React Intl
- **Animations**: Smooth animations with Framer Motion
- **UI Components**: Beautiful components with Mantine and custom designs
- **State Management**: Redux Toolkit for global state
- **Maps Integration**: Google Maps for location services

## 📧 Email Setup

The contact form uses EmailJS for sending emails directly from the frontend. See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed setup instructions.

### Quick Setup:

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Connect your Gmail account
3. Create an email template
4. Copy your credentials to `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🛠 Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ezy-mart-web-front-End-v2

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Environment Variables

Create a `.env` file with the following variables:

```env
# API Configuration
VITE_DEV_BASE_URL="https://api.ezymart.online/api/"

# EmailJS Configuration (for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
