const form = document.getElementById("form");
const lista = document.getElementById("lista");

let alunos = [];  // Nosso array de objetos

// Função pra renderizar a lista
function renderLista() {
  lista.innerHTML = "";

  alunos.forEach((aluno, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${aluno.nome} — ${aluno.idade} anos`;

    const btn = document.createElement("button");
    btn.textContent = "Excluir";
    btn.classList.add("remover");
    btn.onclick = () => removerAluno(index);

    li.appendChild(btn);
    lista.appendChild(li);
  });
}

// Função pra remover
function removerAluno(indice) {
  alunos = alunos.filter((_, i) => i !== indice);
  renderLista();
}

// Função de cadastro
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const idade = document.getElementById("idade").value.trim();

  if (!nome || !idade) return;

  alunos.push({ nome, idade });

  form.reset();
  renderLista();
});

