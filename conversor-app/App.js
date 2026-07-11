import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from './src/components/Button';
import { styles } from './src/styles/app.styles';

export default function App() {
  return (

    <KeyboardAvoidingView style={styles.container} behavior={Platform.Os === 'ios' ? 'padding' : 'height'}>

      <ScrollView style = {styles.scrollView}>

        <View style = {styles.content}>
          <StatusBar style="light" />

          <View style = {styles.header}>
            <Text style = {styles.title}>Conversor de Moedas</Text>
            <Text style = {styles.subTitle}>
              Converta valores entre diferentes moedas
            </Text>

          </View>
          <View style = {styles.card}>
            <Text style = {styles.label}>De:</Text>
            <Button variant="primary"></Button>

          </View>

        </View>
      </ScrollView>

    </KeyboardAvoidingView>


  );
}
