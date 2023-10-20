import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StyledText from './StyledText';
import SecondScreen from "./PaginaJuegos"

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text bold big>Química Orgánica</Text>
      <Button
        title="Abrir Segunda Página"
        onPress={() => navigation.navigate('SecondScreen')}
        color="#E5FF83"
        titleStyle={{ color: '#000000' }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pagina Principal" component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76EBF3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
