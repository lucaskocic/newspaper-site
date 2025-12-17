/*
    Author: YOUR NAME
    File: js/script.js
    Description: Simple JavaScript interactions for the newspaper site.
*/

// Wait until the DOM (page structure) is ready
document.addEventListener("DOMContentLoaded", () => {
    // --- Promotion button interaction on index.html ---
    const promoButton = document.getElementById("promoButton");
    const promoMessage = document.getElementById("promoMessage");

    if (promoButton && promoMessage) {
        promoButton.addEventListener("click", () => {
            // Show a simple message explaining why the deal is good
            promoMessage.textContent =
                "You get over 300 printed issues delivered to your door for less than 30 cents a day.";
        });
    }

    // --- Feedback form interaction on reviews.html ---
    const feedbackForm = document.getElementById("feedbackForm");
    const commentsField = document.getElementById("comments");
    const charCount = document.getElementById("charCount");
    const feedbackMessage = document.getElementById("feedbackMessage");

    // Character counter for the comments textarea
    if (commentsField && charCount) {
        commentsField.addEventListener("input", () => {
            const used = commentsField.value.length;
            const max = commentsField.getAttribute("maxlength");
            charCount.textContent = `${used} / ${max} characters used`;
        });
    }

    // Intercept form submission, display a thank-you message
    if (feedbackForm && feedbackMessage) {
        feedbackForm.addEventListener("submit", (event) => {
            // Prevent the form from actually submitting and refreshing the page
            event.preventDefault();

            // Get the rating the user chose
            const ratingElement = document.getElementById("rating");
            const rating = ratingElement ? ratingElement.value : "";

            // Simple message based on rating
            if (rating === "5" || rating === "4") {
                feedbackMessage.textContent =
                    "Thank you for the great rating! We’re glad you enjoy the newspaper experience.";
            } else if (rating === "3") {
                feedbackMessage.textContent =
                    "Thanks for your honest feedback. We’re always looking for ways to improve.";
            } else if (rating === "2" || rating === "1") {
                feedbackMessage.textContent =
                    "We appreciate your feedback and will review your comments carefully.";
            } else {
                feedbackMessage.textContent =
                    "Please choose a rating and add your comments before submitting.";
                return;
            }

            // Optionally, clear the form fields so it feels “submitted”
            feedbackForm.reset();

            // Reset character counter text after clearing
            if (charCount) {
                charCount.textContent = "0 / 300 characters used";
            }
        });
    }
});
