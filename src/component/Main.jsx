import React from 'react'
import { View, StyleSheet, Button } from 'react-native' 
import StyledText from './StyledText'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 25,
        paddingTop: 40,
    }
})
const Principal = () => {
    return (
        <View >
        <View style={styles.container}>
        <StyledText blue big>
            QOGame
        </StyledText>
        <StyledText>
        Quimica Organica Gay
        </StyledText>
    </View>
</View>
    )
}

export default Principal