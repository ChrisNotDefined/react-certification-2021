import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Icon from '../Icon.component';

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(Icon)`
  ${(props) =>
    props.animate &&
    css`
      animation: ${spinning} 0.8s linear infinite;
    `}

  & .primary {
    fill: ${(props) => props.primary || 'var(--primary)'};
  }

  & .accent {
    fill: ${(props) => props.accent || 'var(--accent-brighter)'};
  }
`;

const SpinnerIcon = ({ primary, width, height, accent, animate }) => {
  return (
    <Spinner {...{ width, height, primary, accent, animate }} viewBox="0 0 512 512">
      <title>Loader</title>
      <path
        className="primary"
        d="m402.7 47.5c-57.601-3.6-158.701 169.2-146.7 208.5-40.201-9.3-123.168 11.944-155.054-43.207-28.124-48.643-6.604-157.01 47.954-188.094 32.4-15.3 68.999-24.699 107.1-24.699 54.6 0 105.3 18.1 146.7 47.5z"
        fill="#4da6ff"
      />
      <path
        className="accent"
        d="m512 256c0 7.8-.3 15.3-.901 22.8-25.799-51.601-226.899-52.8-255.099-22.8-12.001-39.3-24-78.6 8.101-133.801 27.9-48.6 80.999-78.3 138.6-74.7 65.399 46.2 109.299 122.401 109.299 208.501z"
        fill="#ecf2ff"
      />
      <path
        className="primary"
        d="m363.401 487c80.7-37.202 139.3-115.801 147.699-208.2-25.8-51.601-79-82.8-135.1-82.8-63.6 0-91.8 30-120 60z"
        fill="#4da6ff"
      />
      <path
        className="accent"
        d="m109.9 464.799c41.4 29.101 91.8 47.201 146.1 47.201 38.401 0 74.7-9.401 107.401-25 31.5-48.301 32.399-108.9 4.499-157.202-31.801-55.198-71.699-64.498-111.9-73.798z"
        fill="#ecf2ff"
      />
      <path
        className="primary"
        d="m256 256c12.001 39.3 24 78.6-8.101 133.799-27.9 48.301-80.7 78.001-137.999 75-66-46.2-109.9-122.399-109.9-208.799 0-7.8.3-15.3.901-22.8z"
        fill="#4da6ff"
      />
      <path
        className="accent"
        d="m256 256c-28.2 30-56.4 60-120 60-56.1 0-109.3-31.201-135.099-82.8 8.399-92.701 67.299-171.001 147.999-208.501-31.8 48.001-32.999 108.9-4.799 157.5 31.8 55.201 71.698 64.501 111.899 73.801z"
        fill="#ecf2ff"
      />
    </Spinner>
  );
};

export { SpinnerIcon };
