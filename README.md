<img src="https://i.ibb.co.com/yF4fHmjt/Screenshot-from-2025-02-08-16-44-44.png" alt="Screenshot-from-2025-02-08-16-35-36" style="width: 100%;">

# Career Craft Website

## Overview

Career Craft is a dynamic platform designed to provide personalized career advice, guidance, and resources to users seeking to make informed decisions about their professional futures. Built using React, React Router, and Firebase for authentication and data management, the platform ensures seamless user experience and easy access to career-related services.

## Live Site

Visit the Career Counseling Website: [Career Craft Live](https://ph-assignment9-fiamanillah.netlify.app/)

## Features

-   **User Authentication:** Users can register and log in using email/password or Google login.
-   **Personalized Career Advice:** Provides access to various career counseling services with details such as pricing, counselor name, and session timing.
-   **Service Details:** Users can learn more about each service, leave comments, and provide feedback.
-   **Profile Management:** Users can update their profile information, including their name and profile picture.
-   **Responsive Design:** Fully responsive layout ensuring smooth user experience across mobile, tablet, and desktop.
-   **Error Handling:** Clear 404 page and proper error messages for failed actions.

## Tech Stack

### Frontend

-   React
-   React Router
-   Swiper Slider
-   Firebase
-   React Icons
-   React Helmet Async
-   React Toastify

### Authentication

-   Firebase Authentication (Email/Password, Google Login)

### Styling

-   Tailwind CSS

### Hosting

-   Deployed using Netlify

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (latest stable version recommended)
-   [Git](https://git-scm.com/)
-   [Vite](https://vitejs.dev/)

### Clone the Repository

```sh
git clone https://github.com/your-repo-url/career-craft.git
cd career-craft
```

### Install Dependencies

```sh
npm install
```

### Environment Variables

Create a `.env` file in the project root and add the following:

```sh
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Replace the placeholders with actual Firebase credentials.

### Run the Project Locally

To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173/`.

### Build for Production

To create a production build, run:

```sh
npm run build
```

This will generate optimized files in the `dist` directory.

### Preview the Build

```sh
npm run preview
```

## Dependencies

```json
"dependencies": {
  "@formspree/react": "^2.5.1",
  "firebase": "^11.0.2",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-helmet-async": "^2.0.5",
  "react-icons": "^5.3.0",
  "react-infinite-logo-slider": "^1.1.4",
  "react-router-dom": "^6.28.0",
  "react-toastify": "^10.0.6",
  "swiper": "^11.1.15"
},
"devDependencies": {
  "@eslint/js": "^9.13.0",
  "@tailwindcss/typography": "^0.5.15",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "@vitejs/plugin-react": "^4.3.3",
  "autoprefixer": "^10.4.20",
  "eslint": "^9.13.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.14",
  "globals": "^15.11.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.15",
  "vite": "^5.4.11"
}
```

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contributors

-   **Your Name** _(Replace with actual contributors)_
