# 🚀 LeetCode Buddy Landing Page

A modern, responsive landing page for the **LeetCode Buddy** browser extension. This project showcases the extension's features and provides documentation, tutorials, and resources to help users make the most of it.


## 🔍 Overview

**LeetCode Buddy** is an AI-powered browser extension that enhances the coding interview preparation experience by offering progressive hints, detailed explanations, and optimized solutions for LeetCode problems.  
This landing page acts as the extension’s marketing website and resource hub.


## ✨ Features

- 📽️ Interactive demo showcasing the extension's hint system  
- 📱 Fully responsive design across all device sizes  
- 🌙 Dark mode with a fun BB-8 toggle switch  
- 📚 Sections for documentation, tutorials, and blog  
- 📩 Contact form for user support and feedback  
- 💬 Testimonials from real users  
- 📥 Download form for direct extension access


## 🛠️ Tech Stack

- **Frontend:** React + TypeScript  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS  
- **Animations:** Framer Motion  
- **Routing:** React Router  
- **Backend:** Firebase Firestore  
- **Deployment:** Vercel  


## 📋 Prerequisites

- Node.js `v16.x` or higher  
- npm or yarn  
- Firebase account (for contact form functionality)


## 🏗️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/leetcode-buddy-landing.git
   cd leetcode-buddy-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**  
   Create a `.env.local` file and add your Firebase configuration.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser 🚀


## 🔥 Firebase Setup

1. Create a project at [Firebase Console](https://console.firebase.google.com)  
2. Enable **Firestore Database**  
3. Set Firestore security rules:
   ```js
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow create: if true;
         allow read, update, delete: if false;
       }
     }
   }
   ```
4. Copy your Firebase config to `.env.local`


## 🚢 Deployment

### Deploy to Vercel:
- Push your code to GitHub  
- Connect the repo to [Vercel](https://vercel.com)  
- Add your environment variables in Vercel settings  
- Deploy!

### Other Hosting Options:
- Netlify  
- GitHub Pages  
- Firebase Hosting  


## 📁 Project Structure

```
leetcode-buddy-landing/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # Reusable UI components
│   │   ├── ui/            # ShadCN-based UI elements
│   │   └── ...            # Feature components
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utility functions/services
│   ├── pages/             # Page-level components
│   ├── styles/            # Global styles
│   ├── App.tsx            # App layout and routes
│   └── main.tsx           # Entry point
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript settings
└── package.json           # Project metadata
```


## 🤝 Contributing

Contributions are welcome!

```bash
# Fork the repo
git checkout -b feature/your-feature-name
git commit -m "Add your awesome feature"
git push origin feature/your-feature-name
```

Then, open a Pull Request 🚀
