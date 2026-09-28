class Professor extends Pessoa {
    #disciplina

    getDisciplina() {
        return this.#disciplina;
    }

    setDisciplina(disciplina){
        if(disciplina != 'null') {
            return true;
        }
        return false;
    }

    setEmail() {
        if (email != '' && email.trim().endsWith('edu.br') && email.inclues('@')) {
        return super.setEmail(email);
    }
        return false;
    }
}