function calcularSaldo(vitoria, derrota) {
    const saldoVitoria = vitoria - derrota;
    let nivel;


    if (vitoria < 10) {
        nivel = "Ferro";
    } else if (vitoria >= 11 && vitoria <= 20) {
        nivel = "Bronze";
    } else if (vitoria >= 21 && vitoria <= 50) {
        nivel = "Prata";
    } else if (vitoria >= 51 && vitoria <= 80) {
        nivel = "Ouro";
    } else if (vitoria >= 81 && vitoria <= 90) {
        nivel = "Diamante";
    } else if (vitoria >= 91 && vitoria <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

 
    return `O Herói tem um saldo de ${saldoVitoria} e está no nível de ${nivel}`;
}


const vitoria = 999999
const derrota = 100000;
const resultado = calcularSaldo(vitoria, derrota);
console.log(resultado);