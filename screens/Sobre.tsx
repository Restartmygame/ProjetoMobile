import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Sobre() {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Sobre o projeto</Text>
            <Text style={styles.subtitulo}>Projeto Integrador - Checkpoint 01</Text>

            <View style={styles.card}>
                <Text style={styles.tituloCard}>StudyFlow</Text>
                <Text style={styles.texto}>
                    Aplicativo criado para ajudar estudantes a organizar atividades,
                    disciplinas e datas de entrega.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.tituloCard}>Próximas etapas</Text>
                <Text style={styles.item}>• Marcar tarefas como concluídas;</Text>
                <Text style={styles.item}>• Editar uma tarefa cadastrada;</Text>
                <Text style={styles.item}>• Salvar os dados no aparelho;</Text>
                <Text style={styles.item}>• Filtrar tarefas por situação.</Text>
            </View>

            <Text style={styles.rodape}>
                Programação Mobile • 2026
            </Text>
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
        fontSize: 28,
        fontWeight: 'bold',
    },

    subtitulo: {
        color: '#65708a',
        fontSize: 15,
        marginTop: 4,
        marginBottom: 22,
    },

    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#d8deeb',
        borderRadius: 10,
        padding: 18,
        marginBottom: 14,
    },

    tituloCard: {
        color: '#1d2a4a',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 9,
    },

    texto: {
        color: '#4d5872',
        fontSize: 16,
        lineHeight: 23,
    },

    item: {
        color: '#4d5872',
        fontSize: 15,
        marginBottom: 7,
    },

    rodape: {
        color: '#65708a',
        textAlign: 'center',
        marginTop: 10,
    },
});
