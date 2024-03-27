import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: 'red',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  convertedValue: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'green',
  },
});

export { styles };
