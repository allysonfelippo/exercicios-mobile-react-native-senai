import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { homeEstilos } from "../Home/Home";
import ESTILOS from "../../Comum/EstilosVariados/EstilosVariados";
import React from "react";

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


const ConsumoVeiculo = () => {
    const [valorDistancia, setValorDistancia] = React.useState('');
    const [valorCombustivel, setValorCombustivel] = React.useState('');
    const [resultado, setCampoResultado] = React.useState();

    const CalcularMedia = () => {
        if (valorDistancia && valorCombustivel) {
            setCampoResultado(valorDistancia / valorCombustivel);
        }
        else {
            alert('Campos obrigatórios faltam serem preenchidos.');
        }
    }

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
                    value={valorDistancia}
                    onChangeText={setValorDistancia}
                    style={estilos.campoTexto}
                    inputMode="numeric"
                />
            </View>
            <View style={estilos.caixaCampoTexto}>
                <Text>Quantidade de combustível(litros)</Text>
                <TextInput
                    label='Quantidade de combustível(litros)'
                    value={valorCombustivel}
                    onChangeText={setValorCombustivel}
                    style={estilos.campoTexto}
                    inputMode="numeric" />
            </View>
            <View style={{ paddingHorizontal: 8, paddingVertical: 16 }}>
                <Pressable onPress={CalcularMedia} style={homeEstilos.botao1}>
                    <Text style={{ color: 'white' }}>Calcular</Text>
                </Pressable>
            </View>

            <Text style={ESTILOS.ESTILO_TEXTO_RESULTADO} onChangeText={setCampoResultado}>Resultado: {resultado} </Text>
        </View>
    )
};


export default ConsumoVeiculo;