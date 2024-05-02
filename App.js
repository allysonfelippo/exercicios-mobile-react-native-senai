import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import TELAS from './src/Comum/telas';
import Home from './src/Telas/Home/Home';
import ConsumoVeiculo from './src/Telas/MediaConsumoVeiculo/MediaConsumoVeiculo';
import ConversorDeMoeda from './src/Telas/ConversorDeMoeda/ConversorDeMoeda';
import ConvesorDeMedidas from './src/Telas/ConversorDeMedidas/ConversorDeMedidas';
import CalcularMediaNotas from './src/Telas/CalcularMediaNotas/CalcularMediaNotas';
import Calculadora from './src/Telas/Calculadora/Calculadora';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalcularRejusteSalarial from './src/Telas/ReajusteSalarial/ReajusteSalarial';
import CalculoIMC from './src/Telas/CalculoIMC/CalculoIMC';

// import FontAwesome from '@expo/vector-icons/FontAwesome'

const Stack = createStackNavigator();

// function Cabecalho(props) {
//   return (
//     <View style={{ backgroundColor: 'gray', height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
//       {props.navigation.canGoBack() && (
//         <FontAwesome 
//           name='arrow-circle-left'
//           size={32}
//           color='#fff'
//           onPress={() => props.navigation.goBack()}
//           style={{ position: 'absolute', left: 16 }}
//         />
//       )}
//     </View>
//   )
// }

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name={TELAS.TELA_INICIAL}
            component={Home}
            options={{ title: 'Tela Inicial' }}
          />
          <Stack.Screen
            name={TELAS.TELA_CONSUMO_VEICULO}
            component={ConsumoVeiculo}
            options={{ title: 'Média de consumo do veículo' }} />
          <Stack.Screen 
          name={TELAS.TELA_CONVERSOR_DE_MOEDA}
          component={ConversorDeMoeda}
          options={{ title : 'Conversor de Moedas'}} />
          <Stack.Screen 
          name={TELAS.TELA_CONVERSOR_DE_MEDIDAS} 
          component={ConvesorDeMedidas}
          options={{ title: 'Conversor de Medidas'}} />
          <Stack.Screen 
          name={TELAS.TELA_CALCULAR_MEDIA_NOTAS} 
          component={CalcularMediaNotas}
          options={{ title: 'Cálculo média de notas'}} />
          <Stack.Screen 
          name={TELAS.TELA_CALCULADORA} 
          component={Calculadora}
          options={{ title: 'Calculadora'}} />
          <Stack.Screen 
          name={TELAS.TELA_REAJUSTE_SALARIAL} 
          component={CalcularRejusteSalarial}
          options={{ title: 'Reajuste Salarial'}} />
          <Stack.Screen 
          name={TELAS.TELA_CALCULO_IMC} 
          component={CalculoIMC}
          options={{ title: 'Cálculo IMC'}} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
