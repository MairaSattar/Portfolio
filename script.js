const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;

      navLinks.forEach(link => {
        link.classList.toggle("active", link.dataset.section === id);
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

