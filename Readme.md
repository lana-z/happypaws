# 🐾 Livi's Dog Walking Service

A simple dog walking service website for Livi. Built with Next.js and React, featuring a mobile-first design and EmailJS integration for booking requests.

## 🎯 Features

- Mobile-first, responsive design
- Simple booking form with EmailJS integration
- Modern UI with Tailwind CSS
- Custom fonts (Bubblegum Sans for headings, Quicksand for body text)

## 🛠 Tech Stack

- Next.js
- React
- Tailwind CSS
- EmailJS for form submissions

# Author 
- Lana Zumbrunn
- GitHub: [lana-zumbrunn](https://github.com/lana-zumbrunn)
- LinkedIn: [lana-zumbrunn](https://www.linkedin.com/in/lana-zumbrunn/)
- Design and content: Livi

## 📋 Setup Instructions

1. Clone the repository:
```bash
git clone [your-repo-url]
cd happypaws
```

2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create an email template
   - Update the following in `src/app/page.js`:
     - YOUR_SERVICE_ID
     - YOUR_TEMPLATE_ID
     - YOUR_PUBLIC_KEY

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the site

## 🚀 Deployment

The site can be deployed on Vercel or any other Next.js-compatible hosting platform.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
