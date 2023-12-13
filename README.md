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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
