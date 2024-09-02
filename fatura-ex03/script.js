let faturamentoDiario = [];

for (let i = 1; i <= 30; i++) {
  let dia = `${i}`;
  let valor = Math.floor(Math.random() * 2000); // valor aleatório entre 0 e 2000
  faturamentoDiario.push({ dia, valor });
}

// cria a table com os valores aleatórios do faturamentoDiario array
const tableBody = document.getElementById("faturamento-body");

faturamentoDiario.forEach((obj) => {
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
      <td>${obj.dia}º</td>
      <td>${obj.valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}</td>
    `;
  tableBody.appendChild(tableRow);
});

function checarMenorValor() {	
	let menorValor = faturamentoDiario.reduce((min, current) => {
    return current.valor < min.valor ? current : min;
  }, faturamentoDiario[0]);
	
	// injetar html com resposta do menor valor
	const divMenorValor = document.getElementById("checarMenorValor");
	divMenorValor.innerHTML = `O menor faturamento diário do mês foi no dia ${menorValor.dia}º, com o valor de R$ ${menorValor.valor}.`;
	divMenorValor.style.color = "green";	
}

function checarMaiorValor() {
  let maiorValor = faturamentoDiario.reduce((max, current) => {
    return current.valor > max.valor ? current : max;
  }, faturamentoDiario[0]);

  const divMaiorValor = document.getElementById("checarMaiorValor");
  divMaiorValor.innerHTML = `O maior faturamento diário do mês foi no dia ${maiorValor.dia}º, com o valor de R$ ${maiorValor.valor}.`;
	divMaiorValor.style.marginTop = "1rem";
	divMaiorValor.style.color = "green";	
}

function checarMedia() {
	let soma = 0;
	faturamentoDiario.forEach((obj) => {
		soma += obj.valor;
	});
	let media = parseInt(soma/faturamentoDiario.length);

	let numeroDeDias = 0;
	faturamentoDiario.forEach((obj) => {
		if (obj.valor > media) {
			numeroDeDias += 1;
		}
	})
	
	const divMedia = document.getElementById("checarMedia");
  divMedia.innerHTML = `A média do mês foi de: R$${media}. Número de dias com valor superior à média: ${numeroDeDias}.`;
  divMedia.style.marginTop = "1rem";
	divMedia.style.color = "green";	
}




