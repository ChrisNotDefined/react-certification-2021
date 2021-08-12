import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const CardBoard = styled.div`
  background-color: ${decideTheme('white', 'var(--paperDark)')};
  box-shadow: 0 1px 4px 1px #0003;
  padding: 1em;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: background-color 200ms;

  :hover {
    background-color: ${decideTheme('#eee', '#444')};
  }
`;

export const CardImage = styled.img`
  border-radius: 0.4rem;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border: solid 4px var(--primary);
`;

export const CardContent = styled.p`
  color: ${decideTheme('gray', 'lightgray')};
  font-size: 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 3em;
  overflow: hidden;
`;

export const CardTitle = styled.h3`
  color: ${decideTheme('inherit', 'var(--textDark)')};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
`;

export const CardSubtitle = styled.div`
  color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`;
