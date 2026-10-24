const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// close the mobile menu after picking a section
navLinks.querySelectorAll('a').forEach(link => {
    link.onclick = () => navLinks.classList.remove('active');
});

const copyButton = document.getElementById("copy-email");

copyButton.addEventListener("click", function () {
    const email = document.getElementById("email").textContent;
    navigator.clipboard.writeText(email).then(() => {
        copyButton.textContent = "Copied!";
        setTimeout(() => copyButton.textContent = "Copy", 2000);
    });
});

// fade things in as you scroll, and grow the return bars when they show up
const revealItems = document.querySelectorAll('.figure, .sheet, .row, .result, .project');
revealItems.forEach(item => item.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealItems.forEach(item => observer.observe(item));
document.querySelectorAll('.bars').forEach(chart => observer.observe(chart));

// highlight the sidebar link for the section on screen
const sections = document.querySelectorAll('main section');

const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.querySelectorAll('a').forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => navObserver.observe(section));
