//Zona 1 Importaciones

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


const Texto=()=>{
  const [contenido, setcontenido]=useState('Hola mundo React')
  const actualizarTexto=()=>{setcontenido('Estado actualizado')}
  return(
    <Text onPress={actualizarTexto}> {contenido} </Text>
  )
}

//Zona 2: Main

export default function App() {
  return (

    <View style={styles.container}>
      
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Button title="Button.jpg"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

//Zona 3: Estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
