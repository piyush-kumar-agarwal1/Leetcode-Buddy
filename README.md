# Welcome to your Leetcode Buddy Landing Page

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Firebase (Firestore)

## How to set up Firebase

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Update your Firestore rules to allow write access:
   ```
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
4. Copy your Firebase configuration to `.env` file

## Setting up environment variables

1. Copy `.env.example` to `.env.local` for local development
2. For production deployment, set these environment variables in your hosting platform (Vercel, Netlify, etc.)

## How can I deploy this project?

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel project settings
4. Deploy!

### Other Hosting Options

You can also deploy this project using:

- Netlify
- GitHub Pages
- Firebase Hosting
