function calcular(cadena) {
  if (cadena === "") {
    return 0;
  }
  let numeros = cadena.split(",");
  let total = 0;
  numeros.forEach((numero) => {
    total += Number.parseInt(numero);
  });
  return total;
}

export default calcular;
