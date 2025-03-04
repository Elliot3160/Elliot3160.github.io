// Scroll event to show the Back to Top button
window.onscroll = function() {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";  // Show the button
    } else {
        button.style.display = "none";  // Hide the button
    }
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Assign the click handler to the button
document.getElementById("backToTop").addEventListener("click", scrollToTop);

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL4pPnhp_ilCHq7IDPqttPkK5hwU8AcFs",
    authDomain: "jurassicjourneys-4f8a5.firebaseapp.com",
    projectId: "jurassicjourneys-4f8a5",
    storageBucket: "jurassicjourneys-4f8a5.appspot.com",
    messagingSenderId: "694503402770",
    appId: "1:694503402770:web:d965b96f72a326b53b17cb",
    measurementId: "G-CF89RSVBEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore instance

// Reference to Firestore document for view count
const viewRef = doc(db, "views", "counter");

// Function to update the view count
async function updateViewCount() {
    try {
        // Get the current document data
        const docSnap = await getDoc(viewRef);

        if (docSnap.exists()) {
            // Document exists, update the count
            let currentViews = docSnap.data().count;
            console.log(`Current Views: ${currentViews}`); // Log current view count
            await updateDoc(viewRef, { count: currentViews + 1 });

            // Display the updated view count in the HTML
            document.getElementById("viewCount").textContent = currentViews + 1;
        } else {
            // Document doesn't exist, create it with an initial view count of 1
            console.log("No existing document. Creating one with 1 view.");
            await setDoc(viewRef, { count: 1 });
            document.getElementById("viewCount").textContent = 1;
        }
    } catch (error) {
        console.error("Error updating views:", error);
        // Display a detailed error message
        document.getElementById("viewCount").textContent = "Error loading views";
    }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateViewCount(); // This will update the view count
});

