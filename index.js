// template_5i9ovoj
// service_8l3gs0q
// imYni-zi_N7uzV2rK

document.addEventListener("DOMContentLoaded", function () {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  document
    .getElementById("contact__form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Hello");

      loading.classList.add("modal__overlay--visible");

      emailjs
        .sendForm(
          "service_8l3gs0q",
          "template_f2sadv3",
          this,
          "imYni-zi_N7uzV2rK"
        )
        .then(() => {
          console.log("This works!");

          setTimeout(() => {
            loading.classList.remove("modal__overlay--visible");

            success.classList.add("modal__overlay--visible");

            setTimeout(() => {
              success.classList.remove("modal__overlay--visible");
            }, 2000);
          }, 1000);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to send the message. Please try again.");

          setTimeout(() => {
            loading.classList.remove("modal__overlay--visible");
          }, 1000);
        });
    });
});


