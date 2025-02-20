document.addEventListener("DOMContentLoaded", function () {
    const categoryHeaders = document.querySelectorAll(".categoryheaders");

    categoryHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling; // The next table/div after header
            
            if (content.classList.contains("category-content")) {
                content.style.display = content.style.display === "none" ? "block" : "none";
            }
        });
    });
});