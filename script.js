Tone.Transport.bpm.value = 120
const Major = [0, 2, 4, 5, 7, 9, 11, 12];
const startingNote = 60

// randArr = Array.from(
//     {length: 16}, 
//     () => Math.floor(Math.random() * 2)); 
//     console.log('clicked')

let kickArrEl = document.getElementById('kick-pattern')
let kickStepsEl = document.getElementById('kick-steps')
let startEl = document.getElementById('start')
let stopEl = document.getElementById('stop')
let CMajor = []

for (let i = 0; i < Major.length; i++) {
    CMajor.push(Major[i] + startingNote);
}


const kickDrum = new Tone.MembraneSynth({
    volume: 6,
}).toDestination();
const lowPass = new Tone.Filter({
    frequency: 8000,
}).toDestination();

let randArr = []
let snareArr = []
let kicks = []

function rgb(r, g, b){
    return ["rgb(",r,",",g,",",b,")"].join("");
  }

let randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const rndInt = randomIntFromInterval(1, 8)
console.log(rndInt)


let x = Array(16).fill().map(
    () => Array(3).fill().map(
        () => Math.floor(Math.random() * 10)
    )
);
console.log(x)

//for each increase in slider value add in a random note from note




let setKickPattern = () => {
    Object.values(kicks).forEach(value => value.note = (CMajor[Math.floor(Math.random() * CMajor.length)]));
    //loops through kicks array and sets velocity to either on or off * random
    Object.values(kicks).forEach(value => value.velocity = (Math.floor(Math.random() * 2)) * (Math.random() * 1));

    Object.values(kicks).forEach(value => {
        console.log(value.velocity)
        console.log('hey')
        let stepButton = document.createElement('button')
        console.log(Object.values(kicks))
        stepButton.style.background = rgb(255,value.velocity*255,50)
        stepButton.innerText = 'hey'
        kickStepsEl.appendChild(stepButton)


    })

}
// const midi = Tone.Frequency("C3").toMidi();
// console.log(midi);

kicks = [
    { time: '0:0:0', note: 32, velocity: 0 },
    { time: '0:0:1', note: 32, velocity: 0 },
    { time: '0:0:2', note: 32, velocity: 0 },
    { time: '0:0:3', note: 32, velocity: 0 },
    { time: '0:1:0', note: 32, velocity: 0 },
    { time: '0:1:1', note: 32, velocity: 0 },
    { time: '0:1:2', note: 32, velocity: 0 },
    { time: '0:1:3', note: 32, velocity: 0 },
    { time: '0:2:0', note: 32, velocity: 0 },
    { time: '0:2:1', note: 32, velocity: 0 },
    { time: '0:2:2', note: 32, velocity: 0 },
    { time: '0:2:3', note: 32, velocity: 0 },
    { time: '0:3:0', note: 32, velocity: 0 },
    { time: '0:3:1', note: 32, velocity: 0 },
    { time: '0:3:2', note: 32, velocity: 0 },
    { time: '0:3:3', note: 32, velocity: 0 },
]









const kickPart = new Tone.Part((time, value) => { kickDrum.triggerAttackRelease(value.note, '8n', time, value.velocity) },
    kicks).start(0);
kickPart.loop = true



let start = () => {
    Tone.Transport.start()
    console.log(kickPart)
    console.log(kicks)

}

let stop = () => {
    Tone.Transport.stop()
    console.log('clicked')
}






stopEl.addEventListener('click', stop)
startEl.addEventListener('click', start)
kickArrEl.addEventListener('click', setKickPattern)