document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkToggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Switch icon 🌙 ↔ ☀️
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }
  });
  emailjs.init("j-mVY4GtJoVpB_2Jb");

emailjs.sendForm("service_4fu9txw", "template_8d65vpd", formElement)

});
