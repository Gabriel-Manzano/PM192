// Zona 1: importaciones

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import react, {useState} from 'react';


const IndicadorCarga = ({color, size}) => {
	return <ActivityIndicator style={styles.indicador} color={color} size={size}></ActivityIndicator>
}

// Zona 2: Main

export default function App() {
    
  const [cargando, setCargando] = useState(false);

  const inciarCarga = () => {
    setCargando(true);
    setTimeout(() =>{
      setCargando(false);
    }, 3000)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}> Uso de ActivityIndicator </Text>

      {cargando? (
        <IndicadorCarga color = "deepskyblue" size="large"></IndicadorCarga>
      ) : (
        <Text style={styles.textoSecundario}> Presiona el boton para comenzar </Text>
      )}

      
      <Button title = "Iniciar Carga" onPress = {inciarCarga} color="#ff6f61"></Button>
      
      <StatusBar style="auto" />

    </View>
  );
}


// Zona 3: Estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccff90',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  textoPrincipal:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2e2e2e'
  },

  textoSecundario: {
    fontSize: 16,
    marginVertical: 20,
    color: '#3a3a3a',
  },

  indicador: {
    marginBottom: 20,
  }
});
