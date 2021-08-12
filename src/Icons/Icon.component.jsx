import styled from 'styled-components';

const Svg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const Icon = styled(Svg)`
  width: ${(props) => props.width || `auto`};
  height: ${(props) => props.height || `auto`};
`;

export default Icon;
