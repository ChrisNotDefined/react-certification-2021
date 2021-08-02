import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  min-height: calc(100vh - 64px);
  padding: 0;
  display: flex;
  flex-direction: column;
`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
