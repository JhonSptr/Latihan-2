document.addEventListener('DOMContentLoaded', function() {
    const dropdownSections = document.querySelectorAll('.dropdown');
  
    dropdownSections.forEach(section => {
      section.addEventListener('click', () => {
        section.classList.toggle('active');
      });
    });
  });
  