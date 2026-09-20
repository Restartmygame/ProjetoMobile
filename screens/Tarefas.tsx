import { useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import Botao from "../components/Botao";
import CardTarefa from "../components/CardTarefa";
import { Tarefa } from "../models/Tarefa";

type TarefasProps = {
    tarefas: Tarefa[],
    onCadastrar: (titulo: string, disciplina: string, data: string) => void,
    onDelete: (id: number) => void
}

export default function Tarefas({
    tarefas,
    onCadastrar,
    onDelete
}: TarefasProps) {

    const[titulo, setTitulo] = useState('');
    const[disciplina, setDisciplina] = useState('');
    const[data, setData] = useState('');
    const[erro, setErro] = useState('');

    function cadastrar() {
        // aqui eu confiro os campos antes de mandar a tarefa para o App
        if (titulo.trim() === '' ||
            disciplina.trim() === '' ||
            data.trim() === ''
        ) {
            setErro('Preencha todos os campos!');
            return;
        }

        onCadastrar(titulo, disciplina, data);

        setTitulo('');
        setDisciplina('');
        setData('');
        setErro('');
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id.toString()}
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={styles.conteudo}

                ListHeaderComponent={
                    <View>
                        <Text style={styles.tituloTela}>Minhas tarefas</Text>
                        <Text style={styles.subtituloTela}>
                            Cadastre as próximas atividades da faculdade.
                        </Text>

                        {/* aqui começa o formulário de cadastro */}
                        <View style={styles.formulario}>
                            <Text style={styles.tituloFormulario}>Nova tarefa</Text>

                            <Text style={styles.label}>Título</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex.: Entregar trabalho'
                                value={titulo}
                                onChangeText={setTitulo}
                            />

                            <Text style={styles.label}>Disciplina</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex.: Programação Mobile'
                                value={disciplina}
                                onChangeText={setDisciplina}
                            />

                            <Text style={styles.label}>Data de entrega</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Ex.: 22/09/2026'
                                value={data}
                                onChangeText={setData}
                            />

                            {
                                erro !== '' && (
                                    <Text style={styles.erro}>{ erro }</Text>
                                )
                            }

                            <Botao
                                titulo='Adicionar tarefa'
                                onPress={cadastrar}
                            />
                        </View>

                        <View style={styles.cabecalhoLista}>
                            <Text style={styles.tituloLista}>Lista</Text>
                            <Text style={styles.quantidade}>
                                {
                                    tarefas.length > 0 ?
                                    `${ tarefas.length } tarefas` :
                                    'Nenhuma tarefa'
                                }
                            </Text>
                        </View>
                    </View>
                }

                renderItem={({item}) => (
                    <CardTarefa
                        id={item.id}
                        titulo={item.titulo}
                        disciplina={item.disciplina}
                        data={item.data}
                        status={item.status}
                        onDelete={onDelete}
                    />
                )}

                ListEmptyComponent={
                    <View style={styles.listaVazia}>
                        <Text style={styles.textoListaVazia}>
                            Nenhuma tarefa cadastrada
                        </Text>
                        <Text style={styles.textoAjuda}>
                            Use o formulário acima para adicionar uma tarefa.
                        </Text>
                    </View>
                }
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    conteudo: {
        padding: 24,
        paddingTop: 45,
        paddingBottom: 30,
    },

    tituloTela: {
        color: '#1d2a4a',
        fontSize: 28,
        fontWeight: 'bold',
    },

    subtituloTela: {
        color: '#65708a',
        fontSize: 15,
        marginTop: 4,
        marginBottom: 20,
    },

    formulario: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#d8deeb',
        borderRadius: 10,
        padding: 16,
    },

    tituloFormulario: {
        color: '#1d2a4a',
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    label: {
        color: '#263557',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },

    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#b9c2d6',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },

    erro: {
        color: '#c53c3c',
        marginTop: 10,
        fontWeight: 'bold',
    },

    cabecalhoLista: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 28,
        marginBottom: 12,
    },

    tituloLista: {
        color: '#1d2a4a',
        fontSize: 22,
        fontWeight: 'bold',
    },

    quantidade: {
        color: '#65708a',
        fontWeight: 'bold',
    },

    listaVazia: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#d8deeb',
        borderRadius: 8,
        padding: 20,
        alignItems: 'center',
    },

    textoListaVazia: {
        color: '#1d2a4a',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    textoAjuda: {
        color: '#65708a',
        textAlign: 'center',
    },
});
