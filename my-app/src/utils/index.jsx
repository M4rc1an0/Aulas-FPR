export const ifElse = (valor) => {
    if (valor === 'Guitarra') {
        console.log('Tem cordas.')
    }
    else if (valor === 'Bateria') {
        console.log('Tem pedal.')
    }
    else if (valor === 'Microfone') {
        console.log('Tem fios')
    }
    else {
        console.log('Não existe esse instrumento')
    }
}



export const funcSwitch = (esporte) => {
    switch (esporte) {
        case "Skate":
            console.log('Remar e fazer manobras'); break;
        case "Futebol": 
            console.log('Tocar e fazer gols'); break;
        case "Basquete":
            console.log('Passar e fazer cestas'); break;
        default:
            console.log('Não existe esse esporte');
    }
}