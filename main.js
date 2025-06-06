const btn = document.querySelector(".btn");
const input = document.querySelector("#myInput");
const errorMsg = document.querySelector(".invalid");

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();

  if (!isValidEmail(inputValue)) {
    input.style.borderColor = "hsl(354, 100%, 66%)";
    errorMsg.style.display = "block";
  } else {
    input.style.borderColor = "";
    errorMsg.style.display = "none";
  }
});
