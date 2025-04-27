import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextButtonComponentType } from './type'
import { style } from './style'

const TextButton = (props : TextButtonComponentType) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={style.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TextButton