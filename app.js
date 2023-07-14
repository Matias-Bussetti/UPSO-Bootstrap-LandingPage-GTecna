var navLinks = document.querySelectorAll("nav a");

      navLinks.forEach((anchor) => {
        anchor.onclick = () => {
          if (anchor.dataset.collapse) {
            var collapseOpenState = Object.values(
              document.querySelector(anchor.dataset.collapse).classList
            ).includes("show");
            if (!collapseOpenState) {
              const bsCollapse = new bootstrap.Collapse(anchor.dataset.collapse)
                .show;
            }
            document
              .querySelector(anchor.dataset.collapse)
              .scrollIntoView({ behavior: "smooth" }, true);
          }
        };
      });