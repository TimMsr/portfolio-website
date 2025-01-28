const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const sendButton = document.getElementById('send-btn');

document.getElementById("copy-email").addEventListener("click", function () {
    const email = document.getElementById("email").textContent;
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    });
  });
