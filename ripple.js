/*
 * Material Ripple Effect Script
 * This script is required to generate the ripple effect on click.
 */
document.addEventListener('click', function (e) {
  // Use .closest() to find the nearest parent with the .genux-ripple class
  const target = e.target.closest('.genux-ripple');
  if (!target) {
    return;
  }

  // It's good practice to remove any existing, unfinished ripples
  const existingRipples = target.querySelectorAll('.ripple-effect');
  existingRipples.forEach(ripple => ripple.remove());

  const circle = document.createElement('span');
  const diameter = Math.max(target.clientWidth, target.clientHeight);
  const radius = diameter / 2;

  // Get the bounding box of the target to calculate position correctly
  const rect = target.getBoundingClientRect();

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - rect.left - radius}px`;
  circle.style.top = `${e.clientY - rect.top - radius}px`;
  circle.classList.add('ripple-effect');

  // --- Ripple Color Logic ---
  const computedStyle = getComputedStyle(target);
  let rippleColor = 'rgba(255, 255, 255, 0.7)'; // Fallback color
  const pressOpacity = 0.12; // From md.sys.opacity.state.press
  const pressColorVar = computedStyle.getPropertyValue('--genux-press-color-rgb').trim();

  if (pressColorVar) {
    rippleColor = `rgba(${pressColorVar}, ${pressOpacity})`;
  }
  circle.style.backgroundColor = rippleColor;
  // --- End of Color Logic ---

  target.appendChild(circle);

  circle.addEventListener('animationend', () => {
    circle.remove();
  }, { once: true });
});
