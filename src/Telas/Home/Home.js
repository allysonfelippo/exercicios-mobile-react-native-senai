import { Pressable, StyleSheet, Text, View } from "react-native";
import TELAS from "../../Comum/telas";
import FontAwesome from '@expo/vector-icons/FontAwesome'


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        gap: 16,
    },
    botao1: {
        backgroundColor: 'red',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    botao2: {
        backgroundColor: 'blue',
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        paddingLeft: 16

    },
    botao3: {
        backgroundColor: 'green',
        height: 50,
        borderTopLeftRadius: 50,
        borderBottomEndRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao4: {
        backgroundColor: 'yellow',
        height: 50,
        borderRadius: 12,
        border: 'dotted',
        borderColor: 'black',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 8

    },
    botao5: {
        backgroundColor: 'purple',
        borderWidth: 2,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    botao6: {
        backgroundColor: 'orange',
        height: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: 'center',
        paddingLeft: 16
    },
    botao7: {
        backgroundColor: 'grey',
        height: 50,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const Home = (props) => {
    return (
        <View style={estilos.container}>
            <View style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 8,
                    alignItems: 'center'
                }
            }>
                <Text style={{ fontSize: 32, paddingBottom: 8 }}>Bem Vindo!</Text>
                <FontAwesome name='smile-o' size={32} color={'#aef055'}/>
            </View>
            <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_CONSUMO_VEICULO)} style={estilos.botao1}>
                <Text style={{ color: '#fff' }}>Média Consumo Veículo</Text>
            </Pressable>
            <Pressable  onPress={() => props.navigation.navigate(TELAS.TELA_CONVERSOR_DE_MOEDA)} style={estilos.botao2}>
                <Text style={{ color: '#fff' }}>Conversor de moeda</Text>
            </Pressable>
            <Pressable  onPress={() => props.navigation.navigate(TELAS.TELA_CONVERSOR_DE_MEDIDAS)} style={estilos.botao3}>
                <Text style={{ color: '#fff' }}>Conversor de medidas</Text>
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_CALCULAR_MEDIA_NOTAS)} style={estilos.botao4}>
                <Text>Calcular média de notas</Text>
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_CALCULADORA)} style={estilos.botao5}>
                <Text style={{ color: '#fff' }}>Calculadora</Text>
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_REAJUSTE_SALARIAL)} style={estilos.botao6}>
                <Text>Calcular reajuste salarial</Text>
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_CALCULO_IMC)} style={estilos.botao7}>
                <Text style={{ color: '#fff' }}>Cálculo IMC</Text>
            </Pressable>
        </View>
    )
};

export default Home;