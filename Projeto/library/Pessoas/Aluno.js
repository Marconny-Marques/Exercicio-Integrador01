class Aluno extends Pessoa {
    #matricula

    getMatricula() {
        return this.#matricula;
    }

    setMatricula(matricula) {
        if(matricula >= 6) {
            this.#matricula = matricula;
            return true;
        }
          return false;
    }
}