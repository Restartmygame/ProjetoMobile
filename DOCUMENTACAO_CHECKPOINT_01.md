# Documentação do Checkpoint 01

## Identificação

- **Nome do projeto:** StudyFlow
- **Disciplina:** Programação Mobile
- **Professor:** Lenon Fachiano Silva
- **Autor:** Diego Santos Farias
- **Checkpoint:** 01

## Objetivo da aplicação

O StudyFlow é um aplicativo de organização acadêmica. Seu objetivo é ajudar o estudante a registrar atividades, trabalhos e provas, reunindo o título, a disciplina e a data de entrega de cada tarefa.

## Funcionalidades previstas para o projeto completo

- Cadastrar, editar e excluir tarefas;
- Marcar tarefas como concluídas;
- Filtrar tarefas pendentes e concluídas;
- Armazenar as informações no aparelho;
- Organizar as tarefas por disciplina e data.

## Funcionalidades implementadas no Checkpoint 01

- Tela inicial com resumo da quantidade de tarefas;
- Tela de tarefas com formulário de cadastro;
- Validação para impedir o cadastro de campos vazios;
- Listagem das tarefas cadastradas;
- Exclusão de tarefas;
- Tela com informações do projeto e próximas etapas;
- Menu para alternar entre as principais telas;
- Uso de componentes próprios, propriedades, estados, estilos e Flexbox.

Neste checkpoint, os dados ficam somente na memória do aplicativo. Por isso, as tarefas cadastradas são apagadas quando o aplicativo é fechado ou atualizado. O armazenamento será incluído em uma etapa posterior.

## Organização do código

- `components`: componentes reutilizados em mais de uma parte da interface;
- `models`: definição do tipo utilizado para representar uma tarefa;
- `screens`: telas principais do aplicativo;
- `App.tsx`: estados principais e ligação entre as telas;
- `index.ts`: inicialização do aplicativo no Expo.

## Dificuldades encontradas

As principais dificuldades foram organizar os estados para que a quantidade de tarefas aparecesse em mais de uma tela e separar a interface em componentes sem deixar o código complicado. Para resolver isso, a lista ficou no componente principal e foi enviada para as telas por propriedades.

## Repositório

O hyperlink do repositório poderá ser adicionado aqui depois da publicação no GitHub.
