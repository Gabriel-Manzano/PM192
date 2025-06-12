//Zona 1 Importaciones

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


const Texto=(props)=>{
  const {children}=props
  return(
    <Text> {children} </Text>
  )
}

//Zona 2: Main

export default function App() {
  return (

    <View style={styles.container}>
      
      <Texto> Come </Texto>
      <Texto> Tierra </Texto>
      <Texto> Polo </Texto>
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
