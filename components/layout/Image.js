import React from 'react'
import { Image } from 'react-native'

export const ImageComponent = props => {
  const {
    srcMobile,
    style,
    ...rest
  } = props

  const {
    resizeMode='contain',
  } = style

  return (
    <Image
      style={{
        resizeMode,
        ...style,
      }}
      source={srcMobile}
      {...rest}
    />
  )
}

export default ImageComponent
