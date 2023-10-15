import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from './themes.js'

const styles = StyleSheet.create ({
    text: {
        fontFamily: theme.font.main,
        fontWeight: theme.fontWeight.normal,
        fontSize: theme.fontSizes.body,
        color: theme.colors.first
    },
    colorPrymary: {
        color: theme.colors.first
    },
    colorSecundary: {
        color: theme.colors.subtitulo
    },
    colorCuerpo: {
        color: theme.colors.cuerpo
    },
    bold: {
        fontWeight: theme.fontWeight.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    }
})

export default function StyledText ({ children, color, fontSizes, fontWeight, style, ...restOfProps}) {
    
    const textStyles = [
        styles.text,
        color == 'prymary' && styles.first,
        color == 'secundary' && styles.subtitulo,
        color == 'cuerpo' && styles.Cuerpo,
        fontSizes == 'subheading' && styles.subheading,
        fontWeight == 'bold' && styles.bold
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>

    )
}