import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import TELAS from './src/Comum/telas';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Telas/Home/Home';
import ConsumoVeiculo from './src/Telas/MediaConsumoVeiculo/MediaConsumoVeiculo';

import FontAwesome from '@epo/vector-icons/FontAwesome'

const Stack = createStackNavigator();

function Cabecalho(props) {
  return (
    <View style={{ backgroundColor: 'gray', height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      {props.navigation.canGoBack() && (
        <FontAwesome 
          name='arrow-circle-left'
          size={32}
          color='#fff'
          onPress={() => props.navigation.goBack()}
          style={{ position: 'absolute', left: 16 }}
        />
      )}
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: Cabecalho }}>
          <Stack.Screen
            name={TELAS.TELA_INICIAL}
            component={Home}
            options={{ title: 'Tela Inicial' }}
          />
          <Stack.Screen
            name={TELAS.TELA_CONSUMO_VEICULO}
            component={ConsumoVeiculo}
            options={{ title: 'Média de consumo do veículo' }} />
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
