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
	console.log(userNameInput.validity.valid);
	if (userNameInput.validity.valid) {
		console.log("submitted");
	} else {
		console.log("not submitted");
	}
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

//email
emailInput.addEventListener("input", (e) => {
	if (emailInput.validity.valueMissing) {
		emailInput.setCustomValidity(
			"Please enter a valid email address, for example, name@example.com."
		);
	} else if (emailInput.validity.valueMissing) {
		emailInput.setCustomValidity("We need your email address to contact you!");
	} else {
		emailInput.setCustomValidity(""); // Clear custom error if valid
	}
	emailError.textContent = emailInput.validationMessage;
});

//password
passwordInput.addEventListener("input", () => {});
