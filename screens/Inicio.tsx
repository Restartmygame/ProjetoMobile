import { ScrollView, StyleSheet, Text, View } from "react-native";
import Botao from "../components/Botao";

type InicioProps = {
    quantidadeTarefas: number,
    onAbrirTarefas: () => void
}

export default function Inicio({
    quantidadeTarefas,
    onAbrirTarefas
}: InicioProps) {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>STUDYFLOW</Text>
            <Text style={styles.subtitulo}>Organizador de atividades acadêmicas</Text>

            <View style={styles.cardResumo}>
                <Text style={styles.tituloCard}>Resumo</Text>
                <Text style={styles.numero}>{ quantidadeTarefas }</Text>
                <Text style={styles.descricaoNumero}>
                    { quantidadeTarefas === 1 ? 'atividade cadastrada' : 'atividades cadastradas' }
                </Text>
            </View>

            <View style={styles.cardApresentacao}>
                <Text style={styles.tituloCard}>Sobre o aplicativo</Text>
                <Text style={styles.texto}>
                    O StudyFlow ajuda o aluno a anotar trabalhos, provas e outras
                    atividades da faculdade em um só lugar.
                </Text>

                <Botao
                    titulo='Ver minhas tarefas'
                    onPress={onAbrirTarefas}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingTop: 55,
    },

    titulo: {
        color: '#1d2a4a',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    subtitulo: {
        color: '#65708a',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 30,
    },

    cardResumo: {
        backgroundColor: '#3157d5',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        marginBottom: 16,
    },

    cardApresentacao: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#d8deeb',
        borderRadius: 12,
        padding: 20,
    },

    tituloCard: {
        color: '#1d2a4a',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    numero: {
        color: '#fff',
        fontSize: 42,
        fontWeight: 'bold',
    },

    descricaoNumero: {
        color: '#fff',
        fontSize: 15,
    },

    texto: {
        color: '#4d5872',
        fontSize: 16,
        lineHeight: 23,
    },
});
