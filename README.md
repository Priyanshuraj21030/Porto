# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful UI with smooth animations, contact form integration, and project showcases.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and modern interface with smooth animations
- **Dark/Light Mode**: (Coming Soon)
- **Interactive Components**:
  - Animated hero section
  - Project filters
  - Smooth scrolling navigation
  - Contact form with EmailJS integration
  - reCAPTCHA integration for security

## 🛠 Technologies Used

- **Frontend Framework**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: EmailJS
- **Security**: Google reCAPTCHA v2
- **Development**: Vite

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone [your-repo-link]
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
project/
├── src/
│   ├── components/     # React components
│   ├── data/          # Static data and configurations
│   ├── styles/        # Global styles and Tailwind config
│   └── assets/        # Images and other static assets
├── public/            # Public assets
└── ...config files
```

## 📝 Key Components

- **Hero**: Dynamic landing section with animated background
- **Projects**: Filterable project showcase
- **Contact**: Interactive contact form with EmailJS integration
- **About**: Personal information and skills section
- **Experience**: Work history and achievements
- **Footer**: Social links and additional information

## 🔒 Security Features

- Form submission protection with reCAPTCHA
- Secure email handling through EmailJS
- Protected API keys using environment variables

## 🎨 Customization

1. **Colors**: Update the color scheme in `tailwind.config.js`
2. **Content**: Modify the data in `src/data/index.ts`
3. **Styling**: Adjust component styles in their respective files
4. **Images**: Replace images in the public directory

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px


## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created by Priyanshu Raj

- Email: priyanshuraj21030@gmail.com
- GitHub: https://github.com/Priyanshuraj21030?tab=repositories
- LinkedIn: https://github.com/Priyanshuraj21030

---

Made with ❤️ using React and TypeScript
