![](https://i.imgur.com/xG74tOh.png)

# Desafio | Front-end - Módulo 3

Após alguns meses trabalhando em projetos mais simples, você foi designado pelo seu Tech Lead para desenvolver uma aplicação que será apresentada a um cliente muito importante.

Para acessar o repositório da API que será consumida no front, acesse o seguinte [link](https://github.com/cubos-academy/dindin-api).

Para o seu desenvolvimento foi liberado layout que você pode encontrar no seguinte [ link](https://www.figma.com/file/65wDh5PJwzSy7IYOS4AWAj).

Para acessar o pdf contendo as informações de id e class, acesse o seguinte [link](https://drive.google.com/file/d/1J-ccfMnJrRFxc-vxsRtbN8SHRulwal7U/view?usp=sharing).


O sistema trata-se de uma aplicação para controles de finanças pessoais, e as funcionalidades são: 

#### Observação: Existem funcionalidades obrigatórias e opcionais!

- Cadastro de uma nova transação (**Obrigatório**)
- Edição de uma transação (**Obrigatório**)
- Exclusão de uma transação (**Obrigatório**)
- Listagem de transações (**Obrigatório**)
- Ordernação dos items conforme clicado no header da tabela nas seguintes colunas: Data, Dia da semana e Valor (**Obrigatório**)
- Na parte de resumo, o valor de entradas,saídas e saldo é referente ao que está listado na tabela (**Obrigatório**)
- A parte de filtros não é toda obrigatória, veja abaixo:
    - Dia da semana (**Opcional**)
    - Categoria (**Opcional**)
    - Valor (**Obrigatório**)


## Dicas importantes
Você receberá um *boilerplate* (um projeto com algumas configurações prontas).

Para começar a trabalhar você precisará executar alguns comandos, mas isso é somente na **primeira vez**.

1.  Realizar o fork do repositório
2.  Clonar para seu computador o fork feito
3.  Executar o `npm install` (para instalar as dependências)
4.  Executar o `npm start` (Para "rodar" o projeto! Esse passo deve ser executado todas as vezes que você for desenvolver a aplicação)

Quando você fizer todos esse procedimentos, o projeto em `React` irá executar e exibir no seu navegador uma aplicação básica. 

**Observação:** Caso não abra automaticamente o seu navegador, você pode acessar o projeto usando o endereço http://localhost:3000 .


## Detalhamento de Requisitos:

### Cadastro de uma nova transação:

Para cadastrar uma nova transação o usuário deverá clicar no botão `Adicionar Registro`, que ficará logo abaixo da área de `resumo`.

![](https://i.imgur.com/9DLHda6.png)

Ao clicar no referido botão, um modal com a opção de adicionar informações de uma transação deve ser exibido:

![](https://i.imgur.com/8r0yEa7.png)



Nesse modal todas as informações devem ser preenchidas, lembrando que você pode adicionar uma `entrada` ou `saída` de dinheiro, por padrão o valor deve ser o de `saída`, caso o usuário queira adicionar um valor de entrada ele precisará clicar no botão **Entrada**.

*Todos os campos são obrigatórios!

Após realizar as validações, após o usuário clicar no botão **confirmar**, uma nova transação deve ser inserida e a tabela de listagem deve ser atualizada.

É importante lembrar que quando adicionarmos uma nova transação, a área de resumo deve refletir o que a tabela está exibindo, refazendo assim todos os cálculos após a inserção de um novo registro.


### Editar uma transação:

Para editar uma transação o usuário deverá clicar no ícone do lápis, que se encontrará na tabela de listagem de transações:


![](https://i.imgur.com/crhos7x.png)

Esse ícone => ![](https://i.imgur.com/iFD6G3k.png)

Ao clicar no ícone de editar uma transação, o modal (que foi utilizado para adicionar uma nova transação) deverá ser aberto e as informações da transação "clicada", deverão ser preenchidas automaticamente, assim como a imagem abaixo:

![](https://i.imgur.com/EyRegfx.png)

*Novamente, todos os campos são obrigatórios!

Após validar os campos e o usuário clicar em confirmar, a transação deverá ser atualizada na `API` usando requisição do tipo `patch` ou `put` e a transação deverá ser atualizada na tabela de listagem de transações.

### Excluir uma transação:

Para excluir uma transação o usuário deverá clicar no ícone da lixeira, que se encontrará na tabela de listagem de transações:

![](https://i.imgur.com/crhos7x.png)

Esse ícone => ![](https://i.imgur.com/X6GB3kh.png)

Ao clicar nesse ícone, um "popup" irá aparecer para que o usuário confirme ou não a exclusão, fazendo com que não hajam exclusões por engano, veja abaixo como aparece o "popup":

![](https://i.imgur.com/Ohhk1lhm.png)



### Listagem de transações:

As transações registradas por meio dos endpoints da `api`, deverão ser listadas numa tabela que ficará ao centro da página, nessa tabela teremos 6 colunas, sendo:
1. **Data** da transação no formato `dd/mm/yyyy`
2. **Dia da semana**, nessa coluna deveremos utilizar apenas os primeiros nomes dos dias da semana, ao invéz de Segunda-Feira, deveremos utilizar o formato `Segunda`.
3. **Descrição**, nessa coluna listaremos as descrições informadas no cadastro de transação.
4. **Categoria**, aqui vamos mostrar as categorias inseridas em cada uma das transações cadastradas.
5. **Valor**, nessa coluna exibiremos os valores de cada uma das transações. Existem uma regra importante nas cores e nos sinais, para valores de **entrada de dinheiro (credit)** exibimos o número positivo e na cor <span style="color:#7B61FF"><b>roxa</b></span>, já para **Saídas de dinheiro (debit)** exibimos o número na cor <span style="color:#FA8C10"><b>laranja</b></span>.
7. Na última coluna nós não teremos um cabeçalho, nessa coluna ficarão os botões de editar e excluir.

![](https://i.imgur.com/jie9f1T.png)
