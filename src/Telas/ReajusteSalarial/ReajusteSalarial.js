import { Text, TextInput, View, StyleSheet, Switch, Pressable } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from "react";

const CalcularRejusteSalarial = () => {
    const [campoAceitaTermos, setCampoAceitaTermos] = React.useState(false)

    return (
        <View style={estilos.container}>
            <View style={{
                display: 'flex',
                alignSelf: 'center',
                paddingTop: 16
            }}>
                <FontAwesome name="money" size={54} color='orange' />
            </View>

            <View style={estilos.caixaCampoTexto}>
                <Text>Salário atual</Text>
                <TextInput style={estilos.campoTexto} />
            </View>

            <View style={{ paddingHorizontal: 8, paddingVertical: 8 }}>
                <Text>Cargo de confiança</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={campoAceitaTermos ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={setCampoAceitaTermos}
                    value={campoAceitaTermos}
                />
            </View>

            <View style={{ paddingTop: 24}}>
                <Pressable style={{
                    backgroundColor: 'orange',
                    height: 50,
                    borderBottomLeftRadius: 50,
                    borderTopRightRadius: 50,
                    justifyContent: 'center',
                    paddingLeft: 16
                }}>
                    <Text>Calcular</Text>
                </Pressable>
            </View>

            <Text style={{
                fontFamily: 'sans-serif-medium',
                fontWeight: 'bold',
                fontSize: 24,
                paddingTop: 48,
                paddingLeft: 8
            }}>Resultado: </Text>
        </View>
    )
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

export default CalcularRejusteSalarial;