# Monitor Utils

Biblioteca JavaScript para monitoramento básico de APIs e serviços web.

A biblioteca permite verificar a disponibilidade de uma ou mais APIs, gerar resumos dos resultados e criar mensagens de log padronizadas.

## Funcionalidades

A biblioteca permite:

* verificar a disponibilidade de uma API;
* verificar múltiplas APIs simultaneamente;
* obter um resumo dos resultados de monitoramento;
* gerar mensagens de log padronizadas;
* medir o tempo de resposta das APIs verificadas.

## Requisitos

* Node.js 18 ou superior;
* dependência Axios.

## Estrutura do Projeto

```text
monitor-utils/
├── src/
│   ├── checkApi.js
│   ├── checkMultipleApis.js
│   ├── getSummary.js
│   ├── createLogMessage.js
│   └── index.js
├── tests/
│   └── monitor-utils.test.js
├── .gitignore
├── package.json
└── README.md
```

## Instalação

Na pasta do projeto execute:

```bash
npm install
```

## Exemplo de Uso

```js
import {
  checkApi,
  createLogMessage
} from "./src/index.js";

const resultado = await checkApi(
  "https://github.com"
);

console.log(resultado);

console.log(
  createLogMessage("GitHub", resultado)
);
```

## Exemplo de Resultado

```js
{
  status: "online",
  codigoHttp: 200,
  tempoResposta: "145ms",
  verificadoEm: "2026-07-29T19:30:00.000Z"
}
```

```text
[2026-07-29T19:30:00.000Z] | GitHub | ONLINE | 200 | 145ms
```

## Executar os Testes

```bash
npm test
```

## Principais Funções

### checkApi(url)

Verifica a disponibilidade de uma API e retorna informações sobre status, código HTTP, tempo de resposta e data da verificação.

### checkMultipleApis(urls)

Verifica múltiplas APIs simultaneamente e retorna um array com os resultados.

### getSummary(resultados)

Gera um resumo contendo a quantidade total de APIs verificadas, quantas estão online e quantas estão offline.

### createLogMessage(nome, resultado)

Cria uma mensagem de log padronizada a partir dos dados retornados pela verificação.

## Autor

Miqueias Eduardo

DevOps — Turma 5
