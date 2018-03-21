import React, { Component } from 'react';
import { Button, ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { HeaderText } from 'react-native-minimalist';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Link } from 'react-router';

import NavBar from './components/navbar';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Settings from './routes/Settings';

const initialLayout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    height: 812 - 50
  },
  navbar: {
    top: 0,
    height: 50
  },
  tabs: {
    backgroundColor: '#FAFAFA'
  },
  tabStyle: {},
  labelStyle: {
    color: '#000000'
  },
  indicatorStyle: {
    backgroundColor: '#000000'
  }
});

class TabsComponent extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home' },
      { key: 'profile', title: 'Profile' },
      { key: 'settings', title: 'Settings' }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      {...props}
      style={styles.tabs}
      tabStyle={styles.tabStyle}
      labelStyle={styles.labelStyle}
      indicatorStyle={styles.indicatorStyle}
    />
  );

  _renderScene = SceneMap({
    home: Home,
    profile: Profile,
    settings: Settings
  });

  render() {
    return (
      <React.Fragment>
        <NavBar style={styles.navbar} />
        <View style={styles.view}>
          <TabViewAnimated
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}
          />
        </View>
      </React.Fragment>
    );
  }
}

export default TabsComponent;
