import { Pressable, StyleSheet, Text, View } from "react-native";

const estilos = StyleSheet.create({
    botao1: {
        backgroundColor: 'red',
        height: 40,
    }
})

const Home = () => {
    return (
        <View>
            <h1>Bem Vindo</h1>
            <Pressable style={estilos.botao1}>
                <Text>Média Consumo Veículo</Text>
            </Pressable>
        </View>
    )
};

export default Home;