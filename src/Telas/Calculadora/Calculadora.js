import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';

const Calculadora = () => {
    return (
        <View style={estilos.container}>
            <View style={
                {
                    alignSelf: 'center',
                    paddingBottom: 24,
                    paddingTop: 16
                }}>
                <Ionicons name="calculator" size={56} color='purple' />
            </View>

            <View style={estilos.caixaCampoTexto}>
                <Text>Primeiro número</Text>
                <TextInput style={estilos.campoTexto} />
            </View>
            <View style={estilos.caixaSelect}>
                <Text>Operador</Text>
                <RNPickerSelect onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Soma', value: 'Soma' },
                        { label: 'Multiplicação', value: 'Multiplicação' },
                        { label: 'Subtração', value: 'Subtração' },
                        { label: 'Divisão', value: 'Divisão' }
                    ]}
                />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>Segundo número</Text>
                <TextInput style={estilos.campoTexto} />
            </View>

            <View style={{
                paddingHorizontal: 8,
                paddingVertical: 16
            }}>
                <Pressable style={{
                    backgroundColor: 'purple',
                    borderWidth: 2,
                    height: 50,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: 'white' }}>Calcular</Text>
                </Pressable>
            </View>

            <Text style={{
                fontFamily: 'sans-serif-medium',
                fontWeight: 'bold',
                fontSize: 24,
                paddingTop: 16,
                paddingLeft: 8
            }} >Resultado: </Text>
        </View>
    )
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    caixaCampoTexto: {
        padding: 8
    },
    campoTexto: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 8

    },
    caixaSelect: {
        padding: 8
    }
});


export default Calculadora;