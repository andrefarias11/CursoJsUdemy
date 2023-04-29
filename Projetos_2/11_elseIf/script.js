let nome = "andre";

if (nome != undefined && nome == "joao") {
  console.log("nome nao definido");
} else if (nome == "andre" && nome.length === 5) {
  console.log("nome é andre");
} else if (nome == "andre" || nome.length < 5) {
  console.log("não é o andre");
}
