function multiplicarTresNumeros(a, b, c) {
  return a * b * c;
}

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(2, 3, 4);

console.log(mult);

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("Pode dirigir");
  } else {
    console.log("Não pode dirigir");
  }
}

console.log(podeDirigir(18, true));
podeDirigir(17, true);
podeDirigir(18, false);
podeDirigir(21, true);
