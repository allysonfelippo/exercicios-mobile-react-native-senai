import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import React from "react";
import ESTILOS from "../../Comum/EstilosVariados/EstilosVariados";
import { homeEstilos } from "../Home/Home";

const Calculadora = () => {
    const [campoCalculo, setCampoCalculo] = React.useState();
    const [numeroUm, setNumeroUm] = React.useState();
    const [numeroDois, setNumeroDois] = React.useState();

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
                <TextInput
                    style={estilos.campoTexto}
                    value={numeroUm}
                    onValueChange={setNumeroUm}
                />
            </View>
            <View style={estilos.caixaSelect}>
                <Text>Operador</Text>
                <RNPickerSelect onValueChange={setCampoCalculo}
                    value={campoCalculo}
                    items={[
                        { label: 'Soma', value: '+' },
                        { label: 'Multiplicação', value: '*' },
                        { label: 'Subtração', value: '-' },
                        { label: 'Divisão', value: '/' }
                    ]}
                    placeholder={{ label: 'Selecione um tipo de operação', value: null }}
                />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>Segundo número</Text>
                <TextInput
                    style={estilos.campoTexto}
                    value={numeroDois}
                    onValueChange={setNumeroDois}
                />
            </View>

            <View style={{
                paddingHorizontal: 8,
                paddingVertical: 16
            }}>
                <Pressable style={homeEstilos.botao5}>
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

    },
    caixaSelect: {
        padding: 8
    }
});


export default Calculadora;