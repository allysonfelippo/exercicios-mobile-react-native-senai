import { StyleSheet, View, TextInput, Text } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

const ConvesorDeMedidas = () => {
    return (
        <View style={estilos.container}>
            <View style={{
                display: 'flex',
                alignSelf: 'center',
                paddingTop: 16
            }}>
                <Entypo name="ruler" size={54} color='green' />
            </View>

            <View style={estilos.caixaCampoTexto}>
                <Text>Centímetros</Text>
                <TextInput
                    style={estilos.campoTexto}
                    inputMode="numeric" />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>Metros</Text>
                <TextInput
                    style={estilos.campoTexto}
                    inputMode="numeric" />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>Quilómetros</Text>
                <TextInput
                    style={estilos.campoTexto}
                    inputMode="numeric" />
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1
    },
    caixaCampoTexto: {
        padding: 8,
        gap: 4
    },
    campoTexto: {
        height: 40,
        borderWidth: 1,
        padding: 8

    }
})

export default ConvesorDeMedidas;