
document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq-question");
    questions.forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
