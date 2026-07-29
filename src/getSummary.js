export function getSummary(resultados) {
  const online = resultados.filter(
    r => r.status === "online"
  ).length;

  const offline = resultados.filter(
    r => r.status === "offline"
  ).length;

  return {
    total: resultados.length,
    online,
    offline
  };
}
