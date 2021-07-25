import React, { useState } from 'react';
import HomePage from '../../pages/Home/Home.page';
import Layout from '../Layout';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function App() {
  const [optionsOpened, setOptionsOpened] = useState(false);

  return (
    <>
      <Navbar showSidebar={() => setOptionsOpened(true)} />
      <Sidebar showing={optionsOpened} onClose={() => setOptionsOpened(false)} />
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
