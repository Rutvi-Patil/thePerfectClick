// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Add staggered animation for multiple elements
        const staggerElements = entry.target.querySelectorAll('[data-stagger]');
        staggerElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('visible');
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe all scroll-animate elements
  const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-rotate');
  animateElements.forEach(el => {
    observer.observe(el);
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.animate-parallax');
    
    parallaxElements.forEach(el => {
      const speed = el.dataset.speed || 0.5;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Magnetic button effect
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translate(0, 0) scale(1)';
    });
  });

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        const target = entry.target.innerText;
        const isPercentage = target.includes('%');
        const hasPlus = target.includes('+');
        const number = parseInt(target.replace(/\D/g, ''));
        
        let current = 0;
        const increment = number / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= number) {
            current = number;
            clearInterval(timer);
          }
          entry.target.innerText = Math.floor(current) + (hasPlus ? '+' : '') + (isPercentage ? '%' : '');
        }, 30);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
});
