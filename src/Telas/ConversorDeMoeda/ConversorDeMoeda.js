import { StyleSheet, View, TextInput, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ConversorDeMoeda = () => {
    
    return (
        <View style={estilos.container}>
            <View style={{
                display: 'flex',
                alignSelf: 'center',
                paddingTop: 16
            }}>
                <FontAwesome name="money" size={54} color='blue' />
            </View>

            <View style={estilos.caixaCampoTexto}>
                <Text>Valor Real</Text>
                <TextInput
                    style={estilos.campoTexto}
                    inputMode="numeric" />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>Valor Dolar</Text>
                <TextInput
                    style={estilos.campoTexto}
                    inputMode="numeric" />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>Valor Euro</Text>
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
});

export default ConversorDeMoeda;