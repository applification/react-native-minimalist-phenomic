import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Content, HeaderText, BodyText } from 'react-native-minimalist';
import { Link } from 'react-router';

class Settings extends Component {
  render() {
    return (
      <ScrollView style={[{ backgroundColor: '#ffffff' }]}>
        <Content>
          <HeaderText>Settings</HeaderText>
          <BodyText>
            Some body text that wraps on to the next line with the correct
            padding.
          </BodyText>
        </Content>
      </ScrollView>
    );
  }
}

export default Settings;
