import { StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const ConsumoVeiculo = () => {
    return (
        <View style={estilos.container}>
            <View style={{alignSelf: 'center'}}>
            <FontAwesome5 name='car' size={64} color='red' />
            </View>
            <TextInput style={estilos.campoTexto} />
            <TextInput style={estilos.campoTexto} />
        </View>
    )
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    campoTexto: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})

export default ConsumoVeiculo;