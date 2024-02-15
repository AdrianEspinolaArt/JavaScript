const precoGasolina = 6.66;
const precoEtanol = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 200;
const tipoCombustivel = `abluble`;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === `Etanol`) {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto);
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto);
}
