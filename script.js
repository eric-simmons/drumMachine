Tone.Transport.bpm.value = 120
const Major = [0,2,4,5,7,9,11,12];

// randArr = Array.from(
//     {length: 16}, 
//     () => Math.floor(Math.random() * 2)); 
//     console.log('clicked')

let kickArrEl = document.getElementById('kick-pattern')
let startEl = document.getElementById('start')
let stopEl = document.getElementById('stop')





const kickDrum = new Tone.MembraneSynth({
    volume: 6,
}).toDestination();
const lowPass = new Tone.Filter({
    frequency: 8000,
}).toDestination();

let randArr = []
let snareArr = []
let kicks = []


let randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min) 
  const rndInt = randomIntFromInterval(1, 8)
  console.log(rndInt)


  let x = Array(16).fill().map(
    () => Array(3).fill().map(
      () => Math.floor(Math.random() * 10)
    )
  );
console.log(x)


let setKickPattern = () => {

  

    Object.values(kicks).forEach(value => value.note = (Major[Math.floor(Math.random()*Major.length)])*4 );
    //loops through kicks array and sets velocity to either on or off * random
    Object.values(kicks).forEach(value => value.velocity = (Math.floor(Math.random()*2))*(Math.random() * 1));
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
console.log(kicks)








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