(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const year = document.querySelector("#year");

  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    nav?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  };

  toggle?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open") || false;
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  window.addEventListener("scroll", () => header?.classList.toggle("scrolled", window.scrollY > 16), {passive: true});

  document.querySelectorAll("[data-accordion] details").forEach(item => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      item.parentElement.querySelectorAll("details[open]").forEach(other => {
        if (other !== item) other.open = false;
      });
    });
  });
})();
