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
import {
  Content,
  HeaderText,
  BodyText,
  Profile,
  Photo,
  PhotoInfo
} from 'react-native-minimalist';
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
        <Content>
          <PhotoInfo
            photo={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
            }}
            title="bentierney"
            subtitle="Guitar Center"
            icon={require('../more.png')}
          />
          <Photo
            imageURL={
              'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg'
            }
          />
          <PhotoInfo
            photo={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
            }}
            title="bentierney"
            subtitle="Guitar Center"
            icon={require('../more.png')}
          />
          <Photo
            imageURL={
              'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg'
            }
          />
          <PhotoInfo
            photo={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
            }}
            title="bentierney"
            subtitle="Guitar Center"
            icon={require('../more.png')}
          />
          <Photo
            imageURL={
              'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg'
            }
          />
          <PhotoInfo
            photo={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
            }}
            title="bentierney"
            subtitle="Guitar Center"
            icon={require('../more.png')}
          />
          <Photo
            imageURL={
              'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg'
            }
          />
        </Content>
        <Link to="/detail">Go to Detail</Link>
      </ScrollView>
    );
  }
}

export default FirstRoute;
