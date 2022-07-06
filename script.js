function validateForm() {
  var formFields = document.getElementById("myForm").elements;

  let firstNameValidation = firstNameValidator(
    formFields.namedItem("firstName").value
  );
  let lastNameValidation = lastNameValidator(
    formFields.namedItem("lastName").value
  );
  let ageValidation = ageValidator(Number(formFields.namedItem("age").value));
  let phoneValidation = phoneValidator(formFields.namedItem("phone").value);
  let emailValidation = emailValidator(formFields.namedItem("email").value);
  let passwordValidation = passwordValidator(
    formFields.namedItem("password").value,
    formFields.namedItem("confirmPassword").value
  );

  if (
    firstNameValidation &&
    lastNameValidation &&
    ageValidation &&
    phoneValidation &&
    passwordValidation &&
    emailValidation &&
    passwordValidation
  ) {
    submitBtn = document.querySelector("#submit-btn");
    submitBtn.disabled = false;
    submitBtn.classList.add("submit-btn");
  } else {
    submitBtn = document.querySelector("#submit-btn");
    submitBtn.disabled = true;
    submitBtn.classList.remove("submit-btn");
  }
}

//validate first name
function firstNameValidator(firstName) {
  let errorElement = document.querySelector(".first-name");

  if (!firstName) {
    errorElement.style.display = "block";
    errorElement.innerHTML = "first name can not be blank";
    return false;
  } else if (!/[a-zA-Z]+$/.test(firstName)) {
    errorElement.style.display = "block";
    errorElement.innerHTML = "first name shoud only contain alphabets [A-z]";
    return false;
  } else {
    errorElement.style.display = "none";
    return true;
  }
}

//validate lastname
function lastNameValidator(lastName) {
  let errorElement = document.querySelector(".last-name");
  if (!lastName) {
    errorElement.style.display = "block";
    errorElement.innerHTML = "last name can not be blank";
    return false;
  } else if (!/[a-zA-Z]+$/.test(lastName)) {
    errorElement.style.display = "block";
    errorElement.innerHTML = "last name shoud only contain alphabets [A-z]";
    return false;
  } else {
    console.log("display none");
    errorElement.style.display = "none";
    return true;
  }
}

//validate age
function ageValidator(age) {
  let errorElement = document.querySelector(".age");
  if (age - Math.floor(age) !== 0) {
    errorElement.style.display = "block";
    errorElement.innerHTML = "age must be a whole number";
    return false;
  } else if (!(age >= 18 && age <= 151)) {
    errorElement.style.display = "block";
    errorElement.innerHTML =
      "age can not be blank and must be between 18 and 151";
    return false;
  } else {
    errorElement.style.display = "none";
    return true;
  }
}

//Validate phone
function phoneValidator(phone) {
  let errorElement = document.querySelector(".phone");
  if (phone.length != 11) {
    errorElement.style.display = "block";
    errorElement.innerHTML = "contact number must have 11 digits";
    return false;
  } else if (!/[0-9]/.test(Number(phone))) {
    errorElement.style.display = "block";
    errorElement.innerHTML = "contact number should only contain digits [0-9]";
    return false;
  } else {
    errorElement.style.display = "none";
    return true;
  }
}

//validate email
function emailValidator(email) {
  let errorElement = document.querySelector(".email");
  emailRegex = new RegExp("^[a-z]+[0-9]*@[a-z]+.(?=com$)|.(?=org$)|.(?=edu$)");
  emailsArray = email.replace(/\s/g, "").split(",");

  for (let i = 0; i < emailsArray.length; i++) {
    if (!emailRegex.test(emailsArray[i])) {
      errorElement.style.display = "block";
      errorElement.innerHTML =
        "email should be in the following format Example: abc@xyz.com";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }
}

//validate password
function passwordValidator(password, confirmPassword) {
  let errorElement = document.querySelector(".password");
  if (password !== confirmPassword) {
    errorElement.style.display = "block";
    errorElement.innerHTML = "password must match";
    return false;
  } else if (password.length < 8) {
    errorElement.style.display = "block";
    errorElement.innerHTML = "minimum password length is 8";
    return false;
  } else if (
    !(
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password)
    )
  ) {
    errorElement.style.display = "block";
    errorElement.innerHTML =
      "password should have both alphanumeric, at least one upper case and one the lower case letter";
    return false;
  } else {
    errorElement.style.display = "none";
    return true;
  }
}
