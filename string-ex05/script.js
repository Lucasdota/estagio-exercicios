function inverter() {
	const resultado = document.getElementById("resultado");
	resultado.innerHTML = ``;
	const inputValue = document.getElementById("palavra").value;
	const palavra = inputValue.toLowerCase();
	const palavraArray = palavra.split("");
	for (var i = palavraArray.length - 1; i >= 0; i--) {
		if (i === palavraArray.length - 1) {
			resultado.innerHTML = palavraArray[i].toUpperCase();
		} else {
			resultado.innerHTML += palavraArray[i];
		}
	}
	
}