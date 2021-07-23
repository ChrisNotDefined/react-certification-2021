import React from 'react';
import HomePage from '../../pages/Home/Home.page';
import Layout from '../Layout';
import Navbar from '../Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
