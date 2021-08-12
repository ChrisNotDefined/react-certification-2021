import styled from 'styled-components';

export const VideoList = styled.section`
  padding: 1em 4em;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1em;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 650px) {
    padding: 1em;
    grid-template-columns: 1fr;
  }
`;

export const EmptySearch = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: gray;

  & p {
    font-size: 2rem;
    text-align: center;
  }

  & h2 {
    font-size: 3rem;
  }
`;
