import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState(0)

  function calculate() {
    const result = weight.replace(',','.') / ((height.replace(',','.') / 100) * (height.replace(',','.') / 100))
    setBmi(result)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Height as cm</Text>
      <TextInput style={styles.field} value={height} onChangeText={text => setHeight(text)}
        keyboardType='decimal-pad'/>
      <Text style={styles.field}>Weight</Text>
      <TextInput style={styles.field} value={weight} onChangeText={text => setWeight(text)}
        keyboardType='decimal-pad'/>  
      <Text style={styles.field}>BMI</Text>
      <Text style={styles.field}>{bmi.toFixed(1)}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:10,
  },
  field: {
    marginBottom:10
  }
});
