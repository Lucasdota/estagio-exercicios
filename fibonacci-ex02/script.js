function checarFibonacci() {
	console.log("test");
	let valor1 = 0, valor2 = 1; sequencia = 0; contem = false;
	const inputElem = document.getElementById("num");
	const inputValue = parseInt(inputElem.value);

	while (sequencia < inputValue) {
		sequencia = valor1 + valor2;
		if (sequencia === inputValue) {
			contem = true;
		};
		valor1 = valor2;
		valor2 = sequencia;
	}

	//injetar HTML com a resposta
	const divElem = document.getElementById("sequencia-fibonacci");
	if (contem) {
		divElem.innerHTML = `O número ${inputValue} pertence a sequência de Fibonacci.`;
		divElem.style.color = "rgb(87, 173, 130)";
	} else {
		divElem.innerHTML = `O número ${inputValue} não pertence a sequência de Fibonacci.`;
		divElem.style.color = "rgb(173, 87, 87)";
	}
}
