import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyledText } from "./StyledText"

function SecondScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text bold big blue>Juegos</Text>
        <Button
          title="Regresar a la Página Principal"
          onPress={() => navigation.navigate('MainScreen')}
          color="#19F537"
          titleStyle={{ color: 'red' }}
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
              <Stack.Screen name="Juegos" component={SecondScreen} />
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

export default function SegundaPagina () {
    return (
        SecondScreen
    )
}