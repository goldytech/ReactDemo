import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ConfigurationPage from './components/configuration/ConfigurationPage';
import EmailPage from './components/email/EmailPage';
import SettingsPage from './components/settings/SettingsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="configuration" component={ConfigurationPage} />
    <Route path="config/email" component={EmailPage}/>
    <Route path="about" component={AboutPage} />
    <Route path="settings" component={SettingsPage}/>
  </Route>
);
