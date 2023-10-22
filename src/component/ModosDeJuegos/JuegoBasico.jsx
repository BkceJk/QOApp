import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import JuegoPalabra from './TiposDeJuego/JuegoPalabra';

const JuegoBasico = () => {
  const cosasBasicas = [
    "JuegoPalabra", // este es el archivo que quiero que detecte el otro
    "Palabra",
    "Bloques",
  ];

  const [cosaActual, setCosaActual] = useState(null);

  const mostrarCosaAleatoria = () => {
    const randomIndex = Math.floor(Math.random() * cosasBasicas.length);
    const randomCosa = cosasBasicas[randomIndex];
    setCosaActual(randomCosa);
  };

  return (
    <View>
      <TouchableOpacity
        style={{ width: 100, height: 50, backgroundColor: '#7BE079', alignItems: 'center', top: '10', right: '10', borderRadius: 10 }}
        onPress={mostrarCosaAleatoria}
      >
        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Jugar</Text>
      </TouchableOpacity>

   {cosaActual === "JuegoPalabra" && <JuegoPalabra />}
      
      
    </View>
  );
};

export default JuegoBasico;
