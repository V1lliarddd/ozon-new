export const MIN_PROGRESS = 0;
export const MAX_PROGRESS = 100;

export const FULL_CIRCLE = 2 * Math.PI;
export const FULL_ROTATION_DEGREES = 360;

const STROKE_TRANSITION_DURATION = 0.3;
const STROKE_TRANSITION_TIMING = 'ease';
export const NO_TRANSITION = 'none';
export const STROKE_TRANSITION = `stroke-dashoffset ${STROKE_TRANSITION_DURATION}s ${STROKE_TRANSITION_TIMING}`;

export const DEFAULT_PROGRESS_ATTRIBUTES = {
  value: 0,
  animate: false,
  hide: false,
  strokeWidth: 10,
  radius: 60,
  rotationSpeed: 2,
  backgroundColor: '#f7f7f7',
  progressColor: '#0000ff'
};
