/**
 * Saif Al-Musawi — Portfolio Dynamics & System Control
 * Core interactions, scroll spying, and system state monitors.
 */

document.addEventListener('DOMContentLoaded', () => {
  initSystemDiagnostics();
  initScrollSpy();
  initHoverAnimations();
});

/**
 * Log a high-contrast brutalist greeting in console for developer review.
 */
function initSystemDiagnostics() {
  console.log(
    `%c SAIF AL-MUSAWI // SYSTEM ARCHITECTURE INITIALIZED %c\n` +
    `%c[ STATUS ]   ONLINE\n` +
    `%c[ VERSION ]  2026.07.04\n` +
    `%c[ ECOSYSTEM ] MICROSOFT ENTERPRISE PARTNER HUB\n` +
    `%c[ REFINEMENTS ] SWISS NEO-BRUTALISM DIRECTIVES ENFORCED`,
    'background: #000; color: #FFF; font-family: monospace; font-size: 14px; font-weight: bold; padding: 4px 8px;',
    '',
    'color: #22C55E; font-family: monospace;',
    'color: #000; font-family: monospace;',
    'color: #000; font-family: monospace;',
    'color: #888; font-family: monospace;'
  );

}

/**
 * Scroll spying implementation to high-contrast highlight current navigational sections.
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px', // Trigger activation near vertical center of viewport
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          
          if (href === `#${id}` || (id === 'hero-zone' && href === '#')) {
            // Apply brutalist invert style for active links
            link.style.backgroundColor = 'var(--text-primary)';
            link.style.color = 'var(--bg-color)';
          } else {
            // Revert styles
            link.style.backgroundColor = '';
            link.style.color = '';
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * Adds high-fidelity tactile shadow movements to brutalist buttons.
 */
function initHoverAnimations() {
  const buttons = document.querySelectorAll('.brutalist-btn');
  
  buttons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left; // x coordinate relative to button
      const y = e.clientY - rect.top;  // y coordinate relative to button
      
      // Calculate a very slight shift to offset shadow based on cursor position
      const moveX = (x - rect.width / 2) / 8;
      const moveY = (y - rect.height / 2) / 8;
      
      // Apply offset when hovered
      if (!btn.classList.contains('active-click')) {
        btn.style.boxShadow = `${4 - moveX}px ${4 - moveY}px 0px var(--text-primary)`;
        btn.style.transform = `translate(${-2 + moveX/2}px, ${-2 + moveY/2}px)`;
      }
    });
    
    btn.addEventListener('mouseleave', () => {
      // Revert to standard hover state values
      btn.style.boxShadow = '';
      btn.style.transform = '';
    });
  });
}
