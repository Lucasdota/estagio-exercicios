// fake json
const json = {
  faturamentoDiario: [
    {
      dia: "Dia 1",
      valor: 1000,
    },
    {
      dia: "Dia 2",
      valor: 1200,
    },
    {
      dia: "Dia 3",
      valor: 1500,
    },
    {
      dia: "Dia 4",
      valor: 1800,
    },
    {
      dia: "Dia 5",
      valor: 2000,
    },
    {
      dia: "Dia 6",
      valor: 2200,
    },
    {
      dia: "Dia 7",
      valor: 2500,
    },
    {
      dia: "Dia 8",
      valor: 2800,
    },
    {
      dia: "Dia 9",
      valor: 3000,
    },
    {
      dia: "Dia 10",
      valor: 3200,
    },
    {
      dia: "Dia 11",
      valor: 3500,
    },
    {
      dia: "Dia 12",
      valor: 3800,
    },
    {
      dia: "Dia 13",
      valor: 4000,
    },
    {
      dia: "Dia 14",
      valor: 4200,
    },
    {
      dia: "Dia 15",
      valor: 4500,
    },
    {
      dia: "Dia 16",
      valor: 4800,
    },
    {
      dia: "Dia 17",
      valor: 5000,
    },
    {
      dia: "Dia 18",
      valor: 5200,
    },
    {
      dia: "Dia 19",
      valor: 5500,
    },
    {
      dia: "Dia 20",
      valor: 5800,
    },
    {
      dia: "Dia 21",
      valor: 6000,
    },
    {
      dia: "Dia 22",
      valor: 6200,
    },
    {
      dia: "Dia 23",
      valor: 6500,
    },
    {
      dia: "Dia 24",
      valor: 6800,
    },
    {
      dia: "Dia 25",
      valor: 7000,
    },
    {
      dia: "Dia 26",
      valor: 7200,
    },
    {
      dia: "Dia 27",
      valor: 7500,
    },
    {
      dia: "Dia 28",
      valor: 7800,
    },
    {
      dia: "Dia 29",
      valor: 8000,
    },
    {
      dia: "Dia 30",
      valor: 8200,
    },
  ],
};

const faturamentoSP = 67836.43,
  faturamentoRJ = 36678.66,
  faturamentoMG = 29229.88,
  faturamentoES = 27165.48,
  faturamentoOUTROS = 19849.53;

function checarPorcentagem() {
	let faturamentoTotal = 0;
	json.faturamentoDiario.forEach((obj) => {
		faturamentoTotal += obj.valor;
	})

	// sp
	const spRow = document.getElementById("porcentagem-sp");
  const spPorcentagem = (faturamentoSP / faturamentoTotal) * 100;
  spRow.innerHTML = `${spPorcentagem.toFixed(2)}`;

	// rj
	const rjRow = document.getElementById("porcentagem-rj");
	const rjPorcentagem = (faturamentoRJ / faturamentoTotal) * 100;
  rjRow.innerHTML = `${rjPorcentagem.toFixed(2)}`;

	// mg
	const mgRow = document.getElementById("porcentagem-mg");
  const mgPorcentagem = (faturamentoMG / faturamentoTotal) * 100;
  mgRow.innerHTML = `${mgPorcentagem.toFixed(2)}`;

	// es
	const esRow = document.getElementById("porcentagem-es");
	const esPorcentagem = (faturamentoES / faturamentoTotal) * 100;
  esRow.innerHTML = `${esPorcentagem.toFixed(2)}`;

	// outros
	const outrosRow = document.getElementById("porcentagem-outros");
	const outrosPorcentagem = (faturamentoOUTROS / faturamentoTotal) * 100;
  outrosRow.innerHTML = `${outrosPorcentagem.toFixed(2)}`;
}
