import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const ConsumoVeiculo = () => {
    return (
        <View style={estilos.container}>
            <View style={
                {
                    alignSelf: 'center',
                    paddingBottom: 24,
                    paddingTop: 16
                }}>
                <FontAwesome5 name='car' size={56} color='red' />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>Distância(Km)</Text>
                <TextInput
                    label='Distância(Km)'
                    style={estilos.campoTexto}
                    inputMode="numeric"
                />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>Quantidade de combustível(litros)</Text>
                <TextInput
                    label='Quantidade de combustível(litros)'
                    style={estilos.campoTexto}
                    inputMode="numeric" />
            </View>
            <View style={{
                paddingHorizontal: 8,
                paddingVertical: 16
            }}>
                <Pressable style={{
                    backgroundColor: 'red',
                    height: 50,
                    borderRadius: 45,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: 'white'
                    }}>Calcular
                    </Text>
                </Pressable>
            </View>

            <Text style={{
                fontFamily: 'sans-serif-medium',
                fontWeight: 'bold',
                fontSize: 24,
                paddingTop: 16,
                paddingLeft: 8
            }}>Resultado: </Text>
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

    }
});

export default ConsumoVeiculo;