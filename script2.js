function scrollToTop() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}

// Get view count from local storage or set to 0
let views = localStorage.getItem('page_views') || 0;
views++; // Increment view count

// Update local storage
localStorage.setItem('page_views', views);

// Display the view count
document.getElementById('viewCount').textContent = views;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL4pPnhp_ilCHq7IDPqttPkK5hwU8AcFs",
  authDomain: "jurassicjourneys-4f8a5.firebaseapp.com",
  projectId: "jurassicjourneys-4f8a5",
  storageBucket: "jurassicjourneys-4f8a5.firebasestorage.app",
  messagingSenderId: "694503402770",
  appId: "1:694503402770:web:d965b96f72a326b53b17cb",
  measurementId: "G-CF89RSVBEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);