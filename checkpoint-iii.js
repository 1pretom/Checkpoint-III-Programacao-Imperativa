

let aluno = {
    nome: "Carlos",
    quantidadeFaltas: 2,
    notas: [6.2, 9.6, 7.0],
    calcularMedia: function () {
        let soma = 0;
        for (let nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length;
    },
    faltas: function () {
        this.quantidadeFaltas++
    }
    
}

function AlunoNovo(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
}


const aluno1 = new AlunoNovo("Gustavo", 0, [10, 7, 8])
const aluno2 = new AlunoNovo("João", 3, [3.5, 5.0, 4.2])
const aluno3 = new AlunoNovo("Carlos", 4, [9, 9, 9])
const aluno4 = new AlunoNovo("Robert", 0, [4, 7, 10])







let curso = {
    nomeDoCurso: "curso",
    mediaAprov: 7,
    faltasMax: 3,
    listaDeAlunos: [],
    alunoNovo: function (aluno) {
        this.listaDeAlunos.push(aluno)
    },
    mediaAluno: function (notas) {
        let notasSoma = 0;
        let todasNotas = notas.notas.length
        for(let n of notas.notas){
            notasSoma = notasSoma + n
        }
        return notasSoma / todasNotas
    },
    aprovacao: function (media, faltas) {
        if (this.faltasMax > faltas) {
            if (this.mediaAprov <= media) {
                return true
            } else {
                return false
            }
        } else if (this.faltasMax == faltas) {
            if ((this.mediaAprov + ((this.mediaAprov / 100) * 10)) <= media) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }, listaDeAprovados: function(){
        let resultadoAlunos = []
        for(let a of this.listaDeAlunos){
            resultadoAlunos.push(this.aprovacao(this.mediaAluno(a), a.faltas))
        }
        return resultadoAlunos
    }
}

curso.alunoNovo(aluno1)
curso.alunoNovo(aluno2)
curso.alunoNovo(aluno3)
curso.alunoNovo(aluno4)
console.log(curso.listaDeAprovados())


console.log("Checkpoint-III Programação Imperativa, Feito por Washington Conceição")



/* Passo 1 (1,5 pontos)

Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

 Passo 2 (1,5 pontos)

Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. */

/* function Curso {
    console.log(this.aprov)
} */

/* Passo 3 (1,5 pontos)

Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1). */

/* Passo 4 (1,5 pontos)

    Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */









/* Passo 5 (2 pontos)

Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */






/* Passo 6 (2 pontos)

Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.  */