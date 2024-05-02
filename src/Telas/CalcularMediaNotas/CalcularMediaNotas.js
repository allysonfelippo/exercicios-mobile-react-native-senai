import { View, Pressable, Text, TextInput, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const CalcularMediaNotas = () => {
    return (
        <View style={estilos.container}>
            <View style={
                {
                    alignSelf: 'center',
                    paddingBottom: 24,
                    paddingTop: 16
                }}>
                <Feather name='file-text' size={56} color='yellow' />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>AV1</Text>
                <TextInput
                    style={estilos.campoTexto}
                    inputMode="numeric"
                />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>AV2</Text>
                <TextInput
                    style={estilos.campoTexto}
                    inputMode="numeric" />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>Nota SA</Text>
                <TextInput
                    style={estilos.campoTexto}
                    inputMode="numeric" />
            </View>
            <View style={{
                paddingHorizontal: 8,
                paddingVertical: 16
            }}>
                <Pressable style={{
                    backgroundColor: 'yellow',
                    height: 50,
                    borderRadius: 12,
                    border: 'dotted',
                    borderColor: 'black',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingRight: 8
                }}>
                    <Text style={{
                        color: 'black'
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

export default CalcularMediaNotas;