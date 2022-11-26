var letra = '';
var frase = '';
let repetido = 0;

frase = prompt('Digite uma frase:');
letra = prompt('Digite uma letra para verificar quantas vezes ela se repete:');

const vezesDeLetra = (frase, letra) => {
    var resultado = [];

    for (let i = 0; i < frase.length; i++) {
        resultado.push(frase[i]);
    }
    for (let i = 0; i < resultado.length; i++) {
        const element = resultado[i];

        if (element == letra) {
            repetido = repetido + 1;
        }
    }
    return `Essa foi a frase digitada: ${frase} A letra se repetiu ${repetido}`;
}

console.log(vezesDeLetra(frase, letra));