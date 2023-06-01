const data = new Date();
const h1 = document.querySelector('h1')

function addZero (num) {
    return num < 10 ? `0${num}` : num
}
function pegadatatoda(Date){
    const dia = addZero(data.getDate());
    const mes = addZero(data.getMonth());
    const ano = addZero(data.getFullYear());
    const hora = addZero(data.getHours());
    const minuto = addZero(data.getMinutes());
    
    return `${ano} <br> ${hora}:${minuto}`
}
function pegadiadasemana(diaSemana) {
    let diaDaSemanaTxt;

     switch (diaSemana) {
        case 0:
            diaDaSemanaTxt = 'Domingo';
            return diaDaSemanaTxt;
        case 1:
            diaDaSemanaTxt = 'Segunda';
            return diaDaSemanaTxt;
        case 2:
            diaDaSemanaTxt = 'Terça';
            return diaDaSemanaTxt;
        case 3:
            diaDaSemanaTxt = 'Quarta';
            return diaDaSemanaTxt;
        case 4:
            diaDaSemanaTxt = 'Quinta';
            return diaDaSemanaTxt;
        case 5:
            diaDaSemanaTxt = 'Sexta';
            return diaDaSemanaTxt;
        case 6:
            diaDaSemanaTxt = 'Sabado';
            return diaDaSemanaTxt;
     }
}
function pegames(nomemes) {
    let nomemestxt;

     switch (nomemes) {
        case 0:
            nomemestxt = 'Janeiro';
            return nomemestxt;
        case 1:
            nomemestxt = 'Fevereiro';
            return nomemestxt;
        case 2:
            nomemestxt = 'Março';
            return nomemestxt;
        case 3:
            nomemestxt = 'Abril';
            return nomemestxt;
        case 4:
            nomemestxt = 'Maio';
            return nomemestxt;
        case 5:
            diaDaSemanaTxt = 'Junho';
            return nomemestxt;
        case 6:
            nomemestxt = 'Julho';
            return nomemestxt;
        case 7:
            nomemestxt = 'Agosto';
            return nomemestxt;
        case 8:
            nomemestxt = 'Setembro';
            return nomemestxt;
        case 9:
            nomemestxt = 'Outubro';
            return nomemestxt;
        case 10:
            nomemestxt = 'Novembro';
            return nomemestxt;
        case 11:
            nomemestxt = 'Dezembro';
            return nomemestxt;
     }
}
const diaF = pegadiadasemana(data.getDay());
const mesF = pegames(data.getMonth());
const resto = pegadatatoda(data)

h1.innerHTML = `${diaF}, ${data.getDay()} de ${mesF} de ${resto}`;