document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const resetBtn = document.getElementById("reset-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");

    const dialog = document.querySelector("dialog");
    if (dialog && dialog.open) dialog.close();

    resetBtn.click();
  });
});
