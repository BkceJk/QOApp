import React, { useState, useEffect, Component } from 'react'
import { render } from 'react-dom'
import { Text, View, TextInput } from 'react-native'

class JuegoPalabra extends Component {
    constructor(props) {
      super(props);
      this.state = { texto: '' };
    }
  
    render() {
      return (
        <View>
          <Text style={{ fontSize: 20, textAlign: 'center'}}> 
          Escribe tu respuesta a continuación:
          </Text>
          <TextInput
          placeholder="Escribe Aqui..."
            onChangeText={(texto) => this.setState({ texto })}
            value={this.state.texto}
          />
        </View>
      );
    }
  }

export default JuegoPalabra