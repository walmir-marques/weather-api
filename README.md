###### EXPLICANDO COMO FOI FEITO O PROJETO

## APP.js

Esse componente principal da aplicaçao é responsável por algumas lógicas e receber os componentes que serao mostrados na tela.

- Primeiramente foi criado uma variável com a key necessária para fazer uma requisiçao na API.
- Foram criadas duas states, uma para armazenar os dados recebidos da api e outra para armazenar a cidade que será pesquisada pelo usuário.
- Foi feita uma funçao async chamada getWeather, que recebe a cidade pesquisada como parametro, essa funcao faz um fetch para buscar os dados
  da api e armazenar no state WeatherDetails.
- A funcao é chamada dentro de um useEffect que é monitorada pelo state searchCity, assim toda vez que o valor da variável mudar, o valor atualizado sera buscado na api.
- Foi criada uma funcao simples para setar o valor de searchCity.
- Após isso uma condiçao que verifica se há algum valor carregado da API, caso nao, exibe uma mensagem de carregando para o usuário.
- Após isso foi feita a chamada dos componentes de Header, Componente de WeatherSearch (Possui o input responsável pela consulta e recebe a funcao de setar o valor da cidade como prop), um H2 com o nome da cidade sendo pesquisada e apos isso é feito um map no state que contem os dados da api, mas antes de fazer o map, é executada uma funcao slice para pegar somente 6 informacoes.

## Header.js

- Contem somente uma tag header com um titulo dentro.

## WeatherSearch.js

- Recebe uma funcao para setar a cidade como prop.
- Cria um state para armazenar o nome da cidade
- Foi criada uma funcao para atualizar essa variavel utilizando o atributo onChange do input.
- Criada uma funcao que passa para a funcao recebida por prop o valor da cidade.
- Essa funcao é chamada dentro de um effect e monitorada pelo valor da variavel
- retorna para a tela uma label e um input.

## CardWeather.js

- O ultimo componente da aplicacao, responsavel por gerar os cards que serao exibidos na tela.
- Primeiramente pega os dados da api que sao enviaos por prop.
- Faz um calculo matematico para transformar os valores da temperatura maxima e minima de farenhit para celcius.
- Depois monta um card, exibindo todos os dados necessarios, como a Data, temperatura maxima e minima, probabilidade de chuva, quantidade.
- Obs (O incone informado no card é mudado de acordo com o dado que é recebido pela api.)

## O que aprendi nesse projeto?

Apesar de ser um projeto bem simples, foi desafiador pois estou no início dos meus estudos em react.
Para mim a parte mais dificil foi manipular a API, pois foi o meu primeiro projeto manipulando uma api externa.
Além de como manipular uma API, o projeto me ajudou a aprimorar e estudar conceitos como criaçao de componentes, props, state, useEffect e estilizaçao, que no projeto foi usado tailwindcss


