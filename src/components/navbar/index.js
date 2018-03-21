import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import NavBar from 'antd-mobile/lib/nav-bar';
import Icon from 'antd-mobile/lib/icon';

import 'antd-mobile/lib/nav-bar/style/css';
import 'antd-mobile/lib/icon/style/css';

class UINavBar extends Component {
  static propTypes = {
    arrowBack: PropTypes.bool
  };

  render() {
    const { arrowBack, onPress } = this.props;

    return (
      <NavBar
        style={{ backgroundColor: '#FAFAFA', color: '#000000' }}
        icon={arrowBack ? <Icon type="left" /> : null}
        onLeftClick={onPress}
        rightContent={[
          <Icon key="0" type="ellipsis" style={{ marginRight: '16px' }} />
        ]}
      >
        Instagrammy
      </NavBar>
    );
  }
}

export default UINavBar;
