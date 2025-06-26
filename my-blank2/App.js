// Zona 1 Importaciones

import React, { useState, useEffect } from 'react';
import {StyleSheet,Text,View,TextInput,Switch,SafeAreaView,ImageBackground,Button,Alert,} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Splash = () => {
  return (
    <ImageBackground source={require('./assets/splash.jpg')} style={styles.fondoSplash} resizeMode="cover">
      <View style={styles.contenidoSplash}>
        <Text style={styles.textoSplash}>¡Bienvenido!</Text>
      </View>
    </ImageBackground>
  );
};

// Zona 2 Main

export default function App(){

  const [aceptar, setAceptar] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const Registro = () => {
    if (!nombre.trim() || !correo.trim()) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    if (!aceptar) {
      Alert.alert('Términos y Condiciones', 'Debes aceptar los términos y condiciones para registrarte.');
      return;
    }

    Alert.alert(
      'Registro Exitoso',
    );

  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {showSplash ? (
          <Splash />
        ) : (
          
          <ImageBackground source={require('./assets/fondo.jpg')} style={styles.fondoFormulario} resizeMode="cover">

            <View style={styles.contenedorForm}>

              <Text style={styles.etiqueta}>Nombre Completo</Text>

              <TextInput style={styles.input} placeholder="Ingresa tu nombre"
                value={nombre}
                onChangeText={setNombre}
              />

              <Text style={styles.etiqueta}>Correo</Text>

              <TextInput style={styles.input} placeholder="Ingresa tu correo"  keyboardType="email-address"
                value={correo}
                onChangeText={setCorreo}
              />

              <View style={styles.contenedorSwitch}>

                <Text style={styles.etiqueta}>Aceptar términos y condiciones</Text>

                <Switch
                  value={aceptar}
                  onValueChange={setAceptar}
                  trackColor={{ false: '#ccc', true: '#4caf50' }}
                  thumbColor={aceptar ? '#ffffff' : '#999999'}
                />
              </View>

              <View style={styles.botonRegistro}>
                <Button title="Registrarse" onPress={Registro} color="#2196F3" />
              </View>
            </View>
          </ImageBackground>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Zona 3 Estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  fondoSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  contenidoSplash: {
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
    padding: 30,
    borderRadius: 20,
  },
  textoSplash: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  fondoFormulario: {
    flex: 1,
    justifyContent: 'center',
  },
  contenedorForm: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    margin: 20,
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ff0000',
  },
  etiqueta: {
    fontSize: 13,
    marginVertical: 10,
    color: '#ff4444',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#111',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#ff0000',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  contenedorSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ff4444',
  },
  botonRegistro: {
    marginTop: 35,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
