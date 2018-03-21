import React, { Component } from 'react';
import {
  AsyncStorage,
  Button,
  Text,
  ScrollView,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import { HeaderText } from 'react-native-minimalist';
import { Link } from 'react-router';

class FirstRoute extends Component {
  componentDidMount() {
    AsyncStorage.getItem('YPos', (err, result) => {
      if (result !== null) {
        this.scrollView.scrollTo({ y: result, animated: false });
      }
    });
  }

  render() {
    return (
      <ScrollView
        style={[{ backgroundColor: '#ff4081' }]}
        ref={scrollView => (this.scrollView = scrollView)}
        onScroll={event => {
          try {
            AsyncStorage.setItem('YPos', event.nativeEvent.contentOffset.y);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/detail">Go to Detail</Link>
      </ScrollView>
    );
  }
}

export default FirstRoute;
