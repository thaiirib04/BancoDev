// Recupera saldo
let saldo = parseFloat(localStorage.getItem("saldo")) || 0;

// Recupera histórico ou cria vazio
let historico = JSON.parse(localStorage.getItem("historico")) || [];

function atualizarTela() {
  document.getElementById("saldo").innerText = "R$ " + saldo.toFixed(2).replace(".", ",");

  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  historico.slice().reverse().forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    lista.appendChild(li);
  });
}

function depositar() {
  let valor = parseFloat(document.getElementById("valor").value);

  if (valor > 0) {
    saldo += valor;

    historico.push("💰 Depósito: R$ " + valor.toFixed(2));

    salvar();
  } else {
    alert("Digite um valor válido!");
  }
}

function pagarPix() {
  let valor = parseFloat(document.getElementById("valor").value);

  if (valor > 0 && valor <= saldo) {
    saldo -= valor;

    historico.push("📤 PIX enviado: R$ " + valor.toFixed(2));

    salvar();
  } else {
    alert("Saldo insuficiente ou valor inválido!");
  }
}

function salvar() {
  localStorage.setItem("saldo", saldo);
  localStorage.setItem("historico", JSON.stringify(historico));

  document.getElementById("valor").value = "";
  atualizarTela();
}

// Inicializa
atualizarTela();