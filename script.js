const faqContainers = document.querySelectorAll(".faq-container");

faqContainers.forEach((faqContainer) => {
  faqContainer.addEventListener("click", (e) => {
    const faqContainer = e.target.closest(".faq-container");
    console.log("faqContainer :", faqContainer);
    if (faqContainer.classList.contains("active")) {
      faqContainer.classList.remove("active");
    } else {
      faqContainer.classList.add("active");
    }
  });
});
