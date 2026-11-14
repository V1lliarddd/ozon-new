import { FULL_CIRCLE, MAX_PROGRESS } from '../components/progress/constants.js';

export const getGeometry = (radius, clamp) => {
  const length = FULL_CIRCLE * radius;
  const offset = length * (1 - clamp / MAX_PROGRESS);

  return { length, offset };
};
