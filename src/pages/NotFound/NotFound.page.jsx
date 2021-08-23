import React from 'react';
import { useHistory } from 'react-router';
import { Code, Container, GoHomeButton, Message } from './NotFound.styles';

const NotFoundPage = () => {
  const history = useHistory();

  const goHome = () => {
    history.replace('/');
  };

  return (
    <Container>
      <Code>404</Code>
      <Message>Ooops, seems like you wanted to go to an unexistant page...</Message>
      <GoHomeButton type="button" onClick={goHome}>
        Go Home
      </GoHomeButton>
    </Container>
  );
};

export default NotFoundPage;
