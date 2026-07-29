import test from "node:test";
import assert from "node:assert/strict";

import {
  checkApi,
  checkMultipleApis,
  getSummary,
  createLogMessage
} from "../src/index.js";

test("getSummary deve contar online e offline", () => {
  const resultados = [
    { status: "online" },
    { status: "online" },
    { status: "offline" }
  ];

  const resumo = getSummary(resultados);

  assert.equal(resumo.total, 3);
  assert.equal(resumo.online, 2);
  assert.equal(resumo.offline, 1);
});

test("createLogMessage deve retornar uma string", () => {
  const log = createLogMessage("API Teste", {
    status: "online",
    codigoHttp: 200,
    tempoResposta: "100ms",
    verificadoEm: "29/07/2026 16:00:00"
  });

  assert.equal(typeof log, "string");
});

test("checkApi deve retornar um objeto", async () => {
  const resultado = await checkApi(
    "https://jsonplaceholder.typicode.com/posts"
  );

  assert.equal(typeof resultado, "object");
});

test("checkMultipleApis deve retornar um array", async () => {
  const resultado = await checkMultipleApis([
    "https://jsonplaceholder.typicode.com/posts"
  ]);

  assert.ok(Array.isArray(resultado));
});
