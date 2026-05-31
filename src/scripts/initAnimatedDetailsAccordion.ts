interface AnimatedDetailsAccordionOptions {
  summarySelector: string;
  contentSelector: string;
  openDuration?: number;
  closeDuration?: number;
  easing?: string;
}

class AnimatedDetailsAccordion {
  private animation: Animation | null = null;
  private isClosing = false;
  private isExpanding = false;
  private readonly details: HTMLDetailsElement;
  private readonly summary: HTMLElement;
  private readonly content: HTMLElement;
  private readonly openDuration: number;
  private readonly closeDuration: number;
  private readonly easing: string;

  constructor(details: HTMLDetailsElement, options: AnimatedDetailsAccordionOptions) {
    const summary = details.querySelector<HTMLElement>(options.summarySelector);
    const content = details.querySelector<HTMLElement>(options.contentSelector);

    if (!summary || !content) {
      throw new Error('Accordion target elements are missing.');
    }

    this.details = details;
    this.summary = summary;
    this.content = content;
    this.openDuration = options.openDuration ?? 280;
    this.closeDuration = options.closeDuration ?? 240;
    this.easing = options.easing ?? 'ease-out';

    this.summary.addEventListener('click', (event) => this.handleClick(event));
  }

  private handleClick(event: MouseEvent) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    event.preventDefault();
    this.details.style.overflow = 'hidden';

    if (this.isClosing || !this.details.open) {
      this.open();
      return;
    }

    this.shrink();
  }

  private shrink() {
    this.isClosing = true;

    const startHeight = `${this.details.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    this.animation?.cancel();
    this.animation = this.details.animate(
      { height: [startHeight, endHeight] },
      {
        duration: this.closeDuration,
        easing: this.easing,
      },
    );

    this.animation.onfinish = () => this.finishAnimation(false);
    this.animation.oncancel = () => {
      this.isClosing = false;
    };
  }

  private open() {
    this.details.style.height = `${this.details.offsetHeight}px`;
    this.details.open = true;

    requestAnimationFrame(() => this.expand());
  }

  private expand() {
    this.isExpanding = true;

    const startHeight = `${this.details.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + this.content.scrollHeight}px`;

    this.animation?.cancel();
    this.animation = this.details.animate(
      { height: [startHeight, endHeight] },
      {
        duration: this.openDuration,
        easing: this.easing,
      },
    );

    this.animation.onfinish = () => this.finishAnimation(true);
    this.animation.oncancel = () => {
      this.isExpanding = false;
    };
  }

  private finishAnimation(open: boolean) {
    this.details.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.details.style.height = '';
    this.details.style.overflow = '';
  }
}

export const initAnimatedDetailsAccordion = (
  details: HTMLDetailsElement,
  options: AnimatedDetailsAccordionOptions,
) => {
  return new AnimatedDetailsAccordion(details, options);
};
