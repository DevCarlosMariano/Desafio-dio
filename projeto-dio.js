let nomeHeroi = "Carlão Detona Tudo";
let xp = 10000;
let nivelHeroi;

if (xp < 1000) {
    nivelHeroi = "Ferro";
} else if (xp <= 2000) {
    nivelHeroi = "Bronze";
} else if (xp <= 5000) {
    nivelHeroi = "Prata";
} else if (xp <= 7000) {
    nivelHeroi = "Ouro";
} else if (xp <= 8000) {
    nivelHeroi = "Platina";
} else if (xp <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xp <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Invencível";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
