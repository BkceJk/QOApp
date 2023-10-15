import React from 'react'
import { View, StyleSheet } from 'react-native' 
import StyledText from './StyledText'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 25,
        paddingTop: 40,
    }
})
const Principal = () => {
    return (
    <View style={styles.container}>
        <StyledText  fontWeight='bold'>
            Prueba de texto alo
        </StyledText>
    </View>
        
    )
}

export default Principal