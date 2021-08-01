import React, { useState } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from '../../pages/Home/Home.page';
import VideoDetails from '../../pages/VideoDetails/VideoDetails.component';
import { SearchProvider } from '../../providers/SearchContext';
import Layout from '../Layout';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function App() {
  const [optionsOpened, setOptionsOpened] = useState(false);

  return (
    <>
      <SearchProvider>
        <Router>
          <Navbar showSidebar={() => setOptionsOpened(true)} />
          <Sidebar showing={optionsOpened} onClose={() => setOptionsOpened(false)} />
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/video=:videoId">
                <VideoDetails />
              </Route>
              <Route path="/*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </SearchProvider>
    </>
  );
}

export default App;
