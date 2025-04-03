import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ButtonComponentType } from './type'
import { style } from './style'


const Button = (props: ButtonComponentType) => {
    return (
        props.isChange
            ?
            (
                <TouchableOpacity
                    style={[style.button, { width: props.width as number | undefined }]}
                    onPress={props.onPress}
                >
                    <Text style={[
                        style.buttonText, 
                        {fontSize: props.fontSize || 16},
                        {paddingTop: props.paddingTop || 1},
                        {paddingBottom: props.paddingBottom || 1}
                        ]}>{props.text}</Text>
                </TouchableOpacity>
            )
            :
            (
                <TouchableOpacity
                    style={[style.buttonBorder, { width: props.width as number | undefined }]}
                    onPress={props.onPress}
                >
                    <Text style={[
                        style.buttonTextBorder, 
                        {fontSize: props.fontSize || 16}, 
                        {paddingTop: props.paddingTop || 1},
                        {paddingBottom: props.paddingBottom || 1}
                        ]}>{props.text}</Text>
                </TouchableOpacity>
            )
    )
}

export default Button