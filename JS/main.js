const turnOn = document.getElementById('on');
const turnOff = document.getElementById('off');
const lamp = document.getElementById('imgLamp');


function lampBrokenOrNot () {
    return lamp.src.indexOf( 'quebrada' ) > -1
}

function lampOn() {
    if (!lampBrokenOrNot () ) {
        lamp.src = './IMG/ligada.png';
    }
}

function lampOff() {
    if (!lampBrokenOrNot () ) {
        lamp.src = './IMG/desligada.png';
    }
}

function lampBroken() {
    lamp.src = './IMG/quebrada.png';
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);


