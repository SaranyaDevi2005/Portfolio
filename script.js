// Wait for DOM content to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Set copyright year
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Mobile menu toggle functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Smooth scrolling for all links that point to page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Scroll to the element with an offset for the fixed navbar
        window.scrollTo({
          top: targetElement.offsetTop - 64, // Account for navbar height
          behavior: 'smooth'
        });
        
        // Close mobile menu if it's open
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
  
  // Handle scroll events for active section highlighting
  function handleScroll() {
    const scrollPosition = window.scrollY;
    const navbar = document.getElementById('navbar');
    
    // Add shadow to navbar on scroll
    if (scrollPosition > 10) {
      navbar.classList.add('shadow-md');
    } else {
      navbar.classList.remove('shadow-md');
    }
    
    // Determine which section is currently in view
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Update desktop navigation active state
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('text-primary-500', 'font-semibold');
          link.classList.add('text-secondary-700');
        });
        
        const activeDesktopLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeDesktopLink) {
          activeDesktopLink.classList.remove('text-secondary-700');
          activeDesktopLink.classList.add('text-primary-500', 'font-semibold');
        }
        
        // Update mobile navigation active state
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
          link.classList.remove('text-primary-500', 'font-semibold');
          link.classList.add('text-secondary-700');
        });
        
        const activeMobileLink = document.querySelector(`.mobile-nav-link[href="#${sectionId}"]`);
        if (activeMobileLink) {
          activeMobileLink.classList.remove('text-secondary-700');
          activeMobileLink.classList.add('text-primary-500', 'font-semibold');
        }
      }
    });
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Trigger once on page load to set initial state
  handleScroll();
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real implementation, you would send this data to a server
    // For now, just show an alert and reset the form
    alert("Thank you for your message! This form doesn't actually submit anywhere yet as it's just a portfolio demo.");
    
    // Reset form fields
    contactForm.reset();
  });
  
  // Initialize skill bar animations
  document.querySelectorAll('.skill-progress').forEach(bar => {
    // Set initial width to 0 to ensure animation works
    bar.style.width = '0';
    
    // Small delay before starting animation to ensure CSS is fully loaded
    setTimeout(() => {
      // Set width to the value defined in the --progress CSS variable
      bar.style.width = bar.style.getPropertyValue('--progress');
    }, 300);
  });
  
  // Add hover class to project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('transition', 'duration-300');
  });
});