import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Menu, { Tela } from './components/Menu';
import Inicio from './screens/Inicio';
import Tarefas from './screens/Tarefas';
import Sobre from './screens/Sobre';
import { Tarefa } from './models/Tarefa';

export default function App() {

	const[telaAtual, setTelaAtual] = useState<Tela>('inicio');

	// essas tarefas ficam só na memória por enquanto
	// lembrar de salvar no celular em outro checkpoint
	const[tarefas, setTarefas] = useState<Tarefa[]>([
		{
			id: 1,
			titulo: 'Entregar o Checkpoint 01',
			disciplina: 'Programação Mobile',
			data: '22/09/2026',
			status: 'Pendente'
		},
		{
			id: 2,
			titulo: 'Revisar conteúdo da aula',
			disciplina: 'Programação Mobile',
			data: '21/09/2026',
			status: 'Pendente'
		},
	]);

	function cadastrar(
		titulo: string,
		disciplina: string,
		data: string
	) {
		const novaTarefa: Tarefa = {
			id: Date.now(),
			titulo: titulo,
			disciplina: disciplina,
			data: data,
			status: 'Pendente'
		}

		setTarefas([
			...tarefas,
			novaTarefa
		]);
	}

	function excluir(id: number) {
		const novaLista = tarefas.filter(
			(tarefa) => tarefa.id !== id
		);

		setTarefas(novaLista);
	}

	return (
		<View style={styles.container}>
			<StatusBar style='dark' />

			<View style={styles.conteudo}>
				{
					telaAtual === 'inicio' && (
						<Inicio
							quantidadeTarefas={tarefas.length}
							onAbrirTarefas={() => setTelaAtual('tarefas')}
						/>
					)
				}

				{
					telaAtual === 'tarefas' && (
						<Tarefas
							tarefas={tarefas}
							onCadastrar={cadastrar}
							onDelete={excluir}
						/>
					)
				}

				{
					telaAtual === 'sobre' && (
						<Sobre />
					)
				}
			</View>

			{/* menu simples pra não instalar biblioteca de navegação agora */}
			<Menu
				telaAtual={telaAtual}
				onMudarTela={setTelaAtual}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f4f6fa',
	},

	conteudo: {
		flex: 1,
	},
});
