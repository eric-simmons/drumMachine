Tone.Transport.bpm.value = 120


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

const snareDrum = new Tone.NoiseSynth({
    volume: 5,
    noise: {
        type: 'white',
        playbackRate: 3,
    },
    envelope: {
        attack: 0.001,
        decay: 0.20,
        sustain: 0.15,
        release: 0.03,
    },
}).connect(lowPass);

//create 16 step array of on or off
let randArr = []
let snareArr = []
let kicks = []








let setKickPattern = () => {
    kickPart.add('0:0:0')
}


console.log(kicks)





const kickPart = new Tone.Part(function (time) {
    
    kickDrum.triggerAttackRelease('C1', '8n', time)

}, kicks).start(0);



kickPart.loop = true



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