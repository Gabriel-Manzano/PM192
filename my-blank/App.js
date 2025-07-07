// Zona 1: Importaciones
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
  Alert, ScrollView, ActivityIndicator, Image,
  SafeAreaView, TouchableOpacity
} from 'react-native';
import axios from 'axios';

const API_KEY = '907d898378b04d01880204614250707';

// Zona 2: Main
export default function App() {
  const [texto, setTexto] = useState('');
  const [sugerencias, setSugerencias] = useState([]);
  const [climas, setClimas] = useState([]);
  const [cargando, setCargando] = useState(false);

  const onChangeTexto = async (text) => {
    setTexto(text);
    if (text.trim().length < 2) {
      setSugerencias([]);
      return;
    }
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${text}`
      );
      setSugerencias(res.data);
    } catch (e) {
      console.warn('Error autocomplete', e);
    }
  };

  const seleccionar = async (loc) => {
    const ciudadID = `${loc.name}, ${loc.region}, ${loc.country}`;
    setTexto(ciudadID);
    setSugerencias([]);
    setCargando(true);

    try {
      const query = `${loc.name}, ${loc.region}, ${loc.country}`;
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(query)}`
      );
      const data = res.data;

      const yaExiste = climas.find(
        c => c.name === loc.name && c.country === loc.country && c.region === loc.region
      );

      if (yaExiste) {
        Alert.alert('Aviso', 'Ciudad ya agregada');
      } else {
        const nuevo = {
          id: data.location.name + data.location.localtime,
          name: loc.name,
          region: loc.region,
          country: loc.country,
          nombre: `${data.location.name}, ${data.location.region}, ${data.location.country}`,
          temperatura: data.current.temp_c,
          condicion: data.current.condition.text,
          icono: 'https:' + data.current.condition.icon
        };
        setClimas([...climas, nuevo]);
      }
    } catch (e) {
      Alert.alert('Error', 'No se pudo consultar el clima');
    } finally {
      setCargando(false);
    }
  };

  const limpiar = () => setClimas([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Clima con Autocompletado ☁️</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe ciudad..."
        placeholderTextColor="#888"
        value={texto}
        onChangeText={onChangeTexto}
      />

      {sugerencias.length > 0 && (
        <View style={styles.sugerencias}>
          {sugerencias.map((loc) => (
            <TouchableOpacity
              key={`${loc.name}-${loc.region}-${loc.country}`}
              onPress={() => seleccionar(loc)}
            >
              <Text style={styles.sugerenciaItem}>
                {loc.name}, {loc.region}, {loc.country}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {cargando && (
        <ActivityIndicator size="large" color="#007AFF" style={{ marginVertical: 10 }} />
      )}

      <View style={styles.botonLimpiar}>
        <Button title="Limpiar ciudades" onPress={limpiar} color="#FF4444" />
      </View>

      <ScrollView style={{ flex: 1 }}>
        {climas.map(c => (
          <View key={c.id} style={styles.card}>
            <Text style={styles.nombreCiudad}>{c.nombre}</Text>
            <View style={styles.cardContenido}>
              <Image source={{ uri: c.icono }} style={styles.icono} />
              <View>
                <Text style={styles.temperatura}>{c.temperatura}°C</Text>
                <Text style={styles.condicion}>{c.condicion}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Zona 3: Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0d0d0d'
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16
  },
  sugerencias: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    maxHeight: 150,
    marginTop: 5
  },
  sugerenciaItem: {
    padding: 10,
    color: '#ddd',
    borderBottomWidth: 1,
    borderColor: '#333'
  },
  botonLimpiar: {
    marginVertical: 10
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333'
  },
  nombreCiudad: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6
  },
  cardContenido: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icono: {
    width: 60,
    height: 60,
    marginRight: 15
  },
  temperatura: {
    color: '#fff',
    fontSize: 20
  },
  condicion: {
    color: '#ccc',
    fontSize: 16
  }
});
