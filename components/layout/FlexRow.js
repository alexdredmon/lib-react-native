import React from 'react'
import { StyleSheet } from 'react-native'

import View from 'lib/components/layout/View'


export const FlexRowMobile = props => {
  const {
    style,
    ...rest
  } = props

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        ...style,
      }}
      {...rest}
    />
  )
}


export default FlexRowMobile
