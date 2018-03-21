import React, { Component } from 'react';
import { Button, ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { HeaderText } from 'react-native-minimalist';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Link } from 'react-router';

import NavBar from '../components/navbar';
import FirstRoute from './FirstRoute';

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
    top: 51
  }
});

// export default RNW;

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

class RNWTabsComponent extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
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

export default RNWTabsComponent;
