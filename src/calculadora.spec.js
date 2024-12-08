//import sumar from "./sumador.js";

describe("Calculadora de cadenas", () => {
  it("retorna 0 para una cadena vacia", () => {
    expect(sumar("")).toEqual(0);
  });

  it("retorna el numero para una cadena de un solo numero", () => {
    expect(sumar("1")).toEqual(1);
  });
});

function sumar(cadena) {
  if (cadena === "") {
    return 0;
  }
  return Number.parseInt(cadena);
}
