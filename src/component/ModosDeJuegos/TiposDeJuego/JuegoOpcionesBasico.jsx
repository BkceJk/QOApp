import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,  } from 'react-native';

const JuegoOpciones = () => {
  const [preguntaActual, setPreguntaActual] = useState(null);
  const [respuestas, setRespuestas] = useState([]);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(null);

  // Define tus preguntas y sus respuestas aquí
  const preguntas = [
    {
      imagen: require('./ImagenesJuegos/2-metilpropano.png'), // Ruta de la imagen
      opciones: ['2-etilpropano', '2-metilpropano', 'metilpropano', '2-dimetilpropano'],
      respuestaCorrecta: '2-metilpropano',
    },
    // Agrega más preguntas si es necesario
  ];

  // Función para seleccionar una pregunta aleatoria
  const seleccionarPreguntaAleatoria = () => {
    const preguntaAleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];
    setPreguntaActual(preguntaAleatoria);
    const opciones = [...preguntaAleatoria.opciones];
    opciones.sort(() => Math.random() - 0.5); // Mezcla las opciones
    setRespuestas(opciones);
    setRespuestaCorrecta(preguntaAleatoria.respuestaCorrecta);
  };

  // Función para manejar la selección de una respuesta
  const seleccionarRespuesta = (respuesta) => {
    if (respuesta === respuestaCorrecta) {
      
    } else {
      // Respuesta incorrecta, cambia el borde a rojo
    }
  };

  // Cargar una pregunta aleatoria al cargar el componente
  useEffect(() => {
    seleccionarPreguntaAleatoria();
  }, []);

  return (
    <View style={styles.container}>
      {preguntaActual && (
        <Image source={preguntaActual.imagen} style={styles.image} />
      )}
        <View>
          <Text >Siguiente Pregunta</Text>
        <TouchableOpacity
          style={styles.siguienteButton}
          onPress={seleccionarPreguntaAleatoria}
        >
          <Text >Siguiente Pregunta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.opcionesContainer}>
      {respuestas.map((opcion, index) => (
  <TouchableOpacity
    key={index}
    style={styles.opcionButton}
    onPress={() => seleccionarRespuesta(opcion)}
  >
    <Text style={{ textAlign:'center'}}>{opcion}</Text>
  </TouchableOpacity>
))}
      </View>
          </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 218,
    height: 96,
    top: 100,
  },
  opcionesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    top: 150,
    marginHorizontal: 100
  },
  opcionButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#B4B4B4',
    width: 150,
    position: 'absolute'

  },
  siguienteButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#7BE079',
    borderRadius: 10,
    top: 280,
    left: 120,
    position: 'absolute'
  },
  opcionText: {
    textAlign: 'center',
    fontSize: 12 // Alinea el texto en el centro del botón
  },
});

export default JuegoOpciones;
