// components/WeatherCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherCard = ({ clima }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{clima.nombre}</Text>
      <View style={styles.info}>
        <Image
          style={styles.icono}
          source={{ uri: `https://openweathermap.org/img/wn/${clima.icono}@2x.png` }}
        />
        <View>
          <Text style={styles.temperatura}>{clima.temperatura}°C</Text>
          <Text style={styles.condicion}>{clima.condicion}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2
  },
  nombre: { fontSize: 18, fontWeight: 'bold' },
  info: { flexDirection: 'row', alignItems: 'center' },
  icono: { width: 60, height: 60, marginRight: 15 },
  temperatura: { fontSize: 20, fontWeight: '600' },
  condicion: { fontSize: 16, color: '#555' }
});

export default WeatherCard;
