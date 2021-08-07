import { createGlobalStyle } from 'styled-components';

export const decideTheme = (lightVal, darkVal) => {
  return (props) => (!props.theme.isDark ? lightVal : darkVal);
};

const GlobalStyles = createGlobalStyle`
  html {
  --primary: ${decideTheme('#d53369', '#b32d59')};
  --primary-brighter: ${decideTheme('#e93772', '#d53369')};
  --accent: ${decideTheme('#daae51', '#a8843a')};
  --accent-brighter: ${decideTheme('#fac960', '#daae51')};
  --baseDark: #181818;
  --paperDark: #35373b;
  --textDark: #dedede;

  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 400;
  font-family: sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  min-width: 320;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${decideTheme('white', 'var(--baseDark)')};
  transition: background-color 200ms;
}

button {
  user-select: none;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

a:active {
  color: var(--primary);
}
`;

export { GlobalStyles };
