import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles';

export default function StyledPicker({
  label,
  selectedValue,
  onValueChange,
  options,
}) {
  const pickerItems = options.map((option) => (
    <Picker.Item key={option} value={option} label={option} />
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}>
        {pickerItems}
      </Picker>
    </View>
  );
}