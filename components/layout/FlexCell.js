import React from 'react'
import { StyleSheet } from 'react-native'

import View from 'lib/components/layout/View'


export const FlexCellMobile = props => (
  <View style={styles.body}>
    {props.children}
  </View>
)

styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
})

export default FlexCellMobile
