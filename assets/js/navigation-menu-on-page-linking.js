        document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        const targetId = this.getAttribute('href').substring(1); // Get ID without the #
        const targetElement = document.getElementById(targetId); // Find the element with the ID

        if (targetElement) {
            const yOffset = -250; // Adjust offset (depends on your navbar height)
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

            // Smooth scroll to the element
            window.scrollTo({ top: y, behavior: 'smooth' });

            // Open the collapsible section
            const collapseTarget = document.querySelector(this.getAttribute('data-bs-target'));
            if (collapseTarget) {
                const collapseInstance = bootstrap.Collapse.getOrCreateInstance(collapseTarget);
                collapseInstance.show(); // Open the collapsible
            }
        }
    });
});