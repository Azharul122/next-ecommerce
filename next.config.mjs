/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        VITE_apiKey: "AIzaSyA1kJGW32vs3ZCRJKx74QDQmcjEjCz0120",
        VITE_authDomain: "ass12-81496.firebaseapp.com",
        VITE_projectId: "ass12-81496",
        VITE_storageBucket: "ass12-81496.appspot.com",
        VITE_messagingSenderId: "636411772350",
        VITE_appId: "1:636411772350:web:8b96671b8d65dd79150def",
        VITE_Payment_PK: "pk_test_51NIN7AHyH38FtU5xdpvzpDijkaTz5zhGnLR8QpgvzZSlrQE6IsIkBdwQ9UXolOIgpOSBteYqRFJ6AcsvkPOPG2aR00WducazCT",
        dbURI: "mongodb+srv://azharulip:mGGc5MsRZk92XGcM@cluster0.q7fc5xn.mongodb.net/SimpleNextRcommerce",

    },
    images: {
        domains: ['the7.io'],
    }
};

export default nextConfig;
