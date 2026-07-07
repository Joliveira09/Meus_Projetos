import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>

      <StatusBar style="light" />

      <View>
        <Text>Conversor de Moedas</Text>
        <Text>
          Converta valores entre diferentes moedas
        </Text>

      </View>
      <View>
        <Text>De:</Text>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
