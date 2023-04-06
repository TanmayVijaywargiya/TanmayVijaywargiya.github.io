
function averageThreeNumbers(a, b, c) {
    let sum = a+b+c;
    let avg = sum / 3;
    return avg;
}

function createSentence(num, noun) {
    let sent = "On average, a Berkeley student has " + num + " " + noun + ".";
    return sent;
}

function getRandomNum(max) {
    let rand = max*Math.random();
    return rand;
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(20, 10, 13);

let sentence = createSentence(5000, "boba teas");
console.log(sentence);