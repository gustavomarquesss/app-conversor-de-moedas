import { useState } from 'react';
import { Text, View } from 'react-native';
import StyledButton from '../../components/StyledButton/index.js';
import StyledInput from '../../components/StyledInput/index.js';
import StyledPicker from '../../components/StyledPicker/index.js';
import { styles } from './styles';

export default function FormularioConversaoMoedas() {
  const [valor, setValor] = useState('');
  const [moedaBase, setMoedaBase] = useState('Real');
  const [moedaDestino, setMoedaDestino] = useState('Dólar');
  const [valorConvertido, setValorConvertido] = useState(null);

  const taxasMoeda = {
    Real: { Dólar: 0.2, Euro: 0.18 },
    Dólar: { Real: 5, Euro: 0.9 },
    Euro: { Real: 5.56, Dólar: 1.12 },
  };

  const converterMoeda = () => {
    if (moedaBase === moedaDestino) {
      setValorConvertido(parseFloat(valor).toFixed(2));
    } else {
      const taxa = taxasMoeda[moedaBase][moedaDestino];
      const valorConvertido = parseFloat(valor) * taxa;
      setValorConvertido(valorConvertido.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas Dólar, Real e Euro</Text>
      <StyledInput label="Valor" onChangeText={(text) => setValor(text)} />
      <StyledPicker
        label="Moeda Base"
        selectedValue={moedaBase}
        onValueChange={(itemValue) => setMoedaBase(itemValue)}
        options={['Real', 'Dólar', 'Euro']}
      />
      <StyledPicker
        label="Moeda de Destino"
        selectedValue={moedaDestino}
        onValueChange={(itemValue) => setMoedaDestino(itemValue)}
        options={['Dólar', 'Real', 'Euro']}
      />
      <StyledButton buttonText="Converter" onPress={converterMoeda} />

      <Text style={styles.convertedValue}>Resultado: {valorConvertido}</Text>
    </View>
  );
}
