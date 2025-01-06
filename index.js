//Pegar dados do player(Quantas ganhou - quantas perdeu)
function somar(vitoria, derrota){
    return vitoria - derrota
}
//Variaveis
let matchesPlayer = somar(13, 2);
let RankPlayer = ""
let Mensagem1 = "O Herói tem de saldo de "
let Mensagem2 = " está no nível de "

//Transformar isso Em um rank
if (matchesPlayer <= 10){
    RankPlayer = "Ferro"
} else if (matchesPlayer >= 11 && (matchesPlayer <= 20)){
    RankPlayer = "Bronze"
}else if (matchesPlayer >= 21 && (matchesPlayer <= 50)){
    RankPlayer = "Prata"
}else if (matchesPlayer >= 51 && (matchesPlayer <= 80)){
    RankPlayer = "Ouro"
}else if (matchesPlayer >= 81 && (matchesPlayer <= 90)){
    RankPlayer = "Diamante"
}else if (matchesPlayer >= 91 && (matchesPlayer <= 100)){
    RankPlayer = "Lendário"
}else if (matchesPlayer >= 101){
    RankPlayer = "Imortal"
}else{
    RankPlayer ="Não Foi possível achar seu rank"
}

//Criar Mensagem
console.log((Mensagem1 + matchesPlayer + Mensagem2 + RankPlayer)