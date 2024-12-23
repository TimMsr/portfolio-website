const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', function() {
    const tempInput = document.createElement('textarea');
    tempInput.value = 'tim.maeser2@gmail.com'; 
    document.body.appendChild(tempInput); 


    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 

    document.execCommand('copy');

    document.body.removeChild(tempInput);

    alert('Email copied to clipboard!');
});
