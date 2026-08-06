//Class Pai
class Animal {

    //Método da classe pai
    fazerSom() {
        return "Som genérico"
    }
}

//Classes filhas
class Cachorro extends Animal {

    //Polimorfismo
    fazerSom() {
        return "Au Au!"//Polimorfismo ocore aqui
    }

}

class Gato extends Animal {

    //Polimorfismo
    fazerSom() {
        return "Miau!"//Polimorfismo ocore aqui
    }
}

//Função polimorfismo
function comunicarAnimal(animal) {
    return animal.fazerSom()
}

//Criando objetos
const felix = new Cachorro()
const brutus = new Gato()

//Exibindo
document.body.innerHTML = `
    <h1>Polimorfismo</h1>

    <h2>Som do Felix:</h2>
    <p>${comunicarAnimal(felix)}</p>

    <p>______________________________________________</p>

    <h2>Som do Brutus:</h2>
    <p>${comunicarAnimal(brutus)}</p>
`