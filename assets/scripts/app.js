// SELECTORS
const form = document.getElementById("subscribe-form");
const inputText = document.getElementById("subscribe-form__control");
const formBtn = document.querySelector(".subscribe-form__btn");
const status = document.getElementById("my-form-status");

// FUNCTIOSN

// handle form submission

async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}

// EVENT LSITENERS
form.addEventListener("submit", handleSubmit);
