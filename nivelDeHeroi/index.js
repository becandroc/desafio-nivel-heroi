//Making prompt available in VS Code
const prompt = require('prompt-sync')();

//Ask for name
let heroName = prompt("Digite o nome do seu heroi: ")

let xp = 1
let rank = "None"

//Turn name into XP
for (let i = 0; i < heroName.length; i++) {

    let character = heroName[i].toLowerCase()
    let number = 0

    switch (character) {
        case 'a' : 
            number = 1
            break;
        case 'b' :
            number = 2
            break;
        case 'c' : 
            number = 3
            break;
        case 'd' : 
            number = 4
            break;
        case 'e' : 
            number = 5
            break;
        case 'f' : 
            number = 6
            break;
        case 'g' : 
            number = 7
            break;
        case 'h' : 
            number = 8
            break;
        case 'i' : 
            number = 9
            break;
        case 'j' : 
            number = 10
            break;
        case 'k' : 
            number = 11
            break;
        case 'l' : 
            number = 12
            break;
        case 'm' : 
            number = 13
            break;
        case 'n' : 
            number = 14
            break;
        case 'o' : 
            number = 15
            break;
        case 'p' : 
            number = 16
            break;
        case 'q' : 
            number = 17
            break;
        case 'r' : 
            number = 18
            break;
        case 's' : 
            number = 19
            break;
        case 't' : 
            number = 20
            break;
        case 'u' : 
            number = 21
            break;
        case 'v' : 
            number = 22
            break;
        case 'w' : 
            number = 23
            break;
        case 'x' : 
            number = 24
            break;
        case 'y' : 
            number = 25
            break;
        case 'z' : 
            number = 26
            break;
        default : 
            number = 1;
    }

    xp = xp * number
}

//Rank based on XP level
switch (true) {
    case (xp <= 1000) :
        rank = "Ferro"
        break;
    case (xp <= 2000) :
        rank = "Bronze"
        break;
    case (xp <= 5000) :
        rank = "Prata"
        break;
    case (xp <= 7000) :
        rank = "Ouro"
        break;
    case (xp <= 8000) :
        rank = "Platina"
        break;
    case (xp <= 9000) :
        rank = "Ascendente"
        break;
    case (xp <= 10000) :
        rank = "Imortal"
        break;
    case (xp > 10000) :
        rank = "Radiante"
        break;
    default : 
        console.log("Alguma coisa deu errado, tente novamente...")
        break;
}

//Show rank
console.log("O Herói de nome " + heroName + " está no nível de " + rank + "!")