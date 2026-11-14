const initProgressBarBG = ({
  strokeWidth,
  backgroundColor,
  center,
  radius
}) => {
  return `<circle
          class="progress-bar-bg"
          cx="${center}"
          cy="${center}"
          r="${radius}"
          fill="none"
          stroke="${backgroundColor}"
          stroke-width="${strokeWidth}"
        ></circle>`;
};

const initProgressBarSpotlight = ({ center, radius, strokeWidth, color }) => {
  return `<circle
          class="progress-bar-spotlight"
          cx="${center}"
          cy="${center}"
          r="${radius}"
          fill="none"
          stroke="${color}"
          stroke-width="${strokeWidth}"
          transform="rotate(-90 ${center} ${center})"
        ></circle>`;
};

export const initProgressBarMarkup = ({
  diameter,
  strokeWidth,
  backgroundColor,
  progressColor,
  center,
  radius
}) => {
  return `
    <div class="progress-bar-svg">
      <svg width="${diameter}" height="${diameter}" viewBox="0 0 ${diameter} ${diameter}">
        ${initProgressBarBG({ strokeWidth, backgroundColor, center, radius })}
        ${initProgressBarSpotlight({ center, radius, strokeWidth, color: progressColor })}
      </svg>
    </div>
  `;
};
