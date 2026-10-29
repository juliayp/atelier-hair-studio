/* Progressive enhancement: the original heading stays readable without JavaScript. */
(() => {
  const heading = document.querySelector('.about-heading');
  if (!heading || !('IntersectionObserver' in window) || !heading.animate) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches) return;
  const name = heading.textContent;
  const fragment = document.createDocumentFragment();
  name.split(/(\s+)/).forEach(word => {
    if (/^\s+$/.test(word)) { fragment.append(document.createTextNode(word)); return; }
    const group = document.createElement('span');
    group.className = 'about-name-word';
    group.setAttribute('aria-hidden', 'true');
    Array.from(word).forEach(letter => {
      const span = document.createElement('span');
      span.className = 'about-name-letter';
      span.textContent = letter;
      group.append(span);
    });
    fragment.append(group);
  });
  heading.setAttribute('aria-label', name);
  heading.replaceChildren(fragment);
  heading.dataset.reveal = 'pending';
  let animations = [];
  const observer = new IntersectionObserver(entries => {
    if (motion.matches || heading.dataset.reveal !== 'pending' ||
        !entries.some(entry => entry.isIntersecting)) return;
    animations.forEach(animation => animation.cancel());
    delete heading.dataset.reveal;
    animations = Array.from(heading.querySelectorAll('.about-name-letter'), (letter, i) =>
      letter.animate([
        { opacity: 0, transform: 'translateY(.22em)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 520, delay: i * 35, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'both' })
    );
  }, { rootMargin: `0px 0px -${Math.round(window.innerHeight * .12)}px 0px`, threshold: 0 });
  observer.observe(heading);
  // Reset only after the whole heading leaves the actual viewport.
  const exitObserver = new IntersectionObserver(entries => {
    if (motion.matches || !entries.some(entry => !entry.isIntersecting)) return;
    animations.forEach(animation => animation.cancel());
    animations = [];
    heading.dataset.reveal = 'pending';
  }, { threshold: 0 });
  exitObserver.observe(heading);
  motion.addEventListener('change', () => {
    if (!motion.matches) return;
    delete heading.dataset.reveal;
    animations.forEach(animation => animation.cancel());
  });
})();
