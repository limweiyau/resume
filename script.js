document.addEventListener("DOMContentLoaded", function () {
    const categoryHeaders = document.querySelectorAll(".categoryheaders");

    categoryHeaders.forEach(header => {
        const content = header.nextElementSibling; // The next table/div after header

        if (content.classList.contains("category-content")) {
            content.style.display = "none"; // Ensure it's hidden initially
        }

        header.addEventListener("click", function () {
            if (content.style.display === "none") {
                content.style.display = "block"; // Show content
            } else {
                content.style.display = "none"; // Hide content
            }
        });
    });
});