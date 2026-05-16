export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function onMotionPreferenceChange(handler: (reduced: boolean) => void): () => void {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {};
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const listener = (e: MediaQueryListEvent) => handler(e.matches);
  mq.addEventListener('change', listener);
  return () => mq.removeEventListener('change', listener);
}
