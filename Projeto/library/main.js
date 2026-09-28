const p1 = new Pessoa("Fulano", "fulano@email.com");
const p2 = new Pessoa("Ciclano", "ciclano@email.com");

const a1 = new Aluno("Juninho", "jasdvshvh@edu.br", 123456);
const a2 = new Aluno("Ciclano Jr", "ciclano@gmail.com", 654321);

const prof1 = new Professor("Prof. Fulano", "fhdfjkdasfguew@edu.br", "Matemática");
const prof2 = new Professor("Prof. Beltrano", "asdhfidvfs@gmail.com", "História");

p1.setNome("fulano");
prof1.setNome("fulano");
prof1.setEmail("fhdfjkdasfguew@edu.br");
prof2.setNome("beltrano")
prof2.setEmail("asdhfidvfs@gmail.com");
a1.setNome("juninho");
a1.setEmail("jasdvshvh@edu.br");
a2.setNome("ciclano");
a2.setEmail("ciclano@gmail.com");const p1 = new Pessoa("Fulano", "fulano@email.com");
const p2 = new Pessoa("Ciclano", "ciclano@email.com");

// 2. Instanciando Alunos (Ex: Nome, Email, Matrícula)
const a1 = new Aluno("Juninho", "jasdvshvh@edu.br", 123456);
const a2 = new Aluno("Ciclano Jr", "ciclano@gmail.com", 654321);

// 3. Instanciando Professores (Ex: Nome, Email, Disciplina)
const prof1 = new Professor("Prof. Fulano", "fhdfjkdasfguew@edu.br", "Matemática");
const prof2 = new Professor("Prof. Beltrano", "asdhfidvfs@gmail.com", "História");


const cadastros = [p1, p2, a1, a2, prof1, prof2];

function mostrarDados(objeto) {
    console.log(`----------------------------------------`);
    console.log(`Tipo: ${objeto.constructor.name}`);
    console.log(`Nome: ${objeto.getNome() || 'Não informado'}`);
    console.log(`Email: ${objeto.getEmail ? objeto.getEmail() : 'N/A'}`);

    if (objeto.getMatricula) {
        console.log(`Matrícula: ${objeto.getMatricula() || 'N/A'}`);
    }

    if (objeto.getDisciplina) {
        console.log(`Disciplina: ${objeto.getDisciplina() || 'N/A'}`);
    }
}

console.log("=== RELATÓRIO FINAL DE CADASTROS ===");
cadastros.forEach(item => mostrarDados(item));