document.addEventListener("DOMContentLoaded", () => {
  // Get references to all form elements
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const submitBtn = document.getElementById("submit-btn");
  const resetBtn = document.getElementById("reset-btn");

  // Define regex patterns for validation
  const nameRegex = /^[a-zA-Z\s]{2,50}$/; // Name: letters + spaces, 2–50 chars
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  const phoneRegex = /^(?:\+45\s?)?\d{8}$/; // Phone: +45 optional, 8 digits

  // Store validity state for each field
  let isNameValid = false;
  let isEmailValid = false;
  let isPhoneValid = false;

  // Function to update valid/invalid CSS class
  function setClass(input, isValid) {
    input.classList.remove("valid", "invalid");
    input.classList.add(isValid ? "valid" : "invalid");
  }

  // Validate the name input
  function validateName() {
    const value = nameInput.value.trim();
    isNameValid = nameRegex.test(value) && value.length >= 2;
    setClass(nameInput, isNameValid);
  }

  // Validate the email input
  function validateEmail() {
    const value = emailInput.value.trim();
    isEmailValid = emailRegex.test(value);
    setClass(emailInput, isEmailValid);
  }

  // Validate the phone input and enforce +45 prefix
  function validatePhone() {
    let value = phoneInput.value.trim();
    if (!value.startsWith("+45 ")) {
      // Add prefix if missing
      value = "+45 " + value.replace(/^\+45\s?/, "");
      phoneInput.value = value;
    }
    isPhoneValid = phoneRegex.test(value) && value.length >= 8;
    setClass(phoneInput, isPhoneValid);
  }

  // Enable/disable submit button based on validity
  function validateForm() {
    submitBtn.disabled = !(isNameValid && isEmailValid && isPhoneValid);
  }

  // Enable/disable reset button if any input has value
  function updateResetButton() {
    resetBtn.disabled = !(
      nameInput.value ||
      emailInput.value ||
      phoneInput.value
    );
  }

  // Validate all fields and update buttons
  function handleInput() {
    validateName();
    validateEmail();
    validatePhone();
    validateForm();
    updateResetButton();
  }

  // Add input and focus listeners to all fields
  [nameInput, emailInput, phoneInput].forEach((input) => {
    input.addEventListener("input", handleInput);
    input.addEventListener("focus", () => {
      let isValid = false;
      if (input === nameInput) isValid = isNameValid;
      if (input === emailInput) isValid = isEmailValid;
      if (input === phoneInput) isValid = isPhoneValid;
      if (isValid) setClass(input, true);
    });
  });

  // Reset all inputs and validity states
  resetBtn.addEventListener("click", () => {
    [nameInput, emailInput, phoneInput].forEach((input) => {
      input.value = "";
      input.classList.remove("valid", "invalid");
    });
    isNameValid = false;
    isEmailValid = false;
    isPhoneValid = false;
    submitBtn.disabled = true;
    resetBtn.disabled = true;
  });

  // Initial button states
  submitBtn.disabled = true;
  resetBtn.disabled = true;
});
