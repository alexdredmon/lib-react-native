import React from 'react';
import { Dimensions } from 'react-native'
import { View } from 'react-native'
import * as Font from 'expo-font'

import fonts from 'common/assets/fonts'

export class BodyMobile extends React.PureComponent {
  state = {
    fontsLoaded: false,
  }

  async componentDidMount() {
    for (const [name, file] of Object.entries(fonts)) {
      await Font.loadAsync({
        [name]: file
      })
    }

    this.setState({
      fontsLoaded: true,
    })
  }

  render = () => {
    if (! this.state.fontsLoaded) {
      return null
    }

    return (
      <View
        style={{
          padding: 10,
          paddingTop: 50,
          paddingBottom: this.props.headerHeight || 90,
          height: Math.round(Dimensions.get('window').height),
          ...this.props.style,
        }}
      >
        {this.props.children}
      </View>
    )
  }
}

export default BodyMobile
