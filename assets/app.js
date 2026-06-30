/* Portfolio - interactions legeres et sans dependance */
(function () {
  "use strict";

  // --- Menu mobile ---
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("is-open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("is-open");
    });
  }

  // --- Lien de nav actif selon la page courante ---
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here || (here === "index.html" && href === "./index.html")) {
      a.classList.add("is-active");
    }
  });

  // --- Formulaire contact : repli mailto tant que Formspree n'est pas configure ---
  var form = document.querySelector(".contact-form");
  if (form && /REMPLACER/.test(form.getAttribute("action") || "")) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = function (sel) { var el = form.querySelector(sel); return el ? el.value : ""; };
      var body = encodeURIComponent(
        "Nom : " + val('[name="name"]') +
        "\nEmail : " + val('[name="email"]') +
        "\n\n" + val('[name="message"]')
      );
      var subject = encodeURIComponent("Prise de contact - " + (val('[name="name"]') || "site"));
      window.location.href = "mailto:aleksa96gajic@gmail.com?subject=" + subject + "&body=" + body;
    });
  }

  // --- Reveal au scroll ---
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  }
})();
