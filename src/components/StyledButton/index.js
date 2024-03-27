import { Pressable, Text } from 'react-native';
import { styles } from './styles';

export default function StyledButton({ onPress, buttonText }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{buttonText}</Text>
    </Pressable>
  );
}
