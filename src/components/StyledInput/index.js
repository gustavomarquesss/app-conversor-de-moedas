import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export default function StyledInput({ label, onChangeText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#999"
        placeholder="Insira aqui"
        onChangeText={onChangeText}
      />
    </View>
  );
}
