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
const passwordConfirmError = document.querySelector("#confirmPasswordError");

//after document is loaded access the LocalStorage
document.addEventListener("DOMContentLoaded", function () {
	if (localStorage.getItem("userNameFormMod5") !== null) {
		userNameInput.value = localStorage.getItem("userNameFormMod5");
		console.log(localStorage.getItem("userNameFormMod5"));
	} else {
		console.log("No localStorage found");
	}
});

//username Input
userNameInput.addEventListener("input", (e) => {
	if (userNameInput.validity.valueMissing) {
		userNameInput.setCustomValidity("Username cannot be empty");
		console.log("not valid");
	} else if (userNameInput.validity.tooShort) {
		userNameInput.setCustomValidity("Username must be 4 character long");
		console.log("not valid");
	} else {
		userNameInput.setCustomValidity("");
		console.log("valid");
	}
	usernameError.textContent = userNameInput.validationMessage;
});

//email
emailInput.addEventListener("input", (e) => {
	if (emailInput.validity.typeMismatch) {
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
passwordInput.addEventListener("input", () => {
	//check if field empty
	if (passwordInput.validity.valueMissing) {
		passwordInput.setCustomValidity("invalid Password");
	} //check password length
	else if (passwordInput.validity.tooShort) {
		passwordInput.setCustomValidity("Password need to be 8 character long");
	} //check if password contain upper, loser,and number
	else if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/.test(passwordInput.value)) {
		passwordInput.setCustomValidity(
			"Password need to contain at least: \n one Uppercase Letter \none lowercase Letter \n one number Letter \n"
		);
	} else {
		passwordInput.setCustomValidity("");
	}

	passwordError.textContent = passwordInput.validationMessage;
});

//confirm password
confirmPasswordInput.addEventListener("input", () => {
	if (confirmPasswordInput.validity.valueMissing) {
		confirmPasswordInput.setCustomValidity("invalid Confirm Password");
	} //check confirm password match password
	else if (confirmPasswordInput.value !== passwordInput.value) {
		confirmPasswordInput.setCustomValidity(
			"Confirm password does not match the password"
		);
	} else {
		confirmPasswordInput.setCustomValidity("");
	}

	passwordConfirmError.textContent = confirmPasswordInput.validationMessage;
});

//form submit
form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (!userNameInput.validity.valid) {
		alert("Invalid username");
		userNameInput.focus();
		return;
	}
	if (!emailInput.validity.valid) {
		alert("Invalid email");
		emailInput.focus();
		return;
	}
	if (!passwordInput.validity.valid) {
		alert("Invalid password");
		passwordInput.focus();
		return;
	}
	if (!confirmPasswordInput.validity.valid) {
		alert("Invalid confirm password");
		confirmPasswordInput.focus();
		return;
	}

	alert("You are registered! 🎉");
	localStorage.setItem("userNameFormMod5", userNameInput.value);
	form.reset();
});
