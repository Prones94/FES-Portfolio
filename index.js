// template_5i9ovoj
// service_8l3gs0q
// imYni-zi_N7uzV2rK

let isModalOpen = false;
let contrastToggle = false
const scaleFactor = 1/20

function moveBackground(e){
  const shapes = document.querySelectorAll(".shape")
  const x = e.clientX * scaleFactor;
  const y = e.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}

function toggleContrast() {
  document.body.classList.add("dark-theme")
  if (contrastToggle){
    document.body.classList.add("dark-theme")
  } else {
    document.body.classList.remove("dark-theme")
  }
}

function toggleModal() {
  isModalOpen = !isModalOpen;

  const modal = document.querySelector(".modal");

  if (isModalOpen) {
    modal.classList.add("modal--open");
  } else {
    modal.classList.remove("modal--open");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  const modalTriggers = document.querySelectorAll(".click");

  modalTriggers.forEach(trigger => {
    if (!trigger.classList.contains("modal__exit")) {
      trigger.addEventListener("click", toggleModal);
    }
  });

  document
    .getElementById("contact__form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      loading.classList.add("modal__overlay--visible");

      emailjs
        .sendForm(
          "service_8l3gs0q",
          "template_f2sadv3",
          this,
          "imYni-zi_N7uzV2rK"
        )
        .then(() => {
          setTimeout(() => {
            loading.classList.remove("modal__overlay--visible");

            success.classList.add("modal__overlay--visible");

            setTimeout(() => {
              success.classList.remove("modal__overlay--visible");
            }, 2000);
          }, 1000);
        })
        .catch((error) => {
          setTimeout(() => {
            loading.classList.remove("modal__overlay--visible");
          }, 1000);
        });
    });
});
