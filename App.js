import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, Contador] = useState(0);
  const buttonAction = () => {
    Contador(count + 1);
  };

  return (
    <View style={styles.container}>
      <Button title="Botão" onPress={buttonAction} />
      <Text>Número de vezes clicadas no botão: {count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

