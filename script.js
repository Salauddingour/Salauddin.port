document.addEventListener("DOMContentLoaded", function () {
  const typedText = document.querySelector(".typing-text");
  const words = [" Web Developer ", " UI/UX Designer ", " JavaScript Expert "];
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = "";
  let isDeleting = false;

  function type() {
    currentWord = words[wordIndex];

    if (isDeleting) {
      typedText.textContent = currentWord.substring(0, charIndex--);
    } else {
      typedText.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1500); // pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }

  type();
});
function toggleChat() {
  const box = document.getElementById("chatBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function showResponse(option) {
  const responseBox = document.getElementById("chatResponse");
  let message = "";

  switch(option) {
    case "resume":
      message = "📄 Here's my resume: [Your Resume Link]";
      break;
    case "tech":
      message = "🛠 I work with HTML, CSS, JavaScript, React, UI/UX, Git.";
      break;
    case "projects":
      message = "📁 Explore my projects: [GitHub link or #portfolio section]";
      break;
    case "contact":
      message = "📞 Email: goursalauddin@gmail.com | 📱 +91 7505921913";
      break;
  }

  responseBox.innerText = message;
}