// Zona 1 Importaciones

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground, SafeAreaView } from 'react-native'

const FondoBienvenida = () => {
return (
  <ImageBackground source={require('./assets/fondo.jpg')}>
    <View>
      <Text>¡Bienvenido a la App!</Text>
    </View>
  </ImageBackground>
  );
};

// Zona 2 Main

export default function App() {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
    },[]);

  return(
    <SafeAreaView style={styles.container}>
      {showSplash ? (
        <FondoBienvenida />
      ):(
      <View style={styles.mainContent}>
        <Text style={styles.mainText}>Pantalla principal</Text>
      </View>
    )}
    </SafeAreaView>
  );
}

// Zona 3 Estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fondo: {
    flex: 1,
  },
  contenido: {
    backgroundColor: "#1a1a1a",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  titulo: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});