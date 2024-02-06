
  document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach(function (accordionItem) {
      const accordionWrapper = accordionItem.querySelector(".accordion-wrapper");
      accordionWrapper.addEventListener("click", function (e) {
        // Close other accordion items
        accordionItems.forEach(function (otherItem) {
          if (otherItem !== accordionItem) {
            const otherAccordionWrapper = otherItem.querySelector(".accordion-wrapper");
            const accordionBody = otherItem.querySelector(".accordion-body");
            if (accordionBody) {
              otherItem.classList.remove("open");
              accordionBody.style.height = "0";
            }
            otherAccordionWrapper.removeAttribute("style");
          }
        });

        // Toggle the clicked accordion item
        const accordionBody = this.querySelector(".accordion-body");
        const iconPlus = accordionItem.querySelector(".icon-plus");
        const iconMinus = accordionItem.querySelector(".icon-minus");

        if (accordionBody.style.height === "0px") {
          setTimeout(function () {
            accordionBody.style.height = accordionBody.scrollHeight + "px";
            iconPlus.style.display = "none";
            iconMinus.style.display = "block";
          }, 10);
        } else {
          setTimeout(function () {
            accordionBody.style.height = "0px";
            iconPlus.style.display = "block";
            iconMinus.style.display = "none";
          }, 10);
        }
      });
    });
  });

