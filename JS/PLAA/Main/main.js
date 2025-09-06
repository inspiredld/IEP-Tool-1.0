// Constants for configuration
const SELECTORS = {
  TOGGLE_BUTTON: '.toggle-button',
  TOGGLE_ICON: '.toggle-icon',
};

const CLASSES = {
  EXPANDED: 'is-expanded',
  ANIMATING: 'is-animating',
};

// Main toggle functionality
class SectionToggle {
  constructor() {
    this.buttons = document.querySelectorAll(SELECTORS.TOGGLE_BUTTON);
    this.init();
  }

  init() {
    this.buttons.forEach(button => this.setupButton(button));
  }

  setupButton(button) {
    const contentId = button.getAttribute('aria-controls');
    if (!contentId) {
      console.error('Toggle button missing aria-controls attribute:', button);
      return;
    }

    const content = document.getElementById(contentId);
    if (!content) {
      console.error(`Content section not found for ID: ${contentId}`);
      return;
    }

    const icon = button.querySelector(SELECTORS.TOGGLE_ICON);

    button.addEventListener('click', () => this.toggleSection(button, content, icon));

    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggleSection(button, content, icon);
      }
    });
  }

  toggleSection(button, content, icon) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    if (content.classList.contains(CLASSES.ANIMATING)) return;

    button.setAttribute('aria-expanded', !isExpanded);

    if (isExpanded) {
      this.collapseSection(content, icon);
    } else {
      this.expandSection(content, icon);
    }

    this.dispatchToggleEvent(button, !isExpanded);
  }

  expandSection(content, icon) {
    content.classList.add(CLASSES.ANIMATING);
    content.removeAttribute('hidden');

    if (icon) icon.style.transform = 'rotate(45deg)';
    this.manageFocus(content);
    this.handleAnimationEnd(content);
  }

  collapseSection(content, icon) {
    content.classList.add(CLASSES.ANIMATING);
    content.setAttribute('hidden', '');

    if (icon) icon.style.transform = 'rotate(0deg)';
    this.handleAnimationEnd(content);
  }

  handleAnimationEnd(content) {
    const handleTransitionEnd = () => {
      content.classList.remove(CLASSES.ANIMATING);
      content.removeEventListener('transitionend', handleTransitionEnd);
    };

    content.addEventListener('transitionend', handleTransitionEnd);

    setTimeout(() => {
      content.classList.remove(CLASSES.ANIMATING);
    }, 300);
  }

  manageFocus(content) {
    const focusable = content.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable) focusable.focus();
  }

  dispatchToggleEvent(button, isExpanded) {
    const event = new CustomEvent('section:toggle', {
      detail: {
        button,
        isExpanded,
        sectionId: button.getAttribute('aria-controls')
      },
      bubbles: true
    });
    button.dispatchEvent(event);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new SectionToggle();

  document.addEventListener('section:toggle', (e) => {
    const { sectionId, isExpanded } = e.detail;
    console.log(`Section ${sectionId} is now ${isExpanded ? 'expanded' : 'collapsed'}`);
  });
});
