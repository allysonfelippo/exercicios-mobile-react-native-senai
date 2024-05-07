import { View, Pressable, Text, TextInput, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { homeEstilos } from '../Home/Home';
import ESTILOS from '../../Comum/EstilosVariados/EstilosVariados';

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
                <Pressable style={homeEstilos.botao4}>
                    <Text>Calcular</Text>
                </Pressable>
            </View>

            <Text style={ESTILOS.ESTILO_TEXTO_RESULTADO}>Resultado: </Text>
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