function exibirDados() {
	var nome = document.getElementById("nome").value;
	var idade = document.getElementById("idade").value;
	var curso = document.getElementById("curso").value;
	var ano = document.getElementById("ano").value;
	
	var dados = document.getElementById("dados");
	
	dados.innerHTML = "Nome: " + nome + "<br>" +
	                  "Idade: " + idade + "<br>" +
	                  "Curso: " + curso + "<br>" +
	                  "Ano: " + ano;
}




