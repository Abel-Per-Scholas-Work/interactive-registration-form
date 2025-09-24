//form
const form = document.querySelector("form");
const userNameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
//error messages spn
const usernameError = document.querySelector("#usernameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const passwordConfirmError = document.querySelector("#usernameError");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log("submitted");
});

//username Input
userNameInput.addEventListener("input", (e) => {
	if (userNameInput.value === "") {
		userNameInput.setCustomValidity("Username cannot be empty");
		console.log("not valid");
	} else {
		userNameInput.setCustomValidity("");
		console.log("valid");
	}
	usernameError.textContent = userNameInput.validationMessage;
});
