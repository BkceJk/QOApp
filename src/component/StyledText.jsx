import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: '#000000'
    },
    bold: {
        fontWeight: 'bold'   
    },
    blue: {
        color: 'blue'
    },
    big: {
        fontSize: 30
    },
    small: {
        fontSize: 10
    },
    center:{
        textAlign: 'center'
    },
    black: {
        color: '#000000'
    }
})

export default function StyledText ({ children, bold, blue, big, small, center, black }) {
    const textStyles = [
        styles.text,
        center && styles.center,
        blue && styles.blue,
        bold && styles.bold,
        big && styles.big,
        small && styles.small,
        black && styles.black

    ]
    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}