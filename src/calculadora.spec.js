import sumar from "./calculadora.js";

describe("Calculadora de cadenas", () => {
  it("retorna 0 para una cadena vacia", () => {
    expect(sumar("")).toEqual(0);
  });

  it("retorna el numero para una cadena de un solo numero", () => {
    expect(sumar("1")).toEqual(1);
  });

  it("retorna la suma para una cadena de dos numeros", () => {
    expect(sumar("1,2")).toEqual(3);
  });
});
