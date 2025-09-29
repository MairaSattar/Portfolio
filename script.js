document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");
  const closeIcons = document.querySelectorAll(".fa-circle-xmark");
  const projectGrid = document.querySelector(".project-grid");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); 
      const projectBox = btn.closest(".project-box");

      // closes any open boxes first
      document.querySelectorAll(".project-box.expanded").forEach((box) => {
        box.classList.remove("expanded");
      });

      projectBox.classList.add("expanded");
      projectGrid.classList.add("hide-others");
    });
  });

  closeIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      const projectBox = icon.closest(".project-box");
      projectBox.classList.remove("expanded");
      projectGrid.classList.remove("hide-others");
    });
  });
});
