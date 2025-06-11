// document.addEventListener('DOMContentLoaded', function() {
//             // Initialize Bootstrap dropdowns manually
//             const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
//             const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));

//             // Add hover functionality to dropdowns
//             const dropdowns = document.querySelectorAll('.dropdown');
//             dropdowns.forEach(dropdown => {
//                 const menu = dropdown.querySelector('.dropdown-menu');
//                 const toggle = dropdown.querySelector('.dropdown-toggle');
//                 const bsDropdown = bootstrap.Dropdown.getInstance(toggle);

//                 let hoverTimeout;

//                 // Show dropdown on hover
//                 dropdown.addEventListener('mouseenter', function() {
//                     clearTimeout(hoverTimeout);
//                     if (bsDropdown) {
//                         bsDropdown.show();
//                     }
//                 });

//                 // Hide dropdown when mouse leaves
//                 dropdown.addEventListener('mouseleave', function() {
//                     hoverTimeout = setTimeout(() => {
//                         if (bsDropdown) {
//                             bsDropdown.hide();
//                         }
//                     }, 100); // Small delay to prevent flickering
//                 });

//                 // Enhanced dropdown animations
//                 dropdown.addEventListener('show.bs.dropdown', function() {
//                     menu.style.opacity = '0';
//                     menu.style.transform = 'translateY(-10px)';
//                     setTimeout(() => {
//                         menu.style.transition = 'all 0.3s ease';
//                         menu.style.opacity = '1';
//                         menu.style.transform = 'translateY(0)';
//                     }, 10);
//                 });

//                 dropdown.addEventListener('hide.bs.dropdown', function() {
//                     menu.style.transition = 'all 0.2s ease';
//                     menu.style.opacity = '0';
//                     menu.style.transform = 'translateY(-10px)';
//                 });

//             });
//         });

// document.addEventListener("DOMContentLoaded", function () {
//   const dropdowns = document.querySelectorAll(".dropdown");
//   const navbarToggler = document.querySelector(".navbar-toggler");
//   const navbarCollapse = document.querySelector("#navbarNav");

//   // Dropdown functionality
//   // dropdowns.forEach(dropdown => {
//   //     const menu = dropdown.querySelector('.dropdown-menu');
//   //     const toggle = dropdown.querySelector('.dropdown-toggle');

//   //     let bsDropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);
//   //     let hoverTimeout;

//   //     function isDesktop() {
//   //         return window.innerWidth >= 992; // lg and above
//   //     }

//   //     dropdown.addEventListener('mouseenter', function () {
//   //         if (isDesktop()) {
//   //             clearTimeout(hoverTimeout);
//   //             bsDropdown.show();
//   //         }
//   //     });

//   //     dropdown.addEventListener('mouseleave', function () {
//   //         if (isDesktop()) {
//   //             hoverTimeout = setTimeout(() => {
//   //                 bsDropdown.hide();
//   //             }, 100);
//   //         }
//   //     });

//   //     dropdown.addEventListener('show.bs.dropdown', function () {
//   //         if (isDesktop()) {
//   //             menu.style.opacity = '0';
//   //             menu.style.transform = 'translateY(-10px)';
//   //             setTimeout(() => {
//   //                 menu.style.transition = 'all 0.3s ease';
//   //                 menu.style.opacity = '1';
//   //                 menu.style.transform = 'translateY(0)';
//   //             }, 10);
//   //         }
//   //     });

//   //     dropdown.addEventListener('hide.bs.dropdown', function () {
//   //         if (isDesktop()) {
//   //             menu.style.transition = 'all 0.2s ease';
//   //             menu.style.opacity = '0';
//   //             menu.style.transform = 'translateY(-10px)';
//   //         }
//   //     });
//   // });

//   // Navbar toggle functionality
//   if (navbarToggler && navbarCollapse) {
//     // Auto close navbar when a nav link is clicked (mobile)
//     document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
//       link.addEventListener("click", () => {
//         if (navbarCollapse.classList.contains("show")) {
//           // Use getOrCreateInstance to ensure an instance exists
//           const bsCollapse =
//             bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
//           bsCollapse.hide();
//         }
//       });
//     });

//     // Optional: Close navbar when clicking outside
//     document.addEventListener("click", function (e) {
//       const isClickInsideNav =
//         navbarToggler.contains(e.target) || navbarCollapse.contains(e.target);
//       if (!isClickInsideNav && navbarCollapse.classList.contains("show")) {
//         const bsCollapse =
//           bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
//         bsCollapse.hide();
//       }
//     });

//     // Close navbar when toggler is clicked and navbar is open
//     document.querySelectorAll(".navbar-toggler").forEach((link) => {
//       link.addEventListener("click", () => {
//         if (navbarCollapse.classList.contains("show")) {
//           const bsCollapse =
//             bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
//           bsCollapse.hide();
//         }
//       });
//     });
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");

  if (navbarToggler && navbarCollapse) {
    // When a nav-link is clicked, close the navbar
    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        bsCollapse.hide();
      });
    });

    // When the navbar toggler is clicked, stop propagation and close the navbar if open
    navbarToggler.addEventListener("click", function (e) {
      // Prevent the click from bubbling up to the document click listener
      e.stopPropagation();
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
      if (navbarCollapse.classList.contains("show")) {
        bsCollapse.hide();
      }
    });

    // Optional: Close navbar when clicking outside of it
    document.addEventListener("click", function (e) {
      // Only close if click is outside both the toggler and the collapse
      if (
        !navbarToggler.contains(e.target) &&
        !navbarCollapse.contains(e.target) &&
        navbarCollapse.classList.contains("show")
      ) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        bsCollapse.hide();
      }
    });
  }
});