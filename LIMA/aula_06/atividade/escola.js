const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const matricula = document.querySelector("#matricula")

salvar.addEventListener("click", function(){
    const linha = document.createElement('tr')
    const colunaNome = document.createElement('td')
    const colunaEmail = document.createElement('td')
    const colunaMatricula = document.createElement('td')

    colunaNome.textContent = nome.value
    colunaEmail.textContent = email.value
    colunaMatricula.textContent = matricula.value

    linha.append(colunaNome)
    linha.append(colunaEmail)
    linha.append(colunaMatricula)

    tabela.append(linha)
})
const nomeProfessor = document.querySelector("#nomeProfessor")
const emailProfessor = document.querySelector("#emailProfessor")
const disciplina = document.querySelector("#disciplina")

salvarProfessor.addEventListener("click", function(){

    const linha = document.createElement("tr")
    const colunaNome = document.createElement("td")
    const colunaEmail = document.createElement("td")
    const colunaDisciplina = document.createElement("td")

    colunaNome.textContent = nomeProfessor.value
    colunaEmail.textContent = emailProfessor.value
    colunaDisciplina.textContent = disciplina.value

    linha.append(colunaNome)
    linha.append(colunaEmail)
    linha.append(colunaDisciplina)

    tabelaProfessor.append(linha)

});