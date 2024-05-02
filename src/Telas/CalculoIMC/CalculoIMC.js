import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CalculoIMC = () => {
    return (
        <View>
            <View style={
                {
                    alignSelf: 'center',
                    paddingBottom: 24,
                    paddingTop: 16
                }}>
                <MaterialIcons name="balance" size={56} color="grey" />
            </View>

            <View style={estilos.caixaCampoTexto}>
                <Text>Altura(m)</Text>
                <TextInput
                    style={estilos.campoTexto}
                    inputMode="numeric"
                />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>Peso(Kg)</Text>
                <TextInput
                    style={estilos.campoTexto}
                    inputMode="numeric"
                />
            </View>

            <View style={{
                paddingHorizontal: 8,
                paddingVertical: 16
            }}>
                <Pressable style={{
                    backgroundColor: 'grey',
                    height: 50,
                    borderTopLeftRadius: 50,
                    borderBottomRightRadius: 50,
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
            }}>Resultado: </Text>
        </View>
    );
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

export default CalculoIMC;