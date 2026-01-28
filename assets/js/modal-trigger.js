// modal-trigger.js
const openBtn = document.querySelector("button.modal-open-btn"); // Open modal button
const closeBtn = document.querySelector("dialog button.modal-close-btn"); // Close (X) button
const dialog = document.querySelector("dialog"); // The dialog element
const form = document.querySelector("dialog form"); // The form inside the dialog

// Function to toggle inert on page content and disable open button
function setInert(value) {
  openBtn.inert = value;
  openBtn.disabled = value;
}

// Open the dialog
openBtn.addEventListener("click", () => {
  dialog.showModal();
  setInert(true); // Disable button and make background inert
});

// Close the dialog when clicking the X
closeBtn.addEventListener("click", () => {
  dialog.close();
  setInert(false); // Re-enable button and restore interactivity
});

// Close the dialog when the form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
  dialog.close();
  setInert(false); // Re-enable button and restore interactivity
});
