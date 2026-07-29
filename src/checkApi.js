import axios from "axios";

export async function checkApi(url) {
  const inicio = Date.now();

  try {
    const response = await axios.get(url);

    const tempoResposta = Date.now() - inicio;

    return {
      status: "online",
      codigoHttp: response.status,
      tempoResposta: `${tempoResposta}ms`,
      verificadoEm: new Date().toLocaleString("pt-BR", {
  dateStyle: "short",
  timeStyle: "medium",
  timeZone: "America/Sao_Paulo"
}),
    };
  } catch (error) {
    const tempoResposta = Date.now() - inicio;

    return {
      status: "offline",
      tempoResposta: `${tempoResposta}ms`,
      motivo: error.message,
      verificadoEm: new Date().toLocaleString("pt-BR", {
  dateStyle: "short",
  timeStyle: "medium",
  timeZone: "America/Sao_Paulo"
}),
    };
  }
}
