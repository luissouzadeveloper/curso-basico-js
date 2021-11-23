// Vetores ou Arrays

// Vetores

let vet = [1, 'Raimundo', true, 3, ['array2', 5]]; // O array pode guardar vários tipos de dados
console.log(vet[1])

// Manipulação de vetores
// Foreach = percorre o array mostrando seu índice.
/*vet.forEach(
    function(item, index){
        console.log(item, index)
    }
)*/

// push() = Adiciona um elemento no último índice do array
/*vet.push('novo')
console.log(vet)*/

// pop() = Retira o último índice do array
/*vet.pop()
console.log(vet)*/

// shift() = Retira o primeiro elemento do vetor
/*vet.shift()
console.log(vet)*/

// unshift() = Adiciona um elemento no início do vetor
/*vet.unshift('new')
console.log(vet)*/

// indexOf() = Retorna um índice dentro do array
/*vet.indexOf(true)
console.log(vet)*/

let obj = {
    string: 'string', 
    number: 1, 
    bool: true, 
    vet:['vetor'], 
    ob:{oi: 'Objeto interno'}
}

console.log(obj.vet)