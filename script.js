Tone.Transport.bpm.value = 120


// let randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
// const rndInt = randomIntFromInterval(1, 8)


// let x = Array(16).fill().map(
//     () => Array(3).fill().map(
//         () => Math.floor(Math.random() * 10)
//     )
// );


function rgba(r, g, b, a) {
    return ["rgba(", r, ",", g, ",", b, ",", a, ")"].join("");
}

//scales
let CMajor = []
const Major = [0, 2, 4, 5, 7, 9, 11, 12];
let startingNote = 60
for (let i = 0; i < Major.length; i++) {
    CMajor.push(Major[i] + startingNote);
}


//dom elements
let kickArrEl = document.getElementById('kick-pattern')
let kickStepsEl = document.getElementById('kick-steps')
let startEl = document.getElementById('start')
let stopEl = document.getElementById('stop')




//instruments
const kickDrum = new Tone.MembraneSynth({
    volume: 6,
}).toDestination();
const lowPass = new Tone.Filter({
    frequency: 8000,
}).toDestination();



let kicks = []






const setKickPattern = () => {
    kickStepsEl.innerHTML = ''
    for (let i = 0; i < 4; i++) {
        for (let x = 0; x < 4; x++) {
            let step = getStep(i, x)
            createStepButton(step.velocity);
            kicks.push(step)
        }
    }
    startKickPart()
}
function startKickPart() {
    const kickPart = new Tone.Part((time, value) => {
        kickDrum.triggerAttackRelease(value.note, '8n', time, value.velocity)
    }, kicks).start(0);
    kickPart.loop = true
}

function getStep(bar, sixteenth) {
    return {
        time: getTime(bar, sixteenth),
        note: getPitch(bar),
        velocity: getVelocity()
    }
}

function getTime(bar, sixteenth) {
    return `0:${bar}:${sixteenth}`
}

function getVelocity() {
    return (Math.floor(Math.random() * 2)) * (Math.random() * 1)
}

function getPitch(bar) {
    if (bar > 2) {
        return (CMajor[Math.floor(Math.random() * CMajor.length)])
    } else {
        return (CMajor[Math.floor(Math.random() * CMajor.length)])
    }
}




function createStepButton(velocity) {
    let stepButton = document.createElement('button')
    if (velocity === 0) {
        stepButton.style.background = rgba(255, 255, 255, 1)
    } else {
        stepButton.style.background = rgba(100, 0, 255, velocity + 0.1)
    }
    kickStepsEl.appendChild(stepButton)
    
}

















let start = () => {
    Tone.Transport.start()
}

let stop = () => {
    Tone.Transport.stop()
    console.log('clicked')
}






stopEl.addEventListener('click', stop)
startEl.addEventListener('click', start)
kickArrEl.addEventListener('click', setKickPattern)