import { Pressable, StyleSheet, Text, View } from "react-native";

type CardTarefaProps = {
    id: number,
    titulo: string,
    disciplina: string,
    data: string,
    status: string,
    onDelete: (id: number) => void
}

export default function CardTarefa({
    id,
    titulo,
    disciplina,
    data,
    status,
    onDelete
}: CardTarefaProps) {

    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>{ titulo }</Text>
            <Text style={styles.informacao}>Disciplina: { disciplina }</Text>
            <Text style={styles.informacao}>Entrega: { data }</Text>

            <View style={styles.rodape}>
                <Text style={styles.status}>Status: { status }</Text>

                <Pressable
                    style={styles.botaoExcluir}
                    onPress={() => onDelete(id)}
                >
                    <Text style={styles.textoExcluir}>Excluir</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#d8deeb',
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
    },

    titulo: {
        color: '#1d2a4a',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    informacao: {
        color: '#4d5872',
        fontSize: 15,
        marginBottom: 4,
    },

    status: {
        color: '#9b6200',
        fontSize: 14,
        fontWeight: 'bold',
    },

    botaoExcluir: {
        borderWidth: 1,
        borderColor: '#c53c3c',
        borderRadius: 6,
        paddingVertical: 7,
        paddingHorizontal: 12,
    },

    textoExcluir: {
        color: '#c53c3c',
        fontWeight: 'bold',
    },

    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },
});
