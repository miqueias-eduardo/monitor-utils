export function createLogMessage(nome, resultado) {
  return [
    `[${resultado.verificadoEm}]`,
    nome,
    resultado.status.toUpperCase(),
    resultado.codigoHttp ?? "N/A",
    resultado.tempoResposta
  ].join(" | ");
}
