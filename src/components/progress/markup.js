const initProgressBackground = ({
  strokeWidth,
  backgroundColor,
  center,
  radius
}) => {
  return `<circle
          class="progress-bg"
          cx="${center}"
          cy="${center}"
          r="${radius}"
          fill="none"
          stroke="${backgroundColor}"
          stroke-width="${strokeWidth}"
        ></circle>`;
};

const initProgressSpotlight = ({ center, radius, strokeWidth, color }) => {
  return `<circle
          class="progress-spotlight"
          cx="${center}"
          cy="${center}"
          r="${radius}"
          fill="none"
          stroke="${color}"
          stroke-width="${strokeWidth}"
          transform="rotate(-90 ${center} ${center})"
        ></circle>`;
};

export const initProgressMarkup = ({
  diameter,
  strokeWidth,
  backgroundColor,
  progressColor,
  center,
  radius
}) => {
  return `
    <div class="progress-svg">
      <svg width="${diameter}" height="${diameter}" viewBox="0 0 ${diameter} ${diameter}">
        ${initProgressBackground({ strokeWidth, backgroundColor, center, radius })}
        ${initProgressSpotlight({ center, radius, strokeWidth, color: progressColor })}
      </svg>
    </div>
  `;
};
