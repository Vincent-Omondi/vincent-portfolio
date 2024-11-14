# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Framer Motion. Features a clean design with smooth animations and dark/light theme support.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Interactive UI**: Dynamic components with hover effects and transitions
- **Analytics Integration**: Firebase Analytics for tracking user interactions
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Type Safety**: Written in TypeScript for better code reliability

## 🛠️ Built With

- Next.js 14
- TypeScript
- SCSS Modules
- Framer Motion
- Firebase Analytics
- React Scroll
- Iconify

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── app/                # Next.js app directory
├── components/         # React components
├── styles/            # SCSS modules
├── db/                # Data and content
├── atoms/             # Recoil atoms
└── firebase/          # Firebase configuration
```

## 🎨 Customization

1. **Content**: Update the content in `src/db/main.ts`
2. **Styling**: Modify theme variables in `src/styles/GlobalStyles.scss`
3. **Images**: Replace images in the `public/images` directory
4. **Resume**: Update your resume in `public/Docs/resume.pdf`

## 📱 Features by Section

- **Hero**: Animated introduction with orbital design elements
- **About**: Professional summary with animated timeline
- **Skills**: Interactive skill categories with icons
- **Projects**: Showcase of projects with images and links
- **Contact**: Contact information with animated link effects

## 🔧 Development

- Run tests: `npm run test`
- Lint code: `npm run lint`
- Format code: `npm run format`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [vincentomondi1002@gmail.com](mailto:vincentomondi1002@gmail.com)

Project Link: [https://github.com/Vincent-Omondi/portfolio](https://github.com/Vincent-Omondi/portfolio)