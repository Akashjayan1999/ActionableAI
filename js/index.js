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


document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        const toggle = dropdown.querySelector('.dropdown-toggle');

        let bsDropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);
        let hoverTimeout;

        function isDesktop() {
            return window.innerWidth >= 992; // lg and above
        }

        dropdown.addEventListener('mouseenter', function () {
            if (isDesktop()) {
                clearTimeout(hoverTimeout);
                bsDropdown.show();
            }
        });

        dropdown.addEventListener('mouseleave', function () {
            if (isDesktop()) {
                hoverTimeout = setTimeout(() => {
                    bsDropdown.hide();
                }, 100);
            }
        });

        dropdown.addEventListener('show.bs.dropdown', function () {
            if (isDesktop()) {
                menu.style.opacity = '0';
                menu.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    menu.style.transition = 'all 0.3s ease';
                    menu.style.opacity = '1';
                    menu.style.transform = 'translateY(0)';
                }, 10);
            }
        });

        dropdown.addEventListener('hide.bs.dropdown', function () {
            if (isDesktop()) {
                menu.style.transition = 'all 0.2s ease';
                menu.style.opacity = '0';
                menu.style.transform = 'translateY(-10px)';
            }
        });

        // Auto close navbar after clicking on any link (mobile)
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
    });
});

    });
});
