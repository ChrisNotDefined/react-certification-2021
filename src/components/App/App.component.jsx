import React, { useState } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import FavoritesPage from '../../pages/Favorites';
import FavVideoPage from '../../pages/FavVideo/FavVideo.page';
import HomePage from '../../pages/Home/Home.page';
import NotFoundPage from '../../pages/NotFound';
import VideoPage from '../../pages/Video';
import ApplicationContext from '../../providers/ApplicationContext';
import Layout from '../Layout';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function App() {
  const [optionsOpened, setOptionsOpened] = useState(false);

  return (
    <>
      <ApplicationContext>
        <Router>
          <Navbar showSidebar={() => setOptionsOpened(true)} />
          <Sidebar showing={optionsOpened} onClose={() => setOptionsOpened(false)} />
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/video=:videoId">
                <VideoPage />
              </Route>
              <Route exact path="/favs">
                <FavoritesPage />
              </Route>
              <Route path="/favs=:videoId">
                <FavVideoPage />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ApplicationContext>
    </>
  );
}

export default App;
