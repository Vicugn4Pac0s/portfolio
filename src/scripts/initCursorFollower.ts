interface CursorFollowerState {
  element: HTMLDivElement;
  label: HTMLSpanElement;
  frameId: number;
  currentX: number;
  currentY: number;
  targetX: number;
  targetY: number;
  activeTrigger: HTMLElement | null;
}

declare global {
  interface Window {
    __historyCursorFollower?: CursorFollowerState;
    __cursorFollowerInitialized?: boolean;
  }
}

const supportsFinePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const createCursorFollower = () => {
  const element = document.createElement('div');
  const label = document.createElement('span');

  element.className = 'cursor-follower';
  element.dataset.visible = 'false';
  element.dataset.active = 'false';
  label.className = 'cursor-follower__label';
  element.append(label);
  document.body.append(element);

  const state: CursorFollowerState = {
    element,
    label,
    frameId: 0,
    currentX: window.innerWidth / 2,
    currentY: window.innerHeight / 2,
    targetX: window.innerWidth / 2,
    targetY: window.innerHeight / 2,
    activeTrigger: null,
  };

  const tick = () => {
    state.currentX += (state.targetX - state.currentX) * 0.18;
    state.currentY += (state.targetY - state.currentY) * 0.18;
    state.element.style.transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0) translate(-50%, -50%)`;
    state.frameId = window.requestAnimationFrame(tick);
  };

  state.frameId = window.requestAnimationFrame(tick);

  window.addEventListener('pointermove', (event) => {
    if (!supportsFinePointer()) {
      state.element.dataset.visible = 'false';
      return;
    }

    state.targetX = event.clientX;
    state.targetY = event.clientY;
    state.element.dataset.visible = 'true';
  });

  window.addEventListener('pointerleave', () => {
    state.element.dataset.visible = 'false';
    state.element.dataset.active = 'false';
    state.label.textContent = '';
    state.activeTrigger = null;
  });

  return state;
};

const getCursorFollowerState = () => {
  if (!window.__historyCursorFollower) {
    window.__historyCursorFollower = createCursorFollower();
  }

  return window.__historyCursorFollower;
};

const getCursorLabel = (trigger: HTMLElement) => {
  return trigger.dataset.cursorLabel ?? '';
};

const syncFollowerContent = (state: CursorFollowerState) => {
  const label = state.activeTrigger ? getCursorLabel(state.activeTrigger) : '';

  state.label.textContent = label;
  state.element.dataset.active = label ? 'true' : 'false';
};

const findTrigger = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) {
    return null;
  }

  return target.closest<HTMLElement>('[data-cursor-label]');
};

export const initCursorFollower = () => {
  if (!supportsFinePointer()) {
    return;
  }

  if (window.__cursorFollowerInitialized) {
    return;
  }

  window.__cursorFollowerInitialized = true;
  const state = getCursorFollowerState();

  document.addEventListener('pointerover', (event) => {
    const trigger = findTrigger(event.target);

    if (!trigger) {
      return;
    }

    state.activeTrigger = trigger;
    syncFollowerContent(state);
  });

  document.addEventListener('pointerout', (event) => {
    const trigger = findTrigger(event.target);
    const relatedTrigger = findTrigger(event.relatedTarget);

    if (!trigger || trigger === relatedTrigger) {
      return;
    }

    state.activeTrigger = null;
    syncFollowerContent(state);
  });

  const observer = new MutationObserver((mutations) => {
    const hasActiveTriggerUpdate = mutations.some((mutation) => mutation.target === state.activeTrigger);

    if (!hasActiveTriggerUpdate) {
      return;
    }

    syncFollowerContent(state);
  });

  observer.observe(document.body, {
    subtree: true,
    attributes: true,
    attributeFilter: ['data-cursor-label'],
  });
};
