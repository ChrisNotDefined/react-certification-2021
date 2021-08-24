import React, { useState } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { GlobalStyles } from '../../globalStyles';
import HomePage from '../../pages/Home/Home.page';
import VideoPage from '../../pages/Video';
import { SearchProvider } from '../../providers/SearchContext';
import { DarkThemeProvider } from '../../providers/ThemeContext';
import Layout from '../Layout';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function App() {
  const [optionsOpened, setOptionsOpened] = useState(false);

  return (
    <>
      <DarkThemeProvider>
        <GlobalStyles />
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
                  <VideoPage />
                </Route>
                <Route path="/*">
                  <Redirect to="/" />
                </Route>
              </Switch>
            </Layout>
          </Router>
        </SearchProvider>
      </DarkThemeProvider>
    </>
  );
}

export default App;
