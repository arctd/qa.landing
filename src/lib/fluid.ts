/**
 * Fluid scaling utility.
 * Converts a pixel value from the 1200px desktop mockup
 * into a clamp() expression that scales proportionally
 * from 320px to 1920px viewport width.
 */
export function f(px: number): string {
  const vw = (px / 1200) * 100;
  const min = px * (320 / 1200);
  const max = px * (1920 / 1200);
  return `clamp(${min.toFixed(2)}px, ${vw.toFixed(4)}vw, ${max.toFixed(2)}px)`;
}
