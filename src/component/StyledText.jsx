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
    },
    botones: {
        width: 270,
        height: 60,
        backgroundColor: '#E5FF83',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 17,
    }
})

export default function StyledText ({ children, bold, blue, big, small, center, black, botones }) {
    const textStyles = [
        styles.text,
        center && styles.center,
        blue && styles.blue,
        bold && styles.bold,
        big && styles.big,
        small && styles.small,
        black && styles.black,
        botones && styles.botones

    ]
    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}