import React from 'react'
import { StyleSheet } from 'react-native'

import View from 'lib/components/layout/View'


export const FlexCellMobile = props => {
  const {
    style,
    ...rest
  } = props

  let styles = StyleSheet.create({
    body: {
      display: 'flex',
      flex: 1,
    },
  })

  return (
    <View
      style={{
        ...styles.body,
        alignItems: props.alignItems || 'center',
        justifyContent: props.justifyContent || 'center',
        ...style,
      }}
      {...rest}
    >
      {props.children}
    </View>
  )
}

export default FlexCellMobile
