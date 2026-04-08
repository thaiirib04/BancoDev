function abrirConta() {
  let saldo = document.getElementById("saldo").value;

  if (saldo === "" || saldo < 0) {
    alert("Digite um saldo válido!");
    return;
  }

  // Salva no navegador
  localStorage.setItem("saldo", saldo);

  // Vai para o painel
  window.location.href = "painel.html";
}