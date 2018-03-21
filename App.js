import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import Head from 'react-helmet';
import {
  applyRouterMiddleware,
  Router,
  Route,
  browserHistory,
  Link
} from 'react-router';
import { createApp } from '@phenomic/preset-react-app/lib/client';

import TabsComponent from './src/tabs';
import RNWDetailComponent from './src/routes/detail';

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path="/" component={TabsComponent} />
    <Route path="/detail" component={RNWDetailComponent} />
  </Router>
));
