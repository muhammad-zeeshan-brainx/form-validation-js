submitBtn = document.querySelector("#submit-btn");
// submitBtn.disabled = false;
// submitBtn.classList.add("submit-btn");

//Validate password field
function passwordValidator() {
  //   alert("hey");
  let password = document.querySelector("#myForm input[name='password']").value;
  let confirmPassword = document.querySelector(
    "#myForm input[name='confirmPassword']"
  ).value;

  if (password !== confirmPassword) {
    console.log("if");
    document.querySelector(".form-errors p").innerHTML =
      "Password must match <br>";
  } else if (password.length < 8) {
    console.log("else if");
    document.querySelector(".form-errors p").innerHTML =
      "<p>Minimum length is 8</p><br>";
  } else if (
    !(
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password)
    )
  ) {
    document.querySelector(".form-errors p").innerHTML =
      "Password should have both alphanumeric, at least one upper case and one the lower case letter<br>";
  } else {
    document.querySelector(".form-errors p").innerHTML = "";
  }
}

//Validate Age field
function ageValidator() {
  let age = Number(document.querySelector("#myForm input[name='age']").value);
  if (age - Math.floor(age) !== 0) {
    document.querySelector(".form-errors p").innerHTML =
      "Age must be a whole number<br>";
  } else if (!(age >= 18 && age <= 151)) {
    document.querySelector(".form-errors p").innerHTML =
      "Age must be between 18 and 151<br>";
  } else {
    document.querySelector(".form-errors p").innerHTML = "";
  }
}

//Validate phone field
function phoneValidator() {
  let phone = document.querySelector("#myForm input[name='phone']").value;
  if (phone.length != 11) {
    document.querySelector(".form-errors p").innerHTML =
      "contact number must have 11 digits<br>";
  } else if (!/[0-9]/.test(Number(phone))) {
    document.querySelector(".form-errors p").innerHTML =
      "contact number should only contain digits [0-9]<br>";
  } else {
    document.querySelector(".form-errors p").innerHTML = "";
  }
}

function firstNameValidator() {
  let firstName = document.querySelector(
    "#myForm input[name='firstName']"
  ).value;

  if (!firstName) {
    document.querySelector(".form-errors p").innerHTML =
      "First name can not be blank<br>";
  } else if (!/[a-zA-Z]+$/.test(firstName)) {
    document.querySelector(".form-errors p").innerHTML =
      "First name shoud only contain alphabets [A-z]<br>";
  } else {
    document.querySelector(".form-errors p").innerHTML = "";
  }
}

function lastNameValidator() {
  let lastName = document.querySelector("#myForm input[name='lastName']").value;

  if (!lastName) {
    document.querySelector(".form-errors p").innerHTML =
      "Last name can not be blank<br>";
  } else if (!/[a-zA-Z]+$/.test(lastName)) {
    document.querySelector(".form-errors p").innerHTML =
      "Last name shoud only contain alphabets [A-z]<br>";
  } else {
    document.querySelector(".form-errors p").innerHTML = "";
  }
}

function emailValidator() {
  let email = document.querySelector("#myForm input[name='email']").value;
  emailRegex = new RegExp("^[a-z]+[0-9]*@[a-z]+.(?=com$)|.(?=org$)|.(?=edu$)");

  emailsArray = email.replace(/\s/g, "").split(",");
  console.log(emailsArray);
  console.log(emailRegex.test(emailsArray[0]));

  for (let i = 0; i < emailsArray.length; i++) {
    if (!emailRegex.test(emailsArray[i])) {
      document.querySelector(".form-errors p").innerHTML =
        "email should be in the following format<br> Example: abc@xyz.com";
      break;
    } else {
      document.querySelector(".form-errors p").innerHTML = "";
    }
  }
}
