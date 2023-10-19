import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function PaginaPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./QOApp.png')} 
        style={{ width: 350, height: 125, borderRadius: 37, marginTop: 210  }}
      />
      <View style={{ marginBottom: 75}} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Juegos')}
      >
        <Text style={styles.buttonText}>Juegos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Ayuda')}
      >
        <Text style={styles.buttonText}>Ayuda/Guias/Apuntes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tabla De Carbonos')}
      >
        <Text style={styles.buttonText}>Tabla De Carbonos</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

function Ayuda({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Guias y Apuntes de ayuda</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pagina Principal')}
      >
        <Text style={styles.buttonText}>Pagina Principal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tabla De Carbonos')}
      >
        <Text style={styles.buttonText}>Tabla De Carbonos</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
function TablaDeCarbonos({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36, marginTop: 7 }}>Tabla De Carbonos</Text>
      <Text style={{ fontSize: 36}}>con sus sufijos</Text>
      <Text style={{ fontSize: 36}}>y la formula</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pagina Principal')}
      >
        <Text style={styles.buttonText}>Pagina Principal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Ayuda')}
      >
        <Text style={styles.buttonText}>Ayuda/Guias/Apuntes</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


function Juegos({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 82, marginTop: 170 }}>Dificultades</Text>
      <TouchableOpacity
        style={styles.buttonGames}
        onPress={() => navigation.navigate('Pagina Principal')}
      >
        <Text style={styles.buttonText}>Principiante</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonGames}
        onPress={() => navigation.navigate('Tabla De Carbonos')}
      >
        <Text style={styles.buttonText}>Medio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonGames}
        onPress={() => navigation.navigate('Tabla De Carbonos')}
      >
        <Text style={styles.buttonText}>Avanzado</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

// Otras funciones de pantalla como Ayuda y TablaDeCarbonos seguirían un patrón similar.

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pagina Principal" component={PaginaPrincipal} />
        <Stack.Screen name="Juegos" component={Juegos} />
        <Stack.Screen name="Ayuda" component={Ayuda} />
        <Stack.Screen name="Tabla De Carbonos" component={TablaDeCarbonos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EDED',
    alignItems: 'center',
  },
  button: {
    width: 270,
    height: 60,
    backgroundColor: '#7BE079',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
    borderRadius: 30
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 32,
  },
  titulo: {
    fontSize: 36
  },
  buttonGames: {
    width: 270,
    height: 85,
    backgroundColor: '#7BE079',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 55,
    borderRadius: 30
  },
});
